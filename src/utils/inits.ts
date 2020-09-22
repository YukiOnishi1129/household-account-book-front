import { User, Partner } from '@/types/api/'

/**
 * Userステートの初期値
 */
export const initialUser: User = {
  id: 0,
  name: '',
  email: '',
  user_type: 0,
  main_user_id: 0,
  login_flg: false,
  input_flg: false,
}

/**
 * Partnerステートの初期値
 */
export const initPartners: Partner[] = [
  {
    id: 0,
    name: '',
    email: '',
  },
]
