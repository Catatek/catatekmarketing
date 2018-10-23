import React from "react";
import styled from "styled-components";
import { Line, Column } from "../theme/index";
import Globe from "../../assets/globe.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: calc(80vh - 105px);
  bottom: 0;
  align-items: center;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 6em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#754D63"};
  margin: 0;
  @media (max-width: 500px) {
    font-size: 3em;
  }
`;

const Img = styled.img`
  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
  }
`;

const StyledColumn = styled(Column)`
  @media (max-width: 768px) {
    margin: 1.5em 0;
  }
`;

function Flame() {
  return (
    <svg width="140px" height="265px" viewBox="0 0 192 363" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Catatek" transform="translate(-1015.000000, -140.000000)">
          <g id="Group-3" transform="translate(1015.000000, 140.000000)">
            <g
              id="if_19_641438"
              transform="translate(0.000000, 194.000000)"
              fill-rule="nonzero"
            >
              <g id="Group">
                <polygon
                  id="Shape"
                  fill="#47566E"
                  points="121.203419 168.080729 70.7965812 168.080729 57.407265 78.7213542 134.592735 78.7213542"
                />
                <path
                  d="M6.21282051,10.5260417 C22.7525641,43.4479167 56.6196581,66.1796875 96,66.1796875 C135.380342,66.1796875 169.247436,43.4479167 185.787179,10.5260417 L6.21282051,10.5260417 Z"
                  id="Shape"
                  fill="#657898"
                />
                <path
                  d="M148.769658,66.1796875 L43.2303419,66.1796875 C38.5047009,66.1796875 34.5666667,62.2604167 34.5666667,57.5572917 C34.5666667,52.8541667 38.5047009,48.9348958 43.2303419,48.9348958 L148.769658,48.9348958 C153.495299,48.9348958 157.433333,52.8541667 157.433333,57.5572917 C157.433333,62.2604167 153.495299,66.1796875 148.769658,66.1796875 Z"
                  id="Shape"
                  fill="#47566E"
                />
                <path
                  d="M136.167949,84.2083333 L55.8320513,84.2083333 C51.1064103,84.2083333 47.1683761,80.2890625 47.1683761,75.5859375 C47.1683761,70.8828125 51.1064103,66.9635417 55.8320513,66.9635417 L136.167949,66.9635417 C140.89359,66.9635417 144.831624,70.8828125 144.831624,75.5859375 C144.831624,80.2890625 140.89359,84.2083333 136.167949,84.2083333 Z"
                  id="Shape"
                  fill="#657898"
                />
                <rect
                  id="Rectangle-path"
                  fill="#47566E"
                  x="0.69957265"
                  y="0.3359375"
                  width="190.600855"
                  height="10.9739583"
                />
              </g>
            </g>
            <g
              className="container"
              id="Flame"
              transform="translate(31.000000, 0.000000)"
            >
              <path
                className="flame"
                d="M11.0200604,138.948528 C8.39923925,165.379989 31.2807635,176.468998 47.5328705,181.551998 C53.5944312,183.447808 49.8375776,182.401896 51.5578217,182.815047 C51.5578217,182.815047 54.0396191,183.326553 47.9051422,180.308002 C40.4286456,176.629093 34.9037703,171.369508 35.8364957,161.962696 C37.0123546,150.104135 42.0936553,145.811368 51.6848207,132.833317 C58.5781977,123.505716 66.3627801,110.706235 72.0856308,91.8022871 C92.451679,108.928479 101.185224,118.893577 105.254112,139.573185 C109.323047,160.252815 88.731482,181.15314 88.731482,181.15314 C149.504524,137.15395 137.724746,86.270483 57.5723292,32.2941176 C47.2733914,102.183851 14.6022877,102.820921 11.0200604,138.948528 Z"
                id="lowerPath"
                fill="#C93F50"
                opacity="0.751004464"
              />
              <path
                className="flame"
                d="M0.228313774,112.686513 C-3.63445398,151.028585 42.7034603,180.616835 49.5013874,182.223735 C49.5013874,182.223735 41.2752744,179.010749 36.2139254,171.755303 C29.6053099,162.28185 25.8363751,147.248616 26.868627,137.002305 C28.1309055,124.473053 33.5856551,119.937498 43.881721,106.225442 C51.281725,96.3702951 59.6384335,82.8469074 65.7818837,62.8738006 C87.6447298,80.968606 91.8692997,88.3707215 107.110943,112.686513 C122.352587,137.002305 99.0934842,170.722529 99.0934842,170.722529 C164.333027,124.234857 136.24513,57.0291317 50.2019304,0 C39.1460747,73.8425197 4.07381601,74.5156206 0.228313774,112.686513 Z"
                id="higherPath"
                fill="#754D63"
                opacity="0.712444196"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function Splash() {
  return (
    <Wrapper>
      <Column>
        <Title>Make</Title>
        <Title>Something</Title>
        <Title color="#C93F50">Amazing</Title>
      </Column>
      <StyledColumn>
        <Img className="globe" src={Globe} alt="abstract thing" />
      </StyledColumn>
      <Line primary bottom="13.5em" />
    </Wrapper>
  );
}
