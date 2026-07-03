import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold">
          Product Sentiment Analyzer & Review Dashboard
        </h1>
        <p className="lead">
          Analyze product reviews from Amazon and Flipkart using
          Sentiment Analysis and visualize customer opinions.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="row">

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Reviews</h5>
              <h2 className="text-primary">1250</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Positive</h5>
              <h2 className="text-success">70%</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Neutral</h5>
              <h2 className="text-warning">20%</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Negative</h5>
              <h2 className="text-danger">10%</h2>
            </div>
          </div>
        </div>

      </div>

      {/* About Project */}
      <div className="card shadow mt-4">
        <div className="card-body">
          <h3 className="text-primary">Project Overview</h3>

          <p>
            This application collects product reviews from
            Amazon and Flipkart using web scraping.
            It analyzes customer opinions using Natural Language
            Processing (NLP) and classifies them as
            <strong> Positive</strong>,
            <strong> Neutral</strong> or
            <strong> Negative</strong>.
          </p>

          <p>
            Users can search products, compare products,
            analyze trends, generate AI insights and
            visualize review statistics through interactive charts.
          </p>

        </div>
      </div>

      {/* Quick Actions */}
      <div className="text-center mt-5">

        <h3 className="mb-4">
          Quick Actions
        </h3>

        <Link
          to="/search"
          className="btn btn-primary m-2"
        >
          Search Product
        </Link>

        <Link
          to="/reviews"
          className="btn btn-success m-2"
        >
          View Reviews
        </Link>

        <Link
          to="/sentiment"
          className="btn btn-warning m-2"
        >
          Sentiment Dashboard
        </Link>

        <Link
          to="/comparison"
          className="btn btn-danger m-2"
        >
          Compare Products
        </Link>

      </div>

    </div>
  );
}

export default Home;