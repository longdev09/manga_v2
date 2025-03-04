import { Instance } from "../../core/Instance";
import { MangadexTypes } from "../../types";
//lấy danh sách manga

// Lấy danh sách manga với kiểu trả về chính xác
export const getChapterList = (
  query: MangadexTypes.GetChapterRequestOptions
): Promise<MangadexTypes.GetChapterResponse> => {
  const path = "/chapter";
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};

export const getChapterId = (
  query: MangadexTypes.GetChapterIdRequestOption,
  chapterId: string
): Promise<MangadexTypes.GetChapterIdResponse> => {
  const path = `chapter/${chapterId}`;
  return Instance.requestApiMangaDex(path, {
    params: query,
  });
};
