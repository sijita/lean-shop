'use client';
import AddToCartButton from './add-to-cart-button';
import type { Product } from '@/types/product';
import useAddToCart from '@/hooks/use-add-to-cart';

export default function FirstProductDetails({
  i,
  product,
}: {
  i: number;
  product: Product;
}) {
  const { handleAddToCart } = useAddToCart();

  return (
    <>
      {i === 0 && (
        <>
          <p className="summary">{product.summary}</p>
          <AddToCartButton
            className="add-to-cart-button"
            onClick={() => handleAddToCart(product)}
          />
        </>
      )}
    </>
  );
}
