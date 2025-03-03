import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";

import { useMemo } from "react";
import { MangadexTypes } from "../../types";
import { MangadexUtils } from "../../utils";

const useFetchMangaId = (mangaId: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mangaId", mangaId],
    queryFn: () =>
      MangadexApi.Manga.getManga(
        {
          includes: [
            MangadexApi.Static.Includes.COVER_ART,
            MangadexApi.Static.Includes.AUTHOR,
            MangadexApi.Static.Includes.ARTIST,
          ],
        },
        mangaId
      ),
  });

  const formatData = useMemo(() => {
    if (data?.result === "ok") {
      return MangadexUtils.extendRelationship(
        data.data
      ) as MangadexTypes.ExtendManga;
    }
  }, [data]);
  return { data: formatData, isLoading, error };
};

export default useFetchMangaId;
