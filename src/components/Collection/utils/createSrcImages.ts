import config from "../../../config.json";
import Endpoints from "../../../api/endpoints";
import { ICollection } from "../../../types/collection";

export const createSrcImages = (collection: ICollection): string[] => {
  return collection.body
    .slice(0, 3)
    .map((e) => config.server + Endpoints.IMAGE.IMG_ID + e.id);
};
