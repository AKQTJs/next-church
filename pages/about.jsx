import Head from 'next/head';
import { useIntl } from 'react-intl';
import styles from '../styles/Home.module.css';

export default function About() {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={styles.container}>
      <Head>
        <title>{f('navBarAbout')}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.main}>
        {f('navBarHome')}
      </main>
    </div>
  );
}