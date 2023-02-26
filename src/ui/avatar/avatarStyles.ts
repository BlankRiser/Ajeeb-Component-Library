import { cva } from 'class-variance-authority';

export const avatarStyles = cva('rounded-full object-cover', {
  variants: {
    size: {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-14 h-14',
    },
    variant: {
      single: '',
      group: 'ring-2 ring-white',
    },
  },
});
export const notificationStyles = cva('absolute block bg-green-600 rounded-full ring-2 ring-white', {
  variants: {
    size: {
      xs: 'bottom-0 right-0 h-1.5 w-1.5',
      sm: 'bottom-0 right-0 h-2 w-2',
      md: 'bottom-0 right-0 h-2.5 w-2.5',
      lg: 'bottom-0 right-0 h-3 w-3',
      xl: 'bottom-0 right-0 h-3.5 w-3.5',
    },
  },
});
