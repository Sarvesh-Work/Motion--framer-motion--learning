import * as motion from "motion/react-client";

//! transformation refers to changing how an element appears visually by rotating, scaling, skewing, or moving it

const page = () => {
  return (
    // if we want to move our element along the x-axis, we use the x property in the animate prop provided by motion
    // example --> animate={{ x: 100 }}
    <div className="gap-3 flex">
      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 rounded-full"
        animate={{ x: 100 }} // ---> this will move the element 100px to the right from its default position
      />

      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 rounded-full"
        animate={{ x: -250 }} // ---> this will move the element 250px to the left from its default position because of the negative value
      /> */}

      {/* for y-axis movement, it's the same concept */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 rounded-full"
        animate={{ y: -250 }} // ---> this will move the element 250px upwards from its default position
      />

      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 rounded-full"
        animate={{ y: 250 }} // ---> this will move the element 250px downwards from its default position
      /> */}

      {/* for rotating an element, we can use rotateX and rotateY */}

      {/* example ---> */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ rotateX: 250 }} // ---> this will rotate the element along the x-axis
      /> */}

      {/* same for y-axis rotation */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ rotateY: 250 }} // ---> this will rotate the element along the y-axis
      /> */}

      {/* we also have a shorthand property called rotate */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ rotate: 250 }} // ---> this will rotate the element in both x and y directions together
      /> */}

      {/* scaling can also be achieved using the animate prop */}
      {/* we can use scaleX and scaleY to scale specifically on x or y axis */}

      {/* example ---> */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ scaleX: 2 }} // ---> this will scale the element's width to double its original size
      /> */}

      {/* same for y-axis */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ scaleY: 2 }} // ---> this will scale the element's height to double its original size
      /> */}

      {/* we also have a shorthand property called scale which scales both x and y axes equally */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ scale: 2 }} // ---> this will double the size of the element in both directions
      /> */}

      {/* skewing the element */}

      {/* skew is a type of transformation that tilts an element along the x or y axis */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ skewX: 500 }} // ---> this will skew the element along the x-axis
      /> */}

      {/* <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ skewY: 500 }} // ---> this will skew the element along the y-axis
      /> */}

      {/* shorthand property for skew */}

      <motion.div
        className="h-[10rem] w-[10rem] bg-yellow-400 "
        animate={{ skew: 500 }} // ---> this will skew the element in both x and y directions together
      />
    </div>
  );
};

export default page;
