import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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


    const chooseOne = () => {
        console.log(cart)
       
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
               
               <h3>Selected ones</h3>
                {
                    cart.map(item => <Cart key={item.id}
                    item={item}
                    ></Cart>)
                }
                
            </div>
        </div>
    );
};

export default Shop;