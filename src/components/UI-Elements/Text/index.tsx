import styled from "styled-components";
import { ComponentType, JSX, ReactNode } from "react";
import {
  LayoutProps,
  SpaceProps,
  space,
  typography,
  layout,
  TypographyProps,
} from "styled-system";

export interface IText {
  as?: string | ReactNode | ComponentType | JSX.Element;
  children?: string | ReactNode | JSX.Element;
  $bold?: boolean;
  fontSize?: string;
}
export type TextProps = IText & SpaceProps & LayoutProps & TypographyProps;

export const Text = styled.div<TextProps>`
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  font-size: ${({ fontSize }) => fontSize};
  font-style: normal;
  line-height: 28px;

  ${space};
  ${typography};
  ${layout};
`;

Text.defaultProps = {
  fontSize: "24px",
  as: "p",
  $bold: false,
};
