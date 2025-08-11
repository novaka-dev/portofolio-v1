export function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto max-w-5xl px-4 animate-fade-in-blur  ${className} `}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
}
