import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef, Ref } from 'react';
import { buttonStyles } from './button-styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  isLoading?: boolean;
  onlyIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const _Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { variant, size = 'md', className, children, onlyIcon, radius, isLoading, ...rest } = props;
  return (
    <button ref={ref} type='button' className={buttonStyles({ variant, size, onlyIcon, radius, className })} {...rest}>
      {children}
    </button>
  );
};

export const Button = forwardRef(_Button);

Button.displayName = '@ajeeb/Button';
