import { Router } from "express";
import { getTestByDiscipline } from "../controllers/filterController.js";

const filterRouter = Router()

filterRouter.get("/test/discipline", getTestByDiscipline)

export default filterRouter