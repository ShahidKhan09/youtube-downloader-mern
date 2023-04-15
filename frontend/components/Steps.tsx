import React from "react";
import { H1 } from "./Typography";
import styled from "styled-components";
const Text = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  width: 270px;

  line-height: 1.323;
  a {
    color: ${(props) => props.theme.colors.link};
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Number1 = styled.div`
  font-family: "Garet", sans-serif;
  font-size: 45px;
  margin: 0 5px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.green};
`;
const Number2 = styled.div`
  font-family: garet;
  font-size: 45px;
  margin: 0 5px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.yellow};
`;
const Number3 = styled.div`
  font-family: "Garet", sans-serif;
  font-size: 45px;
  margin: 0 5px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.6em;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
type Props = {
  steps: any;
};
const Steps = ({ steps }: Props) => {
  console.log(steps);
  return (
    <div>
      <H1 size={17.7}>
        It&apos;s so simple, you can download your videos and audios in three
        easy steps
      </H1>
      <br />
      <Flex>
        <NumberWrapper>
          <Number1>1</Number1>
          <Text>{steps[0]}</Text>
        </NumberWrapper>
        <NumberWrapper>
          <Number2>2</Number2>
          <Text>{steps[1]}</Text>
        </NumberWrapper>
        <NumberWrapper>
          <Number3>3</Number3>
          <Text>{steps[2]}</Text>
        </NumberWrapper>
      </Flex>
      <br />
    </div>
  );
};

export default Steps;
