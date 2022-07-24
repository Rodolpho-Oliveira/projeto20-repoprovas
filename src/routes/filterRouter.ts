import { Router } from "express";
import { getTestByDiscipline, getTestByTeacher } from "../controllers/filterController.js";

const filterRouter = Router()

filterRouter.get("/test/discipline", getTestByDiscipline)
filterRouter.get("/test/teacher", getTestByTeacher)

export default filterRouter