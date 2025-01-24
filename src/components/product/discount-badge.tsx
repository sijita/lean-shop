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
        <div
          className={`${className} bg-[#ffd814] px-2 py-1 rounded font-bold text-xs`}
        >
          {discount}% OFF
        </div>
      )}
    </>
  );
}
