import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Config } from "../../routes/config";

const textRank = [
  { number: 1, color: "#4a90e2" },
  { number: 2, color: "#50e3c2" },
  { number: 3, color: "#e35050" },
];

const getColor = (num: number) => {
  const rank = textRank.find((item) => item.number === num);
  return rank ? rank.color : "#ffffff"; // Màu trắng cho các số khác
};

const ContentRank = (props: {
  title: string;
  imgBg: string;
  icon: ReactNode;
  num: string;
  author: string;
  rank: number;
  id: string;
}) => {
  return (
    <Link
      to={Config.Routes.detail(props.id)}
      className="group cursor-pointer border border-[var(--border-item)] flex flex-row gap-4 items-center bg-[var(--bg-item)] group hover:bg-[var(--bg-item-hover)] p-3 rounded-lg"
    >
      <span
        className={`opacity-40 font-extrabold  text-transparent text-6xl`}
        style={{ WebkitTextStroke: `1px ${getColor(props.rank)}` }}
      >
        {props.rank}
      </span>
      <div className="w-[60px] aspect-[2/3] overflow-hidden rounded-md">
        <img className="w-full h-full object-cover" src={props.imgBg} />
      </div>
      <div className=" flex flex-col gap-2">
        <span className="text-white group-hover:text-[var(--color-text-main)]  font-semibold line-clamp-1">
          {props.title}
        </span>
        <div className="flex flex-row text-[var(--color-text-main)] items-center gap-1">
          <span>{props.icon}</span>
          <span className="mt-1">{props.num}</span>
        </div>
        <div className=" text-[var(--color-text-item)] italic text-[12px]">
          <span>{props.author}</span>
        </div>
      </div>
    </Link>
  );
};

export default ContentRank;
