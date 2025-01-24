import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  min?: number;
  max?: number;
  setQuantity: (quantity: number) => void;
  className?: string;
}

export default function QuantitySelector({
  quantity,
  min = 1,
  max = 10,
  setQuantity,
  className = '',
}: QuantitySelectorProps) {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= min && newQuantity <= max) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div
      className={`flex items-center justify-center border border-gray-200 rounded p-1 flex-1 ${className}`}
    >
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 cursor-pointer"
        disabled={quantity <= min}
      >
        −
      </button>
      <div className="w-12 text-center font-medium">
        {String(quantity).padStart(2, '0')}
      </div>
      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 cursor-pointer"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}
