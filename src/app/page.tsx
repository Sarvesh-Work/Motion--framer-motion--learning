import * as motion from "motion/react-client"; // --> this import is only used in next.js (app router)

//! introduction to motion (previously known as framer motion)

// for react (like in vite or cra), we use:
/// import { motion } from "motion/react" --> like this

// or

//! in server components of next.js, we use:
/// import * as motion from "motion/react-client"

//! and in client components of next.js, we use:
/// import { motion } from "motion/react"

// the difference is because in next.js, server and client components are handled differently.
// "motion/react-client" is needed in server components because "motion/react" relies on hooks (like useEffect),
// which don't run in server components. so importing motion as * like this helps to prevent hydration errors.

const Home = () => {
  return (
    <div>
      {/* here by defining motion.div, we are telling motion that this div should be animated */}
      <motion.div></motion.div>
    </div>
  );
};

export default Home;
