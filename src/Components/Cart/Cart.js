import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let totalCost = cart.reduce((accumulator , currentValue) => accumulator + parseFloat(currentValue.salary),0 )
    
    return (
        <div className="cart-details">
            <h2>Players In My Club: {cart.length}</h2>
           
            {
                cart.map(player => <li style={{listStyle : 'none'}}><h5>{player.name}: €{player.salary}M</h5></li>)
            }

            <br/>
            <p>Total Cost : €{totalCost.toFixed(2)}M</p>
        </div>
    );
};

export default Cart;