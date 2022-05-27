import React, { useState, useEffect } from 'react';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {setProducts(data);
      
      
       } )
      .catch(error => console.log(error))
  
  }, [])

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    
  }


 
  return (
    <div className="App">
      <div className="App-header">
     
<h1> product Loaded:{products.length}</h1>
<h4> Product added: {cart.length}</h4>
<Cart cart={cart}></Cart>

 {
  products.map(product=> <Product product={product} handleAddProduct={handleAddProduct}></Product>)
  }

  
     </div>
     </div>
  );
}





export default App;