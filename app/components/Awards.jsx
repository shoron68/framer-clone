'use client';
import { motion } from "framer-motion";

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

export default function Awards() {
    return (
        <div className="py-[140px]">
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
                            <p className="text-[14px] font-archivo font-normal text-[#8D493A]">Awards & Recognition</p>
                        </div>
                    </motion.div>
                    <div className="max-w-[700px] mt-[10px]">
                        <div className="">
                            <motion.h2
                            variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                            className="text-[64px] font-archivo font-normal text-[#8D493A] leading-[110%] tracking-[-10%] ">Our Achievements: Celebrating Excellence in Design</motion.h2>
                        </div>

                    </div>
                </div>

                <div className="">
                    <div className="divide-y divide-[#8D493A]">
                        <motion.div
                        variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-3 py-6 items-center">
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Best Interior<br />Design Agency</div>
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Awarded for outstanding innovation<br />in interior design concepts</div>
                            <div className="col-span-1 text-right text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">2025</div>
                        </motion.div>
                        <motion.div
                        variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                        class="grid grid-cols-3 py-6">
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Excellence in<br />Custom Furniture</div>
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Recognized for creating bespoke,<br />high-quality furniture pieces</div>
                            <div className="col-span-1 text-right text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">2024</div>
                        </motion.div>
                        <motion.div
                        variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                        className="grid grid-cols-3 py-6">
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Outstanding<br />Room Makeover</div>
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Honored for transforming spaces<br />with impeccable style</div>
                            <div className="col-span-1 text-right text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">2023</div>
                        </motion.div>
                        <motion.div
                        variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                         className="grid grid-cols-3 py-6">
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Top Emerging<br />Design Studio</div>
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Celebrated for redefining modern<br />interior aesthetics</div>
                            <div className="col-span-1 text-right text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">2022</div>
                        </motion.div>
                        <motion.div
                        variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={4}
                        className="grid grid-cols-3 py-6">
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Client Choice<br />Award</div>
                            <div className="col-span-1 text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">Voted for exceptional customer<br />service and design expertise</div>
                            <div className="col-span-1 text-right text-[22px] font-archivo font-medium leading-[100%] tracking-[-0.03em] text-[#8D493A]">2021</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

