import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SearchProduct from "./pages/SearchProduct";
import Reviews from "./pages/Reviews";
import SentimentDashboard from "./pages/SentimentDashboard";
import TrendAnalytics from "./pages/TrendAnalytics";
import WordCloudPage from "./pages/WordCloudPage";
import ProductComparison from "./pages/ProductComparison";
import AIInsights from "./pages/AIInsights";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchProduct />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/sentiment" element={<SentimentDashboard />} />
        <Route path="/trend" element={<TrendAnalytics />} />
        <Route path="/wordcloud" element={<WordCloudPage />} />
        <Route path="/comparison" element={<ProductComparison />} />
        <Route path="/insights" element={<AIInsights />} />
      </Routes>
    </Router>
  );
}

export default App;