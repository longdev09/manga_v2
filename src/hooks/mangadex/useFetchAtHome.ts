import { useQuery } from "@tanstack/react-query";
import { MangadexApi } from "../../api";
import { useMemo } from "react";
import { MangadexTypes } from "../../types";

const useFetchAtHome = (chapterId: string) => {
  if (!chapterId) {
    return { data: null, isLoading: false, error: "No chapter ID provided" };
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchAtHome", chapterId],
    queryFn: () => MangadexApi.AtHome.getAtHomeChapterId(chapterId),
  });

  const formatData = useMemo(() => {
    if (data?.result == "ok") {
      return data.chapter.data.map(
        (item) => `${data.baseUrl}/data/${data.chapter.hash}/${item}`
      );
    }
  }, [data]);

  return { data: formatData, isLoading, error };
};

export default useFetchAtHome;
