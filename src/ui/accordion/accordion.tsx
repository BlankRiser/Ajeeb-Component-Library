import { AccordionContext } from './accordion-context';
import { AccordionHeader } from './accordion-header';
import { AccordionPanel } from './accordion-panel';

type Props = {
  children: React.ReactNode;
  expanded?: boolean;
  onToggle?: () => void;
};

export function Accordion(props: Props) {
  const { children, expanded = false } = props;
  return (
    <AccordionContext.Provider
      value={{
        expanded: expanded,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;
