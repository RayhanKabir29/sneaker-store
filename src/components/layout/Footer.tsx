"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Card, Button, Input } from "antd";
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
          <Card className="bg-[#4A69E2] rounded-3xl md:rounded-[48px] border-0 text-[#fff] ">
            <div className="flex flex-col md:gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2 md:pt-10 md:ps-12 md:w-1/2">
                <h2 className="text-[27px] md:text-5xl font-semibold leading-8 md:leading-[100%] text-[#fff] uppercase ">
                  Join our KicksPlus Club & get 15% off
                </h2>
                <p className="text-[#E7E7E3] font-semibold text-xl mt-4 mb-8">
                  Sign up for free! Join the community.
                </p>
                <div className="w-full md:w-[420px] md:pb-20 flex">
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

              <div className="relative mt-10 md:mt-0 md:w-1/2 flex md:items-center md:justify-center pb-10 md:pb-0">
                <Image
                  src={Circle}
                  alt="circle"
                  className="absolute -top-5 left-28 md:left-[480px] w-6"
                />
                <Image
                  src={FooterBannerLogo}
                  alt="Footer Banner Logo"
                  className="w-[120px] md:w-[400px]"
                />
              </div>
            </div>
          </Card>
        </motion.div>
        <motion.div variants={item} className="w-full">
          <Card className="relative overflow-hidden bg-[#232321] rounded-[24px] md:rounded-[48px] text-white md:px-12 mt:pt-12 pb-10 md:pb-56 -mt-12 md:-mt-20" >
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              <section className="flex flex-col gap-4 max-w-sm">
                <h3 className="text-xl font-semibold text-[#ffa52f]">
                  About us
                </h3>
                <p className="text-sm text-[#E7E7E3] leading-relaxed">
                  We are the biggest hyperstore in the universe. We got you all
                  cover with our exclusive collections and latest drops.
                </p>
              </section>

              <section className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#ffa52f]">
                  Categories
                </h4>
                <nav className="flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-sm text-[#E7E7E3] hover:text-[#ffa52f] transition-colors"
                      whileHover={{ x: 6 }}
                    >
                      {category}
                    </motion.a>
                  ))}
                </nav>
              </section>
              <section className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#ffa52f]">
                  Company
                </h4>
                <nav className="flex flex-col gap-2">
                  {companyLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-sm text-[#E7E7E3] hover:text-[#ffa52f] transition-colors"
                      whileHover={{ x: 6 }}
                    >
                      {link}
                    </motion.a>
                  ))}
                </nav>
              </section>
              <section className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#ffa52f]">
                  Follow us
                </h4>
                <div className="flex gap-4">
                  {[
                    FacebookOutlined,
                    InstagramOutlined,
                    TwitterOutlined,
                    YoutubeOutlined,
                  ].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-lg text-[#E7E7E3] hover:text-[#ffa52f] cursor-pointer transition-colors"
                    >
                      <Icon />
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
            <div className="absolute -bottom-14  md:-bottom-44 left-36  md:left-1/2 -translate-x-1/2 text-[130px] md:text-[420px] font-extrabold text-[#fff] opacity-100 leading-none tracking-tight select-none pointer-events-none whitespace-nowrap">
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
