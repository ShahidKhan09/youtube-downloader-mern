import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { H1, P1 } from "./Typography";
import downloadIcon from "../public/download-icon.png";
import Image from "next/image";
import axios from "axios";
import * as api from "../services/video.api";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import { toast } from "react-hot-toast";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  height: 100%;
`;
const Box = styled.div`
  border-width: 1.5px;
  border-color: ${(props) => props.theme.colors.outline};
  border-style: solid;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.boxBg};
  box-shadow: 0px 5px 13.42px 8.58px;
  color: ${(props) => props.theme.colors.shadowBg};
  margin-top: 120px;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  @media screen and (min-width: 200px) and (max-width: 480px) {
    height: 200px;
    width: 90%;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 250px;
    width: 90%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 300px;
    width: 90%;
  }
`;
const InputWrapper = styled.div`
  display: table;
  border-collapse: collapse;
  width: 70%;
  display: flex;
  border-radius: 5px;
  & > div {
    border: 5px solid;
    border-color: ${(props) => props.theme.colors.border};
    vertical-align: middle;
  }
  input {
    border: 0;
    display: block;
    min-width: 100%;
    padding: 8px;
    background-color: #e5e9f4;
    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
    width: 90%;
    padding: 5px;
    & > div {
      border: 3px solid;
      border-color: ${(props) => props.theme.colors.border};
      vertical-align: middle;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    width: 90%;
  }
`;
const InputArea = styled.div`
  width: 100%;
  height: 60px;
  border-color: ${(props) => props.theme.colors.outline};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 40px;
  }
`;
const DownloadButton = styled.div`
  background: ${(props) => props.theme.colors.button};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 900;
  cursor: pointer;
  gap: 0.5em;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
const Button = styled.a`
  border-width: 1.5px;
  border-color: rgb(241, 242, 244);
  border-style: solid;
  border-radius: 7px;
  background-color: ${(props) => props.theme.colors.danger};
  box-shadow: 0px 2px 6.42px 4.58px rgba(70, 70, 70, 0.13);
  width: 200px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-family: "Arial Black", sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  cursor: pointer;
  text-decoration: none;
`;
type Props = {};

const Form = (props: Props) => {
  const [link, setLink] = useState("");
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [format, setFormat] = useState("");
  const router = useRouter();
  const getVideoInfo = async () => {
    setLoading(true);
    try {
      const resp = await api.viewVideo({ link: link });
      setData(resp.data);
      setLoading(false);
      if (resp.status === 400) {
        toast.error("Invalid link ");
        setLoading(false);
      }
    } catch (e) {
      toast.error("Invalid link");
      setLoading(false);
    }
  };
  const download = async (link: string, format: string, quality?: string) => {
    try {
      if (format === "mp3") {
        router.push(
          `http://localhost:8000/download?link=${link}&format=${format}`
        );
      } else {
        router.push(
          `http://localhost:8000/download?link=${link}&format=${format}&quality=${quality}`
        );
      }
    } catch (e) {
      toast.error("Unable to download video");
    }
  };

  return (
    <>
      <FormWrapper>
        <Box>
          <H1 size={25}>Youtube Downloader - Youtube Converter</H1>
          <P1>
            Download and Convert Youtube Videos in MP3, MP4, MKV, 3GP, & many
            more formats.
          </P1>
          <InputWrapper>
            <InputArea>
              <input
                placeholder="Search or Paster Video Link Here"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </InputArea>
            <DownloadButton onClick={getVideoInfo}>
              <div>Download</div>
              <Image src={downloadIcon} alt="download icon" width={13} />
            </DownloadButton>
          </InputWrapper>
          <P1>
            By using our service you are accepting our &nbsp;
            <a href="">Privacy Policy</a> and &nbsp;
            <a href="">Terms of Use.</a>
          </P1>
        </Box>
      </FormWrapper>
      <br />
      {!loading ? (
        <>
          {data && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Row>
                <div>
                  <iframe
                    src={data.iframe}
                    width="320px"
                    height="170px"
                  ></iframe>
                </div>
                <Column>
                  {data.formats.map((item: any, index: any) => {
                    return (
                      <>
                        <Button
                          key={index}
                          target="_blank"
                          onClick={() => {
                            setFormat("mp4");
                            download(link, format, item.qualityLabel);
                          }}
                        >
                          download {item.qualityLabel} {item.container}
                        </Button>
                        <div id="https://honourrib.com/q37kdmdf?key=5431975e7f7a855b12e3244fb0ade3b4"></div>
                      </>
                    );
                  })}
                  <Button
                    onClick={() => {
                      setFormat("mp3");
                      download(link, format);
                    }}
                  >
                    download mp3
                  </Button>
                </Column>
              </Row>
            </div>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Form;
