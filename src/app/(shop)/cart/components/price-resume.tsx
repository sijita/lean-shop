'use client';
import useGetTotalPrices from '@/app/(shop)/cart/hooks/use-get-total-prices';
import useProccessPurchase from '../hooks/use-proccess-purchase';

export default function PriceResume() {
  const { pending, handleProccessPurchase } = useProccessPurchase();
  const { subtotal, totalDiscount, total } = useGetTotalPrices();

  return (
    <div className="price-resume-container">
      <h3>Card Totals</h3>
      <div className="column">
        <div className="prices-row">
          <span className="item">Sub-total</span>
          <span className="value">${subtotal.toFixed(2)}</span>
        </div>
        <div className="prices-row">
          <span className="item">Discount</span>
          <span className="value">${totalDiscount.toFixed(2)}</span>
        </div>
        <div className="horizontal-divider">
          <div className="total-price">
            <span className="item">Total</span>
            <div className="total-value">${total.toFixed(2)} USD</div>
          </div>
        </div>
        <button
          onClick={() => handleProccessPurchase()}
          disabled={!total || pending}
          className="purchase-button"
        >
          {pending ? 'PROCESSING...' : 'PROCEED TO CHECKOUT'}
        </button>
      </div>
    </div>
  );
}
