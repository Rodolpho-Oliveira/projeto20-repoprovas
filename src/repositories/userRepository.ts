import { db } from "../app/database.js";
import { CreateUserData } from "../services/userService.js";

export async function checkUserExists(email: string) {
    const userAccount = await db.users.findUnique({where: {
        email: email
    }})
    return userAccount
}

export async function createNewUser(createUserData: CreateUserData) {
    await db.users.create({data: createUserData})
}