import config from "../../../config.json";
import Endpoints from "../../../store/api/endpoints";
import { Collection } from "../../../types/Types";

export const createSrcImages = (collection: Collection): string[] => {
  return collection.body
    .slice(0, 3)
    .map((e) => config.server + Endpoints.IMAGE.IMG_ID + e.id);
};
