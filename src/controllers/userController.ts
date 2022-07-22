import { Request,Response } from "express";
import { checkSignUpInformation, checkSingInInformation } from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
    const {email, password, repeatPassword}: {email: string, password: string, repeatPassword: string} = req.body
    await checkSignUpInformation(email, password, repeatPassword)
    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const {email, password}: {email: string, password: string} = req.body
    const token = await checkSingInInformation({email, password})
    res.status(200).send(token)
}