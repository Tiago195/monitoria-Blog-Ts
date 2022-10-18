import express from 'express';

const app = express();

app.use(express.json());

// ...
// iniciando o projeto blogs api #vqv
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

export default app;
