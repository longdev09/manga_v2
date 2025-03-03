import { useEffect } from "react";
import { MdOutlineTimer } from "react-icons/md";
import { TitleContent } from "../../components/common/Title";
import { useFecthChapterUpdate } from "../../hooks/mangadex";
import { updateManga, updateStatistics } from "../../redux/slice/mangaSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { MangadexTypes } from "../../types";
import { MangadexUtils } from "../../utils";
import { CartHorizontal } from "../common/Card";

const UpdateManga = () => {
  const dispatch = useAppDispatch(); // Đảm bảo dispatch có đúng kiểu

  const { mangas, statistics } = useAppSelector((state) => state.mangaSlice);

  const { data: chapterListManga } = useFecthChapterUpdate();

  const updates: Record<string, MangadexTypes.ExtendChapter[]> = {};

  if (chapterListManga) {
    for (const ch of chapterListManga) {
      const mangaId = ch.manga?.id;
      if (!mangaId) continue;
      // Nếu chưa có mảng con, khởi tạo
      if (!updates[mangaId]) {
        updates[mangaId] = [];
      }
      // Thêm chapter vào mảng
      updates[mangaId].push(ch);
    }
  }

  useEffect(() => {
    if (chapterListManga && chapterListManga?.length > 0) {
      dispatch(
        updateManga({
          ids: chapterListManga
            .filter((c) => c.manga && c.manga.id)
            .map((c) => c.manga!.id),
        })
      );
    }
  }, [chapterListManga]);

  useEffect(() => {
    if (chapterListManga && chapterListManga?.length > 0) {
      dispatch(
        updateStatistics({
          manga: chapterListManga
            .filter((c) => c.manga && c.manga.id)
            .map((c) => c.manga!.id),
        })
      );
    }
  }, [chapterListManga]);

  return (
    <div className="w-[75%]">
      <TitleContent icon={<MdOutlineTimer />} text={"Truyện mới cập nhật"} />
      <div className="mt-6 grid grid-cols-2 gap-4">
        {Object.entries(updates).map(([mangaId]) => {
          const name = MangadexUtils.getTitle(mangas[mangaId]);
          const imgAvata = MangadexUtils.getCoverImageAvata(mangas[mangaId]);
          const rating = MangadexUtils.getRating(
            statistics[mangaId]?.rating.bayesian
          );
          const follow = MangadexUtils.getFollow(statistics[mangaId]?.follows);
          return (
            <CartHorizontal
              imgAvata={imgAvata}
              name={name}
              id={mangaId}
              rating={rating}
              follow={follow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpdateManga;
