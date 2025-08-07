'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import aboutusimg from "../imagess/aboutus.jpg"

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
        <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">
            <div className="lg:py-[140px] py-[80px]">
                <div className="lg:flex justify-between">
                    <div className="">
                        <motion.div
                            variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="flex items-center gap-x-[5px]">
                            <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                            <div className="">
                                <p className="lg:text-[14px] text-[12px] font-archivo font-normal text-[#8D493A]">About Us</p>
                            </div>
                        </motion.div>
                        <div className="lg:max-w-[600px] mt-[10px]">
                            <div className="">
                                <motion.h2
                                    variants={textfade}
                                    initial="hidden"
                                    custom={1}
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="lg:text-[64px] text-[40px] font-archivo font-normal text-[#8D493A] leading-[110%] tracking-[-10%] ">Where Spaces Inspire, and Design Comes Alive</motion.h2>
                            </div>
                            <div className="mx-w-[550px] lg:mt-[32vh] mt-[10px]">
                                <div className="">
                                    <motion.p
                                        variants={textfade}
                                        initial="hidden"

                                        custom={0}
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="lg:text-[16px] text-[14px] font-archivo font-medium text-[#844436da]">At Troscán, we believe that every space has a story to tell. As a premier furniture design and room decorating agency.</motion.p>
                                    <motion.p
                                        variants={textfade}
                                        initial="hidden"

                                        custom={1}
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="lg:mt-[20px] mt-[10px] lg:text-[16px] text-[14px] font-archivo font-medium text-[#844436da] "> Our expert team blends timeless craftsmanship with innovative designs, ensuring each piece and layout reflects your unique taste and lifestyle. Whether you're looking to reimagine your living room.</motion.p>
                                </div>
                                <div className="lg:mt-[20px] mt-[10px]">
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
                    <div className="lg:mt-0 mt-[25px]">
                        <div className="relative overflow-hidden lg:w-[877px] lg:h-[763px] rounded-[15px]">
                            <div
                                ref={imgRef}
                                className={` lg:w-[877px] w-full h-[400px] lg:h-[763px] transition-transform duration-700 ease-out ${inView ? 'scale-100' : 'scale-105'
                                    }`}
                            >
                                <Image
                                    className="rounded-[15px] object-cover"
                                    src={aboutusimg}
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