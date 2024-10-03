import { Router } from 'express'
import { loginCredential, registerUser } from '../controllers/user.controller'
import expressAsyncHandler from 'express-async-handler'
const userRouter = Router()

userRouter.post('/register', expressAsyncHandler(registerUser))
userRouter.post('/login', expressAsyncHandler(loginCredential))

export default userRouter
