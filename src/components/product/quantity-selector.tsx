import './product.scss';

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
    <div className={`quantity-selector ${className}`}>
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        className="less-button"
        disabled={quantity <= min}
      >
        −
      </button>
      <div className="w-12 text-center font-medium">
        {String(quantity).padStart(2, '0')}
      </div>
      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        className="more-button"
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}
