import { onRequestGet as __api_leads_ts_onRequestGet } from "/Users/bugra/Desktop/decorly-website/functions/api/leads.ts"
import { onRequestOptions as __api_waitlist_ts_onRequestOptions } from "/Users/bugra/Desktop/decorly-website/functions/api/waitlist.ts"
import { onRequestPost as __api_waitlist_ts_onRequestPost } from "/Users/bugra/Desktop/decorly-website/functions/api/waitlist.ts"

export const routes = [
    {
      routePath: "/api/leads",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_leads_ts_onRequestGet],
    },
  {
      routePath: "/api/waitlist",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_waitlist_ts_onRequestOptions],
    },
  {
      routePath: "/api/waitlist",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_waitlist_ts_onRequestPost],
    },
  ]