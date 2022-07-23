import { db } from "../app/database.js";
import { CreateTestData } from "../services/testService.js";

export async function createNewTest(createTestData: CreateTestData) {
    await db.tests.create({data: createTestData})
}

export async function findTeacherDisciplinedId(teacherDisciplinedId: number) {
    const {disciplineId, teacherId}:{disciplineId: number, teacherId: number} = await db.teachersDisciplines.findUnique({where: {id: teacherDisciplinedId}})
    const {name} = await db.disciplines.findUnique({where: {id: disciplineId}})
    const teacher = await db.teachers.findUnique({where: {id: teacherId}})
    return (teacher.name, name)
}

export async function findCategory(categoryId: number) {
    const {name} = await db.categories.findUnique({where: {id: categoryId}})
    return name
}