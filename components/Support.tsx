import Image from 'next/image'

export default function Support() {
  const challenges = [
    'Persistent anxiety or a constant sense of dread',
    'Trouble sleeping or difficulty turning off your mind',
    'Feeling stuck in overthinking or perfectionism',
    'Lingering effects of past trauma or difficult experiences',
    'A deep sense of exhaustion despite appearing fine on the outside'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/womensofa.jpg"
              alt="A person finding peace and clarity"
              fill
              className="object-cover rounded-sm"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1E2A3A] mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
              You do not have to do this all <em style={{ fontStyle: 'italic', fontWeight: 300 }}>alone</em>.
            </h2>
            <p className="text-lg md:text-xl text-[#1E2A3A]/60 mb-8 font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              If any of these resonate with you, know that there is hope:
            </p>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#7A9E8E] mr-3 text-xl mt-0.5">•</span>
                  <span className="text-lg text-[#1E2A3A]/60 font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}