'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: -40 },
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

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
        variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
        className="fixed top-[-10px] left-1/2 -translate-x-1/2 w-full z-50">
            <div className="pr-[5px] pl-[20px] py-[5px] bg-[#F8EDE3] lg:w-[700px] w-[400px] items-center  lg:max-w-full rounded-[5px] mx-auto mt-[30px] shadow-2xl transition-all duration-500 ease-in-out">
                <div className="flex items-center justify-between">
                    <h3 className="text-[20px] font-inter text-[#8D493A] font-bold">
                        <Link href="/">Troscán</Link>
                    </h3>
                    <ul className="hidden md:flex gap-x-[20px]">
                        <li className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-500">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-500">
                            <Link href="/project">Projects</Link>
                        </li>
                        <li className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-400">
                            <Link href="/news">News</Link>
                        </li>
                    </ul>
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <button className="py-[16px] cursor-pointer px-[20px] bg-[#8D493A] text-[#F8EDE3] rounded-[5px] font-inter font-medium hover:bg-[#B85842] duration-500 leading-[100%]">
                                Contact us
                            </button>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? (
                                <X className="text-[#F8EDE3] bg-[#8D493A] rounded-[2px]" />
                            ) : (
                                <Menu className="text-[#F8EDE3] bg-[#8D493A] rounded-[2px]" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="">
                    <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[500px]  mt-4' : 'max-h-0'
                            }`}
                    >
                        <div
                            className={`flex flex-col gap-y-3 px-1 transition-opacity duration-500 delay-300 ${isOpen ? 'opacity-100 text-center' : 'opacity-0 text-center'}`}
                        >
                            <Link
                                href="/about"
                                className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-500"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/project"
                                className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-500"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link
                                href="/news"
                                className="text-[16px] font-inter font-medium text-[#8D493A] hover:text-[#C16C57] duration-500"
                                onClick={() => setIsOpen(false)}
                            >
                                News
                            </Link>
                            <Link
                                href="/contact"
                                className="mt-2 py-[12px] px-[20px] w-[150px] mx-auto bg-[#8D493A] text-[#F8EDE3] rounded-[5px] font-inter font-medium hover:bg-[#B85842] duration-500 text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
