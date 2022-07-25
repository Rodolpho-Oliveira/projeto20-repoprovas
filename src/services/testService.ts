import { tests } from "@prisma/client";
import { createNewTest, findCategoryById, findTeacherDisciplineById } from "../repositories/testRepository.js";

export type CreateTestData = Omit<tests, "id">

export async function checkTest(name: string, pdfUrl: string, categoryId: number, teacherDisciplinedId: number) {
    await findTeacherDisciplineById(teacherDisciplinedId)
    await findCategoryById(categoryId)
    await createNewTest({name, pdfUrl, categoryId, teacherDisciplinedId})
}