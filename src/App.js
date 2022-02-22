import React from "react";
import HomePage from "./components/pages/homePage/homePage.component";
import "./styles.css";
import Header from "./components/header/header.component";
import AboutPage from "./components/pages/aboutPage/aboutPage.component";
import { Routes, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route extact path="/" element={<HomePage />} />
          <Route extact path="about" element={<AboutPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
