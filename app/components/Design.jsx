'use client';

import Image from "next/image"
import { motion } from 'framer-motion';




const textWords = ['Where', 'Vision', 'Meets', 'Design'];


const cards = [
  {
    title: "Where Tradition Meets Mastery",
    subtitle: "Blending Tradition with Modern Elegance",
    image: "	https://framerusercontent.com/images/cC9LIRH5Ao9H0pL925zPquahGI.jpeg",
  },
  {
    title: "Modern Elegance in Every Room",
    subtitle: "Redefining spaces with timeless style and innovation.",
    image: "	https://framerusercontent.com/images/bzAxUIZb76NAbMbbTCNRKvwep8.jpeg",
  },
  {
    title: "Luxurious Coastal Living",
    subtitle: "Bringing the beauty of the shore into your home.",
    image: "https://framerusercontent.com/images/AkcINRgdRJWagCIMhlfAa6SCpcs.jpeg",
  },
  {
    title: "Serene Urban Retreat",
    subtitle: "Where modern comfort meets peaceful sophistication.",
    image: "https://framerusercontent.com/images/h8rMLidvtxgO37bgs0urvbSKFOk.jpeg",
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeUpWord = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};



export default function Design() {
  return (
    <div className="lg:pt-[200px] pt-[100px] pb-[140px]">
      <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">
        <div className="">
          <motion.h2
            className="text-[40px] lg:text-[96px] lg:text-start text-center font-archivo text-[#8D493A] font-regular lg:w-[600px] mx-auto leading-tight"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {textWords.map((wordText, idx) => (
              <motion.span
                key={idx}
                className="inline-block mx-[5px]"
                custom={idx}
                variants={fadeUpWord}
              >
                {wordText}
              </motion.span>
            ))}
          </motion.h2>
        </div>
        <div className="lg:mt-[60px] mt-[30px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-4 gap-4">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={idx}
              >
                <div className="relative w-full lg:h-[635px] h-[281px] rounded-[10px] overflow-hidden">
                  <Image
                    className="transition-transform duration-300 hover:scale-105 object-cover"
                    src={card.image}
                    alt={card.title}
                    fill
                  />
                </div>
                <div className="mt-[15px]">
                  <h3 className="lg:text-[28px] text-[20px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">
                    {card.title}
                  </h3>
                  <p className="lg:text-[16px] text-[14px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8d493acc] mt-[10px]">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

