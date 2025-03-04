import { ItemMenu } from "../../constants/manga";

const Nav = () => {
  return (
    <ul className="flex flex-row items-center">
      {ItemMenu.map((item, index) => (
        <li className="text-white/60 duration-300 font-semibold text-sm group hover:text-[var(--color-text-main)] cursor-pointer">
          <div className="px-3 py-4 " key={index}>
            {item}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Nav;
