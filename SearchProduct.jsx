import React, { useState } from "react";
import axios from "axios";

function SearchProduct() {

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const searchProduct = async () => {

    if (productName === "") {
      alert("Please enter a product name");
      return;
    }

    setLoading(true);

    try {

      // Backend API
      const response = await axios.get(
        `http://localhost:5000/search?product=${productName}&category=${category}`
      );

      setProduct(response.data);

    } catch (error) {

      // Sample Data (until backend is ready)

      setProduct({
        name: productName,
        category: category,
        rating: 4.5,
        totalReviews: 1250,
        positive: 70,
        neutral: 20,
        negative: 10,
        image:
          "https://via.placeholder.com/250x250.png?text=Product+Image"
      });

    }

    setLoading(false);
  };

  return (

<div className="container mt-4">

<h2 className="text-center text-primary mb-4">
Search Product
</h2>

<div className="card shadow p-4">

<div className="row">

<div className="col-md-5">

<input
type="text"
className="form-control"
placeholder="Enter Product Name"
value={productName}
onChange={(e)=>setProductName(e.target.value)}
/>

</div>

<div className="col-md-3">

<select
className="form-select"
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option>All</option>
<option>Mobile</option>
<option>Laptop</option>
<option>Headphones</option>
<option>Smart Watch</option>

</select>

</div>

<div className="col-md-4">

<button
className="btn btn-primary w-100"
onClick={searchProduct}
>

Search Product

</button>

</div>

</div>

</div>

{loading && (

<div className="text-center mt-4">

<div className="spinner-border text-primary"></div>

<p>Searching...</p>

</div>

)}

{product && (

<div className="card shadow mt-5">

<div className="row g-0">

<div className="col-md-4 text-center">

<img
src={product.image}
alt="Product"
className="img-fluid p-3"
/>

</div>

<div className="col-md-8">

<div className="card-body">

<h3>{product.name}</h3>

<p>

<strong>Category :</strong>

{product.category}

</p>

<p>

<strong>Rating :</strong>

⭐ {product.rating}

</p>

<p>

<strong>Total Reviews :</strong>

{product.totalReviews}

</p>

<hr/>

<h5 className="text-success">

Positive Reviews :

{product.positive}%

</h5>

<h5 className="text-warning">

Neutral Reviews :

{product.neutral}%

</h5>

<h5 className="text-danger">

Negative Reviews :

{product.negative}%

</h5>

</div>

</div>

</div>

</div>

)}

</div>

);

}

export default SearchProduct;