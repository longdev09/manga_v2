import { ReactNode } from "react";

const Media = (props: {
  gradient: string;
  bg: string;
  icon: ReactNode;
  name: string;
}) => {
  return (
    <a className="border border-[#ffffff1a] cursor-pointer py-2 px-3 relative inset-0 duration-500 rounded-lg group">
      <div
        className={`rounded-lg absolute inset-0 opacity-20  transition-opacity duration-500
                      bg-gradient-to-r ${props.gradient}`}
      ></div>
      <div className="absolute rounded-lg inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
        ></div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <span>{props.icon}</span>
        <span className={`text-white font-bold text-[12px] hidden sm:block`}>
          {props.name}
        </span>
      </div>
    </a>
  );
};

export default Media;
