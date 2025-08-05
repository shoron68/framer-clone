'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

const cards = [
  {
    title: "How to Choose the Perfect Lighting for Every Room ",
    subtitle: "Illuminating Spaces with Style and Purpose",
    image: "https://framerusercontent.com/images/J9WUBD0d1gg7X5rmW8sz2Z376mQ.jpeg",
    date: "January 2, 2024",
  },
  {
    title: "The Rise of Minimalism in Modern Homes",
    subtitle: "Less Clutter, More Purpose in Interior Design.",
    image: "https://framerusercontent.com/images/JNg12r2XAvXXvwQS8ZeRTfcfpI.jpeg",
    date: "August 22, 2023",
  },
  {
    title: "The Art of Layering Textures in Interior Design",
    subtitle: "Creating Depth and Warmth Through Material Harmony.",
    image: "https://framerusercontent.com/images/AkcINRgdRJWagCIMhlfAa6SCpcs.jpeg",
    date: "March 17, 2023",
  },
  {
    title: "Psychology in Interior Design",
    subtitle: "Shaping Emotions Through Thoughtful Color Choices",
    image: "https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg",
    date: "January 21, 2023",
  },
  {
    title: "Timeless Furniture Pieces Every Home Needs",
    subtitle: "Building a Home That Never Goes Out of Style",
    image: "https://framerusercontent.com/images/h8rMLidvtxgO37bgs0urvbSKFOk.jpeg",
    date: "February 22, 2022",
  },
  {
    title: "The Art of Minimalist Interiors",
    subtitle: "Less is More: Designing Spaces That Speak Simplicity",
    image: "https://framerusercontent.com/images/8a7hE6znKIBRH3lXUx86gimLzmM.jpeg",
    date: "February 5, 2022",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
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

export default function NewsPage() {
  return (
    <div className="pt-[200px] pb-[140px] bg-[#F8EDE3]">
      <div className="mx-[50px]">
        <h2 className="text-[96px] font-archivo font-medium text-[#8D493A] leading-[100%] tracking-[-0.03em] w-[800px] mx-auto text-center flex flex-wrap gap-3 justify-center">
  <motion.span
    variants={fadeUpWord}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={0}
  >
    Expert
  </motion.span>
  <motion.span
    variants={fadeUpWord}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
    custom={1}
  >
    Insights
  </motion.span>
  <motion.span
    variants={fadeUpWord}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    custom={2}
  >
    and
  </motion.span>
  <motion.span
    variants={fadeUpWord}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}
    custom={3}
  >
    Design
  </motion.span>
  <motion.span
    variants={fadeUpWord}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.7 }}
    custom={4}
  >
    Inspiration
  </motion.span>
</h2>


        <div className="mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="h-auto w-full max-w-[595px] py-[20px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-105 w-full h-[501px]"
                  src={card.image}
                  alt={card.title}
                  width={595}
                  height={501}
                />
              </div>

              <div className="flex items-center gap-x-[5px] mt-[15px]">
                <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                <p className="text-[14px] font-archivo font-normal text-[#8D493A]">
                  {card.date}
                </p>
              </div>

              <div className="mt-[5px]">
                <h4 className="text-[22px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em]">
                  {card.title}
                </h4>
                <p className="text-[16px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em] mt-[15px]">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
