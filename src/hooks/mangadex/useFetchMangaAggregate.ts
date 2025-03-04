import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";

const useFetchMangaAggregate = (
  option: MangadexTypes.GetMangaAggregateRequestOptions,
  mangaId: string
) => {
  if (!option)
    return { data: null, isLoading: false, error: "No chapter ID provided" };

  const { data, isLoading, error } = useQuery({
    queryKey: ["mangaAggregate", mangaId],
    queryFn: () => MangadexApi.Manga.getMangaAggregate(option, mangaId),
  });

  console.log(data);
};

export default useFetchMangaAggregate;
