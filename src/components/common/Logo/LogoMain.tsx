import logo from "../../../assets/Logo-removebg-preview.png";

const LogoMain = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <img className="w-[80px]" src={logo} />
      <span
        className="text-4xl font-bold uppercase bg-gradient-to-r from-[#5a2e98]
       to-yellow-700 bg-clip-text text-transparent"
      >
        Manga
      </span>
    </div>
  );
};

export default LogoMain;
