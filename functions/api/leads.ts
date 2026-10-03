/**
 * Cloudflare Pages Function: /api/leads
 * Lists VIP Beta waitlist signups stored in Cloudflare KV.
 */

interface KVNamespace {
  put(key: string, value: string): Promise<void>;
  get(key: string): Promise<string | null>;
  list(options?: { prefix?: string; limit?: number }): Promise<{ keys: { name: string }[] }>;
}

interface Env {
  DECORLY_LEADS?: KVNamespace;
}

interface PagesFunctionContext<E = Env> {
  request: Request;
  env: E;
  params: Record<string, string | string[]>;
  waitUntil: (promise: Promise<unknown>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  data: Record<string, unknown>;
}

export const onRequestGet = async (context: PagesFunctionContext<Env>): Promise<Response> => {
  const { env } = context;

  if (!env.DECORLY_LEADS) {
    return new Response(
      JSON.stringify({
        success: false,
        error: "KV storage not bound.",
        leads: [],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const listResult = await env.DECORLY_LEADS.list({ prefix: "lead:", limit: 100 });
    const leads = [];

    for (const key of listResult.keys) {
      const val = await env.DECORLY_LEADS.get(key.name);
      if (val) {
        try {
          leads.push(JSON.parse(val));
        } catch {
          leads.push({ key: key.name });
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        count: leads.length,
        leads,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
