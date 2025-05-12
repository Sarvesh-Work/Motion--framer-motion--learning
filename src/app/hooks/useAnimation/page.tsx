"use client";

import { motion, useAnimate } from "motion/react";
import { useCallback, useState } from "react";

const Page = () => {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false);

  const animateElement = useCallback(async () => {
    if (isVisible) {
      await animate(
        scope.current,
        { opacity: 0, x: 400, scale: 0 },
        { duration: 0.5, ease: "easeInOut" }
      );

      await animate(
        scope.current,
        { x: -400, opacity: 0, scale: 0 },
        { duration: 0 }
      );
      setIsVisible(false);
    } else {
      await animate(
        scope.current,
        { opacity: 1, x: 0, scale: 1 },
        { duration: 0.5, ease: "easeInOut" }
      );
      setIsVisible(true);
    }
  }, [isVisible, animate, scope]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <motion.div
        className="h-40 w-40 bg-yellow-400"
        ref={scope}
        initial={{ x: -400, opacity: 0, scale: 0 }}
      />
      <button
        className="mt-6 rounded-md bg-yellow-400 px-4 py-2 transition-colors hover:bg-yellow-500"
        onClick={animateElement}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Page;
