import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const imgURL =
    window.innerWidth >= 700 ? "/assets/neon.jpg" : "/assets/neonMobile.png";

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundImage: `url(${imgURL})`,
        }}
        className="App"
      >
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>{" "}
          <Footer />
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
