import { MangadexTypes } from "../../types";
const Heading = (props: {
  id: string;
  title: string;
  imgBg: string;
  imgAvata: string;
  tag: MangadexTypes.MangaTag[];
  description: string;
  author: string;
  type: string;
}) => {
  return (
    <div className=" group cursor-pointer w-full bg-[var(--bg-item)] hover:bg-[var(--bg-item-hover)] inset-0 rounded-lg  overflow-hidden border border-[var(--border-item)]">
      <div className="relative inset-0 left-4 gap-4 flex flex-row w-full opacity-80 group-hover:opacity-100  duration-300">
        <div className="absolute w-2 h-full left-[-19px] bg-[var(--bg-btn)] "></div>
        <div className="flex flex-row w-[70%] py-3 pr-3">
          <div className="flex flex-col justify-between">
            <div className="flex gap-3 flex-col">
              <span className="text-gray-400 text-base">{props.type}</span>
              <h2 className=" text-xl font-semibold line-clamp-2 text-white group-hover:text-[var(--color-text-main)] duration-300">
                {props.title}
              </h2>
            </div>
            <div className=" flex flex-col gap-3">
              <p className="text-gray-400 line-clamp-1 w-[300px]">
                {props.description}
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                {props.tag.slice(0, 3).map((item, index) => (
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
              <span className="text-white font-bold italic text-lg mt-1">
                {props.author}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className=" w-[150px] sm:w-[200px]">
            <div className="relative right-[20px] inset-0  pb-[130%] rotate-[14deg] duration-300 group-hover:rotate-0 scale-150 ">
              <img
                className="absolute inset-0 h-full w-full "
                src={props.imgAvata}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
