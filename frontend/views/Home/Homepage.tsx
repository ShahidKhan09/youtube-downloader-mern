import React, { Suspense } from "react";
import Features from "../../components/Features";
import Form from "../../components/Form";
import Pitch from "../../components/Pitch";
import Spinner from "../../components/Spinner";
import Steps from "../../components/Steps";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <>
      <Form />
      <Pitch />
      <Steps />
      <Features />
    </>
  );
};

export default Homepage;
