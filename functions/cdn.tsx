import type { PagesFunction, Fetcher } from "@cloudflare/workers-types";

type Env = {
    catsounds: Fetcher;
};

export const onRequest: PagesFunction<Env> = async (context) => {
    const url = new URL(context.request.url);
    const cdn = url.searchParams.get("cdn");

    /* Complains about type */
    if (!cdn) {
        return new Response("Missing cdn", { status: 400 });
    }
    

    return context.env.catsounds.fetch(
        `http://internal${cdn}`,
        {
            headers: context.request.headers,
        }
    );
};