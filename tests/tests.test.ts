import app from "../src/app/index.js";
import { faker } from "@faker-js/faker";
import supertest from "supertest";

let token: string = ""

beforeAll(async () => {
    const response = await supertest(app).post("/signin").send({email: "test@test.com", password:"123"})
    token = response.text
})

describe("create Test", () => {
    it("Create new test and return status 201",async () => {
        const response = await supertest(app).post("/test/create").set("Authorization", `Bearer ${token}`).send({
            name: faker.name.findName(), pdfUrl: faker.internet.url(), categoryId: 1, teacherDisciplinedId: 1
        })
        expect(response.status).toEqual(201)
    })

    it("Try create new test with missing information",async () => {
        const response = await supertest(app).post("/test/create").set("Authorization", `Bearer ${token}`).send({
            name: faker.name.findName()
        })
        expect(response.status).toEqual(403)
    })

    it("Try create new test with invalid token",async () => {
        const response = await supertest(app).post("/test/create").set("Authorization", `Bearer 123`).send({
            name: faker.name.findName(), pdfUrl: faker.internet.url(), categoryId: 1, teacherDisciplinedId: 1
        })
        expect(response.status).toEqual(401)
    })

    it("Try create new test with invalid ids",async () => {
        const response = await supertest(app).post("/test/create").set("Authorization", `Bearer ${token}`).send({
            name: faker.name.findName(), pdfUrl: faker.internet.url(), categoryId: 100, teacherDisciplinedId: 100
        })
        expect(response.status).toEqual(404)
    })
})

describe("Get all tests", () => {
    it("Get all tests by discipline and return status 200",async () => {
        const response = await supertest(app).get("/test/discipline").set("Authorization", `Bearer ${token}`)
        expect(response.status).toEqual(200)
        expect(response.body).toBeDefined()
    })

    it("Get all tests by teacher and return status 200",async () => {
        const response = await supertest(app).get("/test/teacher").set("Authorization", `Bearer ${token}`)
        expect(response.status).toEqual(200)
        expect(response.body).toBeDefined()
    })
    
    it("Get all tests by discipline with the wrong token and return status 401",async () => {
        const response = await supertest(app).get("/test/discipline").set("Authorization", `Bearer 123`)
        expect(response.status).toEqual(401)
        expect(response.body).toBeDefined()
    })
})