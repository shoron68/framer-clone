'use client';
import Image from "next/image";
import { motion } from 'framer-motion';


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


export default function () {
    return (
        <div className="lg:py-[140px] py-[80px]">
            <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">
                <div className=" flex justify-center items-center ">
                    <h2 className="lg:text-[96px] text-[42px] font-archivo font-medium text-[#8D493A] leading-[100%] tracking-[-0.03em] lg:w-[800px] mx-auto text-center flex flex-wrap gap-3 justify-center mt-[100px]">
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            custom={0}
                        >
                            Crafting
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            custom={1}
                        >
                            Timeless
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            custom={2}
                        >
                            Spaces
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            custom={3}
                        >
                            with
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            custom={4}
                        >
                            Style
                        </motion.span>
                    </h2>

                </div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="lg:mt-[50px] mt-[30px]">
                    <Image
                        className="rounded-[20px] "
                        src="https://framerusercontent.com/images/hTZXDyZnJxuZxbdwIztBbCgMYQ.jpeg"
                        width={1805}
                        height={984}
                        alt="image"
                    />
                </motion.div>
            </div>
        </div>
    )
}