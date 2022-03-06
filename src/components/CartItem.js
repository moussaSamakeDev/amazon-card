import React from 'react'
import './CartItem.css'

function CartItem() {
  return (
    <div className='CartItem'>
        <div className='CartItem-img'>
            <img src='https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SL1500_.jpg' alt=''/>
        </div>

        <div className='CartItem-info'>
            <div className='info-title'>
            <h2>Apple Ipad pro</h2>
        </div>

        <div className='info-stock'> <p>in stock</p></div>
    
        <div className='item-actions'>
            <div className='item-quantity'>
                <select>
                    <option>Qty</option>
                </select>
            </div>
            <div className='item-delete'>Delete</div>
        </div>
        </div>

        
        <div className='CartItem-price'><p>700$</p></div>

        
    </div>
  )
}

export default CartItem