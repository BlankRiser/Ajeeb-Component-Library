import { ThemeToggle } from '@components/theme-toggle';
import { TwoColumn } from '@layouts/TwoColumn';
import { Avatar, Button, Toggle } from '@ui';

import Head from 'next/head';
import { AjeebLogo } from 'src/assets/icons';
import { ContextAccordion } from 'src/ui/accordion';

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
        <section className='grid place-items-center p-4'>
          <AjeebLogo width={48} height={48} className='text-purple-500 ' />
        </section>
        <section>
          <AccordionTest />
          <AvatarTest />
          <ToggleTest />
          <ButtonTest />
        </section>
      </main>
    </div>
  );
}

function AccordionTest() {
  return (
    <TwoColumn
      leftChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <ContextAccordion
            expanded={false}
            onToggle={() => {
              console.log('toggle');
            }}
          >
            <ContextAccordion.Header>Header</ContextAccordion.Header>
            <ContextAccordion.Panel>Body</ContextAccordion.Panel>
          </ContextAccordion>
        </div>
      }
      rightChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Toggle variant={'danger'} size='sm' />
        </div>
      }
    />
  );
}
function AvatarTest() {
  return (
    <TwoColumn
      leftChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Avatar
            variant={'single'}
            size='sm'
            url='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          />
        </div>
      }
      rightChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Toggle variant={'danger'} size='sm' />
        </div>
      }
    />
  );
}
function ToggleTest() {
  return (
    <TwoColumn
      leftChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Toggle variant={'default'} size='sm' />
          <Toggle variant={'default'} size='md' />
          <Toggle variant={'default'} size='lg' />
        </div>
      }
      rightChildren={
        <div className='grid h-full w-full grid-cols-4 place-items-center gap-2 '>
          <Toggle variant={'danger'} size='sm' />
          <Toggle variant={'danger'} size='md' />
          <Toggle variant={'danger'} size='lg' />
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
              className='h-6 w-6 animate-spin'
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
          <Button disabled variant='filled' size='sm' className='bg-red-400' onlyIcon>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 animate-spin'
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
