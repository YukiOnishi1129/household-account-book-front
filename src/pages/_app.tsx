import React, {
  useState,
  useEffect,
  ReactElement,
  createContext,
  Context,
} from 'react'
import Router, { useRouter, NextRouter } from 'next/router'
import App, { AppProps } from 'next/app'
// import { SetCookie, DestroyCookie } from '../network/SetCookie'
import { User } from '../types/api/'
import ApiClient from '../network/ApiClient'
import { BeforeLoginPage } from '../utils/consts'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp

export const AuthProvider = ({ children }) => {
  const router = useRouter()
  // Contextを定義
  const AuthContext = createContext({} as User)
  const AuthProvider = AuthContext.Provider
  const initialAuth: User = {
    id: 0,
    name: '',
    email: '',
    user_type: 0,
    main_user_id: 0,
  }
  const [auth, setAuth] = useState(initialAuth)

  useEffect(() => {
    let unmounted = false
    authRouting(router, setAuth, unmounted)

    // クリーンアップ
    return () => {
      unmounted = true
    }
  }, [])
  return <AuthProvider value={auth}>{children}</AuthProvider>
}

export const authRouting = async (
  router: NextRouter,
  setAuth: React.Dispatch<React.SetStateAction<User>>,
  unmounted: boolean
) => {
  if (router.pathname === '/api-test') {
    return
  }
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
  }
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

// export default class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const router = useRouter()
//     let pageProps = {}
//     try {
//       const res = await ApiClient.user.authRooting()
//       console.log('認証')
//       console.log(res)
//     } catch (error) {
//       console.log('エラー')
//       console.log(router)
//       // router.push('/')
//     }

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }

//     // cookieのsetup
//     // SetCookie(ctx, '1')
//     DestroyCookie(ctx)

//     return { pageProps }
//   }

//   render() {
//     const { Component, pageProps } = this.props

//     return <Component {...pageProps} />
//   }
// }
