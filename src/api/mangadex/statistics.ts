import { MangadexTypes } from "../../types";
import { Instance } from "../../core/Instance";
export const getStatistics = (
  query: MangadexTypes.GetStatisticsRequestOptions
): Promise<MangadexTypes.GetStatisticsResponse> => {
  const path = "statistics/manga";
  return Instance.requestApiMangaDex(path, { params: query });
};
