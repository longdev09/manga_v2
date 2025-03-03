import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
// @ts-ignore
import "swiper/css/scrollbar";

import { useFetchManga } from "../../hooks/mangadex";
import { MangadexApi } from "../../api";
import { TitleContent } from "../common/Title";
import { FaFire } from "react-icons/fa6";
import { CardVertical } from "../common/Card";
import { DateUtils, MangadexUtils } from "../../utils";

const Recommend = () => {
  const createdAtSince = new Date(Date.now() - 30 * 24 * 3600 * 1000);
  const { data: mangaRecommend } = useFetchManga({
    includes: [
      MangadexApi.Static.Includes.COVER_ART,
      MangadexApi.Static.Includes.ARTIST,
      MangadexApi.Static.Includes.AUTHOR,
    ],
    order: {
      followedCount: MangadexApi.Static.Order.DESC,
    },
    contentRating: [
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
      MangadexApi.Static.MangaContentRating.PORNOGRAPHIC,
      MangadexApi.Static.MangaContentRating.EROTICA,
    ],
    // can sua lai
    // availableTranslatedLanguage: MangadexApi.Static.,
    // originalLanguage: originLanguages,
    createdAtSince: createdAtSince.toISOString().slice(0, -13) + "00:00:00", //vd API chỉ trả về những manga được tạo từ ngày hiện tại trở
    limit: 12,
  });

  return (
    <div className="mt-14">
      <TitleContent icon={<FaFire />} text={"Truyện đề xuất"} />
      <div>
        <Swiper
          modules={[Scrollbar, Autoplay]}
          spaceBetween={13}
          slidesPerView={7}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {mangaRecommend?.map((item, index) => {
            const title = MangadexUtils.getTitle(item);
            const imgAvata = MangadexUtils.getCoverImageAvata(item);
            const author = MangadexUtils.getAuthor(item);
            const data = DateUtils.formatDate(item.attributes.updatedAt);
            return (
              <SwiperSlide key={index}>
                <CardVertical
                  title={title}
                  imgAvata={imgAvata}
                  author={author}
                  date={data}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Recommend;
