import querystring from 'querystring';

import {Context} from 'koa';

import redirectionPage from './redirection-page';

export default function createTopLevelRedirect(apiKey: string, path: string) {
  return function topLevelRedirect(ctx: Context) {
    // @ts-ignore
    const {query} = ctx;
    const {host} = ctx.header;
    const {shop} = query;

    const params = {shop};
    const queryString = querystring.stringify(params);

    ctx.body = redirectionPage({
      origin: shop,
      redirectTo: `https://${host}${path}?${queryString}`,
      apiKey,
    });
  };
}
