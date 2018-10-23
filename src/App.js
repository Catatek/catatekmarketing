import React, { Component } from "react";
import Navigation from "./components/shared/Navigation";
import Splash from "./components/sections/Splash";
import Portfolio from "./components/sections/Portfolio";
import Content1 from "./components/shared/Content1";
import Content2 from "./components/shared/Content2";
import Footer from "./components/shared/Footer";
import FeedForward from "./assets/feedForwardMock.png";
import UrbanCrop from "./assets/farmAppMock.png";
import Subchannel from "./assets/subchannel.png";
import Engagitech from "./assets/engagitech.png";
import NGT from "./assets/ngt.png";

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
              "Feed Forward is a mobile software as a service (SaaS) offering designed to assist post-graduate medical students with completing their required professional activities, while holding academic medical doctors accountable with evaluations. Our infrastructure will offer organizations, such as medical schools, hospitals, and residency programs greater insight and analytics into how their academic body is performing.",
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
            link: "http://subchannel.tv/",
            description:
              "Subchannel is a web-based software as a service (SaaS) offering that enables creators to launch their own video-streaming service and create cashflows from subscription models. The mission is to empower creators to partner in long term, sustainable broadcast businesses that enriches the world. ",
            services: [
              "UI/UX",
              "Web Design",
              "Web Development",
              "Creative Services",
              "Business Consulting"
            ]
          },
          {
            image: NGT,
            title: "Next Generation Tech 360",
            description:
              "NGT is training and developing the next generation of tech stars and business leaders in America by connecting students with community experts. Through the involvement of business community mentors, this program allows leaders in Technology to inspire the next generation by sharing real world experience and fostering young talent to stretch beyond programming.",
            services: ["Web Design", "Web Development", "Creative Services"]
          },
          {
            image: UrbanCrop,
            title: "UrbanCrop",
            description:
              "UrbanCrop is a native application that enables hobbyist and professional farmers alike to sell their produce direct to the community by creating virtual, localized farmers markets. Our mission is to localize produce consumption by providing an an easy-to-use interface to sell your crops online. Catatek is the original ideator and developers behind ShareCropper.",
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
