export default ({ children }: Readonly<React.PropsWithChildren>) => {
  return (
    <div className="h-dvh bg-white p-[8px] grid grid-cols-2">
      <div className="mx-auto w-1/2">{children}</div>
      <div className="bg-secondary-900 rounded-[8px]">
        Picture
      </div>
    </div>
  );
};
