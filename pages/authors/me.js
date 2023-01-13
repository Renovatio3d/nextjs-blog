import Link from 'next/link';
import Head from 'next/head';

export default function Me() {
    return (
      <>
      <Head>
        <title>Our authors</title>
      </Head>
        <h1>Jefferson Nah Jr.</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </>
    );
  }