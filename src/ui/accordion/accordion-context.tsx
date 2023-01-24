import { createContext } from 'react';

type AccordionContextValue = {
  expanded: boolean;
  onToggle: () => void;
};

export const AccordionContext = createContext<AccordionContextValue | null>({
  expanded: false,
  onToggle: () => {},
});
