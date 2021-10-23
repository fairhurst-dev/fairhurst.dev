import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import About from "./components/pages/About";
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
    <div className="App">
      <ThemeProvider theme={theme}>
        {" "}
        <Header goTo={handleSetPage} />
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
