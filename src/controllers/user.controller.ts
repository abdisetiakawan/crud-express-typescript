import { type NextFunction, type Request, type Response } from 'express'
import {
  inputUserValidation,
  loginUserValidation
} from '../validations/user.validation'
import { createUser, loginUser } from '../services/user.service'
import { comparePassword, hashPassword } from '../utils/bcrypt'
import {
  generateRefreshToken,
  generateToken,
  parseJWT,
  verifyRefreshToken
} from '../utils/jwt'

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
      return res.status(404).json({
        error: 'User not found',
        message: 'Login Gagal',
        data: value
      })
    }
    if (!comparePassword(value.password, user.password)) {
      return res.status(401).json({
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

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | undefined> => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Verifikasi Token Gagal',
        data: null
      })
    }
    const decoded = verifyRefreshToken(String(token))
    if (!decoded) {
      return res.status(401).json({
        error: 'Token Invalid',
        message: 'Refresh Token Gagal',
        data: null
      })
    }
    const data = parseJWT(token)
    const user = await loginUser(data)
    if (!user) {
      return res.status(401).json({
        error: 'Token Invalid',
        message: 'Refresh Token Gagal',
        data: null
      })
    }
    user.password = 'xxxxx'
    const newToken = generateToken(user)
    const newRefreshToken = generateRefreshToken(user)
    return res.status(200).json({
      error: null,
      message: 'Refresh Token Berhasil',
      data: user,
      token: newToken,
      refreshToken: newRefreshToken
    })
  } catch (error: Error | unknown) {
    next(
      new Error(
        'Error when login user pada file /src/controllers/user.controller.ts: refresh token - ' +
          String((error as Error).message)
      )
    )
  }
}
