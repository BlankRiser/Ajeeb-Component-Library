import { cva } from 'class-variance-authority';

type defaultProps = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl ';
};
type Props =
  | ({
      variant: 'single';
      url: string;
    } & defaultProps)
  | ({
      variant: 'group';
      url: string[];
    } & defaultProps);

export function Avatar(props: Props) {
  const { size, variant, url } = props;

  if (variant === 'single') {
    return <img src={url} />;
  }

  return <div>Grouped Avatar</div>;
}

const avatarStyles = cva('', {
  variants: {},
});
