import React from 'react';

const Cart = ({item}) => {
    const {name, img} = item;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Cart;