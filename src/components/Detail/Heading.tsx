import { useState } from "react";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { FaBookmark, FaHeart } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import Button from "../../components/common/Button";
import { Rating } from "../../components/common/Rating";
import { MangadexTypes } from "../../types";
const Heading = (props: {
  tag: MangadexTypes.MangaTag[];
  title: string;
  avata: string;
  decribe: string;
  rating: string;
  fl: string;
  cmt: string;
}) => {
  const [showDescribe, setShowDescribe] = useState<boolean>(false);

  return (
    <div className="flex flex-row gap-5 w-[70%]">
      <div className="overflow-hidden flex-none w-[250px]">
        <div className="relative pb-[190%]">
          <img
            className="absolute inset rounded-lg object-cover"
            src={props.avata}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row gap-2 text-[var(--color-text-main)] text-sm font-semibold cursor-pointer">
          <a className="hover:text-[var(--color-text-sub)] hover:underline">
            Trang chủ
          </a>
          <span>/</span>
          <a className="hover:text-[var(--color-text-sub)] hover:underline">
            Truyện tranh
          </a>
        </div>
        <div className="flex flex-col gap-2.5">
          {/* title */}
          <h2 className="text-3xl font-bold text-white">{props.title}</h2>
          {/* tag */}

          <div className="flex flex-wrap gap-2 items-center">
            {props.tag.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--bg-btn)] py-[1px] px-2 rounded-md"
              >
                <span className="uppercase text-[10px] text-white font-semibold">
                  {item.attributes.name["en"]}
                </span>
              </div>
            ))}
          </div>
          {/* describe */}
          <div className="font-semibold">
            <p
              className={`text-[var(--color-text-item)] text-[13px]  leading-6  ${
                showDescribe ? "line-clamp-4" : "line-clamp-2"
              }`}
            >
              {props.decribe}
            </p>
            <span
              onClick={() => setShowDescribe(!showDescribe)}
              className="border-b-2 border-[var(--color-text-main)] text-sm py-1 text-[var(--color-text-item)] hover:text-white cursor-pointer duration-300"
            >
              Đọc thêm +
            </span>
          </div>
        </div>
        {/* btn */}
        <div className="flex flex-row items-center gap-2 ">
          <Button
            variant="primary"
            icon={<FaLocationArrow />}
            name="Đọc ngay"
          />
          <Button variant="secondary" icon={<FaBookmark />} name="Thư viện" />
        </div>

        <div className="flex flex-row gap-3">
          <Rating icon={<FaStar />} rating={props.rating} />
          <Rating icon={<FaHeart />} rating={props.fl} />
          <Rating icon={<AiFillMessage />} rating={props.cmt} />
        </div>
      </div>
    </div>
  );
};

export default Heading;
