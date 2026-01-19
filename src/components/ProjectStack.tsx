"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { projects } from "@/data/projects"
import { ArrowUpRight } from "lucide-react"

// Soft pastel color themes for each company
const colorThemes: Record<string, any> = {
  'surfaice-gtm': {
    gradient: 'from-blue-50 via-white to-cyan-50',
    hoverGradient: 'group-hover:from-blue-100 group-hover:via-white group-hover:to-cyan-100',
    accentColor: 'text-blue-500',
    accentBg: 'bg-blue-400',
    metricBg: 'bg-white/80',
    border: 'border-blue-100',
    decorative: 'bg-blue-200/10'
  },
  'adobe-product': {
    gradient: 'from-rose-50 via-white to-orange-50',
    hoverGradient: 'group-hover:from-rose-100 group-hover:via-white group-hover:to-orange-100',
    accentColor: 'text-rose-500',
    accentBg: 'bg-rose-400',
    metricBg: 'bg-white/80',
    border: 'border-rose-100',
    decorative: 'bg-rose-200/10'
  },
  'puzzle-strategy': {
    gradient: 'from-purple-50 via-white to-pink-50',
    hoverGradient: 'group-hover:from-purple-100 group-hover:via-white group-hover:to-pink-100',
    accentColor: 'text-purple-500',
    accentBg: 'bg-purple-400',
    metricBg: 'bg-white/80',
    border: 'border-purple-100',
    decorative: 'bg-purple-200/10'
  },
  'ikigai-bizdev': {
    gradient: 'from-emerald-50 via-white to-teal-50',
    hoverGradient: 'group-hover:from-emerald-100 group-hover:via-white group-hover:to-teal-100',
    accentColor: 'text-emerald-500',
    accentBg: 'bg-emerald-400',
    metricBg: 'bg-white/80',
    border: 'border-emerald-100',
    decorative: 'bg-emerald-200/10'
  },
  'ey-employer-brand': {
    gradient: 'from-amber-50 via-white to-yellow-50',
    hoverGradient: 'group-hover:from-amber-100 group-hover:via-white group-hover:to-yellow-100',
    accentColor: 'text-amber-600',
    accentBg: 'bg-amber-400',
    metricBg: 'bg-white/80',
    border: 'border-amber-100',
    decorative: 'bg-amber-200/10'
  }
}

