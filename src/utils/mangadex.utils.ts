import { MangadexTypes } from "../types";

export const extendRelationship = (
  object: Record<string, any> & {
    relationships: MangadexTypes.MangaDexRelationship[];
  }
) => {
  for (const rela of object.relationships) {
    object[rela.type] = rela;
  }
  return object;
};
