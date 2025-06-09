import React from 'react';

export default function Product({ product, addToCart }) {
    return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-3 hover:scale-[1.02] transition-all duration-200" >
        <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-green-600 font-bold text-sm">قیمت: {product.price.toLocaleString()} تومان</p>
        <button
        onClick={() => addToCart(product)}
        className="bg-purple-600 text-white py-1 rounded-md hover:bg-purple-700 transition"
        >
        افزودن به سبد خرید
        </button>
    </div>
    );
}