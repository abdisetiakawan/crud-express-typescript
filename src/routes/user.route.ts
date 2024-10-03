import { Router } from 'express'
import { registerUser } from '../controllers/user.controller'
import expressAsyncHandler from 'express-async-handler'
const userRouter = Router()

userRouter.post('/register', expressAsyncHandler(registerUser))

export default userRouter
