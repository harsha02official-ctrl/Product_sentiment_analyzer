import React, { useEffect, useState } from "react";
import axios from "axios";

function AIInsights() {

  const [insights, setInsights] = useState(null);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {

    try {

      const response = await axios.get("http://localhost:5000/ai-insights");

      setInsights(response.data);

    } catch (error) {

      // Sample Data

      setInsights({

        summary:
          "Most customers are satisfied with the product. It offers excellent performance, camera quality, and display. Some users reported battery drain and heating issues.",

        pros: [
          "Excellent Camera",
          "Fast Performance",
          "Premium Design",
          "Smooth Display",
          "Good Sound Quality"
        ],

        cons: [
          "Battery Drains Quickly",
          "Heating During Gaming",
          "Slow Charging Speed"
        ],

        sentiment: "Positive",

        score: "87%",

        recommendation:
          "Highly Recommended for users looking for a premium smartphone."

      });

    }

  };

  if (!insights) {

    return (
      <div className="container mt-5 text-center">
        <h3>Loading AI Insights...</h3>
      </div>
    );

  }

  return (

<div className="container mt-4">

<h2 className="text-center text-primary mb-4">

AI Insights & Recommendation

</h2>

<div className="card shadow mb-4">

<div className="card-body">

<h4 className="text-primary">

AI Summary

</h4>

<p>

{insights.summary}

</p>

</div>

</div>

<div className="row">

<div className="col-md-6">

<div className="card shadow">

<div className="card-body">

<h4 className="text-success">

Pros

</h4>

<ul>

{

insights.pros.map((item,index)=>(

<li key={index}>{item}</li>

))

}

</ul>

</div>

</div>

</div>

<div className="col-md-6">

<div className="card shadow">

<div className="card-body">

<h4 className="text-danger">

Cons

</h4>

<ul>

{

insights.cons.map((item,index)=>(

<li key={index}>{item}</li>

))

}

</ul>

</div>

</div>

</div>

</div>

<div className="card shadow mt-4">

<div className="card-body">

<h4 className="text-primary">

Overall Analysis

</h4>

<table className="table table-bordered">

<tbody>

<tr>

<th>Overall Sentiment</th>

<td>

<span className="badge bg-success">

{insights.sentiment}

</span>

</td>

</tr>

<tr>

<th>Sentiment Score</th>

<td>

{insights.score}

</td>

</tr>

<tr>

<th>Recommendation</th>

<td>

{insights.recommendation}

</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

  );

}

export default AIInsights;