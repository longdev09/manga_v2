import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";
import { useMemo } from "react";
import { MangadexUtils } from "../../utils";

const chaptersPerPage = 26;

const useFetchChapters = (
  mangaId: string,
  page: number,
  options: MangadexTypes.GetMangaIdFeedRequestOptions
) => {
  (options.includes = [
    MangadexApi.Static.Includes.SCANLATION_GROUP,
    MangadexApi.Static.Includes.USER,
  ]),
    (options.contentRating = [
      MangadexApi.Static.MangaContentRating.EROTICA,
      MangadexApi.Static.MangaContentRating.PORNOGRAPHIC,
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ]),
    (options.translatedLanguage = ["vi", "en"]),
    (options.limit = chaptersPerPage),
    (options.offset = (page - 1) * chaptersPerPage);

  const { data, isLoading, error } = useQuery({
    queryKey: ["chapterList", mangaId, page, options],
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
  return { total: data?.total || 0, data: formatData, isLoading, error };
};

export default useFetchChapters;
