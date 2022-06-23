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
import { Helmet } from "react-helmet";

function App() {
  const imgURL =
    window.innerWidth >= 700
      ? "https://fairhurstdevassets.s3.amazonaws.com/neon.jpg"
      : "https://fairhurstdevassets.s3.amazonaws.com/neonMobile.png";
  return (
    <BrowserRouter>
      <Helmet>
        <title>fairhurst.dev</title>
        <meta
          property="og:image"
          content="https://fairhurstdevassets.s3.amazonaws.com/icon.png"
        />
        <meta property="og:title" content="fairhurst.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dev.fairhurst.dev" />
        <meta
          name="description"
          content="fairhurst.dev by Caroline Fairhurst"
        />
        <link
          rel="icon"
          href="https://fairhurstdevassets.s3.amazonaws.com/icon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:title" content="fairhurst.dev" />
        <meta name="twitter:description" content="fairhurst.dev" />
        <meta
          name="twitter:image"
          content="https://fairhurstdevassets.s3.amazonaws.com/icon.png"
        />
        {/*
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://fairhurstdevassets.s3.amazonaws.com/icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://fairhurstdevassets.s3.amazonaws.com/icon.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://fairhurstdevassets.s3.amazonaws.com/icon.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="https://fairhurstdevassets.s3.amazonaws.com/icon.png"
          color="#5bbad5"
        /> */}
      </Helmet>
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
