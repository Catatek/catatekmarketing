import React, { Component } from "react";
import Navigation from "./components/shared/Navigation";
import Splash from "./components/sections/Splash";
import Portfolio from "./components/sections/Portfolio";

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
            title: "Feed Forward",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          },
          {
            title: "Subchannel",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          },
          {
            title: "AchieveCE",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          },
          {
            title: "ShareCropper",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
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
      </div>
    );
  }
}

export default App;
