import express from 'express';

import ErrorHandlerMiddleware from './middlewares/ErrorHandler.middleware';
import CategoryRouter from './routes/Category.routes';
import UserRouter from './routes/User.routes';

const app = express();

app.use(express.json());

app.use(UserRouter);
app.use(CategoryRouter);

app.use(ErrorHandlerMiddleware);
// ...
// iniciando o projeto blogs api #vqv
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

export default app;
