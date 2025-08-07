'use client';
import { motion } from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";


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

export default function WhyUs() {
    return (
        <div className="lg:py-[140px] py-[80px]">
            <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">
                <div className="">
                    <motion.div
                     variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center justify-center gap-x-[5px] ">
                        <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                        <div className="">
                            <p className="lg:text-[14px] text-[12px] font-archivo font-normal text-[#8D493A]">Why Us?</p>
                        </div>
                    </motion.div>
                    <div className="lg:mt-[20px] mt-[10px]">
                        <motion.h2
                         variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                        className="lg:text-[64px] text-[36px] font-archivo font-normal text-[#8D493A] tracking-[-0.03em] text-center leading-[100%]">Elevate Your Space with <br /> Expertise & Elegance</motion.h2>
                    </div>
                </div>
                <div className="mt-[50px]">

                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-1 grid-rows-4 gap-2">
                        <div >
                            <motion.div
                             variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-[#fff] rounded-[12px] lg:py-[50px] py-[30px] px-[20px] text-center max-w-md mx-auto">
                                <div className="flex justify-center lg:mb-[30px] mb-[20px]">
                                    <div className="bg-[#F8EDE3] p-3 rounded-md">
                                        <IoSettingsOutline className="text-[#8D493A] text-[20px]" />
                                    </div>
                                </div>
                                <h2 className="lg:text-[22px] text-[18px] font-normal font-archivo leading-[110%] tracking-[-0.03em] text-[#8D493A]">Tailored Designs<br className="lg:block hidden" />for Every Space</h2>
                                <p className="mt-[15px] lg:text-[16px] text-[12px] text-[#8D493A] text-sm leading-[100%] w-[250px] mx-auto font-normal font-archivo">
                                    We believe every space is unique, and so should be its design. Our bespoke solutions are crafted to reflect your personality, needs, and lifestyle.
                                </p>
                            </motion.div>
                        </div>

                        <div >
                            <motion.div
                             variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                            className="bg-[#fff] rounded-[12px] lg:py-[58px] py-[30px] px-[20px] text-center max-w-md mx-auto">
                                <div className="flex justify-center lg:mb-[30px] mb-[20px]">
                                    <div className="bg-[#F8EDE3] p-3 rounded-md">
                                        <IoSettingsOutline className="text-[#8D493A] text-[20px]" />
                                    </div>
                                </div>
                                <h2 className="lg:text-[22px] text-[18px] font-normal font-archivo leading-[110%] tracking-[-0.03em] text-[#8D493A]">Attention to Every<br />Detail</h2>
                                <p className="mt-[15px] lg:text-[16px] text-[12px] text-[#8D493A] text-sm leading-[100%] w-[250px] mx-auto font-normal font-archivo">
                                    From the finest furniture finishes to the perfect decor accents, we meticulously focus on every detail to ensure flawless results.
                                </p>
                            </motion.div>
                        </div>

                        <div >
                            <motion.div
                             variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                            className="bg-[#fff] rounded-[12px] lg:py-[50px] py-[30px] px-[20px] text-center max-w-md mx-auto">
                                <div className="flex justify-center lg:mb-[30px] mb-[20px]">
                                    <div className="bg-[#F8EDE3] p-3 rounded-md">
                                        <IoSettingsOutline className="text-[#8D493A] text-[20px]" />
                                    </div>
                                </div>
                                <h2 className="lg:text-[22px] text-[18px] font-normal font-archivo leading-[110%] tracking-[-0.03em] text-[#8D493A]">Seamless<br />Collaboration</h2>
                                <p className="mt-[15px] lg:text-[16px] text-[12px] text-[#8D493A] text-sm leading-[100%] w-[250px] mx-auto font-normal font-archivo">
                                    Your vision is our priority. We work closely with you at every step, combining your ideas with our expertise to create spaces you’ll love.
                                </p>
                            </motion.div>
                        </div>

                        <div >
                            <motion.div
                             variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                            className="bg-[#fff] rounded-[12px] lg:py-[58px] py-[30px] px-[20px] text-center max-w-md mx-auto">
                                <div className="flex justify-center lg:mb-[30px] mb-[20px]">
                                    <div className="bg-[#F8EDE3] p-3 rounded-md">
                                        <IoSettingsOutline className="text-[#8D493A] text-[20px]" />
                                    </div>
                                </div>
                                <h2 className="lg:text-[22px] text-[18px]font-normal font-archivo leading-[110%] tracking-[-0.03em] text-[#8D493A]">Timeless<br />Elegance</h2>
                                <p className="mt-[15px] lg:text-[16px] text-[12px] text-[#8D493A] text-sm leading-[100%] w-[250px] mx-auto font-normal font-archivo">
                                    Our designs go beyond trends to create spaces that stand the test of time, offering a perfect blend of style, comfort, and functionality.
                                </p>
                            </motion.div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
