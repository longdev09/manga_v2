import logo from "../../../assets/Logo-removebg-preview.png";

const LogoMain = ({
  widthImg = 80,
  sizeText = 36,
}: {
  widthImg?: number;
  sizeText?: number;
}) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <img style={{ width: `${widthImg}px` }} className="h-auto" src={logo} />
      <span
        style={{ fontSize: `${sizeText}px` }}
        className=" font-bold uppercase bg-gradient-to-r from-[#5a2e98]
       to-yellow-700 bg-clip-text text-transparent"
      >
        Manga
      </span>
    </div>
  );
};

export default LogoMain;
