import '@/app/(shop)/product/[id]/styles/product-details.scss';

export default function ProductInfo() {
  return (
    <div className="info-container">
      <div className="column">
        <p>
          SKU: <span>AD54671</span>
        </p>
        <p>
          Brand: <span>Apple</span>
        </p>
      </div>
      <div className="column">
        <p>
          Availability: <span className="!text-green-500">In Stock</span>
        </p>
        <p>
          Category: <span>Electronics Devices</span>
        </p>
      </div>
    </div>
  );
}
