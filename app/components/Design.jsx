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

const word = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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


export default function Design() {
    return (
        <div className="pt-[200px] pb-[140px]">
            <div className="max-w-[1905px] mx-auto px-[50px]">
                <div className="">
                    <motion.h2
            className="text-[64px] md:text-[96px] font-archivo text-[#8D493A] font-regular w-[600px] mx-auto leading-tight"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {textWords.map((wordText, idx) => (
              <motion.span
                key={idx}
                className="inline-block mx-[5px]"
                variants={word}
              >
                {wordText}
              </motion.span>
            ))}
          </motion.h2>
                </div>


                <div className="mt-[60px]">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className="overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={idx}
        >
          <div className="relative w-full h-[635px] rounded-[10px] overflow-hidden">
            <Image
              className="transition-transform duration-300 hover:scale-105 object-cover"
              src={card.image}
              alt={card.title}
              fill
            />
          </div>
          <div className="mt-[15px]">
            <h3 className="text-[28px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">
              {card.title}
            </h3>
            <p className="text-[16px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8d493acc] mt-[10px]">
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

