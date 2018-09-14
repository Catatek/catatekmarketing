import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 575px;
  height: 624px;
  background-color: #754d63;
`;

const Text = styled.p``;

function PortfolioItem({ title, description }) {
  return (
    <Item>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Item>
  );
}

export default function Portfolio({ work }) {
  return (
    <div>
      {work.map((key, index) => {
        return (
          <PortfolioItem
            title={key.title}
            key={index}
            description={key.description}
          />
        );
      })}
    </div>
  );
}
