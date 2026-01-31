'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface AccordionItem {
  title: string
  content: string
}

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items: AccordionItem[] = [
    {
      title: 'Education',
      content: 'Doctor of Psychology (PsyD) — specialized training in clinical assessment and evidence-based treatment for anxiety, trauma, and stress-related disorders.'
    },
    {
      title: 'Licensure',
      content: 'Licensed Clinical Psychologist in the state of California. Fully licensed to provide individual therapy both in-person and via telehealth.'
    },
    {
      title: 'Certifications',
      content: 'Certified in Eye Movement Desensitization and Reprocessing (EMDR), Cognitive Behavioral Therapy (CBT), and Mindfulness-Based Stress Reduction (MBSR).'
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-[#B8D4E3]/25">
      <div className="container-custom max-w-4xl">
        <h2 className="text-4xl md:text-5xl text-center text-[#1E2A3A] mb-16" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
          My Professional Background
        </h2>

        <div className="space-y-0">
          {items.map((item, index) => (
            <div key={index} className="border-b border-[#1E2A3A]/15">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity"
              >
                <h3 className="text-2xl md:text-3xl text-[#1E2A3A]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}>
                  {item.title}
                </h3>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#7A9E8E] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#7A9E8E] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-6 pt-2">
                  <p className="text-lg text-[#1E2A3A]/60 font-light leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}