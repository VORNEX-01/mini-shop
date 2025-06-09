import React, { useMemo } from 'react';

export default function Cart({ cartItems, addToCart, removeFromCart }) {
    const totalPrice = useMemo(() =>
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0),
    [cartItems]
    );

    return (
    <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">🧺 سبد خرید</h2>
        {cartItems.length === 0 ? (
        <p className="text-gray-500">سبد خرید خالی است.</p>
        ) : (
        <div className="space-y-4">
            {cartItems.map(item => (
            <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
            >
                <span className="text-gray-700">
                {item.name} - {item.price.toLocaleString()} تومان × {item.qty}
                </span>
                <div className="space-x-2 rtl:space-x-reverse">
                <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition"
                    aria-label={`افزودن ${item.name}`}
                >
                    +
                </button>
                <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                    aria-label= {`حذف ${item.name}`}
                >
                    -
                </button>
                </div>
            </div>
            ))
            }
            <hr className="my-4" />
            <h3 className="text-lg font-semibold text-purple-700">💰 مجموع: {totalPrice.toLocaleString()} تومان</h3>
        </div>
        )}
    </div>
    );
}