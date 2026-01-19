import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        
        {/* Left Column - Image */}
        <div className="relative h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden bg-zinc-100">
           <Image
             src="/IMG_4069.JPG"
             alt="Azat Portrait"
             fill
             className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
           />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center">
            
            <h1 className="text-6xl md:text-8xl font-serif mb-12 text-zinc-900 leading-[0.9]">
               About <br /> <span className="italic text-zinc-400">Azat.</span>
            </h1>

            <div className="space-y-8 text-lg font-sans font-light text-zinc-600 leading-relaxed max-w-xl">
               <p>
                 I'm a 20-year-old growth engineer from Kazakhstan, currently based in San Francisco. I specialize in building 0→1 and scaling 1→100, with expertise in go-to-market strategy, product marketing, and growth operations.
               </p>
               
               <p>
                 I've worked with global organizations including <span className="text-zinc-900 font-medium">Adobe</span>, <span className="text-zinc-900 font-medium">Ernst & Young</span>, <span className="text-zinc-900 font-medium">UN Population Fund</span>, <span className="text-zinc-900 font-medium">UN Women</span>, and <span className="text-zinc-900 font-medium">Eurasian Resources Group</span>.
               </p>

               <p>
                 Most recently, I led go-to-market strategy at Surfaice, closing a $180K annual contract with JD Sports and securing $500K in investment. At Adobe, I redesigned the internal Life App serving 30K employees with 95% satisfaction rate.
               </p>

               <p>
                 I'm currently pursuing a B.S. in Computer Science & Business at Minerva University with concentrations in AI and Marketing, while actively seeking internships in growth, GTM, and marketing roles.
               </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 mt-16 pt-16 border-t border-zinc-200">
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Location</span>
                  <span className="text-xl font-serif text-zinc-900">San Francisco, CA</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Age</span>
                  <span className="text-xl font-serif text-zinc-900">20</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Education</span>
                  <span className="text-xl font-serif text-zinc-900">Minerva University</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Focus</span>
                  <span className="text-xl font-serif text-zinc-900">Growth & GTM</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">Email</span>
                  <span className="text-xl font-serif text-zinc-900">Available</span>
               </div>
               <div>
                  <span className="block text-xs uppercase tracking-widest text-zinc-400 mb-1">LinkedIn</span>
                  <span className="text-xl font-serif text-zinc-900">Connect</span>
               </div>
            </div>

        </div>
      </div>
    </main>
  )
}
