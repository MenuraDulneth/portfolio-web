import FadeIn from '../components/FadeIn'
import CountUp from '../components/CountUp'
import Divider from '../components/Divider'
import SectionHeading from '../components/SectionHeading'
import ContactButton from '../components/ContactButton'
import ResumeButton from '../components/ResumeButton'

const STATS = [
  { value: '5+', label: 'Projects Built' },
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Tech Skills' },
  { value: '∞', label: 'Curiosity' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 py-24">

      {/* Subtle divider line */}
      <Divider color="#7c3aed" />

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
              <SectionHeading className="mb-8">Who I Am</SectionHeading>
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
              <div className="flex flex-wrap items-center gap-3">
                <ContactButton />
                <ResumeButton />
              </div>
            </FadeIn>

            {/* Stats: compact row under the text */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 auto-rows-fr">
              {STATS.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.4 + i * 0.08} y={20} className="h-full">
                  <div className="card-glass glow-border rounded-xl px-3 py-4 h-full flex flex-col justify-between gap-1">
                    <CountUp
                      value={stat.value}
                      className="accent-text font-black leading-none"
                      style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)' }}
                    />
                    <span className="text-[#c8d8e8] text-[9px] uppercase tracking-[0.12em] opacity-50 font-medium whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <FadeIn delay={0.25} y={40} className="justify-self-center w-full max-w-[400px]">
            <div className="relative group">
              <div
                className="card-glass rounded-3xl overflow-hidden"
                style={{ aspectRatio: '1086 / 1448', border: '1px solid rgba(124,58,237,0.25)' }}
              >
                {/* Native aspect ratio — the whole photo, nothing cropped */}
                <img
                  src="/menura.webp"
                  alt="Menura Wanniarachchi"
                  loading="lazy"
                  className="block w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Fade the bottom into the card so the caption sits cleanly */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, transparent, rgba(5,5,8,0.85))' }} />
                <div className="absolute left-5 right-5 bottom-5 flex items-end justify-between">
                  <div>
                    <div className="text-[#c8d8e8] font-semibold text-base leading-tight">Menura Wanniarachchi</div>
                    <div className="text-[#c8d8e8] opacity-50 text-xs uppercase tracking-[0.2em] mt-1">Colombo, Sri Lanka</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.8)]" title="Open to opportunities" />
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-tr-3xl pointer-events-none"
                style={{ borderTop: '1px solid rgba(6,182,212,0.5)', borderRight: '1px solid rgba(6,182,212,0.5)' }} />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-bl-3xl pointer-events-none"
                style={{ borderBottom: '1px solid rgba(124,58,237,0.5)', borderLeft: '1px solid rgba(124,58,237,0.5)' }} />
            </div>
          </FadeIn>
        </div>

        {/* Education + Experience */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FadeIn delay={0.5} y={30}>
            <div className="card-glass glow-border rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#06b6d4]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#06b6d4] font-medium">Education</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-[#c8d8e8] font-semibold text-base mb-1">University of Westminster | IIT Campus</h3>
                  <p className="text-[#c8d8e8] opacity-50 text-sm font-light">B.Sc. (Hons) Computer Science · 2023 – Present</p>
                </div>
                <div>
                  <h3 className="text-[#c8d8e8] font-semibold text-base mb-1">Lyceum International School, Nugegoda</h3>
                  <p className="text-[#c8d8e8] opacity-50 text-sm font-light">Cambridge O-Levels · 2023</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6} y={30}>
            <div className="card-glass glow-border rounded-2xl p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#10b981]" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#10b981] font-medium">Experience</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-[#c8d8e8] font-semibold text-base mb-1">ITX360</h3>
                  <p className="text-[#c8d8e8] opacity-50 text-sm font-light">Software Engineering Intern · 2026 – Present</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
