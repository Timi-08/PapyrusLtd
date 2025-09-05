import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import SiteMap from "./pages/Sitemap";
import Contact from "./pages/Contact";
import CategorySection from "./components/CategorySection";
import ItemDetails from "./pages/ItemDetails";
import Ticker from "./components/Ticker";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === images.length) setLoading(false);
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) setLoading(false);
        });
        img.addEventListener("error", () => {
          loadedCount++;
          if (loadedCount === images.length) setLoading(false);
        });
      }
    });

    // Fallback in case something fails to load
    const timeout = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <Spin indicator={antIcon} size="large" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CategorySection />} />
          <Route path="category/:categoryName" element={<CategorySection />} />
        </Route>
        <Route path="/item/:itemId" element={<ItemDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <Ticker />
    </Router>
  );
};

export default App;
