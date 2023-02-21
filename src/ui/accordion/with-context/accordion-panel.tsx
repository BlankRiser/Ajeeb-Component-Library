import { useContext } from 'react';
import { AccordionContext } from './accordion-context';

type Props = {
  children: React.ReactNode;
};

export function AccordionPanel({ children }: Props) {
  const accordion = useContext(AccordionContext);
  const { expanded } = accordion;
  return <div className={`${expanded ? 'block' : 'hidden'}`}>{children}</div>;
}
