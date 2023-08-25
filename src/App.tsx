import React from "react";
import "./assets/styles/styles.scss";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Work from "./pages/Work";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <div className="w-full">
      <Header />
      <HomePage />
      <About />
      {/* <Work /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
