import "./App.css";
import React from "react";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import Mirror from "./components/pages/Mirror";
import theme from "./theme";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const imgURL =
    window.innerWidth >= 700
      ? "https://fairhurstdevassets.s3.amazonaws.com/neon.jpg"
      : "https://fairhurstdevassets.s3.amazonaws.com/neonMobile.png";
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundImage: `url(${imgURL})`,
            backgroundColor: "primary.main",
          }}
          className="App"
        >
          <Header />
          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/mirror" element={<Mirror />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>{" "}
          <Footer />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
