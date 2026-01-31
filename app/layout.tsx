import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA – Anxiety, Trauma & Burnout',
  description: 'Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, California. Offering therapy for anxiety, trauma, stress, and burnout. In-person and telehealth sessions available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}