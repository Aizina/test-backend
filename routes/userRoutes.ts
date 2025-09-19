import express from "express";
import { getUserData, createUser} from "../controllers/userController";

const router = express.Router();

router.get("/:id", getUserData);
router.post("/", createUser);

export default router;
