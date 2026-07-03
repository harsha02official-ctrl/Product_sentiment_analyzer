import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function SentimentDashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {

      const response = await axios.get("http://localhost:5000/sentiment");

      setData(response.data);

    } catch {

      // Sample Data

      setData([
        { name: "Positive", value: 70 },
        { name: "Neutral", value: 20 },
        { name: "Negative", value: 10 }
      ]);

    }

  };

  const COLORS = ["#28a745", "#ffc107", "#dc3545"];

  return (

<div className="container mt-4">

<h2 className="text-center text-primary mb-4">

Sentiment Dashboard

</h2>

<div className="row mb-4">

<div className="col-md-4">

<div className="card shadow text-center">

<div className="card-body">

<h5>Total Reviews</h5>

<h2>1250</h2>

</div>

</div>

</div>

<div className="col-md-4">

<div className="card shadow text-center">

<div className="card-body">

<h5>Average Rating</h5>

<h2>4.5 ⭐</h2>

</div>

</div>

</div>

<div className="col-md-4">

<div className="card shadow text-center">

<div className="card-body">

<h5>Overall Sentiment</h5>

<h2 className="text-success">

Positive

</h2>

</div>

</div>

</div>

</div>

<div className="row">

<div className="col-md-6">

<div className="card shadow p-3">

<h4 className="text-center">

Pie Chart

</h4>

<ResponsiveContainer width="100%" height={300}>

<PieChart>

<Pie

data={data}

dataKey="value"

nameKey="name"

outerRadius={100}

label

>

{

data.map((entry,index)=>(

<Cell

key={index}

fill={COLORS[index % COLORS.length]}

/>

))

}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</div>

</div>

<div className="col-md-6">

<div className="card shadow p-3">

<h4 className="text-center">

Bar Chart

</h4>

<ResponsiveContainer width="100%" height={300}>

<BarChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Legend/>

<Bar

dataKey="value"

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

Sentiment Statistics

</h4>

<table className="table table-bordered">

<thead className="table-primary">

<tr>

<th>Sentiment</th>

<th>Percentage</th>

</tr>

</thead>

<tbody>

{

data.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>

<td>{item.value}%</td>

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

export default SentimentDashboard;