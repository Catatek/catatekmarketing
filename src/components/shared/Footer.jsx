import React from "react";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import { Row } from "../theme/index";
import Github from "../../assets/github.svg";
import Medium from "../../assets/medium.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0;
`;

const Img = styled.img`
  width: 148px;
  height: 42px;
  margin-right: 2em;
`;

const I = styled.img`
  margin: 0 1em;
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Row margin="0 0 0 1em" alignitems="center">
        <a
          href="https://github.com/Catatek"
          rel="noopener noreferrer"
          target="_blank"
        >
          <I src={Github} alt="Catatek icons" />
        </a>
        <a
          href="https://medium.com/@wwwhatley"
          rel="noopener noreferrer"
          target="_blank"
        >
          <I src={Medium} alt="Catatek icons" />
        </a>
      </Row>
      <Img src={Logo} alt="Catatek Logo" />
    </Wrapper>
  );
}
