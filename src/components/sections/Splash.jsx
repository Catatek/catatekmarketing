import React from "react";
import styled from "styled-components";
import { Line, Column } from "../theme/index";
import Globe from "../../assets/globe.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 750px;
  bottom: 0;
  background: #f2f5f7;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 3em 0 0 0;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 5em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#754D63"};
  margin: 0;
  line-height: 1.2em;
  @media (max-width: 780px) {
    font-size: 4em;
    line-height: 1em;
  }
  @media (max-width: 500px) {
    font-size: 2.6em;
  }
`;

const Img = styled.img`
  width: 80%;
  @media (max-width: 780px) {
    width: 65%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`;

const StyledColumn = styled(Column)`
  margin: 2em 0 0 0;
  align-items: flex-end;
  @media (max-width: 768px) {
    margin: 4em 0 0 0;
    align-items: center;
  }
`;

export default function Splash() {
  return (
    <Wrapper>
      <Column>
        <Title>Innovate</Title>
        <Title>Create</Title>
        <Title>Hack</Title>
        <Title color="#C93F50">Lab</Title>
      </Column>
      <StyledColumn>
        <Img src={Globe} alt="abstract thing" />
      </StyledColumn>
      <Line primary bottom="14em" />
    </Wrapper>
  );
}
