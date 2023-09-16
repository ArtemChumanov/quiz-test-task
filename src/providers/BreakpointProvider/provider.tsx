import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { breakpointMap } from "@/styles/theme/base";

type State = {
  [key: string]: boolean;
};

type BreakpointChecks = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} & State;

type MediaQueries = {
  [key: string]: string;
};

const mediaQueries: MediaQueries = (() => {
  let prevMinWidth = 0;

  return Object.keys(breakpointMap).reduce((accum, size, index) => {
    if (index === Object.keys(breakpointMap).length - 1) {
      return { ...accum, [size]: `(min-width: ${prevMinWidth}px)` };
    }

    const minWidth = prevMinWidth;
    const breakpoint = breakpointMap[size];

    prevMinWidth = breakpoint + 1;

    return {
      ...accum,
      [size]: `(min-width: ${minWidth}px) and (max-width: ${breakpoint}px)`,
    };
  }, {});
})();

const getKey = (size: string) =>
  `is${size.charAt(0).toUpperCase()}${size.slice(1)}`;

const getState = () =>
  Object.keys(mediaQueries).reduce((accum, size) => {
    const key = getKey(size);
    if (typeof window === "undefined") {
      return {
        ...accum,
        [key]: false,
      };
    }
    const mql = window.matchMedia(mediaQueries[size]);
    return { ...accum, [key]: mql?.matches ?? false };
  }, {});

export const getBreakpointChecks = (state: State): BreakpointChecks => ({
  ...state,
  isMobile: state.isXs || state.isSm,
  isTablet: state.isMd || state.isLg,
  isDesktop: state.isXl || state.isXll || state.isXxl,
});

export const MatchBreakpointsContext = createContext<BreakpointChecks>({
  isMobile: false,
  isTablet: false,
  isDesktop: false,
});

export const useIsomorphicEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export const MatchBreakpointsProvider = ({ children }) => {
  const [state, setState] = useState<BreakpointChecks>(() =>
    getBreakpointChecks(getState()),
  );

  useIsomorphicEffect(() => {
    const handlers = Object.keys(mediaQueries).map((size) => {
      let mql: MediaQueryList;
      // eslint-disable-next-line no-unused-vars
      let handler: (matchMediaQuery: MediaQueryListEvent) => void;

      if (typeof window?.matchMedia === "function") {
        mql = window.matchMedia(mediaQueries[size]);

        handler = (matchMediaQuery: MediaQueryListEvent) => {
          const key = getKey(size);

          setState((prevState) =>
            getBreakpointChecks({
              ...prevState,
              [key]: matchMediaQuery.matches,
            }),
          );
        };

        if (mql.addEventListener) {
          mql.addEventListener("change", handler, { passive: true });
        }
      }

      return () => {
        if (mql?.removeEventListener) {
          mql.removeEventListener("change", handler);
        }
      };
    });

    setState(getBreakpointChecks(getState()));

    return () => {
      handlers.forEach((unsubscribe) => {
        unsubscribe();
      });
    };
  }, []);

  return (
    <MatchBreakpointsContext.Provider value={state}>
      {children}
    </MatchBreakpointsContext.Provider>
  );
};
