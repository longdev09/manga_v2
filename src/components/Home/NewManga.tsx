import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import { MangadexApi } from "../../api";
import { useFetchManga } from "../../hooks/mangadex";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";
// @ts-ignore

import { MangadexUtils } from "../../utils";
import Heading from "./Heading";

const NewManga = () => {
  const { data: mangaList } = useFetchManga({
    includes: [
      MangadexApi.Static.Includes.COVER_ART,
      MangadexApi.Static.Includes.ARTIST,
      MangadexApi.Static.Includes.AUTHOR,
    ],
    order: {
      createdAt: MangadexApi.Static.Order.DESC,
    },
    contentRating: [
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ],
    hasAvailableChapters: "true",
    availableTranslatedLanguage: ["vi"],
    limit: 12,
  });

  return (
    <>
      <Swiper
        modules={[Scrollbar, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          970: { slidesPerView: 2 }, // Màn hình vừa: 2 slide
          1400: { slidesPerView: 3 }, // Màn hình lớn: 3 slide
        }}
      >
        {mangaList &&
          mangaList.map((item, index) => {
            const title = MangadexUtils.getTitle(item);
            const description = MangadexUtils.getDescription(item);
            const imgageAvata = MangadexUtils.getCoverImageAvata(item);
            const imgageBg = MangadexUtils.getCoverImageBg(item);
            return (
              <SwiperSlide key={index}>
                <Heading
                  id={item.id}
                  title={title}
                  tag={item.attributes.tags}
                  description={description}
                  author={item.author?.attributes?.name ?? ""}
                  imgAvata={imgageAvata}
                  imgBg={imgageBg}
                  key={index}
                  type={item.type}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default NewManga;
