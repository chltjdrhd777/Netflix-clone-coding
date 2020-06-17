import React from "react";
import styled from "styled-components";
import Img from "../imgSource/images/tab-1-pic.png";

export function TabFirst() {
  return (
    <>
      <TextContainer>
        <Text>
          If you decide Netflix isn't for you - no problem. No commitment.
          Cancel online anytime.
        </Text>
        <TryBotton>try it now</TryBotton>
      </TextContainer>

      <Image src={Img} />
    </>
  );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  width: 17rem;
  padding-bottom: 20px;
  margin-left: 30px;
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
`;
const Image = styled.img`
  width: 250px;
  height: 200px;
  margin-right: 30px;
`;
