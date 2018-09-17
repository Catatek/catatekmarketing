import styled, { css } from "styled-components";

export const Title1 = styled.h1`
  color: red;
  font-size: 2.2em;
  margin: 0.5em 0;
`;

export const Title2 = styled.h2`
  color: ${props => (props.white ? "#fff" : "#C93F50")};
  font-size: 60px;
  font-family: "Raleway", sans-serif;
`;

export const Row = styled.div`
  display: flex;
  width: ${props => props.width};
  margin: ${props => props.margin};
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
`;

export const Text = styled.p`
  color: ${props => (props.white ? "#fff" : "#47566e")};
  font-size: 28px;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  line-height: 2.4em;
  margin: 0;
  ${props =>
    props.small &&
    css`
      color: #fff;
      font-size: 22px;
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      line-height: 2em;
    `};
`;
