import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1E2A3A] mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
              You deserve to feel at ease.
            </h2>
            <p className="text-lg md:text-xl text-[#1E2A3A]/60 mb-6 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Life can feel overwhelming—especially when you are high-achieving on the outside but quietly struggling with anxiety, stress, or the weight of past experiences on the inside.
            </p>
            <p className="text-lg md:text-xl text-[#1E2A3A]/60 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              You are not alone in feeling this way. I am here to help you slow down, reconnect, and build a life that feels sustainable and grounded.
            </p>
            <a
              href="#contact"
              className="inline-block mt-10 px-10 py-4 border border-[#1E2A3A] text-[#1E2A3A] hover:bg-[#1E2A3A] hover:text-[#F5F0EB] transition-all duration-300 text-sm tracking-widest font-light"
            >
              GET IN TOUCH &nbsp;→
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/about.png"
              alt="A calm and peaceful moment"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}