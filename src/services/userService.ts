import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { users } from "@prisma/client";
import { checkUserExists, createNewUser } from "../repositories/userRepository.js";

export type CreateUserData = Omit<users, "id">

export async function checkSignUpInformation(email: string, password: string, repeatPassword: string){
    const userAccount: object = await checkUserExists(email)

    if(userAccount){
        throw {type: "Email already registered", status: 409}
    }
    if(password !== repeatPassword){
        throw {type: "The passwords don't match", status: 409}
    }
    password = bcrypt.hashSync(password, 10)
    await createNewUser({email,password})
}

export async function checkSingInInformation({email, password}: CreateUserData) {
    const check = await checkUserExists(email)
    if(!check){
        throw {type: "Wrong email", status: 401}
    }

    const passwordCheck = await bcrypt.compare(password, check.password)
    if(!passwordCheck){
        throw {type: "Wrong password", status: 401}
    }

    const JWT = process.env.JWT_TOKEN
    const token = jwt.sign({ email: check.email }, JWT)
    return token
}