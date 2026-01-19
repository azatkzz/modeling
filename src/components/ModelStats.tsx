"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  { name: "Adobe", logo: "/logos/Adobe.png", role: "Product Management" },
  { name: "Ernst & Young", logo: "/logos/EY.png", role: "Employer Brand & HR" },
  { name: "UN Population Fund", logo: "/logos/UNFPA_logo.png", role: "Partnership" },
  { name: "UN Women", logo: "/logos/unwoman.png", role: "Partnership" },
  { name: "Eurasian Resources Group", logo: "/logos/ERG.png", role: "Collaboration" },
]

export function ModelStats() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif italic mb-16 text-center text-zinc-400"
        >
          Trusted by Leading Organizations
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className={`w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 relative`}>
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={100}
                  className={`object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-500 ${company.name === "Ernst & Young" ? "-translate-y-3" : ""}`}
                />
              </div>
              <p className="text-sm font-serif text-zinc-900 mb-1">
                {company.name}
              </p>
              <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-zinc-400 group-hover:text-zinc-600 transition-colors">
                {company.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

