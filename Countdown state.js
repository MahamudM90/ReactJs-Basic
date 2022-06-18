import React,{useState} from 'react';

import './App.css';


function App() {
  

 
  return (
    <div className="App">
      <div className="App-header">
     

  <MovieCounter></MovieCounter>
   
     </div>
     </div>
  );
}
 function MovieCounter () {
   const [count, setCount] = useState(0);
  
   return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked me
      </button>
    </div>
  );
}

export default App;
