import cors from '@koa/cors';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

const port = 3000;

const corsOptions = {
  allowMethods: ['GET'],
  maxAge: 600,
};

app
  .use(cors(corsOptions))
  .use(bodyParser())
  .listen(port, () => console.log(`Server port: ${port}`));

export default app;
