import { FaStar } from 'react-icons/fa6';

interface ProductStarsProps {
  rating: number;
  size?: number;
}

export default function ProductStars({ rating, size = 15 }: ProductStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          fill={index < Math.floor(rating) ? '#ffd700' : ''}
          size={size}
        />
      ))}
    </div>
  );
}
