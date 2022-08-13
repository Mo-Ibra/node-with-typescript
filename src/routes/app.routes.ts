import express, { Request, Response } from 'express';

const Router = express.Router();

Router.get('/crud', (req: Request, res: Response) => {
    res.send('Welcome In ORM CRUD Application');
});

export default Router;