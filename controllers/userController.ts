import { Request, Response } from "express";
import User from "../models/User";

export const getUserData = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).exec();

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, projects, chats } = req.body;

    const newUser = new User({
      name,
      email,
      projects: projects || [],
      chats: chats || [],
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
