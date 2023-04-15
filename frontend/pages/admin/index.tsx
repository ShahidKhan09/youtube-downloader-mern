import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import * as api from "../../services/content.api";
import { Content } from "../../@types/content";
import styled from "styled-components";
import Modal from "../../components/Modal";
import { toast } from "react-hot-toast";
import { Button } from "../../components/Button";
import { PulseLoader } from "react-spinners";
type Props = {};
const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  height: 100%;
  width: 800px;
  padding: 20px;
  align-items: center;
  box-shadow: 11px 26px 42px 0px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 11px 26px 42px 0px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 11px 26px 42px 0px rgba(0, 0, 0, 0.68);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
const Input = styled.textarea`
  resize: none;
`;
const Home = (props: Props) => {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState<Content[]>([]);
  const [values, setValues] = useState<any>({ id: "", content: "" });
  const [lang, setLang] = useState("en");
  const [language, setLanguage] = useState("");
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const router = useRouter();
  const get = async () => {
    setLoading(true);
    try {
      const resp = await api.getContent({
        
        pageTitle: page,
      });
      setContent(resp);
      setLoading(false);
    } catch (error) {
      console.log("Error");
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const resp = await api.updateContent({
        id: values.id,
        content: values.content,
      });
      if (resp.status == 200) {
        toast.success("content update sucessfully");
        get();
      } else {
        toast.error("Cannot update error");
      }
    } catch (e) {
      toast.error("Unknow error");
    }
  };
  const handleChange = (id: string, content: string) => {
    setShow(!show);
    setValues({
      id: id,
      content: content,
    });
  };
  const Logout = async () => {
    localStorage.clear();
    router.push("/signin");
  };
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, page]);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <br />
        <div style={{ display: "flex", gap: "40px", paddingBottom: "30px" }}>
          <select onChange={(e) => setLang(e.target.value)} id="lang">
            <option value="en">Select language</option>
            <option value="en">en</option>
            <option value="ar">ar</option>
            <option value="hindi">hind</option>
            <option value="es">espanol</option>
          </select>
          <select onChange={(e) => setPage(e.target.value)}>
            <option value="home">home</option>
            <option value="aboutus">about us</option>
          </select>
        </div>
        <Button onClick={Logout}>Logout</Button>
      </div>
      <Container>
        <Head>
          <title>admin</title>
        </Head>

        <div>
          <Modal show={show} setShow={setShow}>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Input
                value={values.content}
                rows={10}
                cols={50}
                onChange={(e) =>
                  setValues({ ...values, content: e.target.value })
                }
              />
              <br />
              <Button type="submit"> update</Button>
            </form>
          </Modal>
          {!loading ? (
            <>
              {content.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "100px",
                    }}
                  >
                    <div>{item.content}</div>
                    <div>
                      <Button
                        onClick={() => {
                          handleChange(item._id, item.content);
                        }}
                      >
                        {" "}
                        edit
                      </Button>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <PulseLoader />
          )}
        </div>
      </Container>
      <br />
      <Container>
        <form action="">
          <div>
            <div>
              <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">en</option>
                <option value="ar">ar</option>
                <option value="hindi">hind</option>
                <option value="es">espanol</option>
              </select>
            </div>
            <br />
            <div>
              <textarea
                cols={50}
                rows={10}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <Button type="submit"> Add Content</Button>
        </form>
      </Container>
    </>
  );
};

export default Home;
