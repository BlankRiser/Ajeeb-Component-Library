/**
 *
 * @packageDocumentation
 * @module @ajeeb/toggle
 *
 * @description
 * A toggle switch component that uses the `@radix-ui/react-switch` package.
 *
 * @dependencies
 * ```sh
 * npm install @radix-ui/react-switch
 * ```
 */

import * as Switch from '@radix-ui/react-switch';
import { VariantProps } from 'class-variance-authority';
import { forwardRef, Ref } from 'react';
import { thumbStyles, toggleStyles } from './toggleStyles';

export interface ToggleProps extends VariantProps<typeof toggleStyles> {
  // Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
  thumbClassName?: string;
  className?: string;
}

export function _Toggle(props: ToggleProps, ref: Ref<HTMLInputElement>) {
  const { variant, size = 'sm', className = '', thumbClassName, ...rest } = props;

  return (
    <Switch.Root
      {...rest}
      className={toggleStyles({ variant, size, className })}
      // className='relative h-4 w-8 rounded-full bg-gray-200 data-[state="checked"]:bg-blue-600'
    >
      <Switch.Thumb className={thumbStyles({ size, className: thumbClassName })} />
    </Switch.Root>
  );
}

export const Toggle = forwardRef(_Toggle);

Toggle.displayName = '@ajeeb/Toggle';
