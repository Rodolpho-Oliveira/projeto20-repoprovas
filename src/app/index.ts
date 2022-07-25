import express, { json } from "express"
import "express-async-errors"
import cors from "cors"
import { errorHandler } from "../middlewares/errorHandlerMiddleware.js"
import userRouter from "../routes/userRouter.js"
import testRouter from "../routes/testRouter.js"
import filterRouter from "../routes/filterRouter.js"

const app = express()
app.use(cors())
app.use(json())

app.use(userRouter)
app.use(testRouter)
app.use(filterRouter)
app.use(errorHandler)

export default app