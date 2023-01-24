import { useContext } from 'react';
import { AccordionContext } from './accordion-context';

type Props = {
  children: React.ReactNode;
};

export function AccordionHeader({ children }: Props) {
  const { Consumer } = useContext(AccordionContext);

  return <div>{children}</div>;
}
