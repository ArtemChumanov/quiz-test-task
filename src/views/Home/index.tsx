import React, { FC } from "react";

//hooks
import { useRouter } from "next/router";

//components
import { Button, Container } from "@/components";

const Home: FC = () => {
  const { push } = useRouter();

  const onStartHandle = async () => {
    await push("/question/1");
  };

  return (
    <Container mt="20px">
      <Button width="100%" mt="70px" active onClick={onStartHandle}>
        Start
      </Button>
    </Container>
  );
};

export default Home;
