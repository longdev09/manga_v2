import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { Nav, SearchManga } from "../../../components/Header";
import { LogoMain } from "../../../components/common/Logo";

const listMenu = ["Home", "Genres", "New", "Updated", "Completed"];

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isShowSubMenu, setIsShowSubMenu] = useState<boolean>(false);

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleShowSubMenu = () => {
    setIsShowSubMenu(!isShowSubMenu);
  };

  return (
    <div className="bg-[var(--bg-item)]">
      <div className="container py-1">
        <div className="flex flex-row gap-2.5 items-center">
          <LogoMain widthImg={55} sizeText={20} />
          <Nav />
          <SearchManga />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="fixed z-50">
  //     <div className="2xl:container 2xl:mx-auto h-[60px]">
  //       <div className="flex items-center px-4">
  //         {/* sub item */}
  //         <div className="block xl:hidden">
  //           <FaBars
  //             onClick={handleShowMenu}
  //             className="select-none text-[color:var(--sub-text)] transition duration-300 hover:text-white mr-5 cursor-pointer text-xl relative"
  //           />
  //           <ul
  //             className={`absolute bg-[#182335] text-[#8f96a0] z-20 py-1 rounded-md transition-all duration-300 ease-in-out transform ${
  //               isShowMenu ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
  //             } origin-top`}
  //           >
  //             {listMenu.map((item, index) => (
  //               <li className="block cursor-pointer select-none" key={index}>
  //                 {item === "Genres" ? (
  //                   <>
  //                     <div
  //                       onClick={handleShowSubMenu}
  //                       className="block px-3 py-2 text-sm group hover:bg-[#141d2c] transition duration-300 hover:text-[#3c8bc6]"
  //                     >
  //                       <FaChevronRight className="text-xs mr-3 transition duration-300 group-hover:translate-x-1" />
  //                       {item}
  //                     </div>
  //                     <ul
  //                       className={`p-4 grid grid-cols-3 gap-2 ${
  //                         isShowSubMenu ? "block" : "hidden"
  //                       }`}
  //                     >
  //                       {/* Nếu có danh sách genres, thêm route hợp lệ */}
  //                       {/* {genres?.map((item, index) => (
  //                         <li key={index} className="text-sm select-none">
  //                           <Link to={`/genre/${item.name}`} className="transition duration-300 hover:text-white">
  //                             {item.name}
  //                           </Link>
  //                         </li>
  //                       ))} */}
  //                     </ul>
  //                   </>
  //                 ) : (
  //                   <Link
  //                     to={`/${item.toLowerCase()}`}
  //                     className="block px-3 py-2 text-sm group hover:bg-[#141d2c] transition duration-300 hover:text-[#3c8bc6]"
  //                   >
  //                     <FaChevronRight className="text-xs mr-3 transition duration-300 group-hover:translate-x-1" />
  //                     {item}
  //                   </Link>
  //                 )}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>

  //         {/* <Logo /> */}
  //         <ul className="hidden xl:flex items-center text-sm p-1 text-[#c6cacf] ml-3">
  //           {listMenu.map((item, index) => (
  //             <li key={index} className="px-4 py-1 hover:text-white">
  //               <Link to={`/${item.toLowerCase()}`}>{item}</Link>
  //             </li>
  //           ))}
  //         </ul>

  //         {/*  search */}
  //         {/* <SearchComics /> */}
  //       </div>
  //     </div>
  //   </div>
  // );
}
