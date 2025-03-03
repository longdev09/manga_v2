import { MdOutlineStarPurple500 } from "react-icons/md";
import { MangadexApi } from "../../api";
import useFetchManga from "../../hooks/mangadex/useFetchManga";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { MangadexUtils } from "../../utils";
import ContentRank from "../common/ContentRank";
import { useEffect } from "react";
import { updateStatistics, addMangas } from "../../redux/slice/mangaSlice";

const TopRankManga = () => {
  const { statistics } = useAppSelector((state) => state.mangaSlice);
  const dispatch = useAppDispatch();

  const { data: mangaListTop } = useFetchManga({
    includes: [
      MangadexApi.Static.Includes.COVER_ART,
      MangadexApi.Static.Includes.AUTHOR,
    ],
    order: {
      followedCount: MangadexApi.Static.Order.DESC,
    },
    contentRating: [
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ],
    hasAvailableChapters: "true",
    availableTranslatedLanguage: ["vi"],

    limit: 9,
  });

    useEffect(() => {
      if (mangaListTop && mangaListTop?.length > 0) {
        dispatch(updateStatistics({ manga: mangaListTop.map((m) => m.id) }));
      }
    }, [mangaListTop]);

  useEffect(() => {
    if (mangaListTop && mangaListTop?.length > 0) {
      dispatch(addMangas(mangaListTop));
    }
  }, [mangaListTop]);

  return (
    <div className="flex flex-col gap-4 ">
      {mangaListTop?.map((item, index) => {
        const title = MangadexUtils.getTitle(item);
        const author = MangadexUtils.getAuthor(item);
        const imgBg = MangadexUtils.getCoverImageBg(item);
        const rating = MangadexUtils.getRating(
          statistics[item.id]?.rating.bayesian
        );
        return (
          <ContentRank
            id={item.id}
            icon={<MdOutlineStarPurple500 />}
            rank={index + 1}
            title={title}
            author={author}
            imgBg={imgBg}
            key={index}
            num={rating}
          />
        );
      })}
    </div>
  );
};
export default TopRankManga;
