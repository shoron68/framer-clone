'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

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
const buttonfade = {
    hidden: { opacity: 0, y: 0 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 * i,
            duration: 0.6,
            ease: "easeOut"
        },
    }),
};



export default function AboutUs() {
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
    return (
        <div className="max-w-[1905px] mx-auto px-[50px]">
            <div className="py-[140px]">
                <div className="flex justify-between">
                    <div className="">
                        <motion.div
                            variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex items-center gap-x-[5px]">
                            <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                            <div className="">
                                <p className="text-[14px] font-archivo font-normal text-[#8D493A]">About Us</p>
                            </div>
                        </motion.div>
                        <div className="max-w-[600px] mt-[10px]">
                            <div className="">
                                <motion.h2
                                    variants={textfade}
                                    initial="hidden"
                                    custom={1}
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="text-[64px] font-archivo font-normal text-[#8D493A] leading-[110%] tracking-[-10%] ">Where Spaces Inspire, and Design Comes Alive</motion.h2>
                            </div>
                            <div className="mx-w-[550px] mt-[32vh]">
                                <div className="">
                                    <motion.p
                                        variants={textfade}
                                        initial="hidden"

                                        custom={0}
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="text-[16px] font-archivo font-medium text-[#844436]">At Troscán, we believe that every space has a story to tell. As a premier furniture design and room decorating agency.</motion.p>
                                    <motion.p
                                        variants={textfade}
                                        initial="hidden"

                                        custom={1}
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="mt-[20px] text-[16px] font-archivo font-medium text-[#844436] "> Our expert team blends timeless craftsmanship with innovative designs, ensuring each piece and layout reflects your unique taste and lifestyle. Whether you're looking to reimagine your living room.</motion.p>
                                </div>
                                <div className="mt-[20px]">
                                    <motion.button
                                        variants={buttonfade}
                                        initial="hidden"

                                        custom={1}
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="text-[16px] font-archivo font-medium text-[#F8EDE3] bg-[#8D493A] cursor-pointer py-[16px] px-[26px] leading-[100%] rounded-[5px] hover:bg-[#B85842] duration-400">More About us</motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative overflow-hidden w-[877px] h-[763px] rounded-[15px]">
                            <div
                                ref={imgRef}
                                className={` w-[877px] h-[763px] transition-transform duration-700 ease-out ${inView ? 'scale-100' : 'scale-105'
                                    }`}
                            >
                                <Image
                                    className="rounded-[15px] object-cover"
                                    src="https://framerusercontent.com/images/vJzsJOlbUK8qkA5xxZA18jSC6SI.jpeg"
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