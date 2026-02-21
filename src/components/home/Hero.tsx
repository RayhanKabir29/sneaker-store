"use client";

import { motion } from "framer-motion";
import { Button, Card } from "antd";
import Image from "next/image";
import HeroImage from "@/assets/images/hero-img.jpg";
import BannerSneaker1 from "@/assets/images/banner-1.png";
import BannerSneaker2 from "@/assets/images/banner-2.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
      className="flex flex-col items-center gap-6 py-6 w-full"
    >
      <motion.div variants={item} className="w-full">
        <h1 className="text-[52px] md:text-[223.5px] font-bold uppercase md:tracking-tight">
          <span className="text-[#1f1f1f]">Do It </span>
          <span className="text-[#4f6df5]">Right</span>
        </h1>
        <Card className="relative w-full h-[750px] overflow-hidden rounded-3xl md:rounded-[64px] mt-4 p-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroImage.src})` }}
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute left-4 md:left-7 top-1/2 -translate-y-1/2 z-20">
            <div className="bg-black text-slate-100 text-sm p-2 md:p-6 rounded-br-2xl rounded-bl-2xl rotate-[-90deg] origin-left">
              Nike product of the year
            </div>
          </div>
          <div className="absolute right-2 md:right-8 bottom-4 md:bottom-8 flex flex-col gap-4 z-20">
            <div className="w-[110px] h-[110px] rounded-2xl  overflow-hidden bg-white/10 backdrop-blur-sm">
              <Image
                src={BannerSneaker1}
                alt="Sneaker 1"
                width={110}
                height={110}
                className="object-contain"
              />
            </div>
            <div className="w-[110px] h-[110px]  overflow-hidden bg-white/10 backdrop-blur-sm">
              <Image
                src={BannerSneaker2}
                alt="Sneaker 2"
                width={110}
                height={110}
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute bottom-4  md:bottom-12 left-3 md:left-12 z-20 max-w-[198px] md:max-w-[490px] text-[#fff]">
            <h2 className="text-2xl md:text-[74px] font-semibold pb-4">NIKE AIR MAX</h2>

            <p className=" text-sm md:text-2xl text-[#E7E7E3]  font-semibold mb-6">
              Nike introducing the new air max for everyone's comfort
            </p>

            <Button
              type="primary"
              size="large"
              className="!bg-[#4a69e2] !border-none px-8 py-2 rounded-[8px] text-[#fff] uppercase font-medium tracking-wide text-sm"
            >
              SHOP NOW
            </Button>
          </div>
        </Card>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
