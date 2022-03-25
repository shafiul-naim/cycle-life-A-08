import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [cycles, setCycles] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCycles(data))
    }, ([]));


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cycles.map(cycle => <Product 
                        key={cycle.id}
                        cycle={cycle}
                        ></Product>)
                }
            </div>

            <div className="cart-container">
                <h3>this is cart</h3>
            </div>
        </div>
    );
};

export default Shop;