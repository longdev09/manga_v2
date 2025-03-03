import { ReactNode } from "react";

const Rating = (props: { icon: ReactNode; rating: string }) => {
  return (
    <div className="flex flex-row gap-2 items-center  font-bold text-sm ">
      <span className="text-[var(--color-text-sub)]">{props.icon}</span>
      <span className="mt-[3px] text-white">{props.rating}</span>
    </div>
  );
};

export default Rating;
