import React from "react";
import styled from "styled-components";

import { Text, Row, Line, ContentTitle } from "../theme/index";

const Wrapper = styled.div`
  background-color: ${props => props.color};
  padding: 6em 0 1em 0;
  min-height: 75vh;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    padding: 3em 0;
  }
`;

const Span = styled.span`
  color: #c93f50;
`;

const StyledRow = styled(Row)`
  margin: 2em auto;
  width: 60%;
  @media (max-width: 768px) {
   width: 90%;
   margin: 2em 0;
   justify-content: center;
`;

export default function Content2({ title, color, type }) {
  return (
    <Wrapper color={color} id={type === "services" && "services"}>
      <Row justifycontent="flex-end">
        <Line secondary bottom="1.5em" />
        <ContentTitle color="#fff">{title}</ContentTitle>
      </Row>
      <StyledRow>
        {type === "services" && (
          <div>
            <Text white large>
              Native (iOS/Android + macOS) development
              <Span> + </Span>
              <br />
              UI/UX design
              <Span> + </Span>
              Web design <Span> + </Span>
              <br />
              Web development
              <Span> + </Span>
              <br />
              Creative services
              <Span> + </Span>
              <br />
              Security
              <Span> + </Span>
              Consulting
            </Text>
          </div>
        )}
        {type === "contact" && (
          <div>
            <Text white large>
              We love coffee, and we love people—nothing makes us happier than
              listening to your vision over a cup of joe.
            </Text>
            <Row margin="2.5em 0 0 0">
              <a href="tel:4045181276">
                <Text margin="0 3em 0 0" small>
                  404.518.1276
                </Text>
              </a>
              <a href="mailto:hello@catatek.com">
                <Text small>hello@catatek.com</Text>
              </a>
            </Row>
          </div>
        )}
      </StyledRow>
    </Wrapper>
  );
}
