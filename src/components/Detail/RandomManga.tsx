import { useEffect, useMemo } from "react";
import { MangadexApi } from "../../api";
import { useFetchManga } from "../../hooks/mangadex";
import { MangadexUtils } from "../../utils";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { updateStatistics } from "../../redux/slice/mangaSlice";
import { Link } from "react-router-dom";
import { Config } from "../../routes/config";

const MangaRandomManga = () => {
  const randomOffset = useMemo(() => Math.floor(Math.random() * 5000), []);
  const dispatch = useAppDispatch();
  const { statistics } = useAppSelector((state) => state.mangaSlice);
  const {
    data: mangaRandom,
    isLoading,
    error,
  } = useFetchManga({
    includes: [
      MangadexApi.Static.Includes.COVER_ART,
      MangadexApi.Static.Includes.ARTIST,
      MangadexApi.Static.Includes.AUTHOR,
    ],
    offset: randomOffset,
    limit: 10,
  });

  useEffect(() => {
    if (mangaRandom && mangaRandom?.length > 0) {
      dispatch(updateStatistics({ manga: mangaRandom.map((m) => m.id) }));
    }
  }, [mangaRandom]);
  return (
    <div className="flex flex-col gap-2">
      {mangaRandom &&
        mangaRandom.map((item, index) => {
          const title = MangadexUtils.getTitle(item);
          const img = MangadexUtils.getCoverImageAvata(item);
          const rating = MangadexUtils.getRating(
            statistics[item.id]?.rating.bayesian
          );
          const author = MangadexUtils.getAuthor(item);
          return (
            <Link
              to={Config.Routes.detail(item.id)}
              key={index}
              className="bg-[var(--bg-item)] hover:bg-[var(--bg-item-hover)] cursor-pointer  p-3.5 flex flex-row gap-2.5 rounded-md"
            >
              <div className="flex-none">
                <div className="w-[60px] aspect-[2/3] overflow-hidden rounded-md">
                  <img className="w-full h-full object-cover" src={img} />
                </div>
              </div>

              <div className=" flex flex-col gap-2">
                <span className="text-white group-hover:text-[var(--color-text-main)]  font-semibold line-clamp-1">
                  {title}
                </span>
                <div className="flex flex-row text-[var(--color-text-main)] items-center gap-1">
                  <MdOutlineStarPurple500 />
                  <span className="mt-1">{rating}</span>
                </div>
                <div className=" text-[var(--color-text-item)] italic text-[12px]">
                  <span>{author}</span>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default MangaRandomManga;
