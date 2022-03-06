import './App.css';
import React from 'react';
import Header from './components/Header'
import CartTotal from './components//CartTotal';
import CartItems from './components//CartItems';

function App() {

  const names = ['moussco', 'samake']

  return  (
    <div className="App">
      
      <Header title="Amazon Cart"/>
      <div className='App-main'>
        <div className='CartItems-items'>
          <CartItems />
        </div>
          <CartTotal/>
      </div>
    </div>
);
}

export default App;
