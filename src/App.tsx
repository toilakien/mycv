import React from "react";
import Routes from "./routes";
import "./assets/styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
