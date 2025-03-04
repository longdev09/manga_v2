import { setMenu } from "../../redux/slice/controlSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Button from "../common/Button";
import { LogoMoblie } from "../common/Logo";
import { Nav, SearchManga } from "../Header";
import { MdDashboard } from "react-icons/md";
const Heading = () => {
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((state) => state.control);

  const handleMenu = () => {
    dispatch(setMenu());
  };


  return (
    <div
      className={`${
        menu ? "right-[var(--width-siderbar)]" : "right-0"
      } fixed z-50 left-0 bg-[var(--bg-item)] px-6 py-1 duration-300`}
      style={{ borderBottom: "1px solid #2e2c2c" }}
    >
      <div className="flex flex-row items-center gap-5">
        <LogoMoblie />
        <Nav />
        <SearchManga />
        <div className="flex flex-row gap-4">
          <div className="flex flex-row text-[var(--color-text-item)] text-sm gap-2">
            <span>Chương</span>
            <span>1 / 200</span>
          </div>
          <div className="flex flex-row text-[var(--color-text-item)] text-sm gap-2">
            <span>Trang</span>
            <span>1 / 200</span>
          </div>
        </div>

        <Button
          onClick={handleMenu}
          icon={<MdDashboard />}
          name="Menu"
          variant="primary"
          className="!py-2 !px-2.5 !rounded-lg"
        />
      </div>
    </div>
  );
};

export default Heading;
