import React, { useState } from 'react'
import './CartTotal.css'
import NumberFormat from 'react-number-format';


function CartTotal({items}) {

  
  const getTotalPrice = () => {

    let total = 0;
    let quantite = 0;
    items.forEach(item => {
      total += (item.price * item.quantity)
      quantite += item.quantity
      // console.log(quantite);
    });

    return total
  }
  const getQuantity = () => {

    let quantite = 0;
    items.forEach(item => {
      quantite += item.quantity
    });

    return quantite
  }


  return (
    <div className='CartTotal'>
        <h3>Subtotal ({getQuantity()} items)
            <span className='CartTotal-price' >
              <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} decimalScale={2} prefix={'$'}/>
            </span>
        </h3>
        <button>
          Proceed to checkout
        </button>
    </div>
  )
}

export default CartTotal