import express, { Request, Response, NextFunction, Errback } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import https from 'https';
import next from 'next';
import bodyParser from 'body-parser';
import fs from 'fs';

dotenv.config();

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.json());
        server.all('*', (req: Request, res: Response) => {
            return handle(req, res);
        });

        server.use('*', (err: Errback, req: Request, res: Response, n: NextFunction) => {
            console.log(err);
        });

        server.listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`)
        })
    });
