/**
 *
 * @packageDocumentation
 * @module @ajeeb/toggle
 *
 * @description
 * Tooltip component that uses the `@radix-ui/react-tooltip` package.
 *
 * @dependencies
 * ```sh
 * npm install @radix-ui/react-tooltip
 * ```
 */

import * as RadixTooltip from '@radix-ui/react-tooltip';
import { forwardRef, ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
}

export function Tooltip({ children }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>{children}</RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

type RadixTooltipContent = typeof RadixTooltip.Content;

export interface TooltipContentProps extends RadixTooltipContent {
  children: ReactNode;
}

export const TooltipContent = forwardRef<
  React.ElementRef<typeof RadixTooltip.Content>,
  React.ComponentPropsWithoutRef<typeof RadixTooltip.Content>
>(({ className, ...props }, ref) => <RadixTooltip.Content ref={ref} className='' {...props} />);

// const TooltipContent = forwardRef(_TooltipContent);

// export function TooltipExample({}: TooltipProps) {
//   return (
//     <RadixTooltip.Provider>
//       <RadixTooltip.Root>
//         <RadixTooltip.Trigger asChild>
//           <button className='IconButton'>
//             <PlusIcon />
//           </button>
//         </RadixTooltip.Trigger>
//         <RadixTooltip.Portal>
//           <RadixTooltip.Content className='TooltipContent' sideOffset={5}>
//             Add to library
//             <RadixTooltip.Arrow className='TooltipArrow' />
//           </RadixTooltip.Content>
//         </RadixTooltip.Portal>
//       </RadixTooltip.Root>
//     </RadixTooltip.Provider>
//   );
// }
