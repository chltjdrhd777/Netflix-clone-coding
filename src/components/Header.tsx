import React from "react";
import logo from "../imgSource/svg/logo.svg";
import styled from "styled-components";
import bg from "../imgSource/images/bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <HeaderContainer>
      <HeaderTop>
        <Logo src={logo} alt="" />
        <SignIn href="#/h">Sign In</SignIn>
      </HeaderTop>

      <ContentContainer>
        <H1>Wonder what is the next?</H1>
        <H2>REALLY?</H2>
        <TouchMe href="#/hh">
          {"if so, touch me "}
          <FontAwesomeIcon icon={faAngleRight} size="1x" />
        </TouchMe>
      </ContentContainer>
    </HeaderContainer>
  );
};

//? Header CSS
//1rem = 17px

const HeaderContainer = styled.div`
  height: 22rem;
  background: radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 5)), url(${bg});
  background-size: cover;
  box-shadow: inset 0px 0px 100px rgba(0, 0, 0, 0.5);
  position: relative;
`;

const HeaderTop = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
`;
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
`;

const SignIn = styled.a`
  height: 17px;
  margin-top: 10px;
  margin-right: 19px;
  padding: 3px 5px 19px;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.1875rem;
  font-size: 13px;
  background: var(--main-red);
  position: absolute;
  right: 0;
  &:hover {
    background: var(--main-red-hover);
  }
`;

//? Content CSS
const ContentContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 7rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  line-height: 1.1rem;
  font-size: 40px;
`;
const H2 = styled.h2`
  font-size: 17px;
  font-weight: 200;
  line-height: 1rem;
  margin-top: 0;
`;

const TouchMe = styled.a`
  text-transform: uppercase;
  margin-top: 10px;
  padding: 3px 5px;
  background: var(--main-red);
  &:hover {
    background: var(--main-red-hover);
  }
  cursor: pointer;
`;
