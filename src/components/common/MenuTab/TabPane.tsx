import { ReactNode } from "react";

export const TabPane = ({
  children,
  value,
  index,
}: {
  children: ReactNode;
  value: number;
  index: number;
}) => {
  return (
    <div className={`mt-3.5 ${value == index ? "block" : "hidden"}`}>
      {children}
    </div>
  );
};
