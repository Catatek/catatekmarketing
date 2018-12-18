import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { Row, Text } from "../theme/index";

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  box-shadow: ${props => props.active && "0 0 10px rgba(0, 0, 0, 0.1)"};
  @media (max-width: 780px) {
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 205px;
  margin-left: 2em;
  height: 60px;
  @media (max-width: 780px) {
    margin-left: 0em;
  }
  @media (max-width: 500px) {
    margin-left: 0em;
    width: 175px;
    height: 50px;
  }
`;

const StyledRow = styled(Row)`
  align-items: center;
  margin: 0 2em 0 0;
  @media (max-width: 780px) {
    display: none;
  }
`;

export default class Navigation extends Component {
  state = {
    color: "rgba(0,0,0,0)",
    active: false
  };

  listenScrollEvent = e => {
    if (window.scrollY > 150) {
      this.setState({ color: "white", active: true });
    } else {
      this.setState({ color: "rgba(0,0,0,0)", active: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    const { active } = this.state;
    return (
      <Wrapper active={active}>
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
