'use client';
import { motion } from 'framer-motion';
import heroimg from "../imagess/hero.jpg"

const textWords = ['Timeless', 'Comfort', '&', 'Endless', 'Luxury'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};


const buttonContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.0,
    },
  },
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


const fadeUp = {
  hidden: { opacity: 0, y: 0 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-[#75410d]">

      <div className="lg:mt-[310px] mt-[360px]">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:`url(${heroimg.src})`,
              WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%) add',
              mask: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%) add',
              top: 'calc(50.00000000000002% - 100% / 2)',
              height: '100%',
              left: 'calc(50.00000000000002% - 100% / 2)',
              overflow: 'hidden'
            }}
          />

          <div className="absolute inset-0 bg-black/10"></div>
        </div>


        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="text-center w-full max-w-[1200px] mx-auto">
            <motion.h1
              className="text-[46px] sm:text-[60px] md:text-[72px] lg:text-[96px] xl:text-[96px] font-archivo text-white font-normal leading-[1em] tracking-[-0.03em] mb-6 md:mb-8 max-w-[800px] mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {textWords.map((wordText, idx) => (
                <motion.span
                  key={idx}
                  custom={idx}
                  className="inline-block mx-1 sm:mx-1.5 md:mx-1.5"
                  variants={fadeUpWord}
                >
                  {wordText}
                </motion.span>
              ))}
            </motion.h1>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-3"
              variants={buttonContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className="lg:px-8 lg:w-0 w-full leading-[100%] cursor-pointer py-[17px] bg-[#F8EDE3] text-[#8D493A] rounded-[5px] font-archivo font-medium text-sm sm:text-base hover:bg-[#E4CEBA] hover:shadow-lg transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
                variants={fadeUp}>
                Our Vision
              </motion.button>

              <motion.button
                className="lg:px-8 lg:w-auto w-full py-[17px] leading-[100%] cursor-pointer border-[1px] border-white text-white rounded-[5px] font-archivo font-medium text-sm sm:text-base hover:bg-white hover:text-[#8D493A] hover:shadow-lg transition-all duration-300 min-w-[140px] sm:min-w-[160px]"
                variants={fadeUp}>
                Explore Expertise
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
