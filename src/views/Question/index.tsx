import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

//hooks
import { useRouter } from "next/router";
import { useAnswerUser } from "@/state/answers";

//components
import { Text, Button, Container } from "@/components";
import Flex from "@/components/UI-Elements/Flex";

//types
import { IAnswer, IQuestions } from "@/types";

//helpers
import { creatorQuestionTitle } from "@/helpers";

const ButtonWrapper = styled(Flex)`
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Wrapper = styled(Flex)`
  flex-direction: column;
`;

interface HomeProps {
  questions: IQuestions;
}

const QuestionView: FC<HomeProps> = ({ questions }) => {
  const {
    questionTitle,
    subtitle,
    answers,
    id,
    nextQuestionId,
    severalAnswer,
    dependentByAnswer,
  } = questions || {};

  const { push } = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer[]>([]);
  const { answersUsers, setAnswerUser, clearAnswers, fieldForNextQuestions } =
    useAnswerUser();

  useEffect(() => {
    if (answersUsers.some((el) => el.id === id)) {
      setSelectedAnswer(answersUsers.at(-1).selectedAnswer);
    }
  }, [answersUsers, id]);

  const onSelectActiveButton = (item: IAnswer, severalAnswers: boolean) => {
    if (severalAnswers) {
      const isSelected = selectedAnswer?.includes(item);
      isSelected
        ? setSelectedAnswer((prev) => prev.filter((i) => i.id !== item.id))
        : setSelectedAnswer((prev) => (prev ? [...prev, item] : [item]));
    } else {
      setSelectedAnswer([item]);
    }
  };

  const nextPageHandle = async () => {
    setAnswerUser({
      id,
      questionTitle,
      selectedAnswer: selectedAnswer,
    });
    setSelectedAnswer([]);
    const nextId = nextQuestionId || selectedAnswer[0].nextQuestionId;

    if (nextId) {
      await push(`/question/${nextId}`);
    } else {
      await push(`/`);
      clearAnswers();
    }
  };

  const checkActiveButton = (btn: IAnswer, selectedAnsw: IAnswer[]) =>
    !severalAnswer
      ? btn.title === selectedAnsw[0]?.title
      : selectedAnsw?.includes(btn);

  return (
    <Container mt="20px">
      <Text as="h1" $bold mb="30px">
        {creatorQuestionTitle(
          questionTitle,
          dependentByAnswer,
          fieldForNextQuestions,
        )}
      </Text>
      {subtitle && (
        <Text as="p" $bold mb="30px" fontSize="18px">
          {subtitle}
        </Text>
      )}
      <Wrapper>
        <ButtonWrapper>
          {answers?.map((button) => (
            <Button
              key={button.id}
              onClick={() => onSelectActiveButton(button, severalAnswer)}
              active={checkActiveButton(button, selectedAnswer)}
              withSelectMarker={severalAnswer ?? false}
            >
              {button.title}
            </Button>
          ))}
        </ButtonWrapper>
        {!!selectedAnswer.length && (
          <Button mt="70px" active onClick={nextPageHandle}>
            Next
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default QuestionView;
