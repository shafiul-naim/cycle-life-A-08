import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import { AiOutlineDelete } from "react-icons/ai";

const Shop = () => {

    const [cycles, setCycles] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomCycle, setRandomCycle] = useState([])

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCycles(data))
    }, ([]));


    const handleAddToCart = (cycle) => {
    
        const newCart = [...cart, cycle]
        setCart(newCart);
    }


    const chooseOne = () => {
       
        const randomCycle = cart[  
            Math.floor(Math.random() * cart.length)
          ];
          setRandomCycle(`${randomCycle.name}`)
    } ;

    const chooseAgain = () => {
        setCart([]);
        setRandomCycle([]);
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
                <h2 className='cart-title'>Selected Cycles</h2>
                {
                    cart.map((item, index) => 
                    <><div className='selected-cart'
                            key={index}>
                            <img src={item.img} alt="" />
                            <h2>{item.name}</h2>
                            <button><AiOutlineDelete></AiOutlineDelete></button>
                        </div>
                        </>
                    )
                }
                {
                    <>
                    <div className='choose'>
                    <button key={cart.id} onClick={() => chooseOne()}>Choose one</button>
                    <button onClick={() => chooseAgain()}>Choose again</button>
                    </div>
                    </>
                }
                {
                    <div className='chosen'>
                        <h2>{randomCycle}</h2>
                    </div>
                    
                }
              
            </div>
           
        </div>
    );
};

export default Shop;