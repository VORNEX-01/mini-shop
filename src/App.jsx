import React, { useState } from 'react';
import data from './data';
import Cart from './Cart';
import ProductList from './ProductList';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists.qty === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      ));
    }
  };

  return (
    <div className="text-5xl min-h-screen md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 bg-gray-100 text-gray-800 p-2 sm:p-4 to-red-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10 drop-shadow-700"> مینی فروشگاه VΩRNEX-01 🛒</h1>
      <ProductList products={data} addToCart={addToCart} />
      <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  );
}