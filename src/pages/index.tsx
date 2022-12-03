import Head from 'next/head';

import { Button } from '@/components';
import { TwoColumn } from '@/layouts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <TwoColumn
          leftChildren={<div className='text-4xl text-red-600'>Left</div>}
          rightChildren={<h1 className='text-4xl text-green-600'>Right</h1>}
        />
      </main>
    </div>
  );
}