import { ReactNode } from "react";

interface tab {
  icon?: ReactNode;
  text: string;
}
interface TabProps {
  onClick: (val: number) => void;
  value: number;
  listTab: tab[];
}

export const Tab = ({ onClick, value, listTab }: TabProps) => {
  return (
    <div className="bg-[var(--bg-item)] p-2  rounded-sm border border-[var(--border-item)]">
      <div className="flex flex-row gap-3 ">
        {listTab.map((item, index) => (
          <button
            onClick={() => onClick(index)}
            className={`hover:bg-[var(--bg-btn-hover)] text-sm cursor-pointer px-1 py-2 rounded-sm flex flex-row gap-2 items-center ${
              value == index ? "text-white" : "text-gray-400 "
            } w-full justify-center ${
              value == index ? "bg-[var(--bg-btn)]" : ""
            }`}
          >
            {item.icon ? <span>{item.icon}</span> : ""}
            <span className="mt-1">{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
