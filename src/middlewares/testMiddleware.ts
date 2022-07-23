import Joi from "joi"
import { Request,Response, NextFunction } from "express";

export async function validateTestInput(req: Request, res: Response, next: NextFunction) {
    const testSchema = Joi.object({
        name: Joi.string().required(),
        pdfUrl: Joi.string().uri().required(),
        categoryId: Joi.number().required(),
        teacherDisciplinedId: Joi.number().required()
    })

    const validation = testSchema.validate(req.body)
    if(validation.error){
        throw {type: "Wrong input information to create test", status: 403}
    }

    next()
}