'use client'
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Transforming() {
    const { scrollYProgress } = useScroll();
    const [isAnimated, setIsAnimated] = useState(false);
    const [showText, setShowText] = useState(true)

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((latest) => {
            if (latest > 0.2) {
                setIsAnimated(true);
                setTimeout(() => setShowText(true), 800);
            } else if (latest <= 0.1) {
                setIsAnimated(false);
                setShowText(false);
            }
        });
        return unsubscribe;
    }, [scrollYProgress]);


    const progress = isAnimated ? 1 : 0;

    
    const image1X = progress === 1 ? -600 : 0;
    const image1Y = progress === 1 ? -280 : 0;


    const image2X = progress === 1 ? -20 : 0;
    const image2Y = progress === 1 ? -300 : 0;


    const image3X = progress === 1 ? 600 : 0;
    const image3Y = progress === 1 ? -250 : 0;


    const image4X = progress === 1 ? -660 : 0;
    const image4Y = progress === 1 ? 250 : 0;


    const image5X = progress === 1 ? 0 : 0;
    const image5Y = progress === 1 ? 400 : 0;


    const image6X = progress === 1 ? 600 : 0;
    const image6Y = progress === 1 ? 200 : 0;


    const contentOpacity = progress === 1 ? 1 : 0;
    const contentY = progress === 1 ? 0 : 100;



    return (
        <div className="h-[100dvh]">
            <div className="max-w-[1905px] mx-auto px-[50px]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                    <div className="relative w-full max-w-7xl mx-auto px-8">
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center z-0"
                            animate={{
                                y: contentY,
                                opacity: showText ? 1 : 0,
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="mx-auto text-center">
                                <p className='text-[40px] font-archivo font-normal text-[#8D493A] leading-[100%] tracking-[-0.03em]'>
                                    Transforming spaces with style,<br />
                                    through Troscán's exquisite<br />
                                    design expertise.
                                </p>
                            </div>
                        </motion.div>
                        <div className="relative z-10 flex items-center justify-center">
                            <div className="relative">
                                <motion.div
                                    className="absolute w-[356px] h-[418px] top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
                                    animate={{
                                        x: image1X,
                                        y: image1Y,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    initial={{ x: 0, y: 0 }}
                                >
                                    <Image
                                        className='rounded-[10px]'
                                        src='https://framerusercontent.com/images/wxArQEjlcrBYFF8tdvyrSDA68Zw.jpeg'
                                        alt='Image1'
                                        width={356}
                                        height={418}
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute  w-[356px] h-[211px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                                    animate={{
                                        x: image2X,
                                        y: image2Y,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut", }}
                                    initial={{ x: 0, y: 0 }}
                                >
                                    <Image
                                        className='rounded-[10px]'
                                        src='https://framerusercontent.com/images/nYgQL26JA1Ioq4xVHJRlasIEC6Y.jpeg'
                                        alt='Image1'
                                        width={356}
                                        height={211}
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute  w-[470px] h-[314px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                                    animate={{
                                        x: image3X,
                                        y: image3Y,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut", }}
                                    initial={{ x: 0, y: 0 }}
                                >
                                    <Image
                                        className='rounded-[10px]'
                                        src='https://framerusercontent.com/images/rCYE8FEyC5lN6m5coOuFOOgDJ8A.jpeg'
                                        alt='Image1'
                                        width={470}
                                        height={314}
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute  w-[456px] h-[345px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
                                    animate={{
                                        x: image4X,
                                        y: image4Y,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut", }}
                                    initial={{ x: 0, y: 0 }}
                                >
                                    <Image
                                        className='rounded-[10px]'
                                        src='https://framerusercontent.com/images/VfSDa1aOzvtIWAcGV6dtAprgM.jpeg'
                                        alt='Image1'
                                        width={456}
                                        height={354}
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute  w-[456px] h-[518px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
                                    animate={{
                                        x: image5X,
                                        y: image5Y,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut", }}
                                    initial={{ x: 0, y: 0 }}
                                >
                                    <Image
                                        className='rounded-[10px]'
                                        src='https://framerusercontent.com/images/rZjzFX7RCkgqdY9yyhbi4hs.jpeg'
                                        alt='Image1'
                                        width={356}
                                        height={418}
                                    />
                                </motion.div>
                                <motion.div
                                    className="absolute  w-[501px] h-[304px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center"
                                    animate={{
                                        x: image6X,
                                        y: image6Y,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut", }}
                                    initial={{ x: 0, y: 0 }}
                                >
                                    <Image
                                        className='rounded-[10px]'
                                        src='https://framerusercontent.com/images/5SmAeNVODUEpPeB9LOhC2baAXP4.jpeg'
                                        alt='Image1'
                                        width={356}
                                        height={418}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}