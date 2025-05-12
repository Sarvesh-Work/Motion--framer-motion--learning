import * as motion from "motion/react-client";

// whileInView
// this  animates a element  when it comes into the viewport

const WhileInView = () => {
  return (
    <div className="h-screen">
      <div className="h-[70rem] flex items-end py-10">
        <motion.div
          className="h-40 w-40 bg-yellow-400"
          // animate when the element enters the viewport
          whileInView={{
            rotate: [150, 200, 360], // rotates the element in steps
            opacity: [0, 1], // fades in from invisible to fully visible
          }}
          transition={{
            duration: 3, // total animation time is 3 seconds
            ease: "linear", // smooth linear transition
          }}
        />
      </div>
    </div>
  );
};

export default WhileInView;
