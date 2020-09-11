import { User } from './api/'

export interface Auth {
  isAuthenticated: boolean
  loading: boolean
  user: User
}
