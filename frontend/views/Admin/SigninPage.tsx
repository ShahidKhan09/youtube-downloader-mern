import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { LanguageButton, Input } from "./components/FormComponents";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import * as api from "../../services/auth.api";
import { LoginResponse } from "../../@types/auth";
import CircleLoader from "react-spinners/CircleLoader";
import { Button } from "../../components/Button";
type Props = {};

const SigninPage = (props: Props) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await api.Login({
        username: username,
        password: password,
      });

      if (user.status === 200) {
        localStorage.setItem("token", user.data.accessToken);
        setLoading(false);
        router.push("/admin");
      } else if (user.status === 403) {
        setUsername("");
        setPassword("");
        toast.error("wrong credentials");
        setLoading(false);
      }
    } catch (e) {
      setUsername("");
      setPassword("");
      toast.error("Unknow error");
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "200px", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            name="username"
            placeholder="enter username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <Input
            type="password"
            name="password"
            placeholder="enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button type="submit">
            {loading ? (
              <span>
                <CircleLoader
                  color="red"
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </span>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
