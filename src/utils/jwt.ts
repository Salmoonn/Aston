import { getUnixTime } from "./date";

export interface IAuthTokenInfo {
  exp: number;
  iat: number;
  login: number;
}

const LIFE_TIME_TO_UPDATE_MULTIPLIER = 0.1;

export const isTokenExpired = (token: string | null): boolean => {
  if (!token) {
    return true;
  }

  try {
    const tokenInfo = token.split(".")[1];
    const tokenInfoDecoded = atob(tokenInfo);
    const { exp, iat }: IAuthTokenInfo = JSON.parse(tokenInfoDecoded);

    const tokenLeftTime = exp - getUnixTime();

    const minLifeTimeForUpdate = (exp - iat) * LIFE_TIME_TO_UPDATE_MULTIPLIER;

    return tokenLeftTime < minLifeTimeForUpdate;
  } catch (err) {
    console.error(err);
    return true;
  }
};
