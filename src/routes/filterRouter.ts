import { Router } from "express";
import { getTestByDiscipline, getTestByTeacher } from "../controllers/filterController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const filterRouter = Router()

filterRouter.get("/test/discipline", validateToken, getTestByDiscipline)
filterRouter.get("/test/teacher", validateToken, getTestByTeacher)

export default filterRouter