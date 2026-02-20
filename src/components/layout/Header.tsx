"use client";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Button, Badge as AntBadge, Card, Row, Col } from "antd";
import { ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { useGetProductsQuery } from "@/store/api/productApi";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-img.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};
const Header = () => {
  const { data: products, isLoading } = useGetProductsQuery({
    limit: 4,
    offset: 0,
  });
  const { addToCart, getTotalItems } = useCart();
  return (
    <Container>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-6 px-4 py-6 w-full "
      >
        <div className="flex justify-between items-center w-full">
          <motion.h1
            variants={item}
            className="font-bold text-4xl md:text-6xl tracking-tight"
          >
            <span className="text-[#232321]">DO IT </span>
            <span className="text-[#4a69e2]">RIGHT</span>
          </motion.h1>

          <motion.div variants={item}>
            <AntBadge count={getTotalItems()} showZero>
              <Button
                type="primary"
                shape="circle"
                icon={<ShoppingCartOutlined />}
                size="large"
              />
            </AntBadge>
          </motion.div>
        </div>

        <motion.div variants={item} className="w-full">
          <Card
            className="relative w-full h-[382px] overflow-hidden rounded-3xl"
            cover={
              <div className="relative h-[382px]">
                <Image
                  src={HeroImage}
                  alt="Nike Air Max featured product"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 z-10">
                  <h2 className="font-rubik text-2xl font-semibold text-white mb-2">
                    NIKE AIR MAX
                  </h2>
                  <p className="text-sm text-gray-300 mb-3 max-w-[200px]">
                    Nike introducing the new air max for everyone&apos;s comfort
                  </p>
                  <Button type="primary" size="large">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            }
          />
        </motion.div>

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
                  <Card loading />
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
      </motion.section>
    </Container>
  );
};

export default Header;
