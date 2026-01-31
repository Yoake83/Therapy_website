import Image from 'next/image'

export default function Specialties() {
  const specialties = [
    {
      title: 'Anxiety & Stress',
      description: 'Constant worry, tension, and feeling on edge can quietly take over your life. I help you understand what your mind and body are telling you—and build real, lasting tools to find calm again.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
    },
    {
      title: 'Trauma Recovery',
      description: 'Whether from a single event or long-standing patterns, trauma shapes how we move through the world. Using EMDR and body-oriented techniques, I help you process experiences at a pace that feels safe.',
      image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80'
    },
    {
      title: 'Burnout & Perfectionism',
      description: 'Pushing through stress can leave you disconnected from yourself. Therapy is a space to slow down and rediscover a more sustainable way of living.',
      image: '/new.avif'
    }
  ]

  return (
    <section id="services" className="section-padding bg-[#F5F0EB]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-[#1E2A3A] mb-16" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
          How I Can Help
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-[#B8D4E3]/30 p-8 md:p-10 flex flex-col">
              <h3 className="text-2xl md:text-3xl text-[#1E2A3A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                {specialty.title}
              </h3>
              <p className="text-base md:text-lg text-[#1E2A3A]/60 mb-8 font-light leading-relaxed flex-grow" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {specialty.description}
              </p>
              <div className="relative w-full aspect-square rounded-full overflow-hidden">
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}