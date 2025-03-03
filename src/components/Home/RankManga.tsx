import { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { IoMdTrophy } from "react-icons/io";
import { Tab, TabPane } from "../common/MenuTab";
import TitleContent from "../common/Title/TitleContent";
import TopRankManga from "./TopRankManga";

const listTab = [
  { icon: <FaStar />, text: "Top" },
  { icon: <FaHeart />, text: "Yêu thích" },
  { icon: <FaHeart />, text: "Yêu thích" },
];

const RankManga = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="w-[25%]">
      <TitleContent icon={<IoMdTrophy />} text={"Bảng xếp hạng tháng"} />
      <Tab listTab={listTab} onClick={setValue} value={value} />
      <TabPane value={value} index={0}>
        <TopRankManga />
      </TabPane>
    </div>
  );
};

export default RankManga;
