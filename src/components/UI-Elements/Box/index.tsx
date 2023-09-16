import { HTMLAttributes } from "react";
import {
  BackgroundProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  background,
  border,
  layout,
  position,
  space,
} from "styled-system";
import styled from "styled-components";

export type BoxProps = BackgroundProps &
  BorderProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  HTMLAttributes<HTMLDivElement>;

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
