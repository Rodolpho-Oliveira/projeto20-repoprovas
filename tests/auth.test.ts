import supertest from "supertest"
import {faker} from "@faker-js/faker"
import app from "../src/app/index.js"

describe("signUp", () => {
    it("Register new user and return status 201",async () => {
        const password = faker.internet.password()
        const response = await supertest(app).post("/signup").send({email: faker.internet.email(), password: password, repeatPassword: password})
        expect(response.status).toEqual(201)
    })
    it("Try to create a profile with missing fields and return status 403",async () => {
        const response = await supertest(app).post("/signup").send({email: faker.internet.email()})

        expect(response.status).toEqual(403)
    })
    it("Try to create a profile that already exists and return status 409",async () => {
        const response = await supertest(app).post("/signup").send({email: "test@test.com", password: "123", repeatPassword: "123"})

        expect(response.status).toEqual(409)
    })
})

describe("signIn", () => {
    it("Login with user informations and return status 200",async () => {
        const response = await supertest(app).post("/signin").send({email: "test@test.com", password: "123"})
        expect(response.status).toEqual(200)
        expect(response.text).toBeDefined()
    })

    it("Login with wrong user informations and return status 401",async () => {
        const response = await supertest(app).post("/signin").send({email: "test@test.com", password: "321"})
        expect(response.status).toEqual(401)
    })

    it("Login with missing fields and return status 422",async () => {
        const response = await supertest(app).post("/signin").send({email: "test@test.com"})
        expect(response.status).toEqual(422)
    })
})