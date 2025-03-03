import { ReactNode } from "react";

const TitleContent = (props: {
  icon: ReactNode;
  text: string;
  className?: string;
}) => {
  return (
    <div className={`flex flex-row gap-2 items-center mb-7 ${props.className}`}>
      <span className="text-3xl text-[var(--color-text-sub)]">
        {props.icon}
      </span>
      <span className="text-2xl font-bold text-[var(--color-text-title)]">
        {props.text}
      </span>
    </div>
  );
};

export default TitleContent;
