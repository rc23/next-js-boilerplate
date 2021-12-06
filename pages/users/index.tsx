import { GetStaticProps } from 'next';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List/List';
import type { User } from '../../interfaces';

type Props = {
  items: User[];
};

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = sampleUserData;
  return { props: { items } };
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List">
    <h1>Users List</h1>
    <List items={items} />
  </Layout>
);

export default WithStaticProps;
