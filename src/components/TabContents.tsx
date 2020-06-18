import React from "react";
import styled from "styled-components";
import Img from "../imgSource/images/tab-1-pic.png";
import Tv from "../imgSource/images/tab-tv.png";
import Tablet from "../imgSource/images/tab-tablet.png";
import Mac from "../imgSource/images/tab-macbook.png";

//TabFirst
export function TabFirst() {
  return (
    <FirstPannel>
      <TextContainer>
        <Text>
          If you decide Netflix isn't for you - no problem. No commitment.
          Cancel online anytime.
        </Text>
        <TryBotton>try it now</TryBotton>
      </TextContainer>

      <Image src={Img} />
    </FirstPannel>
  );
}

const FirstPannel = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--main-deep-dark);
  justify-content: space-evenly;
  height: 130vh;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  width: 17rem;
  padding-bottom: 20px;
  margin-left: 30px;
  height: 17rem;
`;

const Text = styled.span``;
const TryBotton = styled.button`
  width: 100px;
  margin-top: 10px;
  padding: 5px;
  color: white;
  background: var(--main-red);
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
`;
const Image = styled.img`
  width: 250px;
  height: 200px;
  margin-right: 30px;
  margin-top: 30px;
`;

//TabSecond
export function TabSecond() {
  return (
    <SecondPannel>
      <Illustration>
        <Text>
          If you decide Netflix isn't for you <br />- no problem. No commitment.
          Cancel online anytime.
        </Text>
        <TryBottonSecond>try it now</TryBottonSecond>
      </Illustration>

      <ImageContainer>
        <ScreenImage src={Tv} />
        <ScreenImage src={Tablet} />
        <ScreenImage src={Mac} />
      </ImageContainer>
    </SecondPannel>
  );
}

const SecondPannel = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--main-deep-dark);
  height: 130vh;
`;

const Illustration = styled(TextContainer)`
  margin-top: 30px;
  width: 30rem;
  height: 50px;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TryBottonSecond = styled(TryBotton)`
  margin-top: 0;
`;

const ImageContainer = styled.div`
  width: 29rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  margin-left: 70px;
  margin-top: 30px;
`;
const ScreenImage = styled.img`
  width: 7rem;
  height: 7rem;
`;
