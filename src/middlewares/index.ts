import express from "express";
import { get, merge } from "lodash";

import { getUserBySessionToken } from "../db/users";

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = req.cookies["AKMAL-AUTH"];

    if (!sessionToken) {
      return res.sendStatus(401);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(402);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params;

    console.log(id);

    const currentUserId = get(req, "identity._id") as string;
    console.log(currentUserId);

    if (!currentUserId) {
      return res.sendStatus(401);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(402);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};
