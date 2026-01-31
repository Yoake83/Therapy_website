export default function CTA() {
  return (
    <section className="section-padding bg-[#1E2A3A]">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#F5F0EB] mb-8 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
          Ready to take the first step?
        </h2>
        <p className="text-lg md:text-xl text-[#F5F0EB]/70 mb-6 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Whether you are dealing with anxiety, processing past experiences, or simply feeling burnt out—therapy can be the space where things start to shift.
        </p>
        <p className="text-lg md:text-xl text-[#F5F0EB]/70 mb-12 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Book your first session today. I look forward to working with you.
        </p>
        <a 
          href="#contact" 
          className="inline-block px-10 py-4 border border-[#F5F0EB] text-[#F5F0EB] hover:bg-[#F5F0EB] hover:text-[#1E2A3A] transition-all duration-300 text-sm tracking-widest font-light"
        >
          GET IN TOUCH &nbsp;→
        </a>
      </div>
    </section>
  )
}