import { Router } from "express";
import { UserController  } from "../controllers/user";
import { checkUserJWT } from "../middleware/check_jwt_user";

export const userRouter: Router = Router();

userRouter.post("/login", UserController.login);
userRouter.post("/signup", UserController.signup);
userRouter.post("/logout", checkUserJWT, UserController.logout);