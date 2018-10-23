import React from "react";
import styled from "styled-components";
import { Line, Column } from "../theme/index";
import Globe from "../../assets/globe.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: calc(80vh - 105px);
  bottom: 0;
  align-items: center;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 6em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#754D63"};
  margin: 0;
  @media (max-width: 500px) {
    font-size: 2.6em;
  }
`;

const Img = styled.img`
  width: 90%;
  @media (max-width: 500px) {
    width: 50%;
  }
`;

const StyledColumn = styled(Column)`
  @media (max-width: 768px) {
    margin: 1.5em 0;
  }
`;

export default function Splash() {
  return (
    <Wrapper>
      <Column>
        <Title>Make</Title>
        <Title>Something</Title>
        <Title color="#C93F50">Amazing</Title>
      </Column>
      <StyledColumn>
        <Img src={Globe} alt="abstract thing" />
      </StyledColumn>
      <Line primary bottom="13.5em" />
    </Wrapper>
  );
}
