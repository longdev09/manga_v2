import { Icon } from "@iconify/react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MangadexTypes } from "../../../types";
import { DateUtils, MangadexUtils } from "../../../utils";
import Line from "../Line";
import ItemChapter from "./ItemChapter";

function ItemFlag(props: { language: string; count: any }) {
  return (
    <div className="flex gap-1">
      <Icon
        icon={`circle-flags:lang-${props.language}`}
        className="inline-block"
        width={14}
        height={14}
      />
      <span>{props.count}</span>
    </div>
  );
}

const ItemChapterGroup = ({
  chapterList,
}: {
  chapterList: MangadexTypes.ExtendChapter[];
}) => {
  const [show, setShow] = useState<boolean>(true);

  const flagCount = chapterList.reduce(
    (acc: any, chapter: MangadexTypes.ExtendChapter) => {
      const flag = chapter.attributes.translatedLanguage;
      acc[flag] = (acc[flag] || 0) + 1;
      return acc;
    },
    {}
  );

  return (
    <li
      className=" bg-[var(--bg-item)] cursor-pointer"
      onClick={() => setShow(!show)}
      style={{ borderTop: "1px solid #2e2c2c" }}
    >
      <div className="px-4 py-[9px] flex flex-row items-center text-white font-semibold text-[12px]">
        <span className="flex-auto">
          Chương {chapterList[0].attributes.chapter}
        </span>
        <div
          className={`flex-none flex  flex-row gap-3 duration-300 ${
            show ? " opacity-0" : "opacity-100"
          }`}
        >
          {Object.entries(flagCount).map(([name, count]) => (
            <ItemFlag language={name} count={count} />
          ))}
        </div>
        <div
          className={`ml-3 flex-none text-[22px] duration-300 ${
            show ? "" : "rotate-180"
          }`}
        >
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>

      {/* noi dung */}
      <ul
        className={` flex-col bg-[var(--bg-item)] duration-300 ${
          show ? "flex" : "hidden"
        }`}
      >
        {chapterList.map((item, index) => {
          return (
            <ItemChapter
              id={item.id}
              line={<Line in={index} length={chapterList.length} />}
              translatedLanguage={item.attributes.translatedLanguage}
              roleColor={MangadexUtils.getRoleColor(
                item.user.attributes.roles[0]
              )}
              titleChapter={item.attributes.title}
              nameChapter={item.attributes.chapter}
              date={DateUtils.formatDate(chapterList[0].attributes.updatedAt)}
              flag={item.attributes.translatedLanguage}
              nameScan={item.scanlation_group?.attributes?.name || "no group"}
              dateTime={DateUtils.formatDateTime(item.attributes.readableAt)}
              username={item.user.attributes.username}
            />
          );
        })}
      </ul>
    </li>
  );
};

export default ItemChapterGroup;
