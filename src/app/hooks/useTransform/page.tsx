"use client";

import { motion, useMotionValue, useTransform } from "motion/react";

//! useTransform

// The useTransform hook lets you create a new animated value based on another one
// For example when we are tracking the value of an element using useMotionValue
// we can use that value to apply a different kind of animation

const Page = () => {
  const x = useMotionValue(0); //--> we can give any value  as starting value for element

  const rotate = useTransform(x, [-100, 200, 400], [100, 180, 260]);

  // x --> this is the motion value we are tracking and using to apply the animation
  // [-100, 200, 400] --> these are the input x values where we want changes to happen
  // [100, 180, 260] --> these are the rotation values corresponding to the x values
  //                   For example:
  //                   if x = -100 --> rotate = 100
  //                   if x = 200  --> rotate = 180
  //                   if x = 400  --> rotate = 260

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400"
        drag
        style={{
          x,
          rotate,
        }}
      />
    </div>
  );
};

export default Page;
