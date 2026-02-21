"use client";

import notFound from "@/app/products/not-found";
import { useCart } from "@/context/CartContext";
import { useGetProductByIdQuery } from "@/store/api/productApi";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductSection = () => {
  const { addToCart } = useCart();
  const params = useParams();
  const id = Number(params.id);

  if (!params.id || Number.isNaN(id)) {
    notFound();
  }

  const { data: product, isError } = useGetProductByIdQuery(id);
  const [activeImage, setActiveImage] = useState(0);

  if (isError || !product) {
    notFound();
  }
  if (!product) {
    return null;
  }

  const getRounded = (index: number) => {
    const map = [
      "rounded-tl-[48px]",
      "rounded-tr-[48px]",
      "rounded-bl-[48px]",
      "rounded-br-[48px]",
    ];
    return map[index] ?? "";
  };

  return (
    <div className="bg-[#f5f5f2] lg:bg-transparent py-6 lg:py-9">
      <div className="max-w-7xl mx-auto lg:flex ">
        <div className="flex-1 ">
          <div className="lg:hidden">
            <div className="relative bg-white rounded-2xl h-[380px]">
              <Image
                src={product.images[activeImage]}
                alt={product.title}
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {product.images.map((_: any, index: number) => (
                <span
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    activeImage === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {product.images.map((img: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative min-w-[80px] h-[80px] rounded-xl bg-white cursor-pointer ${
                    activeImage === index ? "ring-2 ring-blue-600" : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt="thumb"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {product.images.map((img: string, index: number) => (
              <div
                key={index}
                className={`relative h-auto aspect-square overflow-hidden ${getRounded(index)}`}
              >
                <Image
                  src={img}
                  alt={product.title}
                  fill
                  className="object-contain "
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[420px]  p-6 lg:p-8">
          <span className="inline-block bg-[#4A69E2] text-[#fff] text-xs px-4 py-3 rounded-[12px] mb-4 font-semibold">
            New Release
          </span>

          <h1 className="text-[32px] font-semibold text-[#232321] leading-tight">
            {product.title}
          </h1>

          <p className="text-[#4A69E2] text-2xl font-semibold mt-4">
            ${product.price}
          </p>
          <div className="mt-8">
            <p className="text-base font-semibold mt-8 mb-2 text-[#232321]">
              Color
            </p>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-black border cursor-pointer"></span>
              <span className="w-6 h-6 rounded-full bg-green-700 border cursor-pointer"></span>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between mb-3">
              <p className="text-sm font-medium">Size</p>
              <button className="text-sm font-medium  underline tracking-[.25px]">
                SIZE CHART
              </button>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
                <button
                  key={size}
                  className="py-2 rounded-lg bg-white text-sm border hover:border-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 space-y-3">
            <button
              className="w-full bg-[#232321] text-[#fff] py-2 px-4 h-12 rounded-[8px] font-medium text-sm cursor-pointer"
               onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>

            <button className="w-full bg-[#4A69E2] text-[#fff] py-2 px-4 h-12 rounded-[8px] font-medium text-sm">
              BUY IT NOW
            </button>
          </div>
          <div className="mt-8 text-base uppercase text-[#232321]">
            <h3 className="text-[#232321]  mb-3">ABOUT THE PRODUCT</h3>
            <p>Shadow Navy / Army Green</p>

            <ul className="list-disc pl-5 mt-3 space-y-2 text-base text-[#232321]">
              <li>
                This product is excluded from all promotional discounts and
                offers.
              </li>
              <li>
                Pay over time in interest-free installments with Affirm, Klarna
                or Afterpay.
              </li>
              <li>Free shipping, returns & exchanges.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
