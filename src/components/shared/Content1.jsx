import React from "react";
import styled from "styled-components";
import William from "../../assets/william.png";
import { Column, Text, Row, Line, ContentTitle } from "../theme/index";

const Wrapper = styled.div`
  padding: 6em 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 0;
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
`;

const StyledRow = styled(Row)`
  margin: 2.5em 0;
  padding: 2em 0;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTextRow = styled(Row)`
  width: 80%;
  margin: 4em auto;
  @media (max-width: 500px) {
    width: 95%;
    margin: 1em 0;
  }
`;

const StyledColumn = styled(Column)`
  width: 40%;
  @media (max-width: 700px) {
    width: 90%;
    align-items: center;
    // padding: 0 0.25em;
  }
`;

function Avatar({ avatar, name, title }) {
  return (
    <Column alignitems="center" margin=".5em 3.5em">
      <Img src={avatar} />
      <Text margin="1em 0 0 0">{name}</Text>
      <Text>{title}</Text>
    </Column>
  );
}

export default function Content1({ title, type }) {
  return (
    <Wrapper id={type === "avatars" && "who"}>
      <Row>
        <Line primary bottom="1.9em" />
        <ContentTitle content1 color="#C93F50">
          {title}
        </ContentTitle>
      </Row>
      {type === "description" && (
        <StyledTextRow>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </StyledTextRow>
      )}
      {type === "avatars" && (
        <StyledRow>
          <Avatar avatar={William} />
          <StyledColumn>
            <Text lineheight="1.2em">William W. Whatley</Text>
            <Text usertitle lineheight="1.2em">
              Developer
            </Text>
            <Text bio>
              I am passionately curious about innovative technologies, business,
              teaching, and a sustainable future. I live a life guided agilely
              in principle, with open lenses and mind towards solving
              problems--I'm rooted in belief that continued self-development is
              one of the most important virtues; as times change and problems
              are solved, more issues to fix emerge. I commit to a life of
              problem solving.
            </Text>
          </StyledColumn>
        </StyledRow>
      )}
    </Wrapper>
  );
}
