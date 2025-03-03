import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { useMemo } from "react";
import { MangadexUtils } from "../../utils";
import { MangadexTypes } from "../../types";

const useFecthChapterUpdate = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["chapterUpdate"],
    queryFn: () =>
      MangadexApi.Chapter.getChapterList({
        includes: ["manga"],
        translatedLanguage: ["en"],
        contentRating: [
          MangadexApi.Static.MangaContentRating.SAFE,
          MangadexApi.Static.MangaContentRating.SUGGESTIVE,
          MangadexApi.Static.MangaContentRating.EROTICA,
          MangadexApi.Static.MangaContentRating.SUGGESTIVE,
        ],
        order: {
          readableAt: MangadexApi.Static.Order.DESC,
        },
        limit: 12,
        // offset,
        // originalLanguage: ["en", "vi"] || [],
      }),
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

export default useFecthChapterUpdate;
