import { useContext } from "react";
import { MatchBreakpointsContext } from "../providers/BreakpointProvider/provider";

export const useMatchBreakpoints = () => {
  const matchBreakpointContext = useContext(MatchBreakpointsContext);

  if (matchBreakpointContext === undefined) {
    throw new Error("Match Breakpoint context is undefined");
  }

  return matchBreakpointContext;
};
