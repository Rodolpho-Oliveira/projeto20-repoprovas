import { Request, Response, NextFunction } from "express";
import Joi, { string } from "joi";

export async function validateSignInInput(req: Request, res: Response, next: NextFunction) {
    const signInSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        repeatPassword: Joi.ref("password")
    })

    const validation = signInSchema.validate(req.body)
    if(validation.error){
        throw {type: "Wrong input informations", status: 403}
    }

    next()
}