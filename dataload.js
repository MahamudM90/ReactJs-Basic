import React, { useState, useEffect } from 'react';

import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {setProducts(data);
      console.log(data);
       data.map(product => product.name)
      
       } )
      .catch(error => console.log(error))
  
  }, [])


 
  return (
    <div className="App">
      <div className="App-header">
     
<h1> product Loaded:{products.length}</h1>
<ul> 
 {
  products.map(product=> <li>{product.id}</li>)
  }
</ul>
  
   
     </div>
     </div>
  );
}





export default App;
