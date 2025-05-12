import * as motion from "motion/react-client";

//! transitions are the effects that control how animations happen
//! meaning, the rules for how elements move or change during animation

// transition has some main properties:
// duration: how long the animation is going to run
// easing: the speed curve of the animation (how fast or slow it moves at different points)
// delay: how long to wait before starting the animation

const Transition = () => {
  return (
    <div>
      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 rounded-full"
        initial={{ x: 0 }} // --> defines the initial position of the element
        animate={{
          x: 200, // --> moves the element 200px to the right
        }}
        
        // adding transition properties
        transition={{
          delay: 1, // --> adds a delay of 2 seconds before starting the animation
          duration: 2, // --> animation will take 3 seconds to complete
          ease: "easeIn", // --> animation will start slowly and speed up
        }}
      />
    </div>
  );
};

export default Transition;
