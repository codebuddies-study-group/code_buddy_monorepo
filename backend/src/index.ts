import cors from 'cors';
import express from 'express';
import http from 'http';
import { PORT } from './constants';
import routes from './routes';

import './database';

// create a server
const app = express();
const server = new http.Server(app);

// handle cors origin
app.use(cors());

// body must be a json
app.use(express.json());


// import routes
app.use(routes);

const port = process.env.PORT || PORT

console.log(`Listening to ${port}`);
server.listen(process.env.PORT || PORT);