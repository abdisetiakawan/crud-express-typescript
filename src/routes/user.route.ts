import { Router, type Request, type Response, type NextFunction } from 'express'
import { loginCredential, registerUser } from '../controllers/user.controller'

const userRouter = Router()

userRouter.post(
  '/register',
  (req: Request, res: Response, next: NextFunction) => {
    registerUser(req, res, next)
  }
)

userRouter.post('/login', (req: Request, res: Response, next: NextFunction) => {
  loginCredential(req, res, next)
})

export default userRouter
