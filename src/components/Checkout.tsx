"use client";

import Image from "next/image";


const Checkout = () => {
  return (
    <section className="  pt-10 ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#232321]">
            Saving to celebrate
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <p className="text-sm mt-1">
            Join us or <span className="underline cursor-pointer">Sign-in</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl p-6 ">
            <h3 className="font-semibold text-lg mb-1">Your Bag</h3>
            <p className="text-sm text-gray-500 mb-5">
              Items in your bag not reserved - check out now to make them yours.
            </p>
            <div className="flex gap-4 bg-[#f7f7f7] rounded-xl p-4">
              <div className="relative w-28 h-28 bg-[#ececec] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/shoes.png"
                  alt="shoe"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-[#232321] leading-tight">
                    DROPSET TRAINER SHOES
                  </h4>
                  <span className="font-semibold text-blue-600">
                    $130.00
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  Men's Road Running Shoes
                </p>
                <p className="text-sm text-gray-600">
                  Enamel Blue / University White
                </p>
                <div className="flex gap-6 mt-3 text-sm">
                  <span>
                    Size <b>10</b>
                  </span>
                  <span>
                    Quantity <b>1</b>
                  </span>
                </div>
                <div className="flex gap-4 mt-3 text-gray-500">
                  <button className="hover:text-black">♡</button>
                  <button className="hover:text-red-600">🗑</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6  h-fit">
            <h3 className="font-semibold text-lg mb-5">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>1 ITEM</span>
                <span>$130.00</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$6.99</span>
              </div>

              <div className="flex justify-between">
                <span>Sales Tax</span>
                <span>-</span>
              </div>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>$136.99</span>
            </div>

            <button className="w-full mt-5 h-12 rounded-lg bg-[#232321] text-white font-medium hover:opacity-90">
              CHECKOUT
            </button>

            <p className="text-sm mt-3 underline cursor-pointer text-gray-600">
              Use a promo code
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;