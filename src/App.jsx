import React, { Component } from "react";
import Alert from "./Components/Alert.jsx";
import SectionFour from "./Components/SectionFour.jsx";
import SectionFive from "./Components/SectionFive.jsx";
import SectionSix from "./Components/SectionSix.jsx";
import Footer from "./Components/Footer.jsx";
import FirstThreeSection from "./Components/FirstThreeSection.jsx";
// Styles CSS
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import Navigation from "./Components/Navigation.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Alert />
        <FirstThreeSection
          wrapperName="first-hightlight-wrapper"
          title="iPad Pro"
          ipodCaption="iPad Pro available starting 3.25"
          magic="Magic Keyboard coming in May"
          New
          Order
        />
        <FirstThreeSection
          wrapperName="second-hightlight-wrapper"
          title="MacBook Air"
          description
          price
          New
          Buy
        />
        <FirstThreeSection
          wrapperName="third-hightlight-wrapper"
          titleTwo="iPhone 11 Pro"
          descriptionTwo
          priceTwo
          Buy
        />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </div>
    );
  }
}

export default App;
