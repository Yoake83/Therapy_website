import Image from 'next/image'

export default function Meet() {
  return (
    <section className="section-padding bg-[#F5F0EB]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1E2A3A] mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
              Hi, I am Dr. Maya.
            </h2>
            <p className="text-lg md:text-xl text-[#1E2A3A]/60 mb-6 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              I am a licensed clinical psychologist based in Santa Monica, California. I take a warm, collaborative, and grounded approach to therapy—combining evidence-based methods like CBT, EMDR, and mindfulness with space for deeper reflection and healing.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-10 py-4 border border-[#1E2A3A] text-[#1E2A3A] hover:bg-[#1E2A3A] hover:text-[#F5F0EB] transition-all duration-300 text-sm tracking-widest font-light"
            >
              LET US CHAT &nbsp;→
            </a>
          </div>

          {/* Right - Images */}
          <div className="relative h-[400px] md:h-[450px]">
            {/* Background Circle */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-[#B8D4E3]/40" />

            {/* Main Image - Dr. Maya photo */}
            <div className="relative z-10 w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden ml-auto">
        <Image
  src="/meet.png"
  alt="Dr. Maya Reynolds"
  fill
  sizes="(max-width: 768px) 250px, 320px"
  className="object-cover object-[30%_30%]"
/>


            </div>

            {/* Secondary Circle */}
            <div className="absolute bottom-0 left-0 w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full bg-[#7A9E8E]/20" />
          </div>
        </div>
      </div>
    </section>
  )
}