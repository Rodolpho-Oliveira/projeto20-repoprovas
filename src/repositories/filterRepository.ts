import { db } from "../app/database.js";

export async function getByDiscipline() {
    return await db.terms.findMany({select:{
        id:true,
        number: true,
        discipline:{
            select:{
                id: true,
                name: true,
                teacherDiscipline:{
                    select:{
                        discipline: {select: {name: true}},
                        teacher: { select: { name: true } },
							test: {select: {
                                id: true,
                                name: true,
                                pdfUrl: true,
                                category: {
                                    select: { id: true, name: true },
                                },
                            },
                        }
                    }
                }
            }
        }
    }})
}
