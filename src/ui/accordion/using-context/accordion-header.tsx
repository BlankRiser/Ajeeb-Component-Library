import { useContext } from 'react';
import { AccordionContext } from './accordion-context';

type Props = {
  children: React.ReactNode;
};

export function AccordionHeader({ children }: Props) {
  const accordion = useContext(AccordionContext);
  const { expanded } = accordion;
  return (
    <button
      className={`${expanded ? 'bg-green-300' : 'bg-gray-200'} p-2`}
      onClick={() => {
        alert('nice');
      }}
    >
      {children}
    </button>
  );
}
