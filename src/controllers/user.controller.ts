import { type NextFunction, type Request, type Response } from 'express'
import {
  inputUserValidation,
  loginUserValidation
} from '../validations/user.validation'
import { createUser, loginUser } from '../services/user.service'
import { comparePassword, hashPassword } from '../utils/bcrypt'
import { generateRefreshToken, generateToken } from '../utils/jwt'

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
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
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when register user pada file /src/controllers/user.controller.ts: register user - ' +
          String((error as Error).message)
      )
    )
  }
}

export const loginCredential = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const { error, value } = loginUserValidation(req.body)
    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Login User Gagal',
        data: value
      })
    }
    const user = await loginUser(value)
    if (!user) {
      return res.status(400).json({
        error: 'User not found',
        message: 'Login Gagal',
        data: value
      })
    }
    if (!comparePassword(value.password, user.password)) {
      return res.status(400).json({
        error: 'Wrong password',
        message: 'Login Gagal',
        data: null
      })
    }
    // const userData = {
    //   id: user.user_id,
    //   nama: user.nama,
    //   email: user.email,
    //   role: user.role
    // }
    user.password = 'xxxxx'
    const token = generateToken(user)
    const refreshToken = generateRefreshToken(user)
    return res.status(200).json({
      error: null,
      message: 'Login Berhasil',
      data: user,
      token,
      refreshToken
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when login user pada file /src/controllers/user.controller.ts: login user - ' +
          String((error as Error).message)
      )
    )
  }
}
