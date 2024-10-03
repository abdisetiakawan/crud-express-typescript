import bcrypt from 'bcrypt'
const saltRounds = 10

export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, saltRounds)
}

export const comparePassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash)
}
