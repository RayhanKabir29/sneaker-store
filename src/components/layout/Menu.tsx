"use client";

import { motion } from "framer-motion";
import { Badge, Button } from "antd";
import { SearchOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import Container from "@/components/layout/Container";
import { useCart } from "@/context/CartContext";

const Menu = () => {
  const menuItems = [
    { label: "New Drops 🔥" },
    { label: "Men", dropdown: true },
    { label: "Women", dropdown: true },
  ];
  const { getTotalItems } = useCart();
  return (
    <Container>
      <div className=" bg-[#f4f3f1] rounded-2xl px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer"
            >
              {item.label}
              {item.dropdown && <DownOutlined className="text-xs" />}
            </motion.div>
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-extrabold tracking-wider"
        >
          KICKS
        </motion.h1>

        <div className="flex items-center gap-6">
          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <SearchOutlined className="text-lg" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <UserOutlined className="text-lg" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
            <Badge size="small" showZero>
              <Button className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center text-xs font-bold text-white">
                {getTotalItems()}
              </Button>
            </Badge>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
