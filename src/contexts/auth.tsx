import React, {
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from 'react'
import Router, { useRouter, NextRouter } from 'next/router'
// import App, { AppProps } from 'next/app'
import ApiClient from '../network/ApiClient'
import {
  User,
  RequestLogin,
  RequestRegister,
  RequestRemindMail,
  RequestRemindKey,
} from '../types/api/'
import { initialUser } from '../utils/inits'
import { AuthContext } from '../utils/contexts'
import { BeforeLoginPage, AfterLoginPage } from '../utils/consts'
import { CurrentDate } from '../utils/date'

/**
 * Authプロバイダー
 * @param param0
 */
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(initialUser)
  const [loading, setLoading] = useState(true)
  const [errMsg, setErrMsg] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    let unmounted = false
    // リロード時の認証チェック
    reloadAuthCheck(router, setUser, setLoading, unmounted)

    // クリーンアップ
    return () => {
      unmounted = true
    }
  }, [])

  /**
   * ログイン処理
   * @param requestData
   */
  const login = async (requestData: RequestLogin): Promise<void> => {
    try {
      const cookieResponse = await ApiClient.csrfCookie.sanctum()
      if (cookieResponse && cookieResponse.status >= 400) return
      const response = await ApiClient.user.login(requestData)
      if (response && response.status === 422) {
        return
      } else if (response && response.status === 401) {
        return
      }
      setUser(response.data)
      setIsAuthenticated(!!response.data)
      router.push(AfterLoginPage.DASH_BOARD + CurrentDate())
    } catch (error) {
      if (error.response.status === 401) {
        // エラーメッセージを格納
        error.response.data && setErrMsg(error.response.data)
      }
    }
  }

  /**
   * 会員登録処理
   * @param requestData
   */
  const register = async (requestData: RequestRegister): Promise<void> => {
    try {
      const cookieResponse = await ApiClient.csrfCookie.sanctum()
      if (cookieResponse && cookieResponse.status >= 400) return
      const response = await ApiClient.user.register(requestData)
      if (response && response.status === 422) {
        return
      } else if (response && response.status === 401) {
        return
      }
      setUser(response.data)
      setIsAuthenticated(!!response.data)
      router.push(AfterLoginPage.DASH_BOARD + CurrentDate())
    } catch (error) {
      if (error.response.status === 401) {
        // エラーメッセージを格納
        error.response.data && setErrMsg(error.response.data)
      }
    }
  }
  /**
   * パートナーログイン処理
   * @param requestData
   */
  const partnerLogin = async (requestData: RequestLogin): Promise<void> => {
    try {
      const cookieResponse = await ApiClient.csrfCookie.sanctum()
      if (cookieResponse && cookieResponse.status >= 400) return
      const response = await ApiClient.user.login(requestData)
      if (response && response.status === 422) {
        return
      } else if (response && response.status === 401) {
        return
      }
      setUser(response.data)
      setIsAuthenticated(!!response.data)
      router.push(AfterLoginPage.DASH_BOARD + CurrentDate())
    } catch (error) {
      if (error.response.status === 401) {
        // エラーメッセージを格納
        error.response.data && setErrMsg(error.response.data)
      }
    }
  }
  /**
   * お試しログイン処理
   * @param requestData
   */
  const tryLogin = async (requestData: RequestLogin): Promise<void> => {
    try {
      const cookieResponse = await ApiClient.csrfCookie.sanctum()
      if (cookieResponse && cookieResponse.status >= 400) return
      const response = await ApiClient.user.login(requestData)
      if (response && response.status === 422) {
        return
      } else if (response && response.status === 401) {
        return
      }
      setUser(response.data)
      setIsAuthenticated(!!response.data)
      router.push(AfterLoginPage.DASH_BOARD + CurrentDate())
    } catch (error) {
      if (error.response.status === 401) {
        // エラーメッセージを格納
        error.response.data && setErrMsg(error.response.data)
      }
    }
  }

  /**
   * ログアウト
   */
  const logout = async () => {
    const res = await ApiClient.user.logout()
    if (res.status === 204) {
      // 認証情報処理化
      setUser(initialUser)
      setIsAuthenticated(false)
    }
  }

  /**
   * パスワードリマインダー(email送信)
   * @param requestData
   */
  const remindMail = async (requestData: RequestRemindMail) => {
    const res = await ApiClient.user.remindEmail(requestData)
    if (res.status === 201) router.push('/remaind-key')
  }

  /**
   * パスワードリマインダー(認証キー送信)
   * @param requestData
   */
  const remindKey = async (requestData: RequestRemindKey) => {
    try {
      const cookieResponse = await ApiClient.csrfCookie.sanctum()
      if (cookieResponse && cookieResponse.status >= 400) return
      const response = await ApiClient.user.remindKey(requestData)
      if (response && response.status === 422) {
        return
      } else if (response && response.status === 401) {
        return
      }
      setUser(response.data)
      setIsAuthenticated(!!response.data)
      router.push(AfterLoginPage.DASH_BOARD + CurrentDate())
    } catch (error) {
      if (error.response.status === 401) {
        // エラーメッセージを格納
        error.response.data && setErrMsg(error.response.data)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        errMsg,
        login,
        register,
        partnerLogin,
        tryLogin,
        logout,
        remindMail,
        remindKey,
        setIsAuthenticated,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

/**
 * AuthContext
 */
const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export default useAuth

/**
 * リロード時の認証チェック
 * @param router
 * @param setAuth
 * @param setLoading
 * @param unmounted
 */
export const reloadAuthCheck = async (
  router: NextRouter,
  setUser: Dispatch<SetStateAction<User>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  unmounted: boolean
) => {
  const { data } = await ApiClient.user.authRooting()
  if (data) {
    // 認証済みであり、かつログイン前のページにいる場合、ダッシュボードへリダイレクトさせる
    switch (router.pathname) {
      case BeforeLoginPage.TOP:
      case BeforeLoginPage.LOGIN:
      case BeforeLoginPage.SIGNUP:
      case BeforeLoginPage.PATNER_LOGIN:
      case BeforeLoginPage.TRY_LOGIN:
      case BeforeLoginPage.REMAIND_PASS_MAIL:
      case BeforeLoginPage.REMAIND_PASS_KEY:
        router.push(AfterLoginPage.DASH_BOARD + CurrentDate())
        break
      default:
    }
  }
  if (!unmounted) {
    setUser(data)
    setLoading(false)
  }
}

/**
 * 認証ルーティングコンポーネント
 * @param Component
 */
export const ProtectRoute = (Component: FC) => {
  const protectComponent = () => {
    const { isAuthenticated, setUser, setIsAuthenticated } = useAuth()
    const router = useRouter()
    let isLogined = true

    switch (router && router.pathname) {
      case BeforeLoginPage.TOP:
      case BeforeLoginPage.LOGIN:
      case BeforeLoginPage.SIGNUP:
      case BeforeLoginPage.PATNER_LOGIN:
      case BeforeLoginPage.TRY_LOGIN:
      case BeforeLoginPage.REMAIND_PASS_MAIL:
      case BeforeLoginPage.REMAIND_PASS_KEY:
        isLogined = false
        break
      default:
    }

    useEffect(() => {
      // ページ遷移時の認証ルーティング
      authRouting(setUser, setIsAuthenticated, isAuthenticated, isLogined)
    }, [isAuthenticated])

    return <Component />
  }
  return protectComponent
}

/**
 * ページ遷移時の認証ルーティング
 * @param setUser
 * @param isAuthenticated
 * @param isLogined
 */
export const authRouting = async (
  setUser: Dispatch<SetStateAction<User>>,
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>,
  isAuthenticated: boolean,
  isLogined: boolean
): Promise<void> => {
  const { data } = await ApiClient.user.authRooting()
  if (data) {
    // 認証チェックOK
    // 認証前のページにいる場合
    if (!isLogined) {
      if (!isAuthenticated) {
        // 認証情報を設定
        setUser(data)
        setIsAuthenticated(!!data)
      }
      Router.push(AfterLoginPage.DASH_BOARD + CurrentDate())
    }
  } else {
    // 認証チェックNG
    // 認証後のページにいる場合
    if (isLogined) {
      // 認証情報を初期化
      setUser(initialUser)
      setIsAuthenticated(false)
      Router.push(BeforeLoginPage.LOGIN)
    }
  }
}
