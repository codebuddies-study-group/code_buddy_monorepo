import { Request, Response } from "express";
import Language from "../models/interfaces/Language";
import Meeting from "../models/interfaces/Meeting";
import User from "../models/interfaces/User";

/**
 * create items
 * @param {Request} req
 * @param {Response} res
 */
export async function create(req: Request, res: Response) {
    const { name, email, password } = req.body

    User.create({ name, email, password })
    .then((user: User) => {
        return res.status(201).json(user);
    })
    .catch(reason => {
        console.error(reason);
        return res.status(500).json(reason)

    });
}

/**
 * show items
 * @param {Request} req
 * @param {Response} res
 */
export async function show(req: Request, res: Response) {
    const userId = req.params.id

    try {
        const new_user = await User.findOne(
            {
                include: [Meeting, Language],
                where: {
                    id: userId
                }
            }
        );
        console.log({ new_user });

        return res.status(200).json(new_user);
    } catch (error) {
        console.error(error);
    }
}