import express from "express";
import * as UserController from './controllers/UserController'
import { celebrate, Joi } from "celebrate";

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

routes.post(
    '/createUser',
    celebrate(
        {
            body: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                password: Joi.string().required(),
            })
        },
        {
            abortEarly: false,
        }
    ),
    UserController.create,
)

export default routes