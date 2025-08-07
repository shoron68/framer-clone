'use client';
import { motion } from 'framer-motion';
import Image from "next/image";


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


export default function ContactPage() {
    return (
        <div className="lg:py-[200px] py-[100px] bg-[#F8EDE3]">
          <div className="max-w-[1905px] mx-auto lg:px-[50px] px-[20px]">

            <div className="">
                <div className="">
                    <h2 className="lg:text-[96px] text-[44px] font-archivo font-medium text-[#8D493A] leading-[100%] tracking-[-0.03em] lg:w-[800px] mx-auto text-center flex flex-wrap gap-3 justify-center">
                      <motion.span
                        variants={fadeUpWord}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0}
                      >
                        Let's
                      </motion.span>
                      <motion.span
                        variants={fadeUpWord}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                        custom={1}
                      >
                        Bring
                      </motion.span>
                      <motion.span
                        variants={fadeUpWord}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={2}
                      >
                        Your
                      </motion.span>
                      <motion.span
                        variants={fadeUpWord}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.6 }}
                        custom={3}
                      >
                        Vision
                      </motion.span>
                      <motion.span
                        variants={fadeUpWord}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        custom={4}
                      >
                        to
                      </motion.span>
                      <motion.span
                        variants={fadeUpWord}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.7 }}
                        custom={5}
                      >
                        Life
                      </motion.span>
                    </h2>
                </div>
                <motion.div
                variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch mt-[60px]">
                    <div className="w-full h-full">
                        <div className="w-full lg:h-full h-[336px] overflow-hidden rounded-[10px]">
                            <Image
                                src="https://framerusercontent.com/images/6xHF1tiKqVhkLcgxSQVr1G2X8.jpeg"
                                alt="Image"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover rounded-[10px]"
                            />
                        </div>
                    </div>

                    <div className="w-full h-full">
                        <div className="w-full h-full border-[1px] border-[#8a463971] bg-[#F7E9DC] rounded-[10px]">
                            <div className="lg:flex justify-center items-center lg:mx-0 mx-[25px] ">
                                <div className="lg:mt-[350px] mt-[20px] lg:mb-0 mb-[20px]">
                                    <div className="lg:flex gap-x-[20px]">
                                        <div className="">
                                            <input type="text" placeholder="First Name" required className="border border-[#8a463993] focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A] outline-none px-4 py-2 rounded lg:w-[400px] w-full font-archivo font-normal text-[#8D493A]" />
                                        </div>
                                        <div className="lg:mt-0 mt-[25px]">
                                            <input type="text" placeholder="Last Name" required className="border border-[#8a463993] focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A] outline-none px-4 py-2 rounded lg:w-[400px] w-full font-archivo font-normal text-[#8D493A]" />
                                        </div>
                                    </div>
                                    <div className="my-[20px]">
                                        <input type="email" placeholder="Email" required className="border border-[#8a463993] focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A] outline-none px-4 py-2 rounded w-full font-archivo font-normal text-[#8D493A]" />

                                        <input type="phone" placeholder="Phone" required className="border border-[#8a463993] focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A] outline-none px-4 py-2 rounded w-full mt-[20px] font-archivo font-normal text-[#8D493A]" />
                                    </div>
                                    <div className="">
                                        <textarea name="message" id="message" placeholder="Message" required className="border border-[#8a463993] focus:border-[#8D493A] focus:ring-1 focus:ring-[#8D493A] outline-none px-4 py-2 rounded w-full h-[200px] mt-[20px] font-archivo font-normal text-[#8D493A]">
                                        </textarea>
                                    </div>
                                    <div className="mt-[5px]">
                                        <button className="cursor-pointer text-[16px] font-archivo font-medium text-[#EFDFD3] bg-[#C2998B] leading-[100%] py-[16px] w-full rounded-[3px]">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
          </div>
        </div>
    );
}
