import React, { Component } from "react";
import Navigation from "../shared/Navigation";
import Splash from "../sections/Splash";
import Portfolio from "../sections/Portfolio";
import Content1 from "../shared/Content1";
import Content2 from "../shared/Content2";
import Footer from "../shared/Footer";
import Helmet from "react-helmet";

import Logos from "../shared/Logos";

class Home extends Component {
  render() {
    const { portfolio } = this.props;
    return (
      <div>
        <Helmet
          title="Catatek | Technologists for hire"
          meta={[
            { name: "description", content: "Home Page for Catatek" },
            { property: "og:type", content: "website" },
            {
              property: "og:title",
              content: "Technologists for hire"
            },
            { property: "og:url", content: "https://catatek.com" }
          ]}
        />
        <Navigation />
        <Splash type="home" />
        <Portfolio work={portfolio} />
        <Content1 type="description" title="Fueled by passion" />
        <Content2 type="services" color="#754d63" title="Services" />
        <Content1 type="avatars" title="Technologists with a purpose" />
        <Logos />
        <Content2 type="contact" color="#C93F50" title="Contact" />
        <Footer />
      </div>
    );
  }
}

export default Home;
