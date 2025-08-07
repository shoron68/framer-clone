'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import nimg1 from "../imagess/nimg1.jpg"
import nimg2 from "../imagess/nimg2.jpg"
import nimg3 from "../imagess/nimg3.jpg"
import nimg4 from "../imagess/nimg4.jpg"
import nimg5 from "../imagess/nimg5.jpg"
import nimg6 from "../imagess/nimg6.jpg"

const cards = [
  {
    title: "How to Choose the Perfect Lighting for Every Room ",
    subtitle: "Illuminating Spaces with Style and Purpose",
    image: nimg1,
    date: "January 2, 2024",
  },
  {
    title: "The Rise of Minimalism in Modern Homes",
    subtitle: "Less Clutter, More Purpose in Interior Design.",
    image: nimg2,
    date: "August 22, 2023",
  },
  {
    title: "The Art of Layering Textures in Interior Design",
    subtitle: "Creating Depth and Warmth Through Material Harmony.",
    image: nimg3,
    date: "March 17, 2023",
  },
  {
    title: "Psychology in Interior Design",
    subtitle: "Shaping Emotions Through Thoughtful Color Choices",
    image: nimg4,
    date: "January 21, 2023",
  },
  {
    title: "Timeless Furniture Pieces Every Home Needs",
    subtitle: "Building a Home That Never Goes Out of Style",
    image:nimg5,
    date: "February 22, 2022",
  },
  {
    title: "The Art of Minimalist Interiors",
    subtitle: "Less is More: Designing Spaces That Speak Simplicity",
    image:nimg6 ,
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
    <div className="lg:pt-[200px] pt-[100px] lg:pb-[140px] pb-[100px] bg-[#F8EDE3]">
      <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">
        <h2 className="lg:text-[96px] text-[44px] font-archivo font-medium text-[#8D493A] leading-[100%] tracking-[-0.03em] lg:w-[800px] mx-auto text-center flex flex-wrap gap-3 justify-center">
          <motion.span
            variants={fadeUpWord}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
          >
            Expert
          </motion.span>
          <motion.span
            variants={fadeUpWord}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
          >
            Insights
          </motion.span>
          <motion.span
            variants={fadeUpWord}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={2}
          >
            and
          </motion.span>
          <motion.span
            variants={fadeUpWord}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={3}
          >
            Design
          </motion.span>
          <motion.span
            variants={fadeUpWord}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={4}
          >
            Inspiration
          </motion.span>
        </h2>


        <div className="lg:mt-[60px] mt-[30px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="h-auto w-full lg:max-w-[595px] py-[20px]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={index}
            >
              <div className="overflow-hidden rounded-[10px]">
                <Image
                  className="object-cover  h-[] transition-transform duration-500 ease-in-out hover:scale-105 w-full lg:h-[501px] h-[300px]"
                  src={card.image}
                  alt={card.title}
                  width={595}
                  height={501}
                />
              </div>

              <div className="flex items-center gap-x-[5px] mt-[15px]">
                <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                <p className="lg:text-[14px] text-[12px] font-archivo font-normal text-[#8D493A]">
                  {card.date}
                </p>
              </div>

              <div className="mt-[5px]">
                <h4 className="lg:text-[22px] text-[18px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em]">
                  {card.title}
                </h4>
                <p className="lg:text-[16px] text-[12px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em] mt-[15px]">
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
