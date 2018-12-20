import React from "react";
import styled from "styled-components";
import Splash from "../sections/Splash";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import Content from "../shared/Content";
import FeedForward from "../../assets/feedForwardMock.png";

export default function CaseStudy() {
  return (
    <div>
      <Navigation />
      <Splash type="casestudy" img={FeedForward} />
      <Content title="FeedForward" text="Lorem Ipsum" />
      <Footer />
    </div>
  );
}
