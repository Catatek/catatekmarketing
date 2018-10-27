import React from "react";
import styled from "styled-components";
import vue from "../../assets/vuejs-original.svg";
import react from "../../assets/react-original.svg";
import electron from "../../assets/electron-original.svg";
import node from "../../assets/nodejs-original.svg";
import sql from "../../assets/mysql-original-wordmark.svg";
import graphql from "../../assets/graph.svg";
import docker from "../../assets/docker-plain-wordmark.svg";
import amazon from "../../assets/amazonwebservices-plain-wordmark.svg";

const Icon = styled.img``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 75px;
  margin: 0 0 2em 0;
`;

export default function Logos() {
  return (
    <Wrapper>
      <Icon src={react} alt="Icon" />
      <Icon src={vue} alt="Icon" />
      <Icon src={node} alt="Icon" />
      <Icon src={graphql} alt="Icon" />
      <Icon src={electron} alt="Icon" />
      <Icon src={docker} alt="Icon" />
      <Icon src={sql} alt="Icon" />
      <Icon src={amazon} alt="Icon" />
    </Wrapper>
  );
}
