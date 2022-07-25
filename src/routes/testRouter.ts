import { Router } from "express";
import { createTest } from "../controllers/testController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateTestInput } from "../middlewares/testMiddleware.js";

const testRouter = Router()

testRouter.post("/test/create", validateToken, validateTestInput, createTest)

export default testRouter