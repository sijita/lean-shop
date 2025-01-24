import useGetTotalPrices from '@/app/(shop)/cart/hooks/use-get-total-prices';

export default function PriceResume() {
  const { subtotal, totalDiscount, total } = useGetTotalPrices();

  return (
    <div className="border border-gray-200 rounded p-6 xl:w-[420px]">
      <h2 className="mb-6 text-xl font-medium">Card Totals</h2>
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Sub-total</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount</span>
          <span className="font-medium">${totalDiscount.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Total</span>
            <div className="text-right">
              <div className="text-lg font-medium">${total.toFixed(2)} USD</div>
            </div>
          </div>
        </div>
        <button className="w-full rounded bg-[#FF7E1B] px-6 py-3 text-center text-sm font-medium text-white hover:bg-[#FF7E1B]/90 cursor-pointer">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}
