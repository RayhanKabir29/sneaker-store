"use client";

import { motion } from "framer-motion";
import { Button, Card, Carousel } from "antd";
import { useGetProductsQuery } from "@/store/api/productApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const RecommodedProduct = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    limit: 8,
    offset: 0,
  });

  const router = useRouter();
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div>
      <div className="flex items-end justify-between md:pb-16 py-7 md:pt-[90px]">
        <motion.h2
          variants={item}
          className="text-2xl md:text-5xl font-semibold text-[#232321] leading-[95%]"
        >
          You may also like
        </motion.h2>

        <motion.div variants={item} className="flex items-center gap-2">
          <Button
            onClick={() => carouselRef.current?.prev()}
            icon={<ArrowLeftOutlined className="text-[#fff] text-sm" />}
            className="!w-[44px] !h-[44px] !rounded-[10px] !bg-[#8f8f8f] hover:!bg-[#7a7a7a] !border-none flex items-center justify-center"
          />

          <Button
            onClick={() => carouselRef.current?.next()}
            icon={<ArrowRightOutlined className="text-[#fff] text-sm" />}
            className="!w-[44px] !h-[44px] !rounded-[10px] !bg-[#232321] hover:!bg-[#1a1a1a] !border-none flex items-center justify-center"
          />
        </motion.div>
      </div>

      {isLoading ? (
        <div className="h-[348px] bg-gray-200 rounded-lg animate-pulse flex items-center justify-center text-gray-500">
          Loading Product...
        </div>
      ) : (
        <div className="recommended-carousel">
          <Carousel
            ref={carouselRef}
            dots
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  rows: 2,
                  slidesPerRow: 1,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  rows: 2,
                  slidesPerRow: 1,
                },
              },
            ]}
          >
            {products?.map((product) => (
              <div key={product.id} className="px-2">
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    hoverable
                    variant="borderless"
                    className="w-full bg-transparent shadow-none"
                    styles={{ body: { padding: 0 } }}
                  >
                    <div className="bg-[#fff] p-3 rounded-[24px]">
                      <div className="relative bg-[#e7e6e4] rounded-[24px] h-[260px] overflow-hidden">
                        <Image
                          src={product.images[0] || "/placeholder.png"}
                          alt={product.title}
                          fill
                          className="object-contain p-8"
                        />

                        <div className="absolute top-0 left-0 bg-[#4a69e2] text-[#fff] text-xs font-semibold px-4 py-2 rounded-br-3xl">
                          New
                        </div>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg mb-3 leading-snug line-clamp-2 min-h-[48px] text-[#232321] mt-4">
                      {product.title}
                    </h3>

                    <Button
                      onClick={() => router.push(`/products/${product.id}`)}
                      className="!bg-[#232321] !hover:bg-[#232321]/90 h-[44px] w-full rounded-md"
                    >
                      <span className="text-[#fff] font-medium text-xs md:text-sm">
                        VIEW PRODUCT -
                      </span>
                      <span className="text-[#ffa52f] font-semibold ml-1">
                        ${product.price}
                      </span>
                    </Button>
                  </Card>
                </motion.div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default RecommodedProduct;
