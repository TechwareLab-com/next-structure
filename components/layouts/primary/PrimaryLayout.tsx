import Head from 'next/head';
import styles from './PrimaryLayout.module.css';
import { PropsWithChildren } from 'react';

export interface IPrimaryLayout {}

const PrimaryLayout: React.FC<PropsWithChildren<IPrimaryLayout>> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
