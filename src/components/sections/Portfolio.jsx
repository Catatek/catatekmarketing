import React, { Component } from "react";
import styled from "styled-components";
import { Column, Text, Row } from "../theme/index";
// import {Link, withRouter} from 'react-router'

const Line = styled.div`
  background-color: #fff;
  width: 125px;
  height: 12px;
  margin: 0 1em 0 -2em;
  @media (max-width: 525px) {
    width: 74px;
    height: 7px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  margin: 6em auto;
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
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
  background: rgba(117, 77, 99, 0.85);
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
  width: 95%;
  height: 100%;
  max-width: 600px;
  margin: 1em;
  border-radius: 3px;
  cursor: pointer;
  @media (min-width: 2000px) {
    max-width: 850px;
  }
  @media (min-width: 3000px) {
    max-width: 1012px;
  }
  @media (max-width: 780px) {
    width: 425px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
`;

const StyledRow = styled(Row)`
  width: 80%;
  margin: 2em 0;
  max-width: 600px;
  @media (max-width: 500px) {
    width: 90%;
    margin: 1em 0;
  }
  @media (max-width: 780px) {
    text-align: center;
  }
  @media (min-width: 2000px) {
    max-width: 850px;
  }
`;

function PortfolioItem({ title, description, image, services, link }) {
  return (
    <div style={{ margin: "1em 0" }}>
      {/* <Link to={`/${link}`}> */}
      <Div className="content">
        <Overlay className="content-overlay" />
        <Img src={image} />
        <Details className="content-details fadeIn-bottom">
          <Row alignitems="center">
            <Line />
            <Text white>{title}</Text>
          </Row>
          <Text small>{description}</Text>
          {services &&
            services.map((key, index) => {
              return (
                <Text services key={index}>
                  {key}
                </Text>
              );
            })}
        </Details>
      </Div>
      {/* </Link> */}
    </div>
  );
}

export default class Portfolio extends Component {
  render() {
    const { work } = this.props;
    const first = work.slice(0, 3);
    const second = work.slice(3, 6);

    return (
      <Wrapper id="work">
        <Column alignitems="center" width="100%">
          {first.map((key, index) => {
            return (
              <PortfolioItem
                key={index}
                title={key.title}
                description={key.description}
                image={key.image}
                services={key.services}
                link={key.link}
              />
            );
          })}
          <StyledRow>
            <Text>
              A little taste of our accomplishments… ranging from
              engineering-intensive to creative overload.
            </Text>
          </StyledRow>
        </Column>
        <Column alignitems="center" width="100%">
          <StyledRow>
            <Text>
              Catatek is a full service engineering agency with the experience
              to overcome any technological challenge your organization may
              face.
            </Text>
          </StyledRow>

          {second.map((key, index) => {
            return (
              <PortfolioItem
                key={index}
                title={key.title}
                description={key.description}
                image={key.image}
                services={key.services}
                link={key.link}
              />
            );
          })}
        </Column>
      </Wrapper>
    );
  }
}
