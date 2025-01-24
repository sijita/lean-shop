export default function DiscountBadge({ discount }: { discount: number }) {
  return (
    <>
      {discount > 0 && (
        <div className="absolute top-5 left-5 bg-[#ffd814] px-2 py-1 rounded font-bold text-xs">
          {discount}% OFF
        </div>
      )}
    </>
  );
}
