"use client";

import { motion, useMotionValue, useMotionValueEvent } from "motion/react";

//! useMotionValue

// this hook is used to track the movement of an element
// like how much the element has moved on x and y axes

const Page = () => {
  const x = useMotionValue(0); //--> tracking the movement of the element on the x axis

  // this hook is used to perform a task when the useMotionValue changes
  useMotionValueEvent(x, "change", (latest) => {
    console.log("new value of our element", latest);
  });

  // use of this hook
  // we can use this hook to apply animations based on the element movement

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400"
        style={{ x }}
        drag
      />
    </div>
  );
};

export default Page;
