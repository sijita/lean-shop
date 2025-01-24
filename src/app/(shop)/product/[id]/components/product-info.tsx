export default function ProductInfo() {
  return (
    <div className="flex justify-between gap-3 flex-wrap">
      <div className="flex flex-col gap-1">
        <p className="text-gray-500">
          SKU: <span className="text-black">AD54671</span>
        </p>
        <p className="text-gray-500">
          Brand: <span className="text-black">Apple</span>
        </p>
      </div>
      <div>
        <p className="text-gray-500">
          Availability: <span className="text-green-500">In Stock</span>
        </p>
        <p className="text-gray-500">
          Category: <span className="text-gray-900">Electronics Devices</span>
        </p>
      </div>
    </div>
  );
}
