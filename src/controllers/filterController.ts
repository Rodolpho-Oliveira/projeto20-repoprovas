import { Request,Response } from "express";
import { getByDiscipline, getByTeacher } from "../repositories/filterRepository.js";


export async function getTestByDiscipline(req: Request, res: Response) {
    const filter = await getByDiscipline()
    res.status(200).send(filter)
}

export async function getTestByTeacher(req: Request, res: Response) {
    const filter = await getByTeacher()
    res.status(200).send(filter)
}