import { BsCart } from "react-icons/bs";
import React from 'react';
import './Product.css'

const Product = ({cycle, handleAddToCart}) => {
    
    const {name, img, price} = cycle;

    return (
        <div className='product'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
            <h2 className="product-title">{name}</h2>
            <p className="product-price"> Price: ${price}</p>
            </div>
             <button className="btn-cart" onClick={() => handleAddToCart(cycle)}>
                    <p className='btn-text'>Add to cart</p>
                    <p><BsCart className='icon'></BsCart></p>
            </button>
        </div>
    );
};

export default Product;