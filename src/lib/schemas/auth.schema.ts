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

const registerRes = z.object({
  message: z.string(),
  data: z.object({
    access_token: z.string(),
    expires: z.string(),
    refresh_token: z.string(),
    expires_refresh_token: z.string(),
    user: z.object({
      roles: z.array(z.enum(['User', 'Admin'])),
      _id: z.string(),
      email: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      __v: z.number(),
    }),
  }),
})

const loginRes = registerRes

export type RegisterSchemaType = z.infer<typeof registerSchema>
export type LoginSchemaType = z.infer<typeof loginSchema>

export type RegisterResType = z.TypeOf<typeof registerRes>
export type LoginResType = z.TypeOf<typeof loginRes>
