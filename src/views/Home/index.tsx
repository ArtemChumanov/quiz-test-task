import React, { FC } from "react";

//hooks
import { useRouter } from "next/router";

//components
import { Button, Container, Text } from "@/components";

const Home: FC = () => {
  const { push } = useRouter();

  const onStartHandle = async () => {
    await push("/question/1");
  };

  return (
    <Container mt="20px">
      <Text as="h1" $bold mt="100px" fontSize="30px">
        Take the quiz
      </Text>
      <Button width="100%" mt="30px" active onClick={onStartHandle}>
        Start
      </Button>
    </Container>
  );
};

export default Home;
