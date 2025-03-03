import imageUrl from "../../../assets/bg-footer.jpg";
import { LogoMain } from "../../../components/common/Logo";

export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`bg-cover bg-center px-6  md:px-12  py-[40px]  md:py-[80px] w-full`}
    >
      <div className="flex flex-col gap-4">
        <div className="hidden sm:flex flex-col">
          <div className=" flex-row items-center gap-3">
            <h1 className="text-white text-2xl font-bold uppercase">
              A - Z list
            </h1>
            <span className="text-[var(--color-text-item)]">
              Tìm kiếm thứ tự anime theo tên bảng chữ cái từ A đến Z.
            </span>
          </div>
          <ul className=" flex flex-wrap gap-2">
            <li className="bg-[#252424] p-2 hover:bg-[var(--bg-btn)] group cursor-pointer rounded-sm ">
              <span className="text-[var(--color-text-item)] text-lg font-semibold group-hover:text-white duration-300">
                All
              </span>
            </li>
            <li className="bg-[#252424] p-2 hover:bg-[var(--bg-btn)] cursor-pointer rounded-sm font-semibold group-hover:text-white duration-300 ">
              <span className="text-[var(--color-text-item)] text-lg">0-9</span>
            </li>
            {[...Array(26)].map((_, i) => (
              <li className="bg-[#252424] p-2 hover:bg-[var(--bg-btn)] cursor-pointer rounded-sm font-semibold group-hover:text-white duration-300 ">
                <span className="text-[var(--color-text-item)] text-lg">
                  {String.fromCharCode(65 + i)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <div className="mt-2">
            <LogoMain />
          </div>
          <div className="flex flex-col text-[#555353] gap-2 text-sm items-center sm:items-start">
            <span>Copyright © 2025 Longdev</span>
            <span>
              The website is built for learning purposes, non-commercial
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
