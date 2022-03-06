import React, { useState } from 'react'
import './CartTotal.css'

function CartTotal({items}) {

  
  const getTotalPrice = () => {

    let total = 0;
    items.forEach(item => {
      total += (item.price * item.quantity)
    });

    return total
  }





  return (
    <div className='CartTotal'>
        <h3>Subtotal (5 items)
            <span className='CartTotal-price' >
              $2,172.38
              {getTotalPrice()}
            </span>
        </h3>
        <button>
          Proceed to checkout
        </button>
    </div>
  )
}

export default CartTotal