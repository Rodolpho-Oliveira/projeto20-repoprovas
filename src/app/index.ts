import express, { json } from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"
import { errorHandler } from "../middlewares/errorHandlerMiddleware.js"
import userRouter from "../routes/userRouter.js"
import testRouter from "../routes/testRouter.js"
dotenv.config()

const app = express()
app.use(cors())
app.use(json())

app.use(userRouter)
app.use(testRouter)
app.use(errorHandler)

const port = +process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server online and listening on port ${port}`)
})