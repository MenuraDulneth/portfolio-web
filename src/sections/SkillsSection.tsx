import FadeIn from '../components/FadeIn'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    color: '#7c3aed',
    skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'C#'],
  },
  {
    category: 'Frameworks & Tools',
    color: '#06b6d4',
    skills: ['React', 'Node.js', 'Supabase', 'MySQL', 'JSON', 'JAX-RS'],
  },
  {
    category: 'Design & 3D',
    color: '#10b981',
    skills: ['Figma', 'Blender', 'Photoshop', 'Unreal Engine', 'Unity'],
  },
  {
    category: 'Soft Skills',
    color: '#f59e0b',
    skills: ['Leadership', 'Teamwork', 'Problem Solving', 'Communication', 'Time Management'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10"
      style={{ background: '#07070d' }}>

      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#06b6d4]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#06b6d4] font-medium">Skills</span>
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-16 md:mb-24"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Tech Arsenal
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <FadeIn key={group.category} delay={0.1 + i * 0.1} y={30}>
              <div className="card-glass rounded-2xl p-6 md:p-8 h-full"
                style={{ border: `1px solid ${group.color}22` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold"
                    style={{ color: group.color }}>
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm font-medium text-[#c8d8e8] transition-all duration-300 hover:scale-105"
                      style={{
                        background: `${group.color}12`,
                        border: `1px solid ${group.color}25`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Achievements strip */}
        <FadeIn delay={0.5} y={30}>
          <div className="mt-8 card-glass rounded-2xl p-6 md:p-8"
            style={{ border: '1px solid rgba(245,158,11,0.15)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#f59e0b]">Achievements</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Foundation Certificate from IIT',
                'Python for Beginners — Moratuwa University',
                'Web Design for Beginners — Moratuwa University',
                'Python Programming — Moratuwa University',
              ].map(a => (
                <div key={a} className="flex items-start gap-3 text-sm text-[#c8d8e8] opacity-70">
                  <span className="text-[#f59e0b] mt-0.5 flex-shrink-0">▸</span>
                  <span className="font-light">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
