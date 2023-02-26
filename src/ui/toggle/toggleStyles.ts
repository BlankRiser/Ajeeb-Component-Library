import { cva } from 'class-variance-authority';

export const thumbStyles = cva(
  'block shadow-sm rounded-full bg-white transition-transform duration-100 ease-in will-change-transform',
  {
    variants: {
      size: {
        sm: ['h-2.5 w-2.5 ', 'translate-x-0.5 data-[state="checked"]:translate-x-5'],
        md: ['w-3 h-3', 'translate-x-1 data-[state="checked"]:translate-x-6'],
        lg: ['w-3.5 h-3.5', 'translate-x-1.5 data-[state="checked"]:translate-x-7'],
      },
    },
  },
);

export const toggleStyles = cva(
  'appearance-none rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-blue-300 focus-visible:border-2',
  {
    variants: {
      variant: {
        default: ['relative ', 'bg-gray-200 data-[state="checked"]:bg-blue-600', ''],
        danger: ['relative ', 'bg-gray-200 data-[state="checked"]:bg-red-600'],
      },
      size: {
        sm: ['w-8 h-4'],
        md: ['w-10 h-5 '],
        lg: ['w-12 h-6'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);
