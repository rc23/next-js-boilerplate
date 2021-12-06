import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Layout = ({ children, title = 'next-js-boilerplate' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content="rc23" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href={prefix + '/favicon.ico'} />
    </Head>
    <header>
      <nav>
        <Link href="/">Home </Link>
        <Link href="/about">About </Link>
        <Link href="/users">Users </Link>
      </nav>
    </header>
    {children}
    <footer></footer>
  </div>
);

export default Layout;
