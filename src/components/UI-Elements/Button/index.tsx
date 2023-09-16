import React, { ElementType, ReactNode } from "react";
import { LayoutProps, SpaceProps, space, layout } from "styled-system";
import styled from "styled-components";
import { PolymorphicComponentProps } from "@/types";
import { Box } from "@/components/UI-Elements";

export interface BaseButtonProps {
  as?: "a" | "button" | ElementType;
  disabled?: boolean;
  children: ReactNode;
  active: boolean;
  withSelectMarker?: boolean;
  onClick: () => void;
}

export type ButtonProps<P extends ElementType = "button"> =
  PolymorphicComponentProps<P, BaseButtonProps & SpaceProps & LayoutProps>;

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.purpleGradient : "#eaeef7"};
  height: 64px;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  box-shadow: 2px 2px 6px 0 rgba(84, 60, 151, 0.25);
  color: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.black};
  cursor: pointer;

  ${layout}
  ${space}
`;

const CircleSelectMarker = styled(Box)`
  background: ${({ theme }) => theme.colors.white};
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  border-radius: 50%;
`;

const Button = <E extends ElementType = "button">(
  props: ButtonProps<E>,
): JSX.Element => {
  const { active = false, withSelectMarker, children, ...rest } = props;

  return (
    <StyledButton $active={active} {...rest}>
      {children}
      {withSelectMarker && <CircleSelectMarker />}
    </StyledButton>
  );
};

export default Button;
