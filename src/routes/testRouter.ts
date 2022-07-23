import { Router } from "express";
import { createTest } from "../controllers/testController.js";
import { validateTestInput } from "../middlewares/testMiddleware.js";

const testRouter = Router()

testRouter.post("/test/create", validateTestInput , createTest)

export default testRouter