import { db } from "../app/database.js";
import { CreateTestData } from "../services/testService.js";

export async function createNewTest(createTestData: CreateTestData) {
    await db.tests.create({data: createTestData})
}

export async function findTeacherDisciplineById(teacherDisciplinedId: number) {
    const id = await db.teachersDisciplines.findUnique({where: {id: teacherDisciplinedId}})
    if(!id){
        throw {type: "Teacher/Discipline id not found", status: 404}
    }
}

export async function findCategoryById(categoryId: number) {
    const id = await db.categories.findUnique({where: {id: categoryId}})
    if(!id){
        throw {type: "Category not found", status: 404}
    }
}