import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, InputHTMLAttributes, Ref } from 'react';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof toggleStyles> {}

export function _Toggle(props: ToggleProps, ref: Ref<HTMLInputElement>) {
  const { variant, size, className, ...rest } = props;

  return (
    <div className='flex flex-col items-center justify-between gap-4'>
      <span>
        {size} - {variant}
      </span>
      <input {...rest} ref={ref} type='checkbox' className={toggleStyles({ variant, size, className })} />
      <p className='text-white peer-checked:text-red-500'>ikshdbksdnc</p>
    </div>
  );
}

export const Toggle = forwardRef(_Toggle);

Toggle.displayName = '@ajeeb/Toggle';

const toggleStyles = cva('appearance-none rounded-3xl ', {
  variants: {
    variant: {
      default: [
        'relative',
        'bg-gray-200 hover:bg-gray-300 ',
        'after:content-[""] after:w-[0.625rem] after:h-[0.625rem] after:bg-black after:absolute after:top-1/2 after:translate-y-[-50%] after:left-1 after:rounded-full transition-transform duration-200 ease-in-out checked:after:right-1',
      ],
      danger: ['bg-red-600 hover:bg-red-700 active:bg-red-800 '],
    },
    size: {
      small: ['w-8 h-4'],
      medium: ['w-10 h-5 '],
      large: ['w-12 h-6'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'medium',
  },
});
