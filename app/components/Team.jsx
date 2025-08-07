'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import timg1 from "../imagess/timg1.jpg"
import timg2 from "../imagess/timg2.jpg"
import timg3 from "../imagess/timg3.jpg"
import timg4 from "../imagess/timg4.jpg"
import timg5 from "../imagess/timg5.jpg"
import timg6 from "../imagess/timg6.jpg"

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



const teamMembers = [
    {
        name: 'Emma Collins',
        role: 'Creative Director',
        image: timg1 ,
    },
    {
        name: 'Liam Bennett',
        role: 'Lead Furniture Designer',
        image: timg2,
    },
    {
        name: 'Sophia Turner',
        role: 'Interior Stylist',
        image: timg3,
    },
    {
        name: 'Oliver Harris',
        role: 'Space Planner',
        image: timg4,
    },
    {
        name: 'Isabella Reed',
        role: 'Lighting Specialist',
        image: timg5,
    },
    {
        name: 'Ethan Wright',
        role: 'Client Experience Manager',
        image: timg6,
    },
];

export default function Team() {
    return (
        <div className="lg:py-[140px]">
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
                            <p className="lg:text-[14px] text-[12px] font-archivo font-normal text-[#8D493A]">Our Team</p>
                        </div>
                    </motion.div>
                    <div className="lg:mt-[20px] mt-[20px]">
                        <motion.h2
                         variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                        className="lg:text-[64px] text-[36px] font-archivo font-normal text-[#8D493A] tracking-[-0.03em] text-center leading-[100%]">Meet the Visionaries <br /> Behind Troscán</motion.h2>
                    </div>
                </div>
                <div className="mt-[50px]">
                    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {teamMembers.map((member, i) => (
                            <motion.div
                            variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
                                key={i}
                                className="rounded-[10px] overflow-hidden bg-[#ffffff] shadow-md max-w-full"
                            >
                                <div className="w-full lg:h-[495px] h-[331px] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-[22px] font-normal text-[#8D493A] font-archivo leading-[100%] tracking-[-0.02em]">
                                        {member.name}
                                    </h3>
                                    <p className="text-[14px] text-[#8D493A] mt-[2px] font-archivo font-normal">
                                        {member.role}
                                    </p>

                                    <button className="mt-4 px-[26px] py-[16px] bg-[#EFE2D5] text-[#8D493A] text-[16px] font-medium rounded-md shadow-sm hover:bg-[#FAF2EB] transition duration-300 font-archivo leading-[100%] cursor-pointer">
                                        Contact
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

