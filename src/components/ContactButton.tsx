interface ContactButtonProps {
  href?: string
  label?: string
  onClick?: () => void
}

export default function ContactButton({ href = '#contact', label = 'Contact Me', onClick }: ContactButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium uppercase tracking-widest text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
      style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #4c1d95 30%, #7c3aed 60%, #06b6d4 100%)',
        boxShadow: '0 4px 15px rgba(124,58,237,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        outline: '2px solid rgba(200,216,232,0.2)',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  )
}
