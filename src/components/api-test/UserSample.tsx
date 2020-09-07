import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  User,
  RequestLogin,
  RequestRegister,
  RequestRemindMail,
  RequestRemindKey,
  RequestChangePassword,
} from '../../types/api/api'
import ApiClient from '../../network/ApiClient'
import UserList from './UserList'
import StatusCode from './StatusCode'

const UserSample: FC = () => {
  const [loginUser, setLoginUser] = useState(initialUser)
  const [registerUser, setRegisternUser] = useState(initialUser)
  const [partnerLoginUser, setPertnerLoginUser] = useState(initialUser)
  const [tryLoginUser, setTryLoginUser] = useState(initialUser)
  const [authLoginUser, setAuthLoginUser] = useState(initialUser)
  const [logoutStatus, setLogoutStatus] = useState(0)
  const [remindMailStatus, setRemindMailStatus] = useState(0)
  const [remindKeyUser, setRemindKeySUser] = useState(initialUser)
  const [changePasswordStatus, setChangePasswordStatus] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const loginFunc = async () => {
      const res = await ApiClient.user.login(requestLoginParameter)
      setLoginUser(res.data)
    }
    const registerFunc = async () => {
      const res = await ApiClient.user.register(requestRegisterParameter)
      setRegisternUser(res.data)
    }
    const partnerLoginFunc = async () => {
      const res = await ApiClient.user.partnerLogin(requestLoginParameter)
      setPertnerLoginUser(res.data)
    }
    const tryLoginFunc = async () => {
      const res = await ApiClient.user.tryLogin(requestLoginParameter)
      setTryLoginUser(res.data)
    }
    const authLoginFunc = async () => {
      try {
        const res = await ApiClient.user.authRooting()
        setAuthLoginUser(res.data)
      } catch (error) {
        router.push('/api-test')
      }
    }
    const logoutFunc = async () => {
      try {
        const res = await ApiClient.user.logout()
        setLogoutStatus(res.status)
      } catch (error) {
        router.push('/api-test')
      }
    }
    const remindMailFunc = async () => {
      const res = await ApiClient.user.remindEmail(requestRemindMailParameter)
      setRemindMailStatus(res.status)
    }
    const remindKeyFunc = async () => {
      const res = await ApiClient.user.remindKey(requestRemindKeyParameter)
      setRemindKeySUser(res.data)
    }
    const changePasswordFunc = async () => {
      try {
        const res = await ApiClient.user.changePassword(changePasswordParameter)
        setChangePasswordStatus(res.status)
      } catch (error) {
        router.push('/api-test')
      }
    }

    loginFunc()
    registerFunc()
    partnerLoginFunc()
    tryLoginFunc()
    authLoginFunc()
    logoutFunc()
    remindMailFunc()
    remindKeyFunc()
    changePasswordFunc()
  }, [])

  return (
    <>
      <h1>UserSample</h1>
      <h2>No.1: login user</h2>
      {loginUser && <UserList user={loginUser} />}
      <h2>No.2: register user</h2>
      {registerUser && <UserList user={registerUser} />}
      <h2>No.3: partner login user</h2>
      {partnerLoginUser && <UserList user={partnerLoginUser} />}
      <h2>No.4: try login user</h2>
      {tryLoginUser && <UserList user={tryLoginUser} />}
      <h2>No.5: auth rooting user</h2>
      {authLoginUser && <UserList user={authLoginUser} />}
      <h2>No.6: logout status</h2>
      <StatusCode code={logoutStatus} />
      <h2>No.7: remind mail status</h2>
      <StatusCode code={remindMailStatus} />
      <h2>No.8: remind key user</h2>
      {remindKeyUser && <UserList user={remindKeyUser} />}
      <h2>No.9: change password status</h2>
      <StatusCode code={changePasswordStatus} />
    </>
  )
}
export default UserSample

export const initialUser: User = {
  id: 0,
  name: '',
  email: '',
  user_type: 0,
  main_user_id: 0,
}

export const requestLoginParameter: RequestLogin = {
  email: 'test@gmail.com',
  password: 'password123',
}

export const requestRegisterParameter: RequestRegister = {
  name: 'やすお',
  email: 'test@gmail.com',
  password: 'password123',
}

export const requestRemindMailParameter: RequestRemindMail = {
  email: 'test@gmail.com',
}
export const requestRemindKeyParameter: RequestRemindKey = {
  auth_key: 'aaaaaaa',
}

export const changePasswordParameter: RequestChangePassword = {
  password: 'password',
}
