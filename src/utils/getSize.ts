import { Size } from "../types/Types";

export const getSize = (): Size => {
  const result = {
    isDesktop: false,
    isLaptop: false,
    isMobile: false,
  };

  const width = window.innerWidth;

  if (width > 1100) {
    result.isDesktop = true;
  } else if (width > 740) {
    result.isLaptop = true;
  } else {
    result.isMobile = true;
  }

  return result;
};
