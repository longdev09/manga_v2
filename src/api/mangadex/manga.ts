import { Instance } from "../../core/Instance";
import { MangadexTypes } from "../../types";
//lấy danh sách manga

// Lấy danh sách manga với kiểu trả về chính xác
export const getMangaList = (
  query: Record<string, any>
): Promise<MangadexTypes.GetMangaResponse> => {
  const path = "/manga";
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};

export const getManga = (
  query: MangadexTypes.GetMangaIdRequestOptions,
  mangaId: string
): Promise<MangadexTypes.GetMangaIdResponse> => {
  const path = `/manga/${mangaId}`;
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};

export const getMangaFeed = (
  query: MangadexTypes.GetMangaIdFeedRequestOptions,
  mangaId: string
): Promise<MangadexTypes.GetMangaIdFeedResponse> => {
  const path = `manga/${mangaId}/feed`;
  return Instance.requestApiMangaDex(path, { params: query });
};
