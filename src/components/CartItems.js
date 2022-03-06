import React from 'react'
import './CartItems.css'
import CartItem from './CartItem'


function CartItems({items, setCartItems}) {

  // console.log(items);

  const changeItemQuantity = (e, index) => {
    const newItems = [...items];
    items[index].quantity = e.target.value;
    setCartItems(newItems)
  }
  return (
    <div className='CartItems'>
          <h1>Shopping Cart</h1>
          <hr></hr>
          {
            items.map((item, index) => 
              <CartItem
              index={index}
              key={index}
              item={item}
              changeItemQuantity={changeItemQuantity}
              />
            )
          }
          
    </div>
  )
}

export default CartItems