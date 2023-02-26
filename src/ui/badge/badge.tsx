import { VariantProps } from 'class-variance-authority';
import { badgeStyles } from './badgeStyles';

interface Props extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeStyles> {
  variant?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  isRounded?: boolean;
  children: React.ReactNode;
}

export function Badge(props: Props) {
  const { children, isRounded = false, size = 'md', variant = 'neutral', className = '', ...rest } = props;
  return (
    <span {...rest} className={badgeStyles({ isRounded, size, variant, className })}>
      {children}
    </span>
  );
}
