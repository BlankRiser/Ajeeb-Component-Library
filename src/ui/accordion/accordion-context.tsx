import { createContext } from 'react';

type AccordionContextValue = {
  expanded: boolean;
};

export const AccordionContext = createContext<AccordionContextValue>({
  expanded: false,
});
