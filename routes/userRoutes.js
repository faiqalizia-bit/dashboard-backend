import express from "express";
import { createUser, getUsers, getUserById , loginUser, registerUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.post("/", createUser);
userRouter.get("/", getUsers);       // Get all users
userRouter.get("/:id", getUserById); // Get user by ID

export default userRouter;
