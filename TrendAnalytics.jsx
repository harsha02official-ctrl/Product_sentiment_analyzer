import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";

function TrendAnalytics() {

  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    fetchTrendData();
  }, []);

  const fetchTrendData = async () => {

    try {

      const response = await axios.get("http://localhost:5000/trends");

      setTrendData(response.data);

    } catch {

      // Sample Data

      setTrendData([
        {
          month: "Jan",
          reviews: 120,
          sentiment: 65
        },
        {
          month: "Feb",
          reviews: 180,
          sentiment: 70
        },
        {
          month: "Mar",
          reviews: 240,
          sentiment: 75
        },
        {
          month: "Apr",
          reviews: 310,
          sentiment: 82
        },
        {
          month: "May",
          reviews: 370,
          sentiment: 88
        },
        {
          month: "Jun",
          reviews: 420,
          sentiment: 91
        }
      ]);

    }

  };

  return (

<div className="container mt-4">

<h2 className="text-center text-primary mb-4">

Trend Analytics

</h2>

<div className="row">

<div className="col-md-6">

<div className="card shadow p-3">

<h4 className="text-center">

Monthly Sentiment Trend

</h4>

<ResponsiveContainer width="100%" height={300}>

<LineChart data={trendData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Legend/>

<Line
type="monotone"
dataKey="sentiment"
stroke="#28a745"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

</div>

<div className="col-md-6">

<div className="card shadow p-3">

<h4 className="text-center">

Monthly Reviews

</h4>

<ResponsiveContainer width="100%" height={300}>

<BarChart data={trendData}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="month"/>

<YAxis/>

<Tooltip/>

<Legend/>

<Bar
dataKey="reviews"
fill="#007bff"
/>

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>

<div className="card shadow mt-5">

<div className="card-body">

<h4 className="mb-3">

Trend Analysis Table

</h4>

<table className="table table-bordered table-hover">

<thead className="table-primary">

<tr>

<th>Month</th>

<th>Total Reviews</th>

<th>Positive Sentiment (%)</th>

</tr>

</thead>

<tbody>

{

trendData.map((item,index)=>(

<tr key={index}>

<td>{item.month}</td>

<td>{item.reviews}</td>

<td>{item.sentiment}%</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

</div>

);

}

export default TrendAnalytics;