import React, { useEffect, useState } from "react";
import { H1, P1 } from "./Typography";
import styled from "styled-components";

type Props = {
  data: string | undefined;
};
export const Text = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  line-height: 1.323;
  width: 70%;
  line-height: 25px;
`;
const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Pitch = ({ data }: Props) => {
  return (
    <Wrapper>
      <H1 size={25}>Youtube Video Downloader - Youtube to MP3 Converter</H1>
      <Text>{data}</Text>
    </Wrapper>
  );
};

export default Pitch;
