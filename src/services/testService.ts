import { tests } from "@prisma/client";
import { createNewTest, findCategory } from "../repositories/testRepository.js";

export type CreateTestData = Omit<tests, "id">

export async function checkTest(name: string, pdfUrl: string, categoryId: number, teacherDisciplinedId: number) {
    await createNewTest({name, pdfUrl, categoryId, teacherDisciplinedId})
}