import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import type { NextPage } from 'next';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>rc23 - journey</title>
        <meta name="description" content="rc23" />
        <link rel="icon" href={prefix + '/favicon.ico'} />
      </Head>

      <nav className={styles.nav}>
        <Link href={prefix + '/about'}>
          <a>About</a>
        </Link>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>My Journey!</h1>
      </main>
    </div>
  );
};

export default Home;
