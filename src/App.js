import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import CartTotal from './components//CartTotal';
import CartItems from './components//CartItems';
import data from './Data'


function App() {

  const [cartItems, setCartItems] = useState(data)

  return  (
    <div className="App">
      
      <Header title="Amazon Cart"/>
      <div className='App-main'>
          <CartItems items={cartItems}/>
          <CartTotal items={cartItems}/>
        </div>
      </div>
);
}

export default App;
