import React from "react";
import QuestionView from "@/views/Question";
import { questionConfig } from "@/config";

export const getStaticPaths = async () => {
  const paths = questionConfig.map((q) => ({
    params: { id: q.id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  let map = new Map();

  questionConfig.forEach((q) => {
    map.set(q.id, q);
  });
  const res = map.get(params.id);

  if (!res) {
    return {
      notFound: true,
      props: {},
      revalidate: 1,
    };
  }

  return {
    props: res,
    revalidate: 10,
  };
};

const QuestionPage = (pageProps) => <QuestionView questions={pageProps} />;

export default QuestionPage;
