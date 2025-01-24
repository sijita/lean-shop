export default function DiscountBadge({
  discount,
  className,
}: {
  discount: number;
  className?: string;
}) {
  return (
    <>
      {discount > 0 && (
        <div className={`${className} discount-badge-container`}>
          {discount}% OFF
        </div>
      )}
    </>
  );
}