function Card({ project, index, range, targetScale, progress }: any) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [15, 5, 0])
  
  const theme = colorThemes[project.slug] || colorThemes['surfaice-gtm']
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} 
        className={`relative flex flex-col w-[90vw] md:w-[1000px] h-[70vh] rounded-3xl origin-top border ${theme.border} overflow-hidden shadow-2xl cursor-pointer group transition-all duration-700 ease-out`}
      >
        <Link href={`/projects/${project.slug}`} className="w-full h-full block">
            <div className={`w-full h-full relative p-12 flex flex-col justify-between bg-gradient-to-br ${theme.gradient} ${theme.hoverGradient} transition-all duration-1000 ease-in-out`}>
                
                {/* Background Image for Surfaice */}
                {project.slug === 'surfaice-gtm' && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="/front pics/IMG_9525.JPG"
                      alt="Surfaice presentation"
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                  </div>
                )}
                
                {/* Background Image for Adobe */}
                {project.slug === 'adobe-product' && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="/front pics/adobe3.jpeg"
                      alt="Adobe team"
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                  </div>
                )}
                
                {/* Background Image for Puzzle Strategy */}
                {project.slug === 'puzzle-strategy' && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="/front pics/IMG_5594.JPG"
                      alt="Puzzle Strategy office"
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                  </div>
                )}
                
                {/* Background Image for Ikigai */}
                {project.slug === 'ikigai-bizdev' && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="/front pics/cafe.png"
                      alt="Ikigai Restaurant"
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                  </div>
                )}
                
                {/* Background Image for EY */}
                {project.slug === 'ey-employer-brand' && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="/front pics/eyoffice.png"
                      alt="EY"
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                  </div>
                )}
                
                {/* Background Image for Alibary */}
                {project.slug === 'alibary-growth' && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="/front pics/alb.png"
                      alt="Alibary"
                      fill
                      className="object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark gradient overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                  </div>
                )}

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000 ease-in-out" 
                     style={{ background: `radial-gradient(circle, ${theme.decorative} 0%, transparent 70%)` }} />
                <div className={`absolute bottom-0 left-0 w-64 h-64 ${theme.decorative} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out delay-100`} />
                
                {/* Accent Line - Top */}
                <div className={`absolute top-0 left-0 w-full h-1 ${theme.accentBg} opacity-0 group-hover:opacity-60 transition-all duration-700 ease-in-out`} />
                
                {/* Glass Reflection Effect - Diagonal */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out" />
                
                {/* Header */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="space-y-3">
                    <motion.h2 
                      className="text-4xl md:text-6xl font-serif text-white transition-colors duration-700 ease-out"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {project.title}
                    </motion.h2>
                    <p className="text-base text-white/90 font-sans transition-colors duration-700 ease-out">{project.tag}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className={`text-2xl font-serif font-bold text-white group-hover:${theme.accentColor} transition-colors duration-700 ease-out`}>{project.year}</p>
                    <p className="text-xs font-sans tracking-[0.15em] uppercase text-white/70 transition-colors duration-700 ease-out">{project.category}</p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                {project.metrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8 relative z-10">
                    {project.metrics.map((metric: any, idx: number) => (
                      <motion.div 
                        key={idx} 
                        className={`p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-700 ease-out`}
                        style={{ 
                          transitionDelay: `${idx * 100}ms`,
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <p className={`text-3xl md:text-4xl font-serif font-bold text-white group-hover:${theme.accentColor} transition-colors duration-700 ease-out`}>
                          {metric.value}
                        </p>
                        <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-white/70 group-hover:text-white/90 mt-2 transition-colors duration-700 ease-out">
                          {metric.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <div className="space-y-6 relative z-10">
                  <p className="text-sm text-white/90 font-sans leading-relaxed max-w-3xl transition-colors duration-700 ease-out">
                    {project.description.slice(0, 180)}...
                  </p>
                  
                  {/* CTA */}
                  <div className={`flex items-center gap-3 text-sm font-sans font-medium text-white group-hover:${theme.accentColor} group-hover:gap-5 transition-all duration-700 ease-out`}>
                    <span className="tracking-wide">View Full Case Study</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-700 ease-out" />
                  </div>
                </div>

            </div>
        </Link>
      </motion.div>
    </div>
  )
}

export function ProjectStack() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const experienceProjects = projects.filter(project => project.category === "Experience")
  
  // Progress bar opacity - only visible when in the work experience section
  const progressOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])

  return (
    <section id="project-stack" ref={container} className="mt-[20vh] mb-[50vh] relative">
      
      {/* Progress Bar - Only visible during this section */}
      <motion.div 
        style={{ opacity: progressOpacity }}
        className="fixed left-12 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      >
        <div className="relative h-64 w-1 bg-zinc-200 rounded-full overflow-hidden">
          <motion.div 
            style={{ 
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
            className="absolute inset-0 bg-zinc-900 rounded-full"
          />
        </div>
      </motion.div>

      <div className="px-6 md:px-24 mb-24 flex items-end justify-between">
         <div>
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400 mb-2 block">01</span>
            <h3 className="text-4xl md:text-6xl font-serif text-zinc-900">
               Work <span className="italic text-zinc-400">Experience</span>
            </h3>
         </div>
      </div>
      
      {experienceProjects.map((project, i) => {
        const totalCards = experienceProjects.length
        const targetScale = 1 - ((totalCards - i - 1) * 0.05)
        const rangeStart = i / totalCards
        const rangeEnd = (i + 1) / totalCards
        
        return (
          <Card 
            key={project.slug}
            index={i} 
            project={project} 
            range={[rangeStart, rangeEnd]} 
            targetScale={targetScale}
            progress={scrollYProgress} 
          />
        )
      })}
    </section>
  )
}
