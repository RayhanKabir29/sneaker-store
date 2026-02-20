"use client";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Card, Button, Input, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

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
        className="flex flex-col items-center py-10 w-full "
      >
        <motion.div variants={item} className="w-full">
          <Card className="bg-[#4a69e2] rounded-[28px] border-0 text-white px-12 py-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-2 max-w-lg">
                <h2 className="text-3xl font-semibold leading-tight">
                  Join our KicksPlus Club & get 15% off
                </h2>
                <p className="text-white/80">
                  Sign up for free! Join the community.
                </p>
                <Space.Compact className="w-full md:w-[420px] mt-4">
                  <Input
                    placeholder="Email address"
                    size="large"
                    className="flex-1 bg-transparent text-white placeholder:text-white/60 border-white/30"
                  />
                  <Button
                    type="default"
                    size="large"
                    className="bg-[#232321] text-white border-0 px-6"
                  >
                    SUBMIT
                  </Button>
                </Space.Compact>
              </div>

              <div className="hidden md:flex flex-col items-end font-extrabold tracking-tight leading-none">
                <span className="text-[64px]">KICKS</span>
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
