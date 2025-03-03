import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heading, InfoManga, RandomManga } from "../../components/Detail";
import ListChapter from "../../components/Detail/ListChapter";
import { useFetchMangaId } from "../../hooks/mangadex";
import { addMangas, updateStatistics } from "../../redux/slice/mangaSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { MangadexTypes } from "../../types";
import { MangadexUtils } from "../../utils";
import { TitleContent } from "../../components/common/Title";
import { CiCircleList } from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
export default function Detail() {
  const { statistics } = useAppSelector((state) => state.mangaSlice);
  const { id } = useParams<{ id: string }>(); // Định nghĩa rõ ràng kiểu `id`
  const mangaId = id ?? ""; // Đảm bảo không bị undefined
  const { data } = useFetchMangaId(mangaId);
  const title = MangadexUtils.getTitle(data);
  const avata = MangadexUtils.getCoverImageAvata(data);
  const bg = MangadexUtils.getCoverImageBg(data);
  const decribe = MangadexUtils.getDescription(data as MangadexTypes.Manga);
  const author = MangadexUtils.getAuthor(data);
  const status = MangadexUtils.getStatus(data?.attributes.status);
  const rating = MangadexUtils.getRating(statistics[mangaId]?.rating.bayesian);
  const fl = MangadexUtils.getFollow(statistics[mangaId]?.follows);
  const cmt = MangadexUtils.getCmt(statistics[mangaId]?.comments.repliesCount);
  const language = MangadexUtils.getTranslateISOLanguage(
    data?.attributes.originalLanguage
  );
  const nameOther = MangadexUtils.getMangaAltTitles(data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(addMangas([data]));
  }, [data]);

  useEffect(() => {
    if (data) dispatch(updateStatistics({ manga: [data?.id] }));
  }, [data]);

  return (
    <div className="relative">
      <div className="relative inset-0">
        {/* image */}
        <div className="overflow-hidden w-full">
          <div className="relative z-0 pb-[600px] ">
            <img
              className=" absolute w-full h-full object-cover object-[0px_30%]"
              src={bg}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0eda] to-[#0e0e0e]"></div>
        <div className="absolute inset-0 container pt-[60px]">
          <div className="flex flex-row w-full gap-9">
            <Heading
              cmt={cmt}
              fl={fl}
              rating={rating}
              tag={data?.attributes.tags || []}
              title={title}
              avata={avata}
              decribe={decribe}
            />
            {/* left */}

            <InfoManga
              info={{
                author: author,
                status: status,
                language: language,
                nameOther: nameOther[0],
              }}
            />
          </div>
        </div>
      </div>

      {/* chapter */}
      <div className="container pt-[40px] pb-[200px]">
        <div className="relative bottom-[100px]  overflow-hidden ">
          <div className="flex flex-row gap-9">
            <div className="w-[70%]">
              <TitleContent text="Danh sách chương" icon={<CiCircleList />} />
              <ListChapter mangId={mangaId} />
            </div>
            <div className="w-[30%]">
              <TitleContent
                text="Bạn cũng có thể thích"
                icon={<AiFillLike />}
              />
              <RandomManga />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
