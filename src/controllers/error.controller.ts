import { type NextFunction, type Request, type Response } from 'express'
import { logger } from '../utils/winston'
import { verifyAccessToken } from '../utils/jwt'

export const errorController = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const message = err.message.split(' - ')[1]
  logger.error(err)
  res.status(500).json({
    error: message,
    message: 'Internal Server Error',
    data: null
  })
}

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(404).json({
    error: 'Not Found',
    message: 'Route Not Found',
    data: null
  })
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Verifikasi Token Gagal',
      data: null
    })
  }
  const decoded = verifyAccessToken(String(token))
  if (!decoded) {
    return res.status(401).json({
      error: 'Token Invalid',
      message: 'Verifikasi Token Gagal',
      data: null
    })
  }
  next()
}
