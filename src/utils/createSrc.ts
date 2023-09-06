import config from "../config.json";
import Endpoints from "../store/api/endpoints";

export const createSrcBanner = (login: string): string => {
  return config.server + Endpoints.IMAGE.BANNER_ID + login;
};

export const createSrcAvatar = (login: string): string => {
  return config.server + Endpoints.IMAGE.AVATAR_ID + login;
};

export const createSrcImg = (login: string): string => {
  return config.server + Endpoints.IMAGE.IMG_ID + login;
};
