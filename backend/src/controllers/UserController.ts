import { Request, Response } from "express";
import User from "../models/UserModel";


/**
 * show items
 * @param {Request} req
 * @param {Response} res
 */
export async function create(req: Request, res: Response) {
    // WIP
    const new_user = User.build({name: 'Luiz', email: 'luizhenriquefbb@gmail.com'});

    await new_user.save()

    return res.json(new_user);
}