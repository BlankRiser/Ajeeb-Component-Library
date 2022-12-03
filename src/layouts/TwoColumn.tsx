type Props = {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
};

export function TwoColumn(props: Props) {
  const { leftChildren, rightChildren } = props;
  return (
    <section className='grid grid-cols-2 place-items-center h-[40rem] gap-6'>
      <div id='light-theme' className='border w-full h-full flex items-center justify-center'>
        {leftChildren}
      </div>
      <div id='dark-theme' className='border w-full h-full flex items-center justify-center'>
        {rightChildren}
      </div>
    </section>
  );
}
