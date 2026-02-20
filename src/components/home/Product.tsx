"use client";

import { motion } from "framer-motion";
import { Button, Card, Row, Col } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useGetProductsQuery } from "@/store/api/productApi";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Product = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    limit: 4,
    offset: 0,
  });
  const { addToCart } = useCart();
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <motion.h2 variants={item} className="text-2xl font-semibold">
          Don&apos;t miss out new drops
        </motion.h2>
        <motion.div variants={item}>
          <Button type="primary">SHOP NEW DROPS</Button>
        </motion.div>
      </div>
      <Row gutter={[16, 16]} className="w-full">
        {isLoading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx} xs={6}>
                <h2 className="h-[348px] bg-gray-200 rounded-lg animate-pulse">
                  Loading Product........
                </h2>
              </Col>
            ))
          : products?.slice(0, 4).map((product) => (
              <Col key={product.id} xs={6}>
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    hoverable
                    cover={
                      <div className="relative h-[180px] bg-neutral-50 rounded-t-2xl overflow-hidden">
                        <Image
                          src={product.images[0] || "/placeholder.png"}
                          alt={product.title}
                          fill
                          className="object-cover p-2"
                        />

                        <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                          New
                        </div>

                        <Button
                          type="text"
                          shape="circle"
                          icon={<HeartOutlined />}
                          className="absolute top-2 right-2 bg-white/80"
                        />
                      </div>
                    }
                    className="w-full"
                  >
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[40px]">
                      {product.title}
                    </h3>
                    <Button
                      type="primary"
                      block
                      onClick={() => addToCart(product)}
                      className="bg-[#232321] hover:bg-[#232321]/90"
                    >
                      <span className="text-white">VIEW PRODUCT - </span>
                      <span className="text-[#ffa52f]">${product.price}</span>
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
      </Row>
    </>
  );
};

export default Product;
