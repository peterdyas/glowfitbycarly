import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {  MarketingFooterBrand, NavBarHeader2, StandardCardCollection  } from './ui-components';


function App() {
  return (
    <div className="App">
      <NavBarHeader2 width={"100vw"}/>
      <StandardCardCollection width={"100vw"}/>
      <MarketingFooterBrand width={"100vw"}/>
    </div>
  );
}

export default App;
