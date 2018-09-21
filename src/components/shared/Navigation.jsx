import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Row, Text } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 202px;
  height: 57px;
  margin-left: 2em;
`;

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <Img src={Logo} alt="Catatek Logo" />
        <Row alignitems="center" margin="0 2em 0 0">
          <Text nav>
            <a href="#work">Work</a>
          </Text>
          <Text nav>
            <a href="#who">Who</a>
          </Text>
          <Text nav>
            <a href="#services">Services</a>
          </Text>
        </Row>
      </Wrapper>
    );
  }
}
