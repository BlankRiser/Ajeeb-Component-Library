import { VariantProps } from 'class-variance-authority';
import { avatarStyles, notificationStyles } from './avatarStyles';

type defaultProps = {
  // size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
} & VariantProps<typeof avatarStyles>;

type optionalProps =
  | ({
      variant: 'single';
      url: string;
      hasNotification?: boolean;
      notificationClassName?: string;
    } & defaultProps)
  | ({
      variant: 'group';
      url: string[];
      hasNotification?: false;
      notificationClassName?: undefined;
    } & defaultProps);

export function Avatar(props: optionalProps) {
  const { size = 'md', variant, url, className = '', hasNotification = false, notificationClassName = '' } = props;

  if (variant === 'single') {
    return (
      <span className='relative inline-block'>
        <img src={url} className={avatarStyles({ size, className, variant })} alt='avatar' />
        {hasNotification ? <span className={notificationStyles({ size, className: notificationClassName })} /> : null}
      </span>
    );
  }

  return (
    <div className='overflow-hidde flex -space-x-1'>
      {url.map((url, index) => {
        return <img key={index} src={url} className={avatarStyles({ size, className, variant })} alt='avatar' />;
      })}
    </div>
  );
}
