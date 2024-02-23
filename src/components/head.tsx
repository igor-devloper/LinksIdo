import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

export function Head() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-5"
    >
      <motion.div className="flex items-center gap-2 justify-center max-h-[243px] transition-transform ease-in animate-girar">
        <motion.div className="w-[13.5px] h-[243px]" variants={slideInFromLeft(0)}>
          <img src="/i.png" alt="" className="mt-[70px]"/>
        </motion.div>
        <motion.div className="w-[200px] h-[243]" variants={slideInFromRight(0)}>
          <img src="DO in png.png" alt="" />
        </motion.div>
      </motion.div>
      <motion.div className="w-[300px] h-[243] -mt-4 mb-5 animate-hoverBalao">
        <img src="descri in png.png" alt="" />
      </motion.div>
    </motion.div>
  )
}