import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";
import { CheckBox, CheckBoxLabel, LanguageButton } from "../components/Button";
import logo from "../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { H1, P1, P2 } from "../components/Typography";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import style from "./Navbar.module.css";
import { langValue } from "../redux/slices/langSlice";
import { RootState } from "../redux/store/store";
const NavbarWrapper = styled.nav`
  background-color: ${(props) => props.theme.colors.navbar};
  box-shadow: 0px 5px 6.65px 0.35px rgba(0, 0, 0, 0.06);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    justify-content: space-evenly;
    padding: 0 20px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    justify-content: space-evenly;
    padding: 0;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-evenly;
    padding: 0;
  }
`;
const NavLink = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.colors.navText};
  font-family: "Arial Black", sans-serif;
  font-weight: bold;
  line-height: 1.323;
  text-align: center;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: none;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.6em;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
  gap: 0.6em;
  font-family: "Arial Black", sans-serif;
  color: ${(props) => props.theme.colors.main};
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 22px;
  }
  cursor: pointer;
`;
const Sidebar = styled("div")<{ opened: boolean }>`
  color: ${(props) => props.theme.colors.bg};
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ opened }) => (opened ? "0" : "-100%")};
  transition: 850ms all;
  background-color: ${(props) => props.theme.colors.main};
  padding: 10px;
  z-index: 20;
`;
const IconWrapper = styled.div`
  color: ${(props) => props.theme.colors.main};
  display: none;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    display: block;
  }
`;
type Props = {
  toggleTheme: any;
};

const Navbar = ({ toggleTheme }: Props) => {
  const lang = useSelector((state: RootState) => state.lang.value);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <NavbarWrapper>
      <Link href="/">
        <Logo>
          <Image src={logo} alt="logo" width={50} />
          <div>Yts1.co</div>
        </Logo>
      </Link>
      <NavLink>Youtube Downloader</NavLink>
      <NavLink>Youtube To Mp3 Converter</NavLink>
      <ButtonWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={toggleTheme} />
        <CheckBoxLabel htmlFor="checkbox"></CheckBoxLabel>
        <select
          className={style.select}
          onChange={(e: any) => {
            dispatch(langValue(e.target.value));
          }}
        >
          <option value="en">English</option>
          <option value="ar">Arabic</option>
        </select>
      </ButtonWrapper>
      <IconWrapper>
        <GiHamburgerMenu
          size={25}
          onClick={() => {
            setOpen(open === false ? true : false);
          }}
        />
      </IconWrapper>
      <Sidebar opened={open}>
        <AiOutlineCloseCircle
          size={35}
          onClick={() => {
            setOpen(open === false ? true : false);
          }}
        />
        <P2>Youtube Downloader</P2>
        <P2>Youtube To Mp3 Converter</P2>
      </Sidebar>
    </NavbarWrapper>
  );
};

export default Navbar;
