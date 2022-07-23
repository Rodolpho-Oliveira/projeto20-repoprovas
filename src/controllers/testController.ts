import { Request,Response } from "express";
import { checkTest } from "../services/testService.js";

export async function createTest(req: Request, res: Response) {
    const {name, pdfUrl, categoryId, teacherDisciplinedId} = req.body
    await checkTest(name, pdfUrl, categoryId, teacherDisciplinedId)
    res.sendStatus(201)
}