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
                    <option value="1">Qty: 1</option>
                    <option value="2">Qty: 2</option>
                    <option value="3">Qty: 3</option>
                </select>
            </div>
                <div className='item-actions-divider'>|</div>
                 <div className='item-delete'>Delete</div>
        </div>
        </div>

        
        <div className='CartItem-price'>700$</div>

        
    </div>
  )
}

export default CartItem