import React, { ReactElement, useState, useContext, useEffect } from 'react'
import Router, { useRouter, NextRouter } from 'next/router'
import App, { AppProps } from 'next/app'
import ApiClient from '../network/ApiClient'
import { User } from '../types/api/'
import { initialUser } from '../utils/inits'
import { AuthContext } from '../utils/contexts'
import { BeforeLoginPage } from '../utils/consts'

export const AuthProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(initialUser)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unmounted = false
    authRouting(router, setUser, setLoading, unmounted)

    // クリーンアップ
    return () => {
      unmounted = true
    }
  }, [])
  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const authRouting = async (
  router: NextRouter,
  setAuth: React.Dispatch<React.SetStateAction<User>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
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
    setAuth(data)
    setLoading(false)
  }
}

const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export default useAuth

export const ProtectRoute = ({ Component, pageProps }: AppProps) => {
  return () => {
    const { isAuthenticated, loading } = useAuth()

    useEffect(() => {
      if (!isAuthenticated && !loading) Router.push('/login')
    }, [loading, isAuthenticated])

    return <Component {...pageProps} />
  }
}
