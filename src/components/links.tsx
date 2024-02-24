import { motion } from "framer-motion"
// import { Card } from "./card"
import { Blocks, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "./ui/button"
import { slideInFromTop } from "../utils/motion"
import { track } from "@vercel/analytics"



export function Links() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center w-full space-y-10 mt-5 max-w-[500px]"
    >

      <motion.div variants={slideInFromTop(4)}>
        <Button onClick={() => {
          track('Click', {
            message: 'Um usuario clicou no Link do instagram'
          })
        }}  className="flex items-center gap-2 p-6 w-full" variant='card'>
          <Instagram />
          Instagram
        </Button>
      </motion.div>



      <motion.div variants={slideInFromTop(4.2)}>
        <Button onClick={() => {
          track('Click', {
            message: 'Um usuario clicou no Link do Site'
          })
        }} className="flex items-center gap-2 p-6 w-full" variant='card'>
          <Blocks />
          Site
        </Button>
      </motion.div>


      <motion.div variants={slideInFromTop(4.4)}>
        <Button onClick={() => {
          track('Click', {
            message: 'Um usuario clicou no Link do Linkedin'
          })
        }} className="flex items-center gap-2 p-6 w-full" variant='card'>
          <Linkedin />
          Linkedin
        </Button>
      </motion.div>

      <motion.div variants={slideInFromTop(4.6)}>
        <Button onClick={() => {
          track('Click', {
            message: 'Um usuario clicou no Link do Facebook'
          })
        }} className="flex items-center gap-2 p-6 w-full" variant='card'>
          < Facebook />
          Facebook
        </Button>
      </motion.div>
    </motion.div>


  )
}