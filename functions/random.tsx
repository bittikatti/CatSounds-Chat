import type { PagesFunction, Fetcher } from "@cloudflare/workers-types";

type Env = {
    catsounds: Fetcher;
};

export const onRequest: PagesFunction<Env> = async (context) => {
    return context.env.catsounds.fetch(
        "http://internal/api/sounds/random",
        {
            headers: context.request.headers, // sends cookies/session_id
        }
    );
};