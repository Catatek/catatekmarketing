import React from "react";
import styled from "styled-components";
import William from "../../assets/william.png";
import { Column, Text, Row } from "../theme/index";

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

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

function Avatar({ avatar, name, title }) {
  return (
    <Column alignitems="center">
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
    <Wrapper>
      <Row>
        <Line />
        <Title color="#C93F50">{title}</Title>
      </Row>
      {type === "description" && (
        <Row margin="2em 0 5em 9em" width="70%">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Row>
      )}
      {type === "avatars" && (
        <Row
          margin="4em 0 2.5em 0"
          width="100%"
          alignitems="center"
          justifycontent="space-evenly"
        >
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
        </Row>
      )}
    </Wrapper>
  );
}
