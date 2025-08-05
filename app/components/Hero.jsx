'use client';
import { motion } from 'framer-motion';

const textWords = ['Timeless', 'Comfort', '&', 'Endless', 'Luxury'];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const word = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonFade = {
  hidden: { opacity: 0, y: 0 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * (textWords.length + i),
      duration: 0.3,
    },
  }),
};

export default function HeroSection() {
  return (
    <div className="bg-[url('https://framerusercontent.com/images/I1KebQoYSXcDwvUsFzZRi0wIxE.jpeg')] w-auto h-[100vh] bg-cover bg-center">
      <div className="flex justify-center items-center h-[100vh]">
        <div className="text-center">
          <motion.h1
            className="text-[64px] md:text-[96px] font-archivo text-[#FFFFFF] font-regular w-[850px] mx-auto leading-tight"
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
          </motion.h1>

          <div className="flex justify-center items-center mt-[30px] gap-x-[10px]">
            <motion.button
              className="py-[16px] px-[26px] bg-[#F8EDE3] text-[#8D493A] rounded-[5px] font-archivo font-medium hover:bg-[#E4CEBA] transition-all duration-400"
              variants={buttonFade}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Our Vision
            </motion.button>

            <motion.button
              className="py-[15px] px-[26px] border-[1px] border-[#F8EDE3] text-[#fff] hover:text-[#8D493A] rounded-[5px] font-archivo font-medium hover:bg-[#F8EDE3] transition-all duration-400"
              variants={buttonFade}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Explore Expertise
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
