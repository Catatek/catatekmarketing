import React, { Component } from "react";
import Navigation from "./components/shared/Navigation";
import Splash from "./components/sections/Splash";
import Portfolio from "./components/sections/Portfolio";
import Content1 from "./components/shared/Content1";
import Content2 from "./components/shared/Content2";
import Footer from "./components/shared/Footer";
import FeedForward from "./assets/feedForwardMock.png";
import ShareCropper from "./assets/farmAppMock.png";
import Subchannel from "./assets/subchannelMock.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: []
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        portfolio: [
          {
            image: FeedForward,
            title: "Feed Forward",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            services: [
              "UI/UX",
              "Native Development",
              "Web Development",
              "Creative Services",
              "Business Consulting"
            ]
          },
          {
            image: Subchannel,
            title: "Subchannel",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            services: [
              "UI/UX",
              "Web Design",
              "Web Development",
              "Creative Services",
              "Business Consulting"
            ]
          },
          {
            image: ShareCropper,
            title: "ShareCropper",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            services: [
              "UI/UX",
              "Native Development",
              "Web Development",
              "Creative Services",
              "Business Consulting"
            ]
          }
        ]
      };
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Splash />
        <Portfolio work={this.state.portfolio} />
        <Content1 type="description" title="Fueled by passion" />
        <Content2 type="services" color="#754d63" title="Services" />
        <Content1 type="avatars" title="Technologists with a purpose" />
        <Content2 type="contact" color="#C93F50" title="Contact" />
        <Footer />
      </div>
    );
  }
}

export default App;
