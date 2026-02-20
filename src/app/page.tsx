import Container from "@/components/layout/Container";
import "./global.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-full bg-gray-maybe"
      >
        <h2>Home Page</h2>
      </motion.main>
    </Container>
  );
}
