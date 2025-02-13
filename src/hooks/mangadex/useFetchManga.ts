import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";

const useFetchManga = (options: MangadexTypes.GetSearchMangaRequestOptions) => {
  if (options.title) {
    options.title = encodeURIComponent(options.title);
  }
  if (!options.includes) {
    options.includes = [MangadexApi.Static.Includes.COVER_ART];
  }
  if (options.offset && options.offset > 10000) {
    options.offset = 10000 - (options.limit || 10);
  }

  //   Gọi api
  const { data, isLoading, error } = useQuery({
    queryKey: ["mangaList"],
    queryFn: () => MangadexApi.Manga.getMangaList(options),
  });

  

  // Trả về giá trị từ hook
  return { data, isLoading, error };
};

export default useFetchManga;
