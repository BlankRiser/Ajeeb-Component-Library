import { ThemeToggle } from '@components/theme-toggle';
import { TwoColumn } from '@layouts/TwoColumn';
import { Button, Toggle } from '@ui';

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ajeeb Design System</title>
        <meta name='description' content='Ajeeb Component library built using Ajeeb Design System' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div className='fixed bottom-5 right-5'>
          <ThemeToggle />
        </div>
        <section>
          <ToggleTest />
          <ButtonTest />
        </section>
      </main>
    </div>
  );
}

function ToggleTest() {
  return (
    <TwoColumn
      leftChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Toggle variant={'default'} size='small' />
          <Toggle variant={'default'} size='medium' />
          <Toggle variant={'default'} size='large' />
        </div>
      }
      rightChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Toggle variant={'danger'} size='small' />
          <Toggle variant={'danger'} size='medium' />
          <Toggle variant={'danger'} size='large' />
        </div>
      }
    />
  );
}

function ButtonTest() {
  return (
    <TwoColumn
      leftChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Button variant='danger' className='' onlyIcon>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
              />
            </svg>
          </Button>
        </div>
      }
      rightChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Button disabled variant='filled' size='small' className='bg-red-400' onlyIcon>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
              />
            </svg>
          </Button>
        </div>
      }
    />
  );
}
