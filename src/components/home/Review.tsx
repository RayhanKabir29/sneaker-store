'use client';

import { motion } from 'framer-motion';
import { Card, Button, Rate, Avatar } from 'antd';
import Review1 from '@/assets/images/reveiw-1.png'; 
import Review2 from '@/assets/images/reveiw-2.png';
import Review3 from '@/assets/images/reveiw-3.png';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    img: Review1,
    avatar: "../../assets/images/user-1.png",
  },
  {
    id: 2,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    img: Review2,
    avatar: "../../assets/images/user-2.png",
  },
  {
    id: 3,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks",
    img: Review3,
    avatar: "../../assets/images/user-3.png",
  },
];

export const Review = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full  px-4 py-12 flex flex-col gap-2"
    >
      <div className="flex items-center justify-between w-full">
        <motion.h2
          variants={item}
          className="text-4xl font-extrabold tracking-tight text-[#232321]"
        >
          REVIEWS
        </motion.h2>

        <motion.div variants={item}>
          <Button
            type="primary"
            className="bg-[#4a69e2] border-0 px-6 h-10 rounded-lg font-semibold"
          >
            SEE ALL
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {reviews.map((review) => (
          <motion.div key={review.id} variants={item}>
            <Card
              bodyStyle={{ padding: 0 }}
              className="overflow-hidden rounded-[22px] bg-[#f4f4f4] border-0 shadow-none"
            >
              <div className="p-5 flex flex-col gap-3">

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-[#232321]">
                      {review.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {review.text}
                    </p>
                  </div>

                  <Avatar size={40} src={review.avatar} />
                </div>

                <div className="flex items-center gap-2">
                  <Rate disabled defaultValue={5} className="text-sm" />
                  <span className="text-sm font-semibold">5.0</span>
                </div>
              </div>

              <div className="relative w-full h-[220px]">
                <Image
                  src={review.img}
                  alt="review"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};