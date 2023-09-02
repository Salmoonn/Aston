import config from "../config.json";
import Endpoints from "../store/api/endpoints";

export const createSrcBanner = (
  login: string | undefined
): string | undefined => {
  return login ? config.server + Endpoints.IMAGE.BANNER_ID + login : undefined;
};

export const createSrcAvatar = (
  login: string | undefined
): string | undefined => {
  return login ? config.server + Endpoints.IMAGE.AVATAR_ID + login : undefined;
};

export const createSrcImg = (login: string | undefined): string | undefined => {
  return login ? config.server + Endpoints.IMAGE.IMG_ID + login : undefined;
};
