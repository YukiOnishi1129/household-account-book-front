import { setCookie, destroyCookie } from 'nookies'
import { NextPageContext } from 'next'

export const SetCookie = (ctx: NextPageContext, token: string) => {
  setCookie(ctx, 'development_session', token, {
    maxAge: 30 * 24 * 60 * 60,
  })
}

export const DestroyCookie = (ctx: NextPageContext) => {
  destroyCookie(ctx, 'development_session')
}
