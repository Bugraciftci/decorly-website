/**
 * Cloudflare Pages Function: /api/waitlist
 * Handles VIP Beta TestFlight waitlist signups on the edge.
 */

interface Env {
  WEBHOOK_URL?: string;
  DISCORD_WEBHOOK_URL?: string;
}

interface PagesFunctionContext<E = Env> {
  request: Request;
  env: E;
  params: Record<string, string | string[]>;
  waitUntil: (promise: Promise<unknown>) => void;
  next: (input?: Request | string, init?: RequestInit) => Promise<Response>;
  data: Record<string, unknown>;
}

export const onRequestPost = async (context: PagesFunctionContext<Env>): Promise<Response> => {
  const { request, env } = context;

  try {
    const data = (await request.json()) as { email?: string; timestamp?: string };
    const email = data?.email?.trim().toLowerCase();

    if (!email || !email.includes("@") || !email.includes(".")) {
      return new Response(
        JSON.stringify({ success: false, error: "Valid email address required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const payload = {
      email,
      timestamp: new Date().toISOString(),
      source: "decorly.pages.dev",
      userAgent: request.headers.get("user-agent") || "unknown",
      country: request.headers.get("cf-ipcountry") || "unknown",
    };

    // Forward to Webhook (Discord / Slack / Airtable) if configured
    const webhookUrl = env.DISCORD_WEBHOOK_URL || env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const discordBody = webhookUrl.includes("discord.com")
          ? {
              content: `✨ **New Decorly VIP Beta Lead!**\n📧 **Email:** \`${email}\`\n🌍 **Country:** ${payload.country}\n🕒 **Time:** ${payload.timestamp}`,
            }
          : payload;

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordBody),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "You have been added to the VIP TestFlight beta list!",
        lead: { email, country: payload.country },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
