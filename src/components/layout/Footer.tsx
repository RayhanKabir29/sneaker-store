"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Card, Button, Input, Space } from "antd";
import FooterBannerLogo from "@/assets/images/footer-banner-logo.png";
import Circle from "@/assets/images/circle.png";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const categories = [
  "Runners",
  "Sneakers",
  "Basketball",
  "Outdoor",
  "Golf",
  "Hiking",
];

const companyLinks = ["About", "Contact", "Blogs", "Careers", "Press"];
const Footer = () => {
  return (
    <Container>
      <motion.footer
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col items-center pt-32 w-full "
      >
        <motion.div variants={item} className="w-full">
          <Card className="bg-[#4A69E2] rounded-[48px] border-0 text-white ">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2 pt-10 ps-12 w-1/2">
                <h2 className="text-5xl font-semibold leading-[100%] text-[#fff] uppercase ">
                  Join our KicksPlus Club & get 15% off
                </h2>
                <p className="text-[#E7E7E3] font-semibold text-xl mt-4 mb-8">
                  Sign up for free! Join the community.
                </p>
                <div className="w-full md:w-[420px] pb-20 flex">
                  <Input
                    placeholder="Email address"
                    size="large"
                    className="flex-1 bg-transparent text-white placeholder:text-white/60 border-white/30"
                  />
                  <Button
                    type="default"
                    size="large"
                    className="bg-[#232321] text-[#fff] border-0 px-6 ml-2"
                  >
                    SUBMIT
                  </Button>
                </div>
              </div>

              <div className="relative mt-10 md:mt-0 w-1/2 flex items-center justify-center">
                <Image
                  src={Circle}
                  alt="circle"
                  className="absolute -top-5 right-28 w-6"
                />
                <Image
                  src={FooterBannerLogo}
                  alt="Footer Banner Logo"
                  className="w-[320px] md:w-[400px]"
                />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item} className="w-full">
          <Card className="relative overflow-hidden bg-[#232321] rounded-[26px]  text-white px-10 py-14 -mt-16">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              <section className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[#ffa52f]">
                  About us
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We are the biggest hyperstore in the universe. We got you all
                  covered with our exclusive collections and latest drops.
                </p>
              </section>

              <section className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-[#ffa52f]">
                  Categories
                </h4>
                <nav className="flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-gray-300 hover:text-[#ffa52f] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {category}
                    </motion.a>
                  ))}
                </nav>
              </section>

              <section className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-[#ffa52f]">
                  Company
                </h4>
                <nav className="flex flex-col gap-2">
                  {companyLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-gray-300 hover:text-[#ffa52f] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </nav>
              </section>

              <section className="flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-[#ffa52f]">
                  Follow us
                </h4>
                <Space size="middle">
                  {[
                    FacebookOutlined,
                    TwitterOutlined,
                    InstagramOutlined,
                    YoutubeOutlined,
                  ].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-xl cursor-pointer text-gray-300 hover:text-[#ffa52f] transition-colors"
                    >
                      <Icon />
                    </motion.div>
                  ))}
                </Space>
              </section>
            </div>

            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 text-[420px] font-black text-white/10 leading-none select-none pointer-events-none whitespace-nowrap">
              KICKS
            </div>
          </Card>
        </motion.div>

        <motion.p
          variants={item}
          className="w-full text-center text-[#232321] text-sm mt-6"
        >
          © 2026 Kicks. All rights reserved
        </motion.p>
      </motion.footer>
    </Container>
  );
};

export default Footer;
