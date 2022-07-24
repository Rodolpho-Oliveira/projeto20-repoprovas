import { Request,Response } from "express";
import { getByDiscipline } from "../repositories/filterRepository.js";


export async function getTestByDiscipline(req: Request, res: Response) {
    const filter = await getByDiscipline()
    res.status(200).send(filter)
}