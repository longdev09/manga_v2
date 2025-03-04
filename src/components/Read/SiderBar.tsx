import { useCallback } from "react";
import { setMenu } from "../../redux/slice/controlSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Button from "../common/Button";
import { TiArrowRightThick } from "react-icons/ti";
import { LuArrowUpDown } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineMessage,
} from "react-icons/md";
import { CiBookmark } from "react-icons/ci";

const SiderBar = () => {
  const { menu } = useAppSelector((state) => state.control);
  const dispatch = useAppDispatch();

  const handleMenu = useCallback(() => {
    dispatch(setMenu());
  }, [menu]);

  return (
    <div
      className={`${
        menu
          ? "right-0 min-w-[var(--width-siderbar)]"
          : "-right-[var(--width-siderbar)] w-0"
      } relative h-[100vh] bg-[#1a1818] duration-300`}
    >
      <div className="flex flex-col">
        {/* heading */}
        <div className="flex items-center justify-between p-4">
          <span className="line-clamp-2 text-[var(--color-text-main)] font-semibold">
            One Piece
          </span>
          <Button
            onClick={handleMenu}
            icon={<TiArrowRightThick />}
            variant="secondary"
            className="!p-2 "
          />
        </div>
        <div className="flex flex-col p-4 gap-3">
          {/* chương */}
          <div className="flex flex-row items-center gap-2">
            <Button
              className="flex-none !px-2 !text-[22px]"
              icon={<MdOutlineKeyboardArrowLeft />}
              variant="secondary"
            />
            <Button
              className="flex-1"
              variant="danger"
              name="Ch. 200000"
              icon={<LuArrowUpDown />}
            />
            <Button
              className="flex-none !px-2 !text-[22px]"
              icon={<MdOutlineKeyboardArrowRight />}
              variant="secondary"
            />
          </div>

          {/* trang */}

          <div className="flex flex-row items-center gap-2">
            <Button
              className="flex-none !px-2 !text-[22px]"
              icon={<MdOutlineKeyboardArrowLeft />}
              variant="secondary"
            />
            <Button
              className="flex-1"
              variant="danger"
              name="Tr. 200000"
              icon={<LuArrowUpDown />}
            />
            <Button
              className="flex-none !px-2 !text-[22px]"
              icon={<MdOutlineKeyboardArrowRight />}
              variant="secondary"
            />
          </div>
          {/* cmt */}

          <Button
            variant="danger"
            name="Ch. 893 Bình Luận"
            icon={<MdOutlineMessage />}
          />

          <Button
            variant="danger"
            name="Chi tiết truyện tranh"
            icon={<IoIosInformationCircleOutline />}
          />
          <Button variant="danger" name="Đánh Dấu" icon={<CiBookmark />} />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default SiderBar;
