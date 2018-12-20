import React from "react";
import styled from "styled-components";
import { Column, Title2, Text } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
`;

const StyledColumn = styled(Column)`
  width: 50%;
  margin: 0 auto;
`;

export default function Content({ title, text }) {
  return (
    <Wrapper>
      <StyledColumn>
        <Title2>{title}</Title2>
        <Text>{text}</Text>
      </StyledColumn>
    </Wrapper>
  );
}
