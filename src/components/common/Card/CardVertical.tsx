import { MdOutlineAccessTime } from "react-icons/md";

const CartVertical = (props: {
  imgAvata: string;
  title: string;
  author: string;
  date: string;
}) => {
  return (
    <div
      className="relative inset-0 bg-[var(--bg-item)] group hover:bg-[var(--bg-item-hover)] duration-300 
     cursor-pointer overflow-hidden rounded-lg border border-[var(--border-item)]"
    >
      <div className="overflow-hidden">
        <div className="relative pb-[140%]">
          <img
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-300 rounded-sm "
            src={props.imgAvata}
          />
        </div>
      </div>
      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="text-white group-hover:text-[var(--color-text-main)] font-bold text-base line-clamp-1 duration-300 ">
          {props.title}
        </h2>
        <span className="text-white text-[12px] italic">{props.author}</span>
        <div className="flex items-center gap-2 text-[12px] text-[var(--color-text-sub)]">
          <MdOutlineAccessTime />
          <span className="mt-[2px]">{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default CartVertical;
