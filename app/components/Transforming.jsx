'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useInView } from 'framer-motion'
import Image from 'next/image'
import img1 from "../imagess/img1.jpg"
import img2 from "../imagess/img2.jpg"
import img3 from "../imagess/img3.jpg"
import img4 from "../imagess/img4.jpg"
import img5 from "../imagess/img5.jpg"
import img6 from "../imagess/img6.jpg"

export default function Transforming() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: '0px 0px 0% 0px' })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const isMobile = useIsMobile()

  const [isAnimated, setIsAnimated] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (!isInView) return
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.2) {
        setIsAnimated(true)
        setTimeout(() => setShowText(true), 800)
      } else if (latest <= 0.1) {
        setIsAnimated(false)
        setShowText(false)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, isInView])

  function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [breakpoint])

  return isMobile
}
  const image1X = isAnimated ? (isMobile ? -120 : -600) : 0
  const image1Y = isAnimated ? (isMobile ? -200 : -280) : 0
  const image2X = isAnimated ? (isMobile ? 60 : -20) : 0
  const image2Y = isAnimated ? (isMobile ? -290 : -300) : 0
  const image3X = isAnimated ? (isMobile ? 70 : 600) : 0
  const image3Y = isAnimated ? (isMobile ? -120 : -250) : 0
  const image4X = isAnimated ? (isMobile ? -70 : -660) : 0
  const image4Y = isAnimated ? (isMobile ? 120 : 250) : 0
  const image5X = isAnimated ? (isMobile ? -80 : 0) : 0
  const image5Y = isAnimated ? (isMobile ? 315 : 300) : 0
  const image6X = isAnimated ? (isMobile ? 100 : 600) : 0
  const image6Y = isAnimated ? (isMobile ? 300 : 200) : 0
  const contentY = isAnimated ? 0 : 100

  return (
    <>
      <div className=" " />
      <div ref={containerRef} className="h-[100vh]">
        <div className="max-w-[1905px] mx-auto px-[20px] sm:px-[50px]">
          <div className="sticky top-0 h-[100vh] flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8">
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-0"
                animate={{
                  y: contentY,
                  opacity: showText ? 1 : 0,
                }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="mx-auto text-center">
                  <p className="text-[16px] lg:text-[40px] font-archivo font-normal text-[#8D493A] leading-[120%] tracking-[-0.03em]">
                    Transforming spaces with style,<br />
                    through Troscán's exquisite<br />
                    design expertise.
                  </p>
                </div>
              </motion.div>

              <div className="relative z-10 flex items-center justify-center">
                <div className="relative">
                  <AnimatedImage
                    x={image1X}
                    y={image1Y}
                    src={img1}
                    w={isMobile ? 150 : 256}
                    h={isMobile ? 210 : 418}
                  />
                  <AnimatedImage
                    x={image2X}
                    y={image2Y}
                    src={img2}
                    w={isMobile ? 180 : 300}
                    h={isMobile ? 130 : 211}
                  />
                  <AnimatedImage
                    x={image3X}
                    y={image3Y}
                    src={img3}
                    w={isMobile ? 200 : 470}
                    h={isMobile ? 180 : 314}
                  />
                  <AnimatedImage
                    x={image4X}
                    y={image4Y}
                    src={img4}
                    w={isMobile ? 230 : 456}
                    h={isMobile ? 200 : 354}
                  />
                  <AnimatedImage
                    x={image5X}
                    y={image5Y}
                    src={img5}
                    w={isMobile ? 170 : 250}
                    h={isMobile ? 100 : 70}
                  />
                  <AnimatedImage
                    x={image6X}
                    y={image6Y}
                    src={img6}
                    w={isMobile ? 160 : 350}
                    h={isMobile ? 160 :  250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AnimatedImage = ({ x, y, src, w, h }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    animate={{ x, y }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    initial={{ x: 0, y: 0 }}
    style={{ width: w, height: h }}
  >
    <Image
      className="rounded-[10px] object-cover"
      src={src}
      alt="Scroll Animated"
      width={w}
      height={h}
    />
  </motion.div>
)

