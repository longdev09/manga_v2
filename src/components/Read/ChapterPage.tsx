import { useFetchAtHome } from "../../hooks/mangadex";
import { useAppSelector } from "../../redux/store";

const ChapterPage = ({ chapterId }: { chapterId: string }) => {
  const { menu } = useAppSelector((state) => state.control);
  const { data, isLoading, error } = useFetchAtHome(chapterId);

  return (
    <div
      className={`overflow-auto top-[67px] relative bg-[#0e0e0e] z-10 ${
        menu ? "flex-auto" : "flex-1"
      }`}
      style={{
        borderRight: "1px solid #2e2c2c",
        height: "100vh",
      }}
    >
      <div className="absolute w-full z-40">sdsd</div>
      <div className="mx-auto  items-center gap-1 px-5  w-[1000px]">
        {data?.map((item) => (
          <img className="w-full h-full object-cover" src={item} />
        ))}
      </div>
    </div>
  );
};

export default ChapterPage;
