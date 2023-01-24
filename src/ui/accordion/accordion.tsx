import { AccordionContext } from './accordion-context';

type Props = {
  children: React.ReactNode;
};

export function Accordion(props: Props) {
  const { children } = props;
  return <AccordionContext.Provider value={null}>{children}</AccordionContext.Provider>;
}
