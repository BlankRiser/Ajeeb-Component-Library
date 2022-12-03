type Props = {
  children: React.ReactNode;
};

export function Button(props: Props) {
  const { children } = props;
  return <button>{children}</button>;
}
