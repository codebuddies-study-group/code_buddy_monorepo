import { Request, Response } from "express";
import database from "../database";

import UserLanguage from "../models/interfaces/UserLanguage";
import Meeting from "../models/interfaces/Meeting";
import User from "../models/interfaces/User";
import Language from "../models/interfaces/Language";

/**
 * create items
 * @param {Request} req
 * @param {Response} res
 */
export async function create(req: Request, res: Response) {
  const { name, email, password } = req.body;

  User.create({ name, email, password })
    .then((user: User) => {
      return res.status(201).json(user);
    })
    .catch((reason) => {
      console.error(reason);
      return res.status(500).json(reason);
    });
}

/**
 * show items
 * @param {Request} req
 * @param {Response} res
 */
export async function show(req: Request, res: Response) {
  const userId = req.params.id;

  try {
    const new_user = await User.findOne({
      include: [Meeting, Language],
      where: {
        id: userId,
      },
    });
    console.log({ new_user });

    return res.status(200).json(new_user);
  } catch (error) {
    console.error(error);
  }
}

export async function search(req: Request, res: Response) {}

export async function edit(req: Request, res: Response) {
  const languageIds: number[] = req.body?.languageIds;
  const name = req.body?.name;

  const userId = parseInt(req.params.id);

  if (!name && !languageIds) {
    return res
      .status(500)
      .json({ error: 'inform at least on of "name" or "languageIds"' });
  }

  let transaction = await database.transaction();
  try {
    let rowsAffected: any = 0;

    if (name) {
      rowsAffected = await User.update(
        { name },
        { where: { id: userId }, transaction }
      );
    }

    if (languageIds) {
      // clear previous languages
      await UserLanguage.destroy({ where: { UserId: userId }, transaction });

      // insert new ones

      const bulkToCreate = languageIds.map((languageId) => {
        return { UserId: userId, LanguageId: languageId };
      });

      await UserLanguage.bulkCreate(bulkToCreate);
    }

    transaction.commit();

    return res.status(200).json({ rowsAffected });
  } catch (error) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error({ error });
  }
}
