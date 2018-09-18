import React from "react";
import styled from "styled-components";

import { Column, Text, Row, Title1 } from "../theme/index";

const Line = styled.div`
  width: 136px;
  height: 14px;
  background-color: #c93f50;
  position: absolute;
  left: 0;
  bottom: 1.9em;
`;

const Wrapper = styled.div`
  padding: 5em 0;
`;

const Title = styled.h2`
  font-size: 3.75em;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#754D63"};
  margin: 0 0 0 2.5em;
`;

export default function Content1({ title }) {
  return (
    <Wrapper>
      <Row>
        <Line />
        <Title color="#C93F50">{title}</Title>
      </Row>
      <Row margin="2em 0 5em 9em" width="70%">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Row>
    </Wrapper>
  );
}
