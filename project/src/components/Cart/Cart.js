import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalprice = 0;
    for (let i =0; i < cart.length; i++) {
        const product = cart[i];
        totalprice = totalprice + product.price;
    }
    return (
        <div>
            <h1>This is Cart:{cart.length}</h1>
            <p>Total Price: {totalprice} </p>
        </div>
    );
};

export default Cart;