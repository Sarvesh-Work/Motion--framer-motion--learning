import * as motion from "motion/react-client";

// ! Gestures
// gestures allow us to add interactive animations based on
// user actions like dragging , hovering, tappping. it makes our component respond to how users interact with them

// The Gestures has properties like
// whileHover ---> for hover animation
// whileTap  ---> for tap animation
// whileFocus --->  for focus animation
// whileDrag  --->  for Drag animation
// drag   ---> to make the element drag  
// onHoverStart ---> for animation when hover starts
// onHoverEnd  ---> for end  hover animation
// onTapStart  ---> when tap starts
// onTap ---> for tap animation
// onDragStart ---> when drag starts
// onDragEnd  ---> when drag ends

const Gestures = () => {
  return (
    <div>
      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        // whileHover={{ scale: 2, rotate: 150 }}
        // whileTap={{ backgroundColor: "orange", scale: 2 }}
        // whileFocus={{ x: 200, scale: 3 }}
        // drag
        // whileDrag={{ backgroundColor: "orange", scale: 2 }}
        // dragConstraints={{
        //   top: -10,
        // }} //---> this is use to restrict the drag area
        // dragElastic={1}

        // transition={{
        //   duration: 3,
        //   type: "spring", //---> provides the spring like animation
        // }}
      />
    </div>
  );
};

export default Gestures;
