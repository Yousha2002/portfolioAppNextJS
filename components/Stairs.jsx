// "use client";
// import { motion } from "framer-motion";

// const stairAnimation = {
//   initial: {
//     top: "100%",
//     opacity: 0,
//     scale: 0.5,
//   },
//   animate: {
//     top: "0%",
//     opacity: 1,
//     scale: 1,
//   },
//   exit: {
//     top: "100%",
//     opacity: 0,
//     scale: 0.5,
//   },
// };

// const reverseIndex = (index, totalSteps) => {
//   return totalSteps - index - 1;
// };

// const Stairs = () => {
//   const totalSteps = 6;

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {[...Array(totalSteps)].map((_, index) => (
//         <motion.div
//           key={index}
//           variants={stairAnimation}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{
//             duration: 0.6,
//             ease: "easeInOut",
//             delay: reverseIndex(index, totalSteps) * 0.1,
//           }}
//           className="absolute left-0 w-full h-[16.6%] bg-white"
//           style={{
//             top: `${(index * 100) / totalSteps}%`, // Ensure proper positioning
//             zIndex: totalSteps - index, // Stack the divs
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Stairs;
