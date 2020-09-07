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

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp

export const authRouting = async (
  router: NextRouter,
  setAuth: React.Dispatch<React.SetStateAction<User>>
) => {
  if (router.pathname === '/api-test') {
    return
  }
  try {
    const res = await ApiClient.user.authRooting()
    setAuth(res.data)
  } catch (error) {
    router.push('/api-test')
  }
}

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
    authRouting(router, setAuth)
  }, [])
  return <AuthProvider value={auth}>{children}</AuthProvider>
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
