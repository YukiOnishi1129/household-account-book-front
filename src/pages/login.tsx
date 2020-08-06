import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Login: FC = () => (
  <div>
    <Head>
      <title>ログイン</title>
    </Head>
    <div>Login</div>
    <ul>
      <li>
        <Link href="/">
          <a>TOP</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>サインアップ</a>
        </Link>
      </li>
    </ul>
    <div>
      <label htmlFor="email">
        <p>メールアドレス</p>
        <input type="text" name="email" id="email" />
      </label>
      <label htmlFor="pass">
        <p>パスワード</p>
        <input type="password" name="pass" id="pass" />
      </label>
      <button>login</button>
    </div>
  </div>
);

export default Login;
