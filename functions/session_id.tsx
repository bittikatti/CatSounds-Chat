import type { PagesFunction, Fetcher } from "@cloudflare/workers-types";

type Env = {
    catsounds: Fetcher;
};


export const onRequest: PagesFunction<Env> = async (context) => {
    return context.env.catsounds.fetch(
        "http://internal/api/session_id",
        {
            headers: context.request.headers,
        }
    );
};