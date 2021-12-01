import { Container, Main, Title } from '../styles/styles';
import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>rc23 - journey</title>
        <meta name="description" content="rc23" />
        <link rel="icon" href={prefix + '/favicon.ico'} />
      </Head>

      <nav>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>

      <Main>
        <Title>Welcome!</Title>
      </Main>
    </Container>
  );
};

export default Home;
