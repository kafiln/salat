import { ReactElement } from "react";

const DefaultLayout = ({
  children,
  header,
  footer,
}: {
  children: any;
  header: ReactElement;
  footer: ReactElement;
}) => {
  return (
    <div className="flex flex-col min-h-screen justify-between gap-4">
      {header}
      <div className="py-2 flex-1">{children}</div>
      {footer}
    </div>
  );
};

export default DefaultLayout;
