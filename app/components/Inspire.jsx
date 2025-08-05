'use client';
import { motion } from "framer-motion";
import Image from "next/image";

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

export default function Inspire() {
    return (
        <div className=" pt-[140px]  pb-[200px] ">

            <div className="mx-[50px]">
                <div className="">
                    <motion.div
                    variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center gap-x-[5px] ">
                        <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                        <div className="">
                            <p className="text-[14px] font-archivo font-normal text-[#8D493A]">News</p>
                        </div>
                    </motion.div>
                    <motion.div
                    variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                    className="flex justify-between items-center mt-[10px]">
                        <div className="">
                            <h3 className="text-[64px] font-archivo font-normal text-[#8D493A] leading-[100%] tracking-[-0.02em] w-[500px]">Stay Inspired with Interior Trends</h3>
                        </div>
                        <div className="mt-[60px]">
                            <button className="py-[16px] px-[26px] bg-[#8D493A] text-[#F8EDE3] font-archivo font-medium rounded-[5px]">View All News</button>
                        </div>
                    </motion.div>
                </div>
                <div className="">

                    <div className="grid grid-cols-3 grid-rows-1 gap-2 mt-[50px]">
                        <div >
                            <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="h-[501px] w-[595px]">
                                <div className=" overflow-hidden rounded-[10px]">
                                    <Image
                                        className="h-[505px] w-[595px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                        src="https://framerusercontent.com/images/bZdh0mETTRfnrDNMinaVWCZqhqs.jpeg"
                                        width={595}
                                        height={501}
                                        alt="image"
                                    />
                                </div>

                                <div className="flex items-center gap-x-[5px] mt-[15px]">
                                    <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                                    <p className="text-[14px] font-archivo font-normal text-[#8D493A]">
                                        February 5, 2022
                                    </p>
                                </div>

                                <div className="mt-[5px]">
                                    <h4 className="text-[22px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em]">
                                        The Art of Minimalist Interiors
                                    </h4>
                                    <p className="text-[16px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em] mt-[15px]">
                                        Less is More: Designing Spaces That Speak <br/> Simplicity
                                    </p>
                                </div>
                            </motion.div>

                        </div>
                        <div >
                            <motion.div
                            variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                            className="h-[501px] w-[595px]">
                                <div className=" overflow-hidden rounded-[10px]">
                                    <Image
                                        className="h-[505px] w-[595px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                        src="https://framerusercontent.com/images/HXD1LGGH4sdyu2AfKcILOBWjBM.jpeg"
                                        width={595}
                                        height={501}
                                        alt="image"
                                    />
                                </div>

                                <div className="flex items-center gap-x-[5px] mt-[15px]">
                                    <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                                    <p className="text-[14px] font-archivo font-normal text-[#8D493A]">
                                        February 22, 2022
                                    </p>
                                </div>

                                <div className="mt-[5px]">
                                    <h4 className="text-[22px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em]">
                                        Timeless Furniture Pieces Every <br/> Home Needs
                                    </h4>
                                    <p className="text-[16px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em] mt-[15px]">
                                        Building a Home That Never Goes Out of Style
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div >
                            <motion.div
                            variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                            className="h-[501px] w-[595px]">
                                <div className=" overflow-hidden rounded-[10px]">
                                    <Image
                                        className="h-[505px] w-[595px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                        src="https://framerusercontent.com/images/xzFrK8RnnKFFvFnsttyDo4BcCE.jpeg"
                                        width={595}
                                        height={501}
                                        alt="image"
                                    />
                                </div>

                                <div className="flex items-center gap-x-[5px] mt-[15px]">
                                    <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                                    <p className="text-[14px] font-archivo font-normal text-[#8D493A]">
                                        February 21, 2023
                                    </p>
                                </div>

                                <div className="mt-[5px]">
                                    <h4 className="text-[22px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em]">
                                        Psychology in Interior Design
                                    </h4>
                                    <p className="text-[16px] text-[#8D493A] font-archivo font-medium leading-[100%] tracking-[-0.02em] mt-[15px]">
                                        Shaping Emotions Through Thoughtful Color <br/> Choices
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}