import React from "react";
import { BackCard, BackCardWrapped } from "../components/BackCard";
import Head from "next/head";
import { H1, P, P1, P2 } from "../components/Typography";
type Props = {};

const Contactus = (props: Props) => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <Head>
        <title>Contact us</title>
      </Head>
      <BackCardWrapped>
        <BackCard>
          <H1 size={25}>Contact us</H1>
          <br />
          <div style={{ textAlign: "center" }}>
            <P>for any queries please contact us at</P>{" "}
            <a
              href="
            mailto:contact@ytmates.com"
            >
              contact@ytmates.com
            </a>
          </div>
        </BackCard>
      </BackCardWrapped>
      ;
    </div>
  );
};

export default Contactus;
