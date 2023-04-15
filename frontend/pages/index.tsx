import Head from "next/head";
import { useEffect, useState } from "react";
import Features from "../components/Features";
import Form from "../components/Form";
import Pitch from "../components/Pitch";
import Steps from "../components/Steps";
import * as api from "../services/content.api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import Script from "next/script";
export default function Home() {
  const [data, setData] = useState<string | undefined>();
  const [steps, setSteps] = useState<any>([]);
  const lang = useSelector((state: RootState) => state.lang.value);
  const get = async () => {
    const response = await api.getContent({
      pageTitle: "home",
    });

    const filter = response.filter((resp: any) => resp.lang === lang);
    setData(filter[0].content);
    setSteps([filter[2].content, filter[3].content, filter[7].content]);
  };
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  return (
    <div>
      <Head>
        <title>Online youtube downloader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Script
        data-cfasync="false"
        src="//honourrib.com/7db0e0eef0300e5a6cd489f3212cc49e/invoke.js"
      ></Script>
      <Form />
      <Pitch data={data} />
      <div id="container-7db0e0eef0300e5a6cd489f3212cc49e"></div>
      <Steps steps={steps} />
      <Features />
    </div>
  );
}
