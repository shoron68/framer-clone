'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


export default function Approch() {
    const imgRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.3,
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

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



    return (
        <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">
            <div className="lg:py-[140px] py-[140px]">
                <div className="lg:flex justify-between">
                    <div className="">
                        <motion.div
                         variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        className="flex items-center gap-x-[5px] ">
                            <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                            <div className="">
                                <p className="lg:text-[14px] text-[12px] font-archivo font-normal text-[#8D493A]">Our Approach</p>
                            </div>
                        </motion.div>
                        <div className="lg:max-w-[600px] mt-[10px]">
                            <div className="">
                                <motion.h2
                                 variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                                className="lg:text-[64px] text-[36px] font-archivo font-normal text-[#8D493A] leading-[110%] tracking-[-10%] ">A Vision Shaped by Elegance and Expertise</motion.h2>
                            </div>
                            <div className="lg:mx-w-[550px] lg:mt-[39vh] mt-[10px]">
                                <div className="">
                                    <motion.p 
                                    variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                                    className="lg:text-[16px] text-[14px] font-archivo font-medium text-[#844436]">We believe every space should tell a story that reflects its unique personality and the people who inhabit it.</motion.p>
                                    <motion.p
                                    variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                                    className="lg:mt-[20px] mt-[10px] lg:text-[16px] text-[14px] font-archivo font-medium text-[#844436] ">With a thoughtful and intentional approach, we design spaces that exude balance, harmony, and authenticity. Our process is collaborative and meticulous, grounded in the philosophy that true beauty lies in the subtle details that make a space feel like home.</motion.p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative overflow-hidden lg:w-[877px] lg:h-[763px] rounded-[15px] lg:mt-0 mt-[30px]">
                            <div
                                ref={imgRef}
                                className={` lg:w-[877px] lg:h-[763px] w-[398px] h-[350px] transition-transform duration-700 ease-out ${inView ? 'scale-100' : 'scale-105'
                                    }`}
                            >
                                <Image
                                    className="rounded-[15px] object-cover"
                                    src="https://framerusercontent.com/images/aIXQhEfiCCkG7N7uFy3TJSvEXso.jpeg"
                                    alt="Description"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

