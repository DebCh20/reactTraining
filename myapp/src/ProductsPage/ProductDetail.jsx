import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import product from './product';
import { useState, useEffect } from 'react';
import axios from 'axios'

function ProductDetail() {
    let { prodid } = useParams();
    let [data,setData]=useState([])

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products/'+prodid)
        .then((resp)=>{setData(resp.data)})
        .catch((err)=>{console.log(err)});  
     },[]);

  return (
    <div>
      <h1>Product Detail</h1>
      <br/>
      <img src={data.image} className="card-img-top" alt="..." style={{height: '10rem', width: '10rem'}}/>
      <h3>Product id: {prodid}</h3>
      <h3>Title: {data.title}</h3>
      <h3>Price: Rs. {data.price}</h3>
    </div>
  );
}

export default ProductDetail