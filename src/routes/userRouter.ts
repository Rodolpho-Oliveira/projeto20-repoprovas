import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { validateSignInInput } from "../middlewares/userMiddleware.js";

const userRouter = Router()

userRouter.post("/signup", validateSignInInput, signUp)
userRouter.post("/signin", signIn)

export default userRouter