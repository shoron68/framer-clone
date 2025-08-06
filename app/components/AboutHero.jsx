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
        <div className="py-[140px]">
            <div className="max-w-[1905px] mx-auto px-[50px]">
                <div className=" flex justify-center items-center ">
                    <h2 className="text-[96px] font-archivo font-medium text-[#8D493A] leading-[100%] tracking-[-0.03em] w-[800px] mx-auto text-center flex flex-wrap gap-3 justify-center mt-[100px]">
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0}
                        >
                            Crafting
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            custom={1}
                        >
                            Timeless
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            custom={2}
                        >
                            Spaces
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.6 }}
                            custom={3}
                        >
                            with
                        </motion.span>
                        <motion.span
                            variants={fadeUpWord}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.7 }}
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
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-[50px]">
                    <Image
                        className="rounded-[20px]"
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