'use client';
import { motion,AnimatePresence  } from 'framer-motion';
import Image from "next/image";
import { useState } from 'react';

const services = [
  {
    title: "Custom Furniture Design",
    image: "https://framerusercontent.com/images/sfKLQbWvWW6JhYVucFGGxxvK3A.jpeg",
  },
  {
    title: "Room Decoration & Styling",
    image: "https://framerusercontent.com/images/aqfXMublrraihocca3U6iDYHyc.jpeg",
  },
  {
    title: "Space Planning & Interior Layout",
    image: "https://framerusercontent.com/images/PzGfS0tMVPZZc0jcqD3wHEmmQI.jpeg",
  },
  {
    title: "Home Renovations & Remodeling",
    image: "https://framerusercontent.com/images/KdQ95Q3pfhLOIwVe9qSUBK1fk.jpeg",
  },
  {
    title: "Lighting Design",
    image: "https://framerusercontent.com/images/5Bsk9IjkqVtzmXX71ASTIlfNp0.jpeg",
  },
  {
    title: "Virtual Interior Design Consultations",
    image: "https://framerusercontent.com/images/5RDxKCHJwVzXuvUd5i9RY6vW3o.jpeg",
  },
];


const textfade = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * i,
      duration: 0.4,
      ease: "easeOut"
    },
  }),
};
export default function ServiceSection() {

  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">
      <div className=" lg:mt-[140px] mt-[80px] lg:ml-[920px]  mb-[80px]">
        <div className="">
          <motion.div
            variants={textfade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center  gap-x-[5px]   ">
            <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
            <div className="">
              <p className="lg:text-[14px] text-[12px] font-archivo font-normal text-[#8D493A]">Our Expertise</p>
            </div>
          </motion.div>
          <div className="mt-[10px]">
            <motion.h3
              variants={textfade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              className="lg:text-[64px] text-[36px] font-archivo font-normal text-[#8D493A] leading-[100%] tracking-[-0.03em] lg:w-[600px]">Selecting the ideal elements to elevate your space</motion.h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
      <div className="w-full grid md:grid-cols-2 lg:gap-10">
        <div className="rounded-[10px] overflow-hidden shadow-lg min-h-[835px] relative lg:block hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -50 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                width={1000}
                height={800}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col justify-center ">
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className="flex items-start gap-x-[20px] py-2 border-b border-[#8D493A] hover:bg-[#8D493A] hover:text-[#F8EDE3] hover:pl-[20px] duration-400 cursor-pointer"
            >
              <p className="lg:text-[16px] text-[12px] text-[#8D493A] font-archivo font-medium">{String(i + 1).padStart(2, "0")}</p>
              <p className="lg:text-[28px] text-[20px] text-[#8D493A] font-archivo font-medium">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}