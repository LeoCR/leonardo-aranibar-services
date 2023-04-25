import React from "react";
import { BrowserRouter } from "react-router-dom";
import Services from "./components/services/Services";
import "./main.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
