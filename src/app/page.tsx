import { HeroIntro } from "@/components/HeroIntro";
import { ModelStats } from "@/components/ModelStats";
import { ProjectStack } from "@/components/ProjectStack";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
       <HeroIntro />
       <ModelStats />
       <ProjectStack />
       
       {/* Personal Projects Section */}
       <section className="py-24 px-6 md:px-24 bg-white">
         <div className="max-w-7xl mx-auto">
           <div className="mb-16">
             <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400 mb-2 block">02</span>
             <h3 className="text-4xl md:text-6xl font-serif text-zinc-900">
               Personal <span className="italic text-zinc-400">Projects</span>
             </h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             
             {/* Education Consulting Agency - Premium Light Design */}
             <div className="group rounded-[28px] overflow-hidden bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
               {/* Image Section with Shadow Blend */}
               <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
                 <Image 
                   src="/front pics/Agency.png"
                   alt="Education Consulting Agency"
                   fill
                   className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                 />
                 {/* Bottom Gradient Shadow Blend */}
                 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
                 {/* Title overlapping into gradient */}
                 <div className="absolute bottom-4 left-6 right-6">
                   <h4 className="text-2xl md:text-[26px] font-serif text-zinc-900 leading-tight">
                     Education Consulting Agency
                   </h4>
                 </div>
               </div>
               
               {/* Content Section */}
               <div className="bg-white p-6 pt-2">
                 {/* Description */}
                 <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                   Guiding students through their college journey—from crafting compelling essays to strategic university selection across the globe.
                 </p>
                 
                 {/* Stats Row */}
                 <div className="flex justify-between items-start py-5 mt-4 border-t border-b border-zinc-100">
                   <div>
                     <p className="text-xl font-serif text-zinc-900">30+</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Consultations</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">100%</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Offer Rate</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">10+</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Countries</p>
                   </div>
                 </div>
                 
                 {/* Bottom Bar */}
                 <div className="flex justify-between items-center pt-4">
                   <span className="text-zinc-400 text-xs font-sans">founder</span>
                   <div className="flex items-center gap-2 text-zinc-400 text-xs font-sans">
                     <span>admissions</span>
                     <span className="text-zinc-300">+</span>
                     <span>essays</span>
                     <span className="text-zinc-300">+</span>
                     <span>strategy</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* Odaq Space - Premium Light Design */}
             <div className="group rounded-[28px] overflow-hidden bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
               {/* Image Section with Shadow Blend */}
               <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
                 <Image 
                   src="/front pics/Odaq.png"
                   alt="Odaq Space Event Organization"
                   fill
                   className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                 />
                 {/* Bottom Gradient Shadow Blend */}
                 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
                 {/* Title overlapping into gradient */}
                 <div className="absolute bottom-4 left-6 right-6">
                   <h4 className="text-2xl md:text-[26px] font-serif text-zinc-900 leading-tight">
                     Odaq Space Events
                   </h4>
                 </div>
               </div>
               
               {/* Content Section */}
               <div className="bg-white p-6 pt-2">
                 {/* Description */}
                 <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                   Building Kazakhstan's professional community through curated networking gatherings for entrepreneurs, students, and industry leaders.
                 </p>
                 
                 {/* Stats Row */}
                 <div className="flex justify-between items-start py-5 mt-4 border-t border-b border-zinc-100">
                   <div>
                     <p className="text-xl font-serif text-zinc-900">15</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Events</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">5,000</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">People Reach</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">85%</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Retention</p>
                   </div>
                 </div>
                 
                 {/* Bottom Bar */}
                 <div className="flex justify-between items-center pt-4">
                   <span className="text-zinc-400 text-xs font-sans">organizer</span>
                   <div className="flex items-center gap-2 text-zinc-400 text-xs font-sans">
                     <span>networking</span>
                     <span className="text-zinc-300">+</span>
                     <span>community</span>
                     <span className="text-zinc-300">+</span>
                     <span>growth</span>
                   </div>
                 </div>
               </div>
             </div>
             
           </div>
         </div>
       </section>

      {/* Social Impact Projects Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
         <div className="max-w-7xl mx-auto">
           <div className="mb-16">
             <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400 mb-2 block">03</span>
             <h3 className="text-4xl md:text-6xl font-serif text-zinc-900">
               Social <span className="italic text-zinc-400">Impact</span>
             </h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             
             {/* UNFPA - Y-PEER - Premium Light Design */}
             <div className="group rounded-[28px] overflow-hidden bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
               {/* Image Section with Logo */}
               <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-sky-50 via-white to-orange-50">
                 {/* Logo Centered */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <Image 
                     src="/logos/UNFPA_logo.png"
                     alt="UNFPA"
                     width={140}
                     height={140}
                     className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                 </div>
                 {/* Bottom Gradient Shadow Blend */}
                 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />
                 {/* Title overlapping into gradient */}
                 <div className="absolute bottom-4 left-6 right-6">
                   <h4 className="text-2xl md:text-[26px] font-serif text-zinc-900 leading-tight">
                     UN Population Fund
                   </h4>
                   <p className="text-zinc-500 text-xs font-sans mt-1">Community Growth & Content Marketing Lead</p>
                 </div>
               </div>
               
               {/* Content Section */}
               <div className="bg-white p-6 pt-2">
                 {/* Description */}
                 <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                   Led the Y-PEER youth network expansion across Central Asia—conducting health education workshops, producing multimedia content, and building a pipeline of peer educators.
                 </p>
                 
                 {/* Stats Row */}
                 <div className="flex justify-between items-start py-5 mt-4 border-t border-b border-zinc-100">
                   <div>
                     <p className="text-xl font-serif text-zinc-900">1,000+</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Students Reached</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">220K+</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Content Views</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">25</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Educators Trained</p>
                   </div>
                 </div>
                 
                 {/* Bottom Bar */}
                 <div className="flex justify-between items-center pt-4">
                   <span className="text-zinc-400 text-xs font-sans">2022-2024</span>
                   <div className="flex items-center gap-2 text-zinc-400 text-xs font-sans">
                     <span>health</span>
                     <span className="text-zinc-300">+</span>
                     <span>education</span>
                     <span className="text-zinc-300">+</span>
                     <span>youth</span>
                   </div>
                 </div>
               </div>
             </div>

             {/* UN Women - HeForShe - Premium Light Design */}
             <div className="group rounded-[28px] overflow-hidden bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
               {/* Image Section with Logo */}
               <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-blue-50 via-white to-sky-50">
                 {/* Logo Centered */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <Image 
                     src="/logos/unwoman.png"
                     alt="UN Women"
                     width={140}
                     height={140}
                     className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                 </div>
                 {/* Bottom Gradient Shadow Blend */}
                 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />
                 {/* Title overlapping into gradient */}
                 <div className="absolute bottom-4 left-6 right-6">
                   <h4 className="text-2xl md:text-[26px] font-serif text-zinc-900 leading-tight">
                     UN Women
                   </h4>
                   <p className="text-zinc-500 text-xs font-sans mt-1">Brand Ambassador & Content Marketing Lead</p>
                 </div>
               </div>
               
               {/* Content Section */}
               <div className="bg-white p-6 pt-2">
                 {/* Description */}
                 <p className="text-zinc-500 text-sm font-sans leading-relaxed">
                   Championed gender equality through the HeForShe initiative—hosting a podcast series on leadership and empowerment, engaging male audiences across Central Asia.
                 </p>
                 
                 {/* Stats Row */}
                 <div className="flex justify-between items-start py-5 mt-4 border-t border-b border-zinc-100">
                   <div>
                     <p className="text-xl font-serif text-zinc-900">5</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Countries</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">10</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Episodes</p>
                   </div>
                   <div>
                     <p className="text-xl font-serif text-zinc-900">+20%</p>
                     <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-0.5">Following Growth</p>
                   </div>
                 </div>
                 
                 {/* Bottom Bar */}
                 <div className="flex justify-between items-center pt-4">
                   <span className="text-zinc-400 text-xs font-sans">2023</span>
                   <div className="flex items-center gap-2 text-zinc-400 text-xs font-sans">
                     <span>equality</span>
                     <span className="text-zinc-300">+</span>
                     <span>leadership</span>
                     <span className="text-zinc-300">+</span>
                     <span>empowerment</span>
                   </div>
                 </div>
               </div>
             </div>

           </div>
         </div>
       </section>

       

      {/* Education Section */}
      <section className="py-24 px-6 md:px-24 bg-white">
         <div className="max-w-7xl mx-auto">
           <div className="mb-16">
             <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400 mb-2 block">04</span>
             <h3 className="text-4xl md:text-6xl font-serif text-zinc-900">
               <span className="italic text-zinc-400">Education</span>
             </h3>
           </div>
           
           {/* Apple-style Education Card */}
           <div className="rounded-[28px] overflow-hidden bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
             {/* Header */}
             <div className="p-8 md:p-10">
               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                 <div>
                   <a 
                     href="https://www.minerva.edu" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 group"
                   >
                     <h4 className="text-3xl md:text-4xl font-serif text-zinc-900 group-hover:text-zinc-600 transition-colors">
                       Minerva University
                     </h4>
                     <svg className="w-5 h-5 text-zinc-400 group-hover:text-zinc-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                     </svg>
                   </a>
                   <p className="text-zinc-500 text-sm font-sans mt-2">
                     Computer Science & Business · <span className="text-zinc-400">AI & Marketing</span>
                   </p>
                 </div>
                 <div className="text-left md:text-right">
                   <p className="text-lg font-serif text-zinc-900">In Progress</p>
                   <p className="text-zinc-400 text-xs font-sans mt-1">San Francisco, CA</p>
                 </div>
               </div>
             </div>
             
             {/* Stats Row */}
             <div className="grid grid-cols-2 md:grid-cols-4 border-t border-zinc-100">
               <div className="p-6 md:p-8 border-r border-b md:border-b-0 border-zinc-100">
                 <p className="text-2xl md:text-3xl font-serif text-zinc-900">#1</p>
                 <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-1">Innovation</p>
               </div>
               <div className="p-6 md:p-8 md:border-r border-b md:border-b-0 border-zinc-100">
                 <p className="text-2xl md:text-3xl font-serif text-zinc-900">1%</p>
                 <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-1">Acceptance</p>
               </div>
               <div className="p-6 md:p-8 border-r border-zinc-100">
                 <p className="text-2xl md:text-3xl font-serif text-zinc-900">4</p>
                 <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-1">Years</p>
               </div>
               <div className="p-6 md:p-8">
                 <p className="text-2xl md:text-3xl font-serif text-zinc-900">7</p>
                 <p className="text-[10px] font-sans tracking-wider uppercase text-zinc-400 mt-1">Countries</p>
               </div>
             </div>
           </div>
           
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-serif mb-8 text-zinc-900 leading-[0.95]">
            Let's build <br />
            <span className="italic text-zinc-400">together</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-500 font-sans mb-16 max-w-2xl mx-auto leading-relaxed">
            Seeking internships in growth, GTM, marketing, and product management. 
            Available for immediate start.
          </p>
          
          {/* Arrow pointing down to dock */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-sans text-zinc-400 tracking-wide">Contact me below</p>
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

       <div className="h-[30vh]" /> {/* Footer Spacer for dock visibility */}
    </main>
  )
}
