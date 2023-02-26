import { cva } from 'class-variance-authority';

export const badgeStyles = cva('font-medium', {
  variants: {
    size: {
      sm: 'text-extra-small px-1 py-0.5',
      md: 'text-extra-small px-2 py-1',
      lg: 'text-small px-2 py-1',
    },
    variant: {
      neutral: ' dark:text-gray-100 text-gray-600 bg-gray-100 dark:bg-gray-800',
      success: ' dark:text-green-50 text-green-600 bg-green-100 dark:bg-green-800',
      warning: ' dark:text-yellow-50 text-yellow-600 bg-yellow-100 dark:bg-yellow-800',
      danger: ' dark:text-red-50 text-red-600 bg-red-100 dark:bg-red-800',
      info: ' dark:text-blue-50 text-blue-600 bg-blue-100 dark:bg-blue-800',
    },
    isRounded: {
      true: 'rounded-full',
      false: 'rounded',
    },
  },
});
