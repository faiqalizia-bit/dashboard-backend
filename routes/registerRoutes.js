import express from "express";

import { registerUser } from "../controllers/register.controller.js";

const registerRouter = express.Router();

registerRouter.post("/", registerUser);


export default registerRouter;