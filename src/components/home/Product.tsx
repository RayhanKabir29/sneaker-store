"use client";

import { motion } from "framer-motion";
import { Button, Card, Row, Col } from "antd";
import { useGetProductsQuery } from "@/store/api/productApi";
import Image from "next/image";
import { useRouter } from "next/navigation";


const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Product = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    limit: 4,
    offset: 0,
  });

  const router = useRouter();

  return (
    <div className="mb:pt-[66px] pb-6 md:pb-32">
      <div className="flex items-center justify-between w-full mb-8">
        <motion.h2
          variants={item}
          className="text-2xl md:text-[74px] font-semibold text-[#232321] w-1/2 uppercase leading-[105%]"
        >
          Don&apos;t miss out new drops
        </motion.h2>

        <Button
          type="primary"
          size="large"
          className="!bg-[#4a69e2] !border-none px-4 md:px-8 py-2 rounded-[8px] text-[#fff] uppercase font-medium tracking-wide text-sm md:mt-24"
        >
          Shop New Drops
        </Button>
      </div>
      <Row gutter={[16, 16]} className="w-full">
        {isLoading ? (
          <Col>
            <h2 className="h-[348px] bg-gray-200 rounded-lg animate-pulse text-center` text-gray-500 flex items-center justify-center">
              Loading Product........
            </h2>
          </Col>
        ) : (
          products?.slice(0, 4).map((product) => (
            <Col key={product.id} xs={12} md={6} lg={6}>
              <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  hoverable
                  variant="borderless"
                  className="w-full bg-transparent shadow-none"
                  styles={{ body: { padding: 0 } }}
                  cover={
                    <>
                      <div className="bg-[#fff] p-2 rounded-[20px]">
                        <div className="relative bg-[#e7e6e4] rounded-[22px] h-[260px] flex items-center justify-center overflow-hidden">
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
                      <h3 className="font-semibold text-2xl mb-3 leading-snug line-clamp-2 min-h-[48px] text-[#232321] my-4 truncate">
                        {product.title}
                      </h3>
                      <Button
                        onClick={() => router.push(`/products/${product.id}`)}
                        className="!bg-[#232321] !hover:bg-[#232321]/90  h-[44px] "
                      >
                        <span className="text-[#fff] font-medium text-xs md:text-sm">
                          VIEW PRODUCT -
                        </span>{" "}
                        <span className="text-[#ffa52f] font-semibold ml-1">
                          ${product.price}
                        </span>
                      </Button>
                    </>
                  }
                ></Card>
              </motion.div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Product;
