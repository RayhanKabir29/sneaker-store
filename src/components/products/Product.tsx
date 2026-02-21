const ProductSection = () => {
  return (
    <div className="bg-[#f5f5f2] min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#f5f5f2]">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4">
            <img
              src="/shoe-1.png"
              alt="Product"
              className="w-full object-contain"
            />
          </div>
          <div className="bg-white rounded-xl p-4">
            <img
              src="/shoe-2.png"
              alt="Product"
              className="w-full object-contain"
            />
          </div>
          <div className="bg-white rounded-xl p-4">
            <img
              src="/shoe-3.png"
              alt="Product"
              className="w-full object-contain"
            />
          </div>
          <div className="bg-white rounded-xl p-4">
            <img
              src="/shoe-4.png"
              alt="Product"
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="bg-[#f5f5f2] p-4">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-2">
            New Release
          </span>

          <h1 className="text-2xl font-bold mt-2">
            ADIDAS 4DFWD X PARLEY <br /> RUNNING SHOES
          </h1>

          <p className="text-blue-600 text-lg font-semibold mt-2">
            $125.00
          </p>
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">COLOR</p>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-black border cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-green-700 border cursor-pointer"></span>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium">SIZE</p>
              <button className="text-xs underline">SIZE CHART</button>
            </div>

            <div className="grid grid-cols-6 gap-2">
              {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map(size => (
                <button
                  key={size}
                  className="border rounded-md py-2 text-sm hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <button className="w-full bg-black text-white py-3 rounded-md">
              ADD TO CART
            </button>
            <button className="w-full bg-blue-600 text-white py-3 rounded-md">
              BUY IT NOW
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-700">
            <h3 className="font-semibold mb-2">ABOUT THE PRODUCT</h3>
            <p>Shadow Navy / Army Green</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>This product is excluded from all promotional discounts.</li>
              <li>Pay over time in interest-free installments with Affirm.</li>
              <li>Free shipping, returns & exchanges.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductSection;