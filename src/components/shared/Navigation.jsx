import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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
      </Wrapper>
    );
  }
}
