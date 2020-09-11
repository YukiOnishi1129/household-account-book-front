import React, {
  ReactElement,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from 'react'
import Router, { useRouter, NextRouter } from 'next/router'
import App, { AppProps } from 'next/app'
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
import { BeforeLoginPage } from '../utils/consts'

/**
 * AuthProvider
 * @param param0
 */
export const AuthProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(initialUser)
  const [loading, setLoading] = useState(true)
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    let unmounted = false
    authRouting(router, setUser, setLoading, unmounted)

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
      router.push('/api-test')
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
      router.push('/api-test')
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
      router.push('/api-test')
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
      router.push('/api-test')
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
    if (res.status === 204) setUser(null)
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
      router.push('/api-test')
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
        isAuthenticated: !!user,
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
 * 認証ルーティング
 * @param router
 * @param setAuth
 * @param setLoading
 * @param unmounted
 */
export const authRouting = async (
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
        router.push('/api-test')
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
 *
 * @param param0
 */
export const ProtectRoute = ({ Component, pageProps }: AppProps) => {
  const protectComponent = () => {
    const { isAuthenticated, loading } = useAuth()

    useEffect(() => {
      if (!isAuthenticated && !loading) Router.push('/login')
    }, [loading, isAuthenticated])

    return <Component {...pageProps} />
  }
  return protectComponent
}
