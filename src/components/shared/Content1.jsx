import React from "react";
import styled from "styled-components";
import William from "../../assets/william.png";
import { Column, Text, Row, Line, ContentTitle } from "../theme/index";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Medium from "../../assets/medium.svg";

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
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledRow2 = styled(Row)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTextRow = styled(Row)`
  width: 80%;
  margin: 4em auto;
  @media (max-width: 500px) {
    width: 90%;
    margin: 1em 0;
  }
`;

const StyledColumn = styled(Column)`
  width: 30%;
  @media (max-width: 700px) {
    width: 90%;
    align-items: center;
    margin: 1em 0;
  }
`;

const Span = styled.span`
  font-size: 3em;
  color: #47566e;
`;

const Icon = styled.img`
  color: #47566e;
  height: 25px;
  margin-left: ${props => props.marginleft};
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
            The truth is, we love what we do. At our core is a team of unmatched
            expertise, a variety of technical skillsets, and cultural diversity,
            however, we share one thing that runs deep in who we are as people:
            we're technologists on a mission to solve evolving, global issues by
            continuing to learn and challenge ourselves.
          </Text>
        </StyledTextRow>
      )}
      {type === "avatars" && (
        <StyledRow>
          <Avatar avatar={William} />
          <StyledColumn>
            <Text lineheight="1.2em">William W. Whatley</Text>
            <Text usertitle lineheight="1.2em">
              Developer | Designer
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
            <Row margin="1em 0 0 0" alignitems="center">
              <a
                href="https://www.linkedin.com/in/william-whatley-9b141b148/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon src={Linkedin} alt="Linkedin Icon" />
              </a>
              <a
                href="https://github.com/wwwhatley"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon marginleft="1em" src={Github} alt="Github Icon" />
              </a>
              <a
                href="https://medium.com/@wwwhatley"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon marginleft="1em" src={Medium} alt="Medium Icon" />
              </a>
            </Row>
          </StyledColumn>
          <StyledRow2 alignitems="center" justifycontent="space-evenly">
            <Span>+</Span>
            <StyledColumn justifycontent="center" alignitems="center">
              <Text>Many, many others from all over the world...</Text>
            </StyledColumn>
          </StyledRow2>
        </StyledRow>
      )}
    </Wrapper>
  );
}
