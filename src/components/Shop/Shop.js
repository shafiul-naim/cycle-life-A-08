import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [cycles, setCycles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCycles(data))
    }, ([]));


    const handleAddToCart = (cycle) => {
    
        const newCart = [...cart, cycle]
        setCart(newCart);
        console.log(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cycles.map(cycle => <Product 
                        key={cycle.id}
                        cycle={cycle}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <h3>this is cart</h3>
                {
                    cart.map((item, index) => <h2 key={index}>{item.name}</h2>)
                }
            </div>
        </div>
    );
};

export default Shop;