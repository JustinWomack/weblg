import express, { Request, Response, NextFunction, Errback } from 'express';
import http from 'http';
import https from 'https';
import next from 'next';
import bodyParser from 'body-parser';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
    .then(() => {
        const app = express();
        const server = process.env.PROTO === 'http' ? new http.Server(app) : https.createServer({
            key: fs.readFileSync(`${process.cwd()}/server.key`),
            cert: fs.readFileSync(`${process.cwd()}/server.crt`),
        }, app);

        app.use(bodyParser.json());
        app.all('*', (req: Request, res: Response) => {
            return handle(req, res);
        });

        app.use('*', (err: Errback, req: Request, res: Response, n: NextFunction) => {
            console.log(err);
        });

        server.listen(port, () => {
            console.log(`> Ready on ${port}`)
        })
    });
