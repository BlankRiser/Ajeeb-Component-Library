type Props = {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
};

export function TwoColumn(props: Props) {
  const { leftChildren, rightChildren } = props;
  return (
    <section className='grid h-[40rem] grid-cols-1 place-items-center gap-6 p-6 md:grid-cols-2'>
      <div
        id='light-theme'
        className='flex h-full w-full items-center justify-center rounded-sm border border-gray-800 dark:border-gray-600'
      >
        {leftChildren}
      </div>
      <div
        id='dark-theme'
        className='flex h-full w-full items-center justify-center rounded-sm border border-gray-800 dark:border-gray-600'
      >
        {rightChildren}
      </div>
    </section>
  );
}
