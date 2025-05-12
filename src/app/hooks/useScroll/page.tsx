"use client";

import { motion, useScroll, useTransform } from "motion/react";

// useScroll

// this hook is use to track the page scroll on x and y axies   and based of it animate the element

const page = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY,[400, -50], [0,1]);
  const scale = useTransform(scrollY,[400, -50], [1, 2]);

  return (
    <div className="h-screen py-30">
      <motion.div
        className="h-40 w-40 bg-yellow-400"
        style={{
          opacity,
          scale,
        }}
      />
      <div className="h-[80rem]" />
    </div>
  );
};

export default page;
