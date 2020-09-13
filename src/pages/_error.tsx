import React from 'react'
import { NextPage, NextPageContext } from 'next'

interface Props {
  statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return <div>{statusCode} エラーが発生しました</div>
}

export default Error

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404
  return { statusCode }
}
