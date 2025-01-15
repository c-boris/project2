"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedCardsProps {
  children: ReactNode;
  index: number;
}

const AnimatedCards = ({ children, index }: AnimatedCardsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCards;
