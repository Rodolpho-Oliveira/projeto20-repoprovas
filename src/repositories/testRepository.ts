import { db } from "../app/database.js";
import { CreateTestData } from "../services/testService.js";

export async function createNewTest(createTestData: CreateTestData) {
    await db.tests.create({data: createTestData})
}

export async function findCategory(categoryId: number) {
    const {name} = await db.categories.findUnique({where: {id: categoryId}})
    return name
}