//types
export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xll: string;
  xxl: string;
};

export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xll: 1200,
  xxl: 1400,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`,
);

export const breakpointsKeys: Breakpoints = Object.keys(breakpointMap);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xll: `@media screen and (min-width: ${breakpointMap.xll}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
};

export default {
  breakpoints,
  mediaQueries,
};
