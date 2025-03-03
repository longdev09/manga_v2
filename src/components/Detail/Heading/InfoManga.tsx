import { TbBrandPushbullet } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { IoMdWifi } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

const ListItem = [
  {
    icon: <TbBrandPushbullet />,
    name: "Tên khác",
    key: "nameOther",
  },
  {
    icon: <FaUser />,
    name: "Tác giả",
    key: "author",
  },
  {
    icon: <IoMdWifi />,
    name: "Tình trạng",
    key: "status",
  },
  {
    icon: <MdLanguage />,
    name: "Ngôn ngữ gốc",
    key: "language",
  },
];

const InfoManga = ({
  info,
}: {
  info: { [key: string]: string | null | undefined };
}) => {
  return (
    <ul className="flex flex-col gap-2 w-[30%]">
      {ListItem.map((item, index) => (
        <li key={index} className="flex flex-row ">
          <div className="flex flex-row gap-2 items-center font-semibold text-[var(--color-text-item)] text-[13px] w-[140px]">
            <span>{item.icon}</span>
            <span className="mt-[1px]">{item.name}</span>
          </div>
          <span className="text-[13px] text-white font-semibold">
            {item.key ? info[item.key] || "Chưa có dữ liệu" : ""}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default InfoManga;
