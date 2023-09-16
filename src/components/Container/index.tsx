import React from "react";
import styled from "styled-components";

import { BoxProps } from "@/components";
import { useMatchBreakpoints } from "@/hooks";
import { Box } from "@/components/UI-Elements";

const ContainerStyled = styled(Box)`
  width: 100%;
  max-width: 330px;
`;

const Container: React.FC<BoxProps> = ({ children, ...props }) => {
  const { isXs } = useMatchBreakpoints();
  return (
    <ContainerStyled px={isXs ? "16px" : 0} mx="auto" {...props}>
      {children}
    </ContainerStyled>
  );
};

export default Container;
