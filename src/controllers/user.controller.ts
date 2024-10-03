import { type NextFunction, type Request, type Response } from 'express'
import { inputUserValidation } from '../validations/user.validation'
import { createUser } from '../services/user.service'
import { hashPassword } from '../utils/bcrypt'

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { error, value } = inputUserValidation(req.body)
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Register User Gagal',
        data: value
      })
    }
    // enkrip password
    value.password = await hashPassword(value.password)
    delete value.confirmPassword
    const user = await createUser(value)
    return res.status(201).json({
      error: null,
      message: 'Register User Berhasil',
      data: user
    })
  } catch (error: Error | any) {
    next(
      new Error(
        'Error when register user pada file /src/controllers/user.controller.ts: register user - ' +
          error.message
      )
    )
  }
}
