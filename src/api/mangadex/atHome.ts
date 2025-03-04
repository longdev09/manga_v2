import { Instance } from "../../core/Instance";
import { MangadexTypes } from "../../types";

export const getAtHomeChapterId = (
  chapterId: string
): Promise<MangadexTypes.GetAtHome> => {
  const path = `at-home/server/${chapterId}?forcePort443=false`;
  return Instance.requestApiMangaDex(path, {});
};
