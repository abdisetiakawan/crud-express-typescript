import Joi from 'joi'
import type UserType from '../types/user.type'

export const inputUserValidation = (
  payload: UserType
): Joi.ValidationResult<UserType> => {
  const schema = Joi.object({
    user_id: Joi.string().trim().allow(null, ''),
    email: Joi.string().trim().required().email().messages({
      'string.base': 'Email harus berupa string',
      'string.empty': 'Email tidak boleh kosong',
      'string.email': 'Email harus berupa email',
      'any.required': 'Email harus diisi'
    }),
    name: Joi.string().trim().required().messages({
      'string.base': 'Name harus berupa string',
      'string.empty': 'Name tidak boleh kosong',
      'any.required': 'Name harus diisi'
    }),
    password: Joi.string().min(3).max(15).required().messages({
      'string.base': 'Password harus berupa string',
      'string.empty': 'Password tidak boleh kosong',
      'string.min': 'Password minimal 3 karakter',
      'string.max': 'Password maksimal 15 karakter',
      'any.required': 'Password harus diisi'
    }),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required()
      .label('confirm password')
      .messages({
        'string.base': 'Confirm Password harus berupa string',
        'string.empty': 'Confirm Password tidak boleh kosong',
        'any.only': 'Confirm Password harus sama dengan Password',
        'any.required': 'Confirm Password harus diisi'
      }),
    role: Joi.string().trim().allow(null, '')
  })

  return schema.validate(payload)
}
