export default interface UserType {
  user_id: number
  email: string
  name: string
  password: string
  confirmPassword?: string
  role: string
}
