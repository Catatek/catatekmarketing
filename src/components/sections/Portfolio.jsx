import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Row } from "../theme/index";
import Background from "../../assets/exampke.png";

const Line = styled.div`
  background-color: #fff;
  width: 125px;
  height: 12px;
  margin: 0 1em 0 -2em;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  margin: 6em 0 5em 0;
`;

const Img = styled.img`
  width: 100%;
`;

const Details = styled.div`
  position: absolute;
  padding-left: 1em;
  padding-right: 1em;
  width: 90%;
  top: 90%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
`;

const Overlay = styled.div`
  background: rgba(117, 77, 99, 0.75);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`;

const Div = styled.div`
  position: relative;
  margin: auto;
  width: 515px;
  height: 558px;
  margin: 1em;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

function PortfolioItem({ title, description }) {
  return (
    <div style={{ margin: "1em 0" }}>
      <Div className="content">
        <Overlay className="content-overlay" />
        <Img className="content-image" src={Background} />
        <Details className="content-details fadeIn-bottom">
          <Row alignitems="center">
            <Line />
            <Text white>{title}</Text>
          </Row>
          <Text small>{description}</Text>
        </Details>
      </Div>
    </div>
  );
}

export default class Portfolio extends Component {
  render() {
    const { work } = this.props;
    const first = work.slice(0, 2);
    const second = work.slice(2, 4);

    return (
      <Wrapper>
        <Column alignitems="center">
          {first.map((key, index) => {
            return (
              <PortfolioItem
                key={index}
                title={key.title}
                description={key.description}
              />
            );
          })}
          <Row width="80%" margin="2em 0">
            <Text>
              A little taste of our accomplishments… ranging from
              engineering-intensive to creative overload.
            </Text>
          </Row>
        </Column>
        <Column alignitems="center">
          <Row width="80%" margin="2em 0">
            <Text>
              Catatek is a full service engineering agency with the experience
              to overcome any technological challenge your organization may
              face.
            </Text>
          </Row>

          {second.map((key, index) => {
            return (
              <PortfolioItem
                key={index}
                title={key.title}
                description={key.description}
              />
            );
          })}
        </Column>
      </Wrapper>
    );
  }
}
