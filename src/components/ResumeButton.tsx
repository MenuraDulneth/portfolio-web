import { Download } from 'lucide-react'
import Magnetic from './Magnetic'

export const RESUME_URL = '/Menura-Wanniarachchi-CV.pdf'

interface ResumeButtonProps {
  /** "pill" matches ContactButton (outlined); "link" is a plain nav-style text link. */
  variant?: 'pill' | 'link'
  className?: string
}

/** Downloads the CV from /public. Outlined so it reads as secondary to "Contact Me". */
export default function ResumeButton({ variant = 'pill', className = '' }: ResumeButtonProps) {
  if (variant === 'link') {
    return (
      <a
        href={RESUME_URL}
        download
        className={`inline-flex items-center gap-1.5 text-[11px] sm:text-sm font-medium uppercase tracking-widest text-[#c8d8e8] opacity-60 hover:opacity-100 transition-opacity duration-200 ${className}`}
      >
        <Download size={13} />
        CV
      </a>
    )
  }

  return (
    <Magnetic>
      <a
        href={RESUME_URL}
        download
        className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full whitespace-nowrap font-medium uppercase tracking-widest text-sm text-[#c8d8e8] transition-all duration-300 hover:scale-105 hover:text-white hover:border-[#06b6d4]/60 hover:shadow-[0_0_24px_rgba(6,182,212,0.25)] ${className}`}
        style={{ border: '1px solid rgba(200,216,232,0.25)', background: 'rgba(10,10,14,0.5)' }}
      >
        <Download size={15} />
        Download CV
      </a>
    </Magnetic>
  )
}
