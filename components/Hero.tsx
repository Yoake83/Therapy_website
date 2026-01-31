"use client"
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="bg-[#F5F0EB] min-h-[calc(100vh-60px)] flex overflow-hidden">
      {/* Left - Arch Image with left margin, bleeds bottom */}
      <div className="relative flex-shrink-0" style={{ width: '44%' }}>
        <div className="flex h-full">
          {/* Left margin gap */}
          <div style={{ width: '60px', flexShrink: 0 }} />

          {/* Arch container */}
          <div
            className="relative flex-1 h-full overflow-hidden"
            style={{
              borderRadius: '9999px 9999px 0 0',
            }}
          >
            <div className="absolute inset-0 bg-[#B8D4E3]" />
           <Image
  src="/hero.jpg"
  alt="Calm nature scene representing peace and healing"
  fill
  priority
  className="object-cover"
  style={{ objectPosition: 'left center' }}
/>

          </div>
        </div>
      </div>

      {/* Right - Content centered */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-300 text-[#1E2A3A] leading-[1.1] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
          Find calm<br />within the chaos
        </h1>
        <p className="text-base md:text-lg text-[#1E2A3A]/60 font-light mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Therapy for Adults in Santa Monica, CA.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 border border-[#1E2A3A] text-[#1E2A3A] hover:bg-[#1E2A3A] hover:text-[#F5F0EB] transition-all duration-300 text-sm tracking-widest font-light"
        >
          CONNECT WITH ME &nbsp;→
        </a>
      </div>
    </section>
  )
}