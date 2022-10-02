import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserModel from "../models/User.js";

type Doc = {
  email: string;
  fullName: string;
  avatarUrl: string;
  passwordHash: string;
};

export const register = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req?.body?.email,
      fullName: req.body?.fullName,
      avatarUrl: req.body?.avatarUrl,
      passwordHash: hash,
    } as Doc);

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      {
        expiresIn: "30d",
      }
    );
    // @ts-ignore
    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: `Can't register user`,
    });
  }
};
