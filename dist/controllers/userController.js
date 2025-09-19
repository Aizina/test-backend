"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserData = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUserData = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User_1.default.findById(userId).exec();
        if (!user)
            return res.status(404).json({ message: "User not found" });
        res.json(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
exports.getUserData = getUserData;
const createUser = async (req, res) => {
    try {
        const { name, email, projects, chats } = req.body;
        const newUser = new User_1.default({
            name,
            email,
            projects: projects || [],
            chats: chats || [],
        });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};
exports.createUser = createUser;
