import Image from 'next/image'

export default function OurOffice() {
  return (
    <section id="office" className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1E2A3A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
            A Calm Space for Healing
          </h2>
          <p className="text-lg md:text-xl text-[#1E2A3A]/60 font-light max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Stepping into my Santa Monica office is designed to feel like an exhale. A quiet, private space with natural light—built to help you feel safe, grounded, and ready to do the work that matters.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {/* Left - Tall image */}
          <div className="relative h-[340px] md:h-[460px] rounded-sm overflow-hidden">
            <Image
              src="/office2.png"
              alt="Therapy office with warm lighting and comfortable seating"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Two stacked images */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="relative h-[220px] md:h-[272px] rounded-sm overflow-hidden flex-1">
              <Image
                src="/office1.png"
                alt="Cozy counseling room with bookshelves and natural light"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[220px] md:h-[180px] rounded-sm overflow-hidden flex-1">
              <Image
                src="/office3.webp"
                alt="Comfortable living space within the therapy office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Details Row */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 pt-10 border-t border-[#1E2A3A]/10">
          <div>
            <h4 className="text-xl md:text-2xl text-[#1E2A3A] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
              Location
            </h4>
            <p className="text-base text-[#1E2A3A]/60 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              123th Street 45 W<br />Santa Monica, CA 90401
            </p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl text-[#1E2A3A] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
              Session Options
            </h4>
            <p className="text-base text-[#1E2A3A]/60 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              In-person sessions at my Santa Monica office, or secure telehealth for clients anywhere in California.
            </p>
          </div>
          <div>
            <h4 className="text-xl md:text-2xl text-[#1E2A3A] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
              Your Comfort
            </h4>
            <p className="text-base text-[#1E2A3A]/60 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              A quiet, private, and uncluttered environment. Many clients share that the space itself helps them feel more at ease the moment they arrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}