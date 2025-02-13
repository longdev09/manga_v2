import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";
import useFetchManga from "../../hooks/mangadex/useFetchManga";
import { MangadexApi } from "../../api";

import { useEffect, useState } from "react";
import { Instance } from "../../core/Instance";

const text: any = `Hatamoto Ikuto, the manager of the local bookstore "BOOK FOREST", is an otaku who can't resist spending money on his favorite characters in games.
Todoroki Miran, the part-time leader, looks up to him but can't understand his obsession with spending on in-game things.
When Ikuto claims, "For me, spending money is an investment", Miran teases, "If that's the case, how about you invest in me...?"
As the two navigate a cycle of investment and returns, the distance between their hearts begins to shrink.
A unique and charming investment-themed romantic comedy!

(Source: Melonbooks, edited)`;

const tag: any = ["Ghosts", "Romance"];

function CoverDescription({ text }: { text: any }) {
  return (
    <div className="text-white">
      {text
        .split("\n")
        .map((line: any, index: any) =>
          line.trim() ? <p key={index}>{line}</p> : <br key={index} />
        )}
    </div>
  );
}

function Heading({ img }: { img: string }) {
  return (
    <div className="relative inset-0 w-full h-full  overflow-hidden rounded-xl">
      <img
        className="w-full h-[150%] object-cover absolute inset-0 "
        src={img}
      />
      <div className="absolute inset-0 bg-[#0d0d0d65] "></div>

      <div className="relative inset-0 p-5 ">
        <div className="flex flex-row gap-5">
          <img
            className="w-[250px] object-cover rounded-xl shadow-md"
            src="https://mangadex.org/covers/f349008f-0896-4ec8-bc37-56733525dfc7/e04eb3c0-1264-41f4-b7a9-850481803cbf.png.512.jpg"
          />
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-3xl font-bold">
              Cô Bạn Gái Của Tôi Là Một Gyaru
            </h2>
            {/* tag */}
            <div className="flex flex-row gap-2 items-center">
              {tag.map((item: any, index: any) => (
                <div
                  key={index}
                  className="bg-gray-500 py-[1px] px-2 rounded-md"
                >
                  <span className="uppercase text-[10px] text-white font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-40 overflow-auto">
              <CoverDescription text={text} />
            </div>

            <div className="flex mt-auto">
              <span className="text-white font-bold italic text-lg">
                Michael
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const createdAtSince = new Date(Date.now() - 30 * 24 * 3600 * 1000);
  const { data, isLoading, error } = useFetchManga({
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
      MangadexApi.Static.MangaContentRating.EROTICA,
    ],
    hasAvailableChapters: "true",
    availableTranslatedLanguage: ["vi"],
    createdAtSince: createdAtSince.toISOString().slice(0, -13) + "00:00:00",
    limit: 12,
  });
  console.log(data);

  return (
    <div className="overflow-hidden">
      <div className="container mx-auto w-full h-full flex flex-row py-[40px]">
        <div className="w-[70%] p-4 relative inset-0">
          <div className="bg-gradient-to-r from-[#ee7212] to-[#eda52e] blur-[27px] opacity-30 rounded-lg absolute inset-0"></div>
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <Heading
                img={
                  "https://mangadex.org/covers/b51c01dc-60d8-4113-ab13-05f1406a4950/1c49b24a-e71c-40d7-8bac-db80b8334337.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Heading
                img={
                  "https://mangadex.org/covers/1c27e4f4-3968-45b3-a92d-aec8065569d8/b2d902bb-5934-4f5d-b5ee-caf6195fb666.jpg"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
