import { Request, Response } from "express";
import User from "../models/UserModel";


/**
 * show items
 * @param {Request} req
 * @param {Response} res
 */
export async function create(req: Request, res: Response) {
    const {name, email, password} = req.body
    try {
        const new_user = User.create({name, email, password});
        return res.json(new_user);
    } catch (error) {
        console.error(error);
    }
}