import { z } from 'zod'
import { AUTH_MESSAGES } from '@/constants/message'

const email = z.string().email(AUTH_MESSAGES.EMAIL_INVALID)
const password = z.string().regex(/^.{5,160}$/, AUTH_MESSAGES.PASSWORD_INVALID)

export const registerSchema = z
  .object({
    email,
    password,
    confirm_password: password,
  })
  .strict()
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: 'custom',
        message: AUTH_MESSAGES.PASSWORD_NOT_MATCH,
        path: ['confirm_password'],
      })
    }
  })

export const loginSchema = z.object({ email, password }).strict()

export type RegisterSchemaType = z.infer<typeof registerSchema>
export type LoginSchemaType = z.infer<typeof loginSchema>
