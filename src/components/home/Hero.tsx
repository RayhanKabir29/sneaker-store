"use client";

import { motion } from "framer-motion";
import { Button,Card} from "antd";

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
const HeroSection = () => {
  return (
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
    </motion.section>
  );
};

export default HeroSection;
