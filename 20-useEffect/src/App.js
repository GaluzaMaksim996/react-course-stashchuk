import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res=>res.json())
      .then(json=> setProduct(json))
  }, []);
  return (
    <div className="App">
      {product && <h1>{product.title}</h1>}
    </div>
  );
}

export default App;
