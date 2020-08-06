import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home: FC = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>Home</div>
    <ul>
      <li>
        <Link href="/login">
          <a>ログイン</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a>サインアップ</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Home;
