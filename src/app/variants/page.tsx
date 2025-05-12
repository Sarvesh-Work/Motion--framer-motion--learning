"use client";

import { useState } from "react";
import { motion } from "motion/react";

// ! Variants
//  variants are gust a preset of styles or animations that you give a name to
// so we can easily switch between them

// for example
//    insted of writing the animation again and again for different  states like open , close , hover
//    we  can group them and name them
//  we can give any name to Variants

const simpleAnimation = {
  initial: { rotate: 0, scale: 0.7 },
  animate: { rotate: 150, scale: 2 },
  exit: { rotate: 0, scale: 0.8 },
};

const Variants = () => {
  const [isRotate, setIsRotate] = useState(true);

  return (
    <div>
      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        variants={simpleAnimation} //---> defining the variants
        initial="initial"
        animate={isRotate ? "initial" : "animate"}
        exit="exit"
        onClick={() => setIsRotate(!isRotate)}
      />

      {/* this is how we can use the variants  */}
    </div>
  );
};

export default Variants;
