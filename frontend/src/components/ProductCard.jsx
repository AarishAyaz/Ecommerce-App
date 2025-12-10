import React from "react";
import { Star } from "lucide-react"; // Optional for star icon

const ProductCard = ({ image, title, price, rating, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      
      {/* Product Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center mt-2">
          {/* Rating Stars */}
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
        </div>
        <p className="mt-2 text-xl font-bold text-gray-900">${price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
