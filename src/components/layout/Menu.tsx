"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge, Button } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  DownOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Container from "@/components/layout/Container";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import HeaderLogo from "@/assets/images/header-logo.png";
import Image from "next/image";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "New Drops 🔥" },
    { label: "Men", dropdown: true },
    { label: "Women", dropdown: true },
  ];

  const { getTotalItems } = useCart();

  return (
    <Container>
      <div className="bg-[#FAFAFA] rounded-3xl px-4 md:p-8 shadow-sm relative mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <MenuOutlined className="text-xl" />
            </div>
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1 text-base font-semibold text-[#232321] cursor-pointer"
                >
                  {item.label}
                  {item.dropdown && <DownOutlined className="text-xs" />}
                </motion.div>
              ))}
            </div>
          </div>
          <Image src={HeaderLogo} alt="Logo" width={128} height={32} className="object-contain" />
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:block cursor-pointer">
              <SearchOutlined size={28} />
            </div>

            <div className="cursor-pointer">
              <UserOutlined size={28} />
            </div>

            <Badge size="small" showZero>
              <Button className="w-6 h-6 rounded-full bg-orange-400 text-white font-bold p-0 flex items-center justify-center">
                {getTotalItems()}
              </Button>
            </Badge>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-6">
                {menuItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-gray-700 font-medium border-b pb-3 cursor-pointer"
                  >
                    {item.label}
                    {item.dropdown && <DownOutlined />}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Menu;
