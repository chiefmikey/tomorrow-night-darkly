import { createReadStream } from 'node:fs';

import Koa from 'koa';
import serve from 'koa-static';

const app = new Koa();
const port = 3000;
const redirect = 'docs';
const subdir = 'public';

app
  .use(serve(redirect))
  .use(async (context, next) => {
    try {
      if (context.status === 404) {
        const url = context.url.split(subdir)[1];
        if (url) {
          const path = `${redirect}/${subdir}${url}`;
          context.type = 'html';
          context.body = createReadStream(path);
        } else {
          context.type = 'html';
          context.body = createReadStream(`${redirect}/404.html`);
        }
      } else {
        await next();
      }
    } catch {
      context.type = 'html';
      context.body = createReadStream(`${redirect}/404.html`);
    }
  })
  .listen(port, () =>
    console.log(`Koa is listening at http://localhost:${port}`),
  );

export default app;
