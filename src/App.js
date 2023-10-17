import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import prod1 from './asset/1.png';
import prod2 from './asset/2.png';
import prod3 from './asset/3.png';
import prod4 from './asset/4.png';
import prod5 from './asset/5.png';
import prod6 from './asset/6.png';
import prod7 from './asset/7.png';
import prod8 from './asset/8.png';
import prod9 from './asset/9.png';
import prod10 from './asset/10.png';
import prod11 from './asset/11.png';
import prod12 from './asset/12.png';
import prod13 from './asset/13.png';
import prod14 from './asset/14.png';
import prod15 from './asset/15.png';
import CartList from './components/CartList';

function App() {
  const [product, setProduct]=useState([
    {
      Img : prod1,
      name: "IPhone 12",
      Category: "Phone",
      seller : "APPLE",
      price : 120000
    },
    {
      Img : prod2,
      name: "Nokia Keypad Phone",
      Category: "Phone",
      seller : "NOKIA",
      price : 1200
    },
    {
      Img : prod3,
      name: "LG 510 Smart Phone",
      Category: "Phone",
      seller : "LG",
      price : 5000
    },
    {
      Img : prod4,
      name: "LG 512 Smart Phone",
      Category: "Phone",
      seller : "LG",
      price : 7000
    },
    {
      Img : prod5,
      name: "Acer V12",
      Category: "Laptop",
      seller : "ACER",
      price : 45000
    },
    {
      Img : prod6,
      name: "Asus A35",
      Category: "Laptop",
      seller : "ASUS",
      price : 50000
    },
    {
      Img : prod7,
      name: "Macbook Pro",
      Category: "Laptop",
      seller : "APPLE",
      price : 225000
    },
    {
      Img : prod8,
      name: "Lenovo V15 ADA",
      Category: "Laptop",
      seller : "LENOVO",
      price : 60000
    },
    {
      Img : prod9,
      name: "Trouser",
      Category: "Trouser",
      seller : "ZARA",
      price : 5000
    },
    {
      Img : prod10,
      name: "Trouser",
      Category: "Trouser",
      seller : "ZARA",
      price : 4000
    },
    {
      Img : prod11,
      name: "Trouser",
      Category: "Trouser",
      seller : "Roadster",
      price : 700
    },
    {
      Img : prod12,
      name: "T-Shirt",
      Category: "T-Shirts",
      seller : "ROADSTER",
      price : 500
    },
    {
      Img : prod13,
      name: "Hoody",
      Category: "Hoody",
      seller : "ZARA",
      price : 5000
    },
    {
      Img : prod14,
      name: "Cap",
      Category: "Hat",
      seller : "NIKE",
      price : 1500
    },
  ])


  const [cart, setCart]=useState([]);
  console.log(cart);
  const addToCart=(data)=>{
    setCart([...cart, {...data, quantity:1}]);
    
  }

  const [showCart, setShowCart]=useState(false);
  const handleShow=(value)=>{
    setShowCart(value)
  }
  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}/>
      <div className='container '>
        {
          showCart?<div className='mycart'><h1>My Cart</h1><CartList cart={cart}/></div>:
           <ProductList product={product} addToCart={addToCart}/>
        }
      </div>
      {/* <p>Developed By Mohd Rahim Ali</p> */}
      
    </div>
  );
}

export default App;
