import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import product from './product';

function ProductDetail() {
    let { prodid } = useParams();
  let products = product.find((item) => item.id == prodid);
  return (
    <div>
      <h1>Product Detail</h1>
      <br/>
      <img src={products.image} className="card-img-top" alt="..." style={{height: '10rem', width: '10rem'}}/>
      <h3>Product id: {prodid}</h3>
      <h3>Title: {products.title}</h3>
      <h3>Price: Rs. {products.price}</h3>
    </div>
  );
}

export default ProductDetail