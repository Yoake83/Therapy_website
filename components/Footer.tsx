export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const legalLinks = [
    { name: 'Privacy & Cookies Policy', href: '#' },
    { name: 'Good Faith Estimate', href: '#' },
    { name: 'Website Terms & Conditions', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ]

  return (
    <footer>
      {/* Top Section - Contact Info, Hours, Find */}
      <div className="bg-[#F5F0EB] py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Left - Business Info */}
            <div>
              <h3 className="text-3xl md:text-4xl text-[#1E2A3A] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                Dr. Maya Reynolds
              </h3>
              <p className="text-base text-[#1E2A3A]/60 font-light leading-relaxed mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                123th Street 45 W
              </p>
              <p className="text-base text-[#1E2A3A]/60 font-light leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Santa Monica, CA 90401
              </p>
              <a
                href="mailto:maya@reynoldstherapy.com"
                className="block text-base text-[#1E2A3A] font-light underline underline-offset-4 hover:text-[#7A9E8E] transition-colors mb-1"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                maya@reynoldstherapy.com
              </a>
              <a
                href="tel:+13105550192"
                className="block text-base text-[#1E2A3A] font-light underline underline-offset-4 hover:text-[#7A9E8E] transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                (310) 555-0192
              </a>
            </div>

            {/* Middle - Hours */}
            <div className="md:justify-self-center">
              <h4 className="text-xl md:text-2xl text-[#1E2A3A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                Hours
              </h4>
              <p className="text-base text-[#1E2A3A]/60 font-light leading-relaxed mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Monday – Friday
              </p>
              <p className="text-base text-[#1E2A3A]/60 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                9am – 6pm PST
              </p>
            </div>

            {/* Right - Find / Quick Links */}
            <div className="md:justify-self-end md:text-right">
              <h4 className="text-xl md:text-2xl text-[#1E2A3A] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}>
                Find
              </h4>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-base text-[#1E2A3A] font-light underline underline-offset-4 hover:text-[#7A9E8E] transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal Links + Copyright */}
      <div className="bg-[#E8E4E0] py-8 md:py-10">
        <div className="container-custom text-center">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#1E2A3A] font-light underline underline-offset-4 hover:text-[#7A9E8E] transition-colors"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#1E2A3A]/50 font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            All Rights Reserved © {currentYear} Dr. Maya Reynolds, PsyD, LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}