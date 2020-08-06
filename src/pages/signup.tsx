import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const SignUp: FC = () => (
  <div>
    <Head>
      <title>サインアップ</title>
    </Head>
    <div>SignUp</div>
    <ul>
      <li>
        <Link href="/">
          <a>TOP</a>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <a>ログイン</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default SignUp;
