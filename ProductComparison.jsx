import React, { useState } from "react";
import axios from "axios";

function ProductComparison() {

  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");

  const [comparison, setComparison] = useState(null);

  const compareProducts = async () => {

    if(product1 === "" || product2 === ""){
      alert("Please enter both product names.");
      return;
    }

    try{

      const response = await axios.get(
        `http://localhost:5000/compare?product1=${product1}&product2=${product2}`
      );

      setComparison(response.data);

    }

    catch(error){

      // Sample Data

      setComparison({

        product1:{
          name:product1,
          rating:4.6,
          reviews:1200,
          positive:82,
          neutral:10,
          negative:8
        },

        product2:{
          name:product2,
          rating:4.3,
          reviews:980,
          positive:74,
          neutral:15,
          negative:11
        }

      });

    }

  };

  return (

<div className="container mt-4">

<h2 className="text-center text-primary mb-4">

Product Comparison

</h2>

<div className="card shadow p-4">

<div className="row">

<div className="col-md-5">

<input

type="text"

className="form-control"

placeholder="Enter Product 1"

value={product1}

onChange={(e)=>setProduct1(e.target.value)}

/>

</div>

<div className="col-md-5">

<input

type="text"

className="form-control"

placeholder="Enter Product 2"

value={product2}

onChange={(e)=>setProduct2(e.target.value)}

/>

</div>

<div className="col-md-2">

<button

className="btn btn-primary w-100"

onClick={compareProducts}

>

Compare

</button>

</div>

</div>

</div>

{

comparison && (

<div className="card shadow mt-5">

<div className="card-body">

<h3 className="text-center mb-4">

Comparison Result

</h3>

<table className="table table-bordered table-hover">

<thead className="table-primary">

<tr>

<th>Feature</th>

<th>{comparison.product1.name}</th>

<th>{comparison.product2.name}</th>

</tr>

</thead>

<tbody>

<tr>

<td>⭐ Rating</td>

<td>{comparison.product1.rating}</td>

<td>{comparison.product2.rating}</td>

</tr>

<tr>

<td>Total Reviews</td>

<td>{comparison.product1.reviews}</td>

<td>{comparison.product2.reviews}</td>

</tr>

<tr>

<td className="text-success">

Positive Reviews

</td>

<td>{comparison.product1.positive}%</td>

<td>{comparison.product2.positive}%</td>

</tr>

<tr>

<td className="text-warning">

Neutral Reviews

</td>

<td>{comparison.product1.neutral}%</td>

<td>{comparison.product2.neutral}%</td>

</tr>

<tr>

<td className="text-danger">

Negative Reviews

</td>

<td>{comparison.product1.negative}%</td>

<td>{comparison.product2.negative}%</td>

</tr>

</tbody>

</table>

</div>

</div>

)

}

</div>

  );

}

export default ProductComparison;