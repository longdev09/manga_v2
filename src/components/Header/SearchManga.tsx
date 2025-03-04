import { RxMagnifyingGlass } from "react-icons/rx";

const   SearchManga = () => {
  return (
    <div className="flex-1 mx-5">
      <div className="flex text-[color:var(--sub-text)] items-center justify-end md:hidden">
        <RxMagnifyingGlass className="cursor-pointer text-xl" />
      </div>
      <div className="hidden md:flex items-center text-[color:var(--sub-text)]  px-2 h-9 rounded-xl bg-[#141414]">
        <RxMagnifyingGlass className="cursor-pointer" />
        {/* <Input
          placeholder={"Tìm bất cứ truyện gì ..."}
          className="no-focus bg-[#182335] ml-[15px] text-sm "
        /> */}
      </div>
    </div>
  );
};
export default SearchManga;
