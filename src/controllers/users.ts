import express from "express";

import { deleteUserById, getUserByID, getUsers } from "../db/users";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(401);
    }

    const deletedUser = await deleteUserById(id);

    return res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(401);
    }

    const user = await getUserByID(id);

    user.username = username;
    await user.save();

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};
