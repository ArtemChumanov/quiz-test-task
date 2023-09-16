import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

//components
import { Flex } from "@/components/UI-Elements";

//hooks
import { useAnswerUser } from "@/state/answers";

const LOGO_IMAGE = "/logo_black.svg";
const CHEVRON_IMAGE = "/chevron.svg";

const NavbarWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 54px;
  position: relative;
  width: 100%;
`;

const ButtonChevron = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    left: 64px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    left: 164px;
  }
`;

const Navbar: FC = () => {
  const { answersUsers, removeLastAnswer } = useAnswerUser();
  const { push } = useRouter();

  const isSaveAnswer: boolean = answersUsers.length > 0;

  const onPreventPageHandle = async () => {
    const lastId = answersUsers.at(-1).id;
    await push(`/question/${lastId}`);
    removeLastAnswer(lastId);
  };

  return (
    <NavbarWrapper>
      {isSaveAnswer && (
        <ButtonChevron onClick={onPreventPageHandle}>
          <Image src={CHEVRON_IMAGE} width={24} height={24} alt="chevron" />
        </ButtonChevron>
      )}
      <Image src={LOGO_IMAGE} width={24} height={24} alt="logo" />
    </NavbarWrapper>
  );
};

export default Navbar;
