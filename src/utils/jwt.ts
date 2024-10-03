import 'dotenv/config'
import jwt, { JwtPayload } from 'jsonwebtoken'
import UserType from '../types/user.type'

export const generateToken = (user: UserType): string => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables')
  }

  return jwt.sign(
    {
      user_id: user.user_id,
      email: user.email,
      role: user.role
    },
    secret,
    {
      expiresIn: String(process.env.JWT_EXPIRED) || '1800s'
    }
  )
}

export const generateRefreshToken = (user: UserType): string => {
  const secret = process.env.JWT_REFRESH
  if (!secret) {
    throw new Error('JWT_REFRESH is not defined in environment variables')
  }

  return jwt.sign(
    {
      user_id: user.user_id,
      email: user.email,
      role: user.role
    },
    secret,
    {
      expiresIn: String(process.env.JWT_REFRESH_EXPIRED) || '1800s'
    }
  )
}

export const verifyRefreshToken = (
  token: string
): string | null | JwtPayload => {
  const secret = process.env.JWT_REFRESH
  if (!secret) {
    throw new Error('JWT_REFRESH is not defined in environment variables')
  }
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null
  }
}

export const parseJWT = (token: string): UserType => {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
}

export const verifyAccessToken = (
  token: string
): string | null | JwtPayload => {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET is not defined in environment variables')
  }
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null
  }
}
