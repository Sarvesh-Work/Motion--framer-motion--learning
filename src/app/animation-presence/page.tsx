"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// AnimationPresence
// the animation presence  is use to make  exit animation easy
// or smooth

// attributes (props)
// initial --> it takes boolean value and tells that initial animation should run or not while element entering
// mode--->
// Type: 'sync' | 'wait' | 'popLayout'
// What it does: Controls how entering and exiting components animate in relation to each other

const page = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="rounded-md bg-yellow-400 h-[10rem]"
          />
        ) : null}
      </AnimatePresence>

      <motion.button
        className="mt-4 w-[10rem] cursor-pointer shadow-2xl rounded-full p-2  bg-yellow-400"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{
          y: 1,
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
};

export default page;
