export default function DiscountPrices({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
  const discountedPrice = price * (1 - discount / 100);

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-lg ${
          discount > 0
            ? 'line-through font-normal text-[#ADB7BC] text-sm'
            : 'font-semibold text-[#2DA5F3] text-md'
        }`}
      >
        ${price.toFixed(2)}
      </span>
      {discount > 0 && (
        <span className="text-lg font-semibold text-[#2DA5F3]">
          ${discountedPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
}
