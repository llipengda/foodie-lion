import UserInfo from './UserInfo'

export default interface LoginResult {
  token: string
  userInfo: UserInfo
}
