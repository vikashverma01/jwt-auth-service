import express from "express";
import {
  loginUser,
  refreshAccessToken,
    registerUser,
} from "../controllers/auth.controller.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.post("/refreshtoken", refreshAccessToken);
userRouter.post("/registeruser", registerUser);

export default userRouter;
