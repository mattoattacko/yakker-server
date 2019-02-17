import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./styles.scss";
import Header from "./header.js";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <App />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);