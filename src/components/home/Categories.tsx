"use client";

import { motion } from "framer-motion";
import { Card, Button, Carousel } from "antd";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { useGetCategoriesQuery } from "@/store/api/productApi";
import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";
import { useIsMdUp } from "@/lib/utils";

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export const Categories = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const carouselRef = useRef<CarouselRef>(null);
  const isMdUp = useIsMdUp();
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-[#232321] "
    >
      <div className=" mx-auto">
        <div className="flex items-end justify-between md:pb-16 py-7 md:pt-[90px]">
          <motion.h2
            variants={item}
            className=" text-lg md:text-[74px] font-semibold text-[#fff] uppercase leading-[95%]"
          >
            Categories
          </motion.h2>

          <motion.div variants={item} className="flex items-center gap-2">
            <Button
              type="default"
              shape="circle"
              icon={<ArrowLeftOutlined />}
              onClick={() => carouselRef.current?.prev()}
              size="small"
            />
            <Button
              type="default"
              shape="circle"
              icon={<ArrowRightOutlined />}
              onClick={() => carouselRef.current?.next()}
              size="small"
            />
          </motion.div>
        </div>

        {isLoading ? (
          <h2 className="h-[348px] bg-gray-200 rounded-lg animate-pulse">
            Loading Categories........
          </h2>
        ) : (
          <Carousel
            ref={carouselRef}
            dots={false}
            slidesToShow={isMdUp ? 2 : 1}
            draggable
          >
            {categories?.slice(0, 5).map((category, index) => (
              <motion.div
                key={category.id}
                variants={item}
                className={`category-card ${index === 0 ? "first-card" : "other-card"}`}
              >
                <Card
                  hoverable
                  className=" overflow-hidden bg-[#fff] border-0 shadow-none"
                  styles={{ body: { padding: 0 } }}
                  cover={
                    <div className="relative h-[320px] flex flex-col justify-between p-6">
                      <div className="relative w-full h-[180px]">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-end justify-between max-w-[192px">
                        <h3 className="text-4xl font-semibold text-[#232321] ">
                          {category.name}
                        </h3>

                        <Button
                          type="primary"
                          shape="square"
                          icon={<RiseOutlined />}
                          className="bg-[#1f1f1f] border-0 w-9 h-9 flex items-center justify-center"
                        />
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </Carousel>
        )}
      </div>
    </motion.section>
  );
};
