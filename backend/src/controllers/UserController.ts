import { Request, Response } from "express";
import User from "../models/UserModel";


/**
 * show items
 * @param {Request} req
 * @param {Response} res
 */
export async function create(req: Request, res: Response) {
    // WIP
    const new_user = User.create({id: 1, name: 'Luiz', email: 'luizhenriquefbb@gmail.com'});

    return res.json(new_user);
}