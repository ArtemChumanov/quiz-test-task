import React, { ReactNode } from "react";
import isPropValid, {
  StyleSheetManager,
  ThemeProvider,
} from "styled-components";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";

import { MatchBreakpointsProvider } from "./BreakpointProvider/provider";
import { theme } from "@/styles/theme/theme";

const StyledThemeProvider: React.FC<
  React.PropsWithChildren<{ children: ReactNode }>
> = ({ children }) => (
  <StyleSheetManager
    enableVendorPrefixes
    // @ts-ignore
    shouldForwardProp={(propName, elementToBeRendered) => {
      return typeof elementToBeRendered === "string"
        ? isPropValid(propName)
        : true;
    }}
  >
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyleSheetManager>
);

const Providers: React.FC<
  React.PropsWithChildren<{ store: Store; children: React.ReactNode }>
> = ({ children, store }) => (
  <Provider store={store}>
    <StyledThemeProvider>
      <MatchBreakpointsProvider>{children}</MatchBreakpointsProvider>
    </StyledThemeProvider>
  </Provider>
);

export default Providers;
