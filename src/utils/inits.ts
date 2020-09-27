import { User, Category, Partner } from '@/types/api/'

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
 * Categorysテートの初期値
 */
export const initialCategories: Category[] = [
  {
    id: 0,
    category_name: '',
    color_type: 0,
  },
]
/**
 * Partnerステートの初期値
 */
export const initialPartners: Partner[] = [
  {
    id: 0,
    name: '',
    email: '',
  },
]
