import "./App.css";
import React, { useState } from "react";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [page, setPage] = useState("home");

  function handleSetPage(page) {
    setPage(page);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundImage: "url(/assets/neon.jpg)",
      }}
      className="App"
    >
      <ThemeProvider theme={theme}>
        {" "}
        <Header goTo={handleSetPage} />
        {page === "home" && <Home goTo={handleSetPage} />}
        {page === "about" && <About />}
        {page === "portfolio" && <Portfolio />}
        {page === "contact" && <Contact />}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
