import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";
import { useMemo } from "react";
import { MangadexUtils } from "../../utils";

const useFetchManga = (options: MangadexTypes.GetSearchMangaRequestOptions) => {
  if (options.title) {
    options.title = encodeURIComponent(options.title);
  }
  if (!options.includes) {
    options.includes = [MangadexApi.Static.Includes.COVER_ART];
  }

  //   Gọi api
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchManga", options],
    queryFn: () => MangadexApi.Manga.getMangaList(options),
  });

  const formatData = useMemo(() => {
    if (data?.result === "ok") {
      return data.data.map(
        (manga) =>
          MangadexUtils.extendRelationship(manga) as MangadexTypes.ExtendManga
      );
    }
  }, [data]);

  // Trả về giá trị từ hook
  return { data: formatData, isLoading, error };
};

export default useFetchManga;
