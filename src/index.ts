import express, { Express, Request, Response } from 'express';

import appRoutes from './routes/app.routes';

import connection from './connect';

const app: Express = express();

const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use(appRoutes);

connection.query('SELECT 1 + 1 AS solution', function(err, results, fields) {
    if (err) throw err;
    console.log(`The Solution is ${results[0].solution}`);
    console.log(results);
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});