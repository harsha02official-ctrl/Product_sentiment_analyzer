import React, { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {

  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [search, setSearch] = useState("");
  const [sentiment, setSentiment] = useState("All");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {

    try {

      const response = await axios.get("http://localhost:5000/reviews");

      setReviews(response.data);
      setFilteredReviews(response.data);

    } catch {

      // Sample Data

      const sampleReviews = [

        {
          id:1,
          product:"Samsung S24",
          rating:5,
          review:"Excellent camera quality and battery backup.",
          sentiment:"Positive"
        },

        {
          id:2,
          product:"Samsung S24",
          rating:4,
          review:"Display is very smooth.",
          sentiment:"Positive"
        },

        {
          id:3,
          product:"Samsung S24",
          rating:3,
          review:"Average performance.",
          sentiment:"Neutral"
        },

        {
          id:4,
          product:"Samsung S24",
          rating:2,
          review:"Battery drains quickly.",
          sentiment:"Negative"
        },

        {
          id:5,
          product:"Samsung S24",
          rating:1,
          review:"Very poor charging speed.",
          sentiment:"Negative"
        }

      ];

      setReviews(sampleReviews);
      setFilteredReviews(sampleReviews);

    }

  };

  const filterReviews = () => {

    let data = reviews;

    if(sentiment !== "All"){
      data = data.filter(
        item => item.sentiment === sentiment
      );
    }

    if(search !== ""){
      data = data.filter(
        item =>
        item.review.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredReviews(data);

  };

  useEffect(()=>{
      filterReviews();
  },[search,sentiment]);

  return (

<div className="container mt-4">

<h2 className="text-center text-primary mb-4">

Customer Reviews

</h2>

<div className="card shadow p-4 mb-4">

<div className="row">

<div className="col-md-6">

<input

type="text"

className="form-control"

placeholder="Search Reviews"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>

</div>

<div className="col-md-6">

<select

className="form-select"

value={sentiment}

onChange={(e)=>setSentiment(e.target.value)}

>

<option>All</option>

<option>Positive</option>

<option>Neutral</option>

<option>Negative</option>

</select>

</div>

</div>

</div>

<table className="table table-bordered table-hover shadow">

<thead className="table-primary">

<tr>

<th>ID</th>

<th>Product</th>

<th>Rating</th>

<th>Review</th>

<th>Sentiment</th>

</tr>

</thead>

<tbody>

{

filteredReviews.map((item)=>(

<tr key={item.id}>

<td>{item.id}</td>

<td>{item.product}</td>

<td>{"⭐".repeat(item.rating)}</td>

<td>{item.review}</td>

<td>

{

item.sentiment==="Positive"

?

<span className="badge bg-success">

Positive

</span>

:

item.sentiment==="Neutral"

?

<span className="badge bg-warning text-dark">

Neutral

</span>

:

<span className="badge bg-danger">

Negative

</span>

}

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default Reviews;