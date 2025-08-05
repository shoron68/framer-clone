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



const teamMembers = [
    {
        name: 'Emma Collins',
        role: 'Creative Director',
        image: 'https://framerusercontent.com/images/VHjVat8amQI84VmcuqK0CulTk4.jpeg',
    },
    {
        name: 'Liam Bennett',
        role: 'Lead Furniture Designer',
        image: 'https://framerusercontent.com/images/or08AT1s7Gsd7r3cBxIPClE1qXo.jpeg',
    },
    {
        name: 'Sophia Turner',
        role: 'Interior Stylist',
        image: '	https://framerusercontent.com/images/ZkiObwy3gtgUC1r32SlsIZYE.jpeg',
    },
    {
        name: 'Oliver Harris',
        role: 'Space Planner',
        image: 'https://framerusercontent.com/images/6x4VB4KCen6shYoZmn4SlxHHg.jpeg?scale-down-to=1024',
    },
    {
        name: 'Isabella Reed',
        role: 'Lighting Specialist',
        image: '	https://framerusercontent.com/images/qLpYxt2t3D25n4MxgyGnnbOX2o.jpeg',
    },
    {
        name: 'Ethan Wright',
        role: 'Client Experience Manager',
        image: 'https://framerusercontent.com/images/iy4Yjrt6EfSEVReGjIS5qf5vc.jpeg',
    },
];

export default function Team() {
    return (
        <div className="py-[140px]">
            <div className="mx-[50px]">
                <div className="">
                    <motion.div
                     variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center justify-center gap-x-[5px] ">
                        <div className="h-[5px] w-[5px] rounded-full bg-[#8D493A]"></div>
                        <div className="">
                            <p className="text-[14px] font-archivo font-normal text-[#8D493A]">Our Team</p>
                        </div>
                    </motion.div>
                    <div className="mt-[20px]">
                        <motion.h2
                         variants={textfade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                        className="text-[64px] font-archivo font-normal text-[#8D493A] tracking-[-0.03em] text-center leading-[100%]">Meet the Visionaries <br /> Behind Troscán</motion.h2>
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
                                <div className="w-full h-[495px] relative">
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

