import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export class ExpressAppServer {
    constructor() {
        this.init()
    }
    init() {
        const app: Express = express();
        const port = process.env.PORT;
        this.routes(app, port)
    }
    routes(app, port) {

        app.get('/', (req: Request, res: Response) => {
            const { bot } = req.query
            res.json(bot);
        });

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    }
}

