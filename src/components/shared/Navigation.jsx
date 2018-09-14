import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

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

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.5em;
`;

const Text = styled.p`
  color: #616161;
  font-size: 1.2em;
  margin: 0 1em;
  font-family: "Raleway", sans-serif;
`;

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <Img src={Logo} alt="Catatek Logo" />
        <Row>
          <Text>Work</Text>
          <Text>Who?</Text>
          <Text>Contact</Text>
        </Row>
      </Wrapper>
    );
  }
}
