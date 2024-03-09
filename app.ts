import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';

const app = new Koa();

const port = 8080;

const corsOptions = {
  allowMethods: ['GET'],
  maxAge: 600,
};

app
  .use(cors(corsOptions))
  .use(bodyParser())
  .use(serve('public'))
  .listen(port, () => console.log(`Server port: ${port}`));

export default app;
