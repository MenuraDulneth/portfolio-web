import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const STATS = [
  { value: '5+', label: 'Projects Built' },
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Tech Skills' },
  { value: '∞', label: 'Curiosity' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 py-24"
      style={{ background: '#050508' }}>

      {/* Subtle divider line */}
      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: heading + text */}
          <div>
            <FadeIn delay={0} y={40}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#7c3aed]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#7c3aed] font-medium">About Me</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} y={40}>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
              >
                Who I Am
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} y={30}>
              <p className="text-[#c8d8e8] font-light leading-relaxed mb-6 opacity-80"
                style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                Computer Science undergraduate with a strong interest in software development,
                gaming, and technology. Enthusiastic about programming, problem-solving, and
                building efficient systems.
              </p>
              <p className="text-[#c8d8e8] font-light leading-relaxed mb-10 opacity-80"
                style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                Passionate about game development and exploring how technology powers immersive
                gaming experiences. I&apos;m eager to apply my skills to real-world challenges and
                grow as a developer through continuous learning and hands-on experience.
              </p>
            </FadeIn>

            <FadeIn delay={0.35} y={20}>
              <ContactButton />
            </FadeIn>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.2 + i * 0.1} y={30}>
                <div className="card-glass glow-border rounded-2xl p-6 md:p-8 flex flex-col gap-2">
                  <span
                    className="accent-text font-black leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[#c8d8e8] text-sm uppercase tracking-widest opacity-50 font-medium">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education strip */}
        <FadeIn delay={0.5} y={30}>
          <div className="mt-20 card-glass glow-border rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#06b6d4]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#06b6d4] font-medium">Education</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-[#c8d8e8] font-semibold text-base mb-1">University of Westminster | IIT Campus</h3>
                <p className="text-[#c8d8e8] opacity-50 text-sm font-light">B.Sc. (Hons) Computer Science · 2023 – Present</p>
              </div>
              <div>
                <h3 className="text-[#c8d8e8] font-semibold text-base mb-1">Lyceum International School, Nugegoda</h3>
                <p className="text-[#c8d8e8] opacity-50 text-sm font-light">Cambridge O-Levels · 2012 – 2024</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
