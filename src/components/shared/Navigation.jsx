import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Row, Text } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 105px;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 243px;
  margin-left: 2em;
  height: 70px;
  @media (max-width: 500px) {
    margin-left: 0em;
    width: 175px;
    height: 50px;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  margin: 0 2em 0 0;
  @media (max-width: 500px) {
    display: none;
  }
`;

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <Img src={Logo} alt="Catatek Logo" />
        <StyledRow>
          <Text nav>
            <a href="#work">projects</a>
          </Text>
          <Text nav leftborder>
            <a href="#who">meet me</a>
          </Text>
          <Text nav leftborder>
            <a href="#services">services</a>
          </Text>
          <Text nav leftborder colored>
            <a href="#contact">contact</a>
          </Text>
        </StyledRow>
      </Wrapper>
    );
  }
}
