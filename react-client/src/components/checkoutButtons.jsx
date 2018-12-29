import React from 'react';


const CheckoutButtons = ({loggedIn}) => {
  return (
    <div className="buttons">
    <button type="button" id="checkoutButton"><b>Add To Cart</b></button>
    <hr / >
    {(!loggedIn ?
      <span><a href="#"> Turn on 1-Click ordering for this browser </a> </span> :
      <button type="button" id="oneClickCheckout"><b>Buy now with 1-Click</b></button>
    )}
    <hr />
    </div>
  )
}

export default CheckoutButtons;