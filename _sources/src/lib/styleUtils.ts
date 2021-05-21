export const SIZE_FONT_LARGE = 18;
export const SIZE_FONT_MEDIUM = 16;

export const MINIMUM_PIXEL_UNIT = 8;

export const createSpaceSize = (multiple: number) =>
  multiple * MINIMUM_PIXEL_UNIT;

export const convertHexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};
