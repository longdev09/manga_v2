import { Instance } from "../../core/Instance";
import { MangadexTypes } from "../../types";
//lấy danh sách manga

// Lấy danh sách manga với kiểu trả về chính xác
export const getMangaList = (
  params: Record<string, any>
): Promise<MangadexTypes.MangaResponse> => {
  const path = "/manga";
  return Instance.requestApiMangaDex(path, {
    params,
  });
};
