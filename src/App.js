import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import CaseStudy from "./components/screens/CaseStudy";
import FeedForward from "./assets/feedForwardMock.webp";
import UrbanCrop from "./assets/farmAppMock.webp";
import Subchannel from "./assets/subchannel.webp";
import HireHumanely from "./assets/hireHumanlyMock.webp";
import Creative from "./assets/creativeMock.webp";
import NGT from "./assets/ngt.webp";

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
            link: "/casestudy/feedforward",
            description:
              "Feed Forward is a mobile software as a service (SaaS) offering designed to assist post-graduate medical students with completing their required professional activities, while holding academic medical doctors accountable with evaluations.",
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
            link: "/casestudy/subchannel",
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
            image: HireHumanely,
            title: "HireHumanely",
            description:
              "HireHumanely is a A.I. assistant for enterprise recruiting.",
            services: ["Web Design", "Web Development"]
          },
          {
            image: Creative,
            title: "Creative114",
            link: "/casestudy/creative114",
            description:
              "Creative114 is a marketing agency with a focus in providing value to customers from small to large.",
            services: ["Web Design", "Web Development", "Creative Services"]
          },
          {
            image: NGT,
            title: "Next Generation Tech 360",
            link: "/casestudy/ngt",
            description:
              "NGT is training and developing the next generation of tech stars and business leaders in America by connecting students with community experts. Through the involvement of business community mentors, this program allows leaders in Technology to inspire the next generation by sharing real world experience and fostering young talent to stretch beyond programming.",
            services: ["Web Design", "Web Development", "Creative Services"]
          },
          {
            image: UrbanCrop,
            title: "UrbanCrop",
            link: "/casestudy/urbancrop",
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
    const { portfolio } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home portfolio={portfolio} onEnter={window.scrollTo(0, 0)} />
              );
            }}
          />
          <Route
            path="/casestudy/:id"
            render={() => {
              return (
                <CaseStudy
                  portfolio={portfolio}
                  onEnter={window.scrollTo(0, 0)}
                />
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
