import styled from "styled-components";
import { flexbox, FlexboxProps } from "styled-system";
import { Box, BoxProps } from "@/components/UI-Elements";

export interface FlexProps extends BoxProps, FlexboxProps {}

const Flex = styled(Box)<BoxProps & FlexboxProps>`
  display: flex;

  ${flexbox}
`;
export default Flex;
