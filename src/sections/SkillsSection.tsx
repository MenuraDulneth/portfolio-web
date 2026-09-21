import { Crown, Users, Lightbulb, MessageCircle, Clock, Award, type LucideIcon } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import Divider from '../components/Divider'
import SectionHeading from '../components/SectionHeading'

// Devicon (https://devicon.dev) — icon id + variant. Black-on-transparent marks are inverted so they show on dark.
const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

interface Skill {
  name: string
  icon?: string        // devicon path, e.g. "python/python-original"
  invert?: boolean     // for logos drawn in black
  lucide?: LucideIcon  // for soft skills (no brand logo)
}

const SKILL_GROUPS: { category: string; color: string; skills: Skill[] }[] = [
  {
    category: 'Languages',
    color: '#7c3aed',
    skills: [
      { name: 'Python', icon: 'python/python-original' },
      { name: 'Java', icon: 'java/java-original' },
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'HTML', icon: 'html5/html5-original' },
      { name: 'CSS', icon: 'css3/css3-original' },
      { name: 'C#', icon: 'csharp/csharp-original' },
    ],
  },
  {
    category: 'Frameworks & Tools',
    color: '#06b6d4',
    skills: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Supabase', icon: 'supabase/supabase-original' },
      { name: 'MySQL', icon: 'mysql/mysql-original' },
      { name: 'JSON', icon: 'json/json-original' },
      { name: 'JAX-RS' },
    ],
  },
  {
    category: 'Design & 3D',
    color: '#10b981',
    skills: [
      { name: 'Figma', icon: 'figma/figma-original' },
      { name: 'Blender', icon: 'blender/blender-original' },
      { name: 'Photoshop', icon: 'photoshop/photoshop-original' },
      { name: 'Unreal Engine', icon: 'unrealengine/unrealengine-original', invert: true },
      { name: 'Unity', icon: 'unity/unity-original', invert: true },
    ],
  },
  {
    category: 'Soft Skills',
    color: '#f59e0b',
    skills: [
      { name: 'Leadership', lucide: Crown },
      { name: 'Teamwork', lucide: Users },
      { name: 'Problem Solving', lucide: Lightbulb },
      { name: 'Communication', lucide: MessageCircle },
      { name: 'Time Management', lucide: Clock },
    ],
  },
]

// Real ones first. The three PLACEHOLDER entries are layout slots — replace the text with real
// certificates (or delete the lines); they're flagged visually until you do.
const ACHIEVEMENTS: { title: string; issuer: string; placeholder?: boolean }[] = [
  { title: 'Cambridge O-Level Certificate', issuer: 'Lyceum International School · 2023' },
  { title: 'Foundation Certificate', issuer: 'Informatics Institute of Technology' },
  { title: 'Python for Beginners', issuer: 'University of Moratuwa · e-certificate' },
  { title: 'Web Design for Beginners', issuer: 'University of Moratuwa · e-certificate' },
  { title: 'Python Programming', issuer: 'University of Moratuwa · e-certificate' },
  { title: 'PLACEHOLDER — certificate name', issuer: 'Issuer · year', placeholder: true },
  { title: 'PLACEHOLDER — certificate name', issuer: 'Issuer · year', placeholder: true },
  { title: 'PLACEHOLDER — certificate name', issuer: 'Issuer · year', placeholder: true },
]

function SkillTile({ skill, color }: { skill: Skill; color: string }) {
  const Lucide = skill.lucide
  return (
    <div
      title={skill.name}
      aria-label={skill.name}
      className="group/tile relative w-14 h-14 transition-transform duration-300 hover:-translate-y-1"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/tile:scale-105"
        style={{ background: `${color}12`, border: `1px solid ${color}25`, boxShadow: `0 0 0 0 ${color}00` }}
      >
        {skill.icon ? (
          <img
            src={`${DEVICON}/${skill.icon}.svg`}
            alt={skill.name}
            loading="lazy"
            className="w-7 h-7"
            style={skill.invert ? { filter: 'invert(1)' } : undefined}
          />
        ) : Lucide ? (
          <Lucide size={24} style={{ color }} />
        ) : (
          <span className="text-[11px] font-bold tracking-wider" style={{ color }}>{skill.name}</span>
        )}
      </div>
      {/* Floating label: absolutely positioned so it never affects the grid */}
      <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 text-[10px] uppercase tracking-[0.15em] text-[#c8d8e8] opacity-0 group-hover/tile:opacity-70 transition-opacity duration-300 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-10">

      <Divider color="#06b6d4" />

      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#06b6d4]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#06b6d4] font-medium">Skills</span>
          </div>
          <SectionHeading className="mb-16 md:mb-24">Tech Arsenal</SectionHeading>
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
                <div className="flex flex-wrap gap-4 pb-4">
                  {group.skills.map(skill => (
                    <SkillTile key={skill.name} skill={skill} color={group.color} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Achievements */}
        <FadeIn delay={0.5} y={30}>
          <div className="mt-8 card-glass rounded-2xl p-6 md:p-8"
            style={{ border: '1px solid rgba(245,158,11,0.15)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#f59e0b]">Achievements &amp; Certificates</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ACHIEVEMENTS.map(a => (
                <div
                  key={a.title + a.issuer}
                  className="rounded-xl p-4 flex items-start gap-3 transition-colors duration-300 hover:bg-white/[0.03]"
                  style={{
                    border: a.placeholder ? '1px dashed rgba(245,158,11,0.35)' : '1px solid rgba(255,255,255,0.06)',
                    opacity: a.placeholder ? 0.6 : 1,
                  }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}>
                    <Award size={15} className="text-[#f59e0b]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-[#c8d8e8] font-medium leading-snug">{a.title}</div>
                    <div className="text-xs text-[#c8d8e8] opacity-45 font-light mt-0.5 leading-snug">{a.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
