import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  BackCard,
  BackCardWrapped,
  ParagraphWrapper,
} from "../components/BackCard";
import { H1 } from "../components/Typography";
import * as api from "../services/content.api";
type Props = {};

const Aboutus = (props: Props) => {
  const [data, setData] = useState<any>([]);
  const getContent = async () => {
    const resp = await api.getContent({
      pageTitle: "aboutus",
    });

    setData(resp);
  };
  useEffect(() => {
    getContent();
  }, [data]);
  return (
    <div style={{ paddingTop: "150px" }}>
      <Head>
        <title>About us</title>
      </Head>
      <BackCardWrapped>
        <BackCard>
          <H1 size={25}>About us</H1>
          <br />
          <ParagraphWrapper>
            {data.map((item: any, index: any) => {
              return <p key={index}>{item.content}</p>;
            })}
          </ParagraphWrapper>
        </BackCard>
      </BackCardWrapped>
      ;
    </div>
  );
};

export default Aboutus;
