import React from 'react'
import product from './product'
import { Link } from 'react-router-dom'

function ProductGallery() {
  return (  
    <div className='galleryComp' style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
    {product.map((item) => (
        <div className="card" style={{width: '20rem', height:'25rem', overflow: 'auto'}}>
            <img src={item.image} className="card-img-top" alt="..." style={{height: '10rem', width: '10rem'}} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <Link to={"/productDetail/"+item.id} className="btn btn-primary">prod details</Link>
            </div>
        </div>
    ))}
</div>

  )
}

export default ProductGallery