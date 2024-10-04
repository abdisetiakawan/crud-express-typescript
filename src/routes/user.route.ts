import { Router, type Request, type Response, type NextFunction } from 'express'
import {
  loginCredential,
  refreshToken,
  registerUser
} from '../controllers/user.controller'

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

userRouter.post(
  '/refresh',
  (req: Request, res: Response, next: NextFunction) => {
    refreshToken(req, res, next)
  }
)

export default userRouter
