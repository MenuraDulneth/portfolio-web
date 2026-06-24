import FadeIn from '../components/FadeIn'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-10"
      style={{ background: '#07070d' }}>

      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)' }} />

      <div className="max-w-4xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#10b981]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#10b981] font-medium">Get In Touch</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Contact
          </h2>
          <p className="text-[#c8d8e8] opacity-60 font-light leading-relaxed mb-16 max-w-lg"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
            Looking for opportunities in software development, game dev, or design. Let&apos;s connect and build something great together.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Mail, label: 'Email', value: 'menuradulneth7073@gmail.com', href: 'mailto:menuradulneth7073@gmail.com', color: '#7c3aed' },
            { icon: Phone, label: 'Phone', value: '+94 75 515 7715', href: 'tel:+94755157715', color: '#06b6d4' },
            { icon: Github, label: 'GitHub', value: 'MenuraDulneth', href: 'https://github.com/MenuraDulneth', color: '#10b981' },
            { icon: Linkedin, label: 'LinkedIn', value: 'Menura Wanniarachchi', href: 'https://www.linkedin.com/in/menura-wanniarachchi/', color: '#f59e0b' },
          ].map(({ icon: Icon, label, value, href, color }, i) => (
            <FadeIn key={label} delay={0.1 + i * 0.1} y={20}>
              <a href={href}
                className="card-glass rounded-2xl p-6 flex items-center gap-4 group transition-all duration-300 hover:scale-[1.02]"
                style={{ border: `1px solid ${color}20` }}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-medium opacity-40 text-[#c8d8e8] mb-1">{label}</div>
                  <div className="text-[#c8d8e8] font-medium text-sm leading-snug">{value}</div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.5} y={20}>
          <div className="text-center pt-8 border-t border-white/5">
            <p className="text-[#c8d8e8] opacity-25 text-xs uppercase tracking-[0.2em] font-light">
              © 2026 Menura Wanniarachchi · Built with React & Framer Motion
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
