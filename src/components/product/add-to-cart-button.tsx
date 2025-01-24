import { CgShoppingCart } from 'react-icons/cg';

interface AddToCartButtonProps {
  onClick: () => void;
  className: string;
}

export default function AddToCartButton({
  onClick,
  className,
}: AddToCartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} cursor-pointer text-center`}
    >
      <CgShoppingCart size={20} color="white" className="flex-shrink-0" />
      <span className="text-white">ADD TO CARD</span>
    </button>
  );
}
