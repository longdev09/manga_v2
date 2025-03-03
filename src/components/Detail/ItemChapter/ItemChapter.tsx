import { Icon } from "@iconify/react";
import { IoMdTime } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Config } from "../../../routes/config";
const ItemChapter = (props: {
  nameChapter: string;
  titleChapter: string;
  date: string;
  flag: string;
  nameScan: string;
  dateTime: string;
  username: string;
  roleColor: string;
  translatedLanguage: string;
  line?: ReactNode;
  id: string;
}) => {
  return (
    <li
      style={{ borderTop: "1px solid #2e2c2c" }}
      className={`px-4 py-2 bg-[var(--bg-item)] hover:bg-[var(--bg-item-hover)] flex flex-row gap-2`}
    >
      {props.line}
      <Link
        to={Config.Routes.read(props.id)}
        className="flex flex-row items-centercursor-pointer group w-full"
      >
        <div className="flex-auto flex flex-col justify-center gap-1.5">
          <div className="flex flex-row items-center gap-2 text-white font-semibold text-[13px] duration-300">
            <span title={props.translatedLanguage}>
              <Icon
                icon={`circle-flags:lang-${props.flag}`}
                className="inline-block"
                width={16}
                height={16}
              />
            </span>
            <span className="group-hover:text-[var(--color-text-main)]">
              Ch. {props.nameChapter}
              {props.titleChapter && `: ${props.titleChapter}`}
            </span>
          </div>
          <div className="flex flex-row gap-2 text-white text-[12px] items-center">
            <span>
              <LuUsers />
            </span>
            <span className="ml-1">{props.nameScan}</span>
          </div>
        </div>
        <div className="flex justify-center flex-row gap-6 text-[var(--color-text-item)] group-hover:text-white/80 duration-300">
          {/* time update */}
          <div className=" flex justify-center flex-col gap-1  text-[12px] w-[150px]">
            <div className="flex flex-row items-center gap-1">
              <IoMdTime />
              <span>{props.dateTime}</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <CiUser />
              <span className={`${props.roleColor}`}>{props.username}</span>
            </div>
          </div>
          {/* cmt */}
          <div className=" flex justify-center gap-1 flex-col font-semibold text-[13px]">
            <div className="flex flex-row items-center gap-1">
              <LuEye />
              <span>N/A</span>
            </div>
            <div className="flex flex-row items-center gap-1">
              <FaRegMessage />
              <span>1</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
export default ItemChapter;
