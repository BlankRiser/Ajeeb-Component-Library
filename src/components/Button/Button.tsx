import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';

const button = cva(
  'appearance-none font-medium gap-2 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1  focus-visible:ring-blue-300 transition-colors duration-200 ease-in-out h-max ',
  {
    variants: {
      variant: {
        filled: [
          'bg-blue-600 hover:bg-blue-700 active:bg-blue-800',
          'text-white',
          ' disabled:select-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400',
        ],
        danger: [
          'bg-red-600 hover:bg-red-700 active:bg-red-800',
          'text-white',
          ' disabled:select-none disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400',
        ],
        light: [
          'bg-blue-50 hover:bg-blue-100 active:bg-blue-200',
          'text-blue-600',
          'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400',
        ],
        outline: [
          'bg-transparent hover:bg-gray-50 active:bg-gray-200 ',
          'dark:bg-gray-800 dark:hover:bg-gray-700 active:bg-gray-600 ',
          'text-gray-700',
          'dark:text-gray-100',
          'border border-gray-300  active:border-gray-200 ',
          'dark:border-gray-600 dark:active:border-gray-700',
          'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 dark:disabled:bg-gray-700 dark:disabled:text-gray-500',
        ],
        subtle: [
          'bg-transparent hover:bg-blue-50 active:bg-blue-800 ',
          ' dark:hover:bg-blue-900 active:bg-blue-100 ',
          'text-blue-600',
          'disabled:cursor-not-allowed disabled:pointer-events-none  disabled:text-gray-400',
        ],
      },
      size: {
        small: ['text-small', 'py-2 px-3'],
        medium: ['text-small', 'py-3 px-4'],
        large: ['text-small', 'py-4 px-5'],
      },
      onlyIcon: {
        true: 'w-max',
        false: 'w-full',
      },
      radius: {
        '4px': 'rounded-[4px]',
        '2px': 'rounded-[2px]',
        '6px': 'rounded-[6px]',
        '8px': 'rounded-[8px]',
        '12px': 'rounded-[12px]',
        '16px': 'rounded-[16px]',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      { size: 'small', onlyIcon: true, className: '!p-2' },
      { size: 'medium', onlyIcon: true, className: '!p-3' },
      { size: 'large', onlyIcon: true, className: '!p-4' },
    ],
    defaultVariants: {
      variant: 'filled',
      size: 'medium',
      radius: '4px',
    },
  },
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  isLoading?: boolean;
  onlyIcon?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const _Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { variant, size = 'medium', className, children, onlyIcon, radius, isLoading, ...rest } = props;
  return (
    <button ref={ref} className={button({ variant, size, onlyIcon, radius, className })} {...rest}>
      {children}
    </button>
  );
};

export const Button = forwardRef(_Button);

Button.displayName = '@ajeeb/Button';
