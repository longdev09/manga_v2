// lấy thông tin chi tiết truyện

import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";
import { useMemo } from "react";
import { MangadexUtils } from "../../utils";

const useFetchMangaFeed = (
  options: MangadexTypes.GetMangaIdFeedRequestOptions,
  mangaId: string
) => {
  // bắt buộc phải có
  if (!options.translatedLanguage) options.translatedLanguage = ["vi", "en"];
  options.includes = [
    MangadexApi.Static.Includes.SCANLATION_GROUP,
    MangadexApi.Static.Includes.USER,
  ];
  if (!options.contentRating)
    options.contentRating = [
      MangadexApi.Static.MangaContentRating.EROTICA,
      MangadexApi.Static.MangaContentRating.PORNOGRAPHIC,
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ];
  // call api
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchMangaFeed", options, mangaId],
    queryFn: () => MangadexApi.Manga.getMangaFeed(options, mangaId),
  });

  const formatData = useMemo(() => {
    if (data?.result == "ok") {
      return data.data.map(
        (manga) =>
          MangadexUtils.extendRelationship(manga) as MangadexTypes.ExtendChapter
      );
    }
  }, [data]);
  return { data: formatData, isLoading, error };
};

export default useFetchMangaFeed;
