import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
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

function App() {
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
}

export default App;
