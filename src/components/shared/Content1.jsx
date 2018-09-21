import React from "react";
import styled from "styled-components";
import William from "../../assets/william.png";
import { Column, Text, Row, Line, ContentTitle } from "../theme/index";

const Wrapper = styled.div`
  padding: 2em 0;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const StyledRow = styled(Row)`
  margin: 4em 0 2.5em 0;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
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

function Avatar({ avatar, name, title }) {
  return (
    <Column alignitems="center" margin=".5em 0">
      <Img src={avatar} />
      <Text margin="1em 0 0 0">{name}</Text>
      <Text>{title}</Text>
    </Column>
  );
}

export default function Content1({ title, type }) {
  const avatars = [
    {
      avatar: William,
      name: "William",
      title: "Developer"
    },
    { avatar: William, name: "Raj", title: "Developer" },
    {
      avatar: William,
      name: "William",
      title: "Developer"
    },
    {
      avatar: William,
      name: "William",
      title: "Developer"
    }
  ];

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
          {avatars.map((key, index) => {
            return (
              <Avatar
                key={index}
                avatar={key.avatar}
                name={key.name}
                title={key.title}
              />
            );
          })}
        </StyledRow>
      )}
    </Wrapper>
  );
}
