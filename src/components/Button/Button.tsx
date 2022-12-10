/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, ReactNode, Ref } from 'react';

type ButtonProps<TagElement extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[TagElement] & {
  tag?: TagElement;
  variant?: 'Filled' | 'Ouline' | 'Light' | 'Subtle' | 'Default';
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  onlyIcon?: boolean;
  rounded?: boolean;
  children: ReactNode;
};

function _Button<TagElement extends keyof JSX.IntrinsicElements = 'button'>(
  props: ButtonProps<TagElement>,
  ref: Ref<any>
) {
  const { variant = 'primary', size = 'medium', rounded = false, onlyIcon, children, tag = 'button', ...rest } = props;

  const Component = tag as any;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
}

export const Button = forwardRef(_Button);

Button.displayName = '@ajeeb/atom/Button';
