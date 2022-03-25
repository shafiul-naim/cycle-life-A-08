import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {name, img, price, id} = props.cycle
    console.log(props.cycle)

    return (
        <div className='product'>
            <img src={img} alt="" />
            <p>name: {name}</p>
            <p>price: ${price}</p>
            <p>id: {id}</p>
        </div>
    );
};

export default Product;