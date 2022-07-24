import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";

export async function validateToken(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers
    const JWT = process.env.JWT_TOKEN
    const token = authorization?.replace("Bearer", "").trim()

    if(!token){
        throw {type: "Authorization token not found", status: 401}
    }
    
    try{
    const tokenData = JSON.stringify(jwt.verify(token, JWT))
    const userData: { email: string } = JSON.parse(tokenData)
    }catch(e){
        throw {type: "Authorization error", status: 401}
    }
    
    next()
}