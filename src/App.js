import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Template } from "./components/MainComponents";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

export default App;
