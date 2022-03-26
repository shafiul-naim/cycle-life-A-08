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
                <h2>Selected Cycles</h2>
                {
                    cart.map((item, index) => 
                    <div key={index} className='selected-cart'>
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                    )
                }
                {
                    <div className='cart-btn'>
                        <button>Choose one</button>
                        <button>Choose again</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Shop;