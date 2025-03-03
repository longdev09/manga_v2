const Line = (props: { in: number; length: number }) => {
  return props.in == props.length - 1 ? (
    <div className="flex">
      <div className="bg-[#4f4f4f] w-[4px] h-[12px]"></div>
      <div className="bg-[#4f4f4f] h-[4px] w-[10px] mt-[8px]"></div>
    </div>
  ) : (
    <div className="flex">
      <div className="bg-[#4f4f4f] w-[4px] h-[12px]"></div>
      <div className="bg-[#4f4f4f] w-[4px] h-full ml-[-4px]"></div>
      <div className="bg-[#4f4f4f] h-[4px] w-[10px] mt-[8px]"></div>
    </div>
  );
};

export default Line;
