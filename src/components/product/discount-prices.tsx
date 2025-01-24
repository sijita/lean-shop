export default function DiscountPrices({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <div className="product-price">
      <span
        className={`price ${
          discount > 0 ? 'discounted-price' : 'original-price text-md'
        }`}
      >
        ${price.toFixed(2)}
      </span>
      {discount > 0 && (
        <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
      )}
    </div>
  );
}
