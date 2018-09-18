import React from "react";
import styled from "styled-components";

import { Text, Row } from "../theme/index";

const Wrapper = styled.div`
  background-color: ${props => props.color};
  padding: 5em 0;
`;

const Line = styled.div`
  width: 136px;
  height: 14px;
  background-color: #fff;
  position: absolute;
  right: 0;
  bottom: 1.5em;
`;

const Title = styled.h2`
  font-size: 3.75em;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#754D63"};
  margin: 0 2.5em 0 0;
`;

const Span = styled.span`
  color: #c93f50;
`;

export default function Content2({ title, color, type }) {
  return (
    <Wrapper color={color}>
      <Row justifycontent="flex-end">
        <Line />
        <Title color="#fff">{title}</Title>
      </Row>
      <Row margin="2em 0 5em 9em" width="60%">
        {type === "services" && (
          <div>
            <Text white large>
              Web design <Span> + </Span>
              <br />
              Web development
              <Span> + </Span>
              <br />
              Native development
              <Span> + </Span>
              <br />
              UI/UX design
              <Span> + </Span>
              Creative services
              <Span> + </Span>
              <br />
              Network security
              <Span> + </Span>
              Business consulting
            </Text>
          </div>
        )}
        {type === "contact" && (
          <div>
            <Text white large>
              We love coffee, and we love people—nothing makes us happier than
              listening to your vision over a cup of joe.
            </Text>
            <Row>
              <Text margin="0 3em 0 0" small>
                404.518.1276
              </Text>
              <Text small>hello@catatek.com</Text>
            </Row>
          </div>
        )}
      </Row>
    </Wrapper>
  );
}
