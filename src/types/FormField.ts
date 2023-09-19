export type LoginFieldType = {
  username: string
  password: string
  remember: boolean
}

export type RegisterFieldType = {
  username: string
  password: string
  confirmPassword: string
  email: string
  code: string
  remember: boolean
}

export type ChangePasswordFieldType = {
  email: string,
  code: string,
  newPassword: string,
}
