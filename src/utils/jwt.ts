import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const generateToken = (user: any): string => {
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

export const generateRefreshToken = (user: any): string => {
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
