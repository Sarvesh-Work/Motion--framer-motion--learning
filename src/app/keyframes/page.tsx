import * as motion from "motion/react-client";

// !Keyframes
// keyframes are use to create a complex animations
// means dividing a animation in to multiple sets
// for  keyframe we use [starting,ending] this for every property inside animate

const Keyframes = () => {
  return (
    <div>
      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{
          // ex---> keyframe example using scale
          scale: [1, 2, 2, 3],
          rotate: [0, 30, 90, 360],
          // we cam provide multiple key frames
          //   in animate we can manipulate  any property of css
        }}
        transition={{
          duration: 5,
        }}
      />
    </div>
  );
};

export default Keyframes;
