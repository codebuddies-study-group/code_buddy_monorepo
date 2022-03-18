import express from "express";
import * as UserController from './controllers/UserController'

const routes = express.Router();

// hello word
routes.get('/hello_world', (req, res) => res.json({
    ok: 'Hello world',
    body: req.body,
    headers: req.headers,
    params: req.params,
}));


routes.post('/hello_world', (req, res) => res.json({
    ok: 'Hello world',
    body: req.body,
    headers: req.headers,
    params: req.params,
}));

routes.get(
    '/createUser',
    UserController.create,
)

export default routes