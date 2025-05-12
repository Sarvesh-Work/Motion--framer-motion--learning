import * as motion from "motion/react-client";

//! Stagger Animation
// Animating multiple elements one after another with a small delay between each element.

const parentVariant = {
  animate: {
    transition: {
      staggerChildren: 0.3, // Delay of 0.3s between each child animation
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 50 }, // Initial state: invisible and shifted down
  animate: { opacity: 1, y: 0 }, // Final state: visible and in position
};

const Stagger = () => {
  return (
    <motion.div
      className="flex gap-4"
      variants={parentVariant} // Apply parent variant to handle staggering
      initial="hidden" // Start from hidden state
      animate="animate" // Animate to visible state
    >
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          className="h-[5rem] w-[5rem] bg-yellow-400"
          variants={childVariant} // Apply child variant to each box
        />
      ))}
    </motion.div>
  );
};

export default Stagger;
