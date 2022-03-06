import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'


function CartItems({items}) {

  // console.log(items);
  return (
    <div className='CartItems'>
          <h1>Shopping Cart</h1>
          <hr></hr>
          {
            items.map((item, index) => 
              <CartItem
              key={index}
              item={item}
              />
            )
          }
          
    </div>
  )
}

export default CartItems