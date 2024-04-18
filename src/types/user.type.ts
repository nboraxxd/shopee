type Role = 'User' | 'Admin'

export type User = {
  _id: string
  roles: Role[]
  email: string
  address?: string
  date_of_birth?: string
  name?: string
  phone?: string
  avatar?: string
  createdAt: string
  updatedAt: string
  __v: number
}
