"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const locations = [
  { city: "Tokyo", country: "JP", flag: "🇯🇵", color: "bg-red-100 text-red-700 border-red-200" },
  { city: "San Francisco", country: "US", flag: "🇺🇸", color: "bg-blue-100 text-blue-700 border-blue-200" },
]

export function HeroIntro() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % locations.length)
    }, 2000) // Faster spin like a slot machine
    return () => clearInterval(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-24 bg-white relative overflow-hidden">
      
      {/* Wolf Look Face Photo - Right Side Background */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: 50, scale: 1 }}
        animate={{ opacity: 1, x: "49%", y: -40, scale: 1.1 }} // Shift right to cut half the face
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[80vw] md:w-[60vw] h-full z-0 pointer-events-none"
      >
        <div className="relative w-full h-full">
            <Image 
            src="/hero.png" 
            alt="Azat Portrait" 
            fill 
            className="object-cover object-center grayscale contrast-125"
            priority
            />
            {            /* Gradient Mask to fade into background color */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white h-full" />
        </div>
      </motion.div>

      <div className="max-w-7xl z-10 relative">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          {/* Typography Block */}
          <div className="text-4xl md:text-6xl lg:text-7xl font-serif text-zinc-900 leading-[1.1] tracking-tight mix-blend-multiply">
            <div className="overflow-hidden">
              <motion.div variants={item}>Hello, I'm <span className="italic text-zinc-400 font-light">Azat</span>.</motion.div>
            </div>

            <div className="mt-2">
               <motion.div variants={item}>
                 A Growth Engineer based in
               </motion.div>
            </div>
               
            {/* Animated City Text - Fixed Width Container */}
            <div className="mt-4 relative">
               <motion.div 
                 variants={item}
                 className="relative inline-block"
                 style={{ width: "850px", maxWidth: "95vw" }}
               >
                  <div style={{ overflow: "visible" }}>
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={index}
                        initial={{ y: "-100%", filter: "blur(8px)", opacity: 0 }}
                        animate={{ y: "0%", filter: "blur(0px)", opacity: 1 }}
                        exit={{ y: "100%", filter: "blur(8px)", opacity: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 140, 
                          damping: 18,
                          mass: 1
                        }}
                        className="flex items-center gap-3 whitespace-nowrap"
                      >
                        {/* City Name with Letter Spacing */}
                        <span 
                          className="font-serif italic font text-4xl md:text-6xl lg:text-7xl text-zinc-400 leading-none"
                          style={{ letterSpacing: "0.02em" }}
                        >
                          {locations[index].city}
                        </span>

                        {/* Flag */}
                        <span className="text-4xl md:text-6xl lg:text-7xl leading-none">{locations[index].flag}</span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
               </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.p variants={item} className="mt-16 text-base md:text-lg text-zinc-500 font-sans font-light max-w-lg leading-relaxed ml-1 mix-blend-multiply">
            20-year-old growth engineer from Kazakhstan, driving 0→1 and 1→100 growth. 
            Specialized in go-to-market strategy, product marketing, and growth operations.
          </motion.p>

          

        </motion.div>
      </div>
    </section>
  )
}
