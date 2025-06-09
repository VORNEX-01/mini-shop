import React from 'react';
import Product from './Product';

export default function ProductList({ products, addToCart }) {
    return (
    <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600 text-center">🛍️ لیست محصولات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
        </div>
    </div>
    );
}