import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { PROJECTS, type Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  onOpen: (id: string) => void
}

function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [60, -40])

  return (
    <motion.div
      ref={ref}
      style={{ y, background: 'rgba(255,255,255,0.022)', border: `1px solid ${project.color}22` }}
      onClick={() => onOpen(project.id)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onOpen(project.id)}
      className="group rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col gap-5 h-full cursor-pointer
                 transition-all duration-300 hover:scale-[1.02] focus:outline-none"
    >
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-medium opacity-50 text-[#c8d8e8]">{project.type}</span>
          <div className="mt-1">
            <span className="font-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: `${project.color}28` }}>
              {project.number}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}35` }}
          >
            <ArrowUpRight size={14} style={{ color: project.color }} />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full"
              style={{ background: project.status === 'In Progress' ? '#f59e0b' : '#10b981' }} />
            <span className="text-xs font-medium"
              style={{ color: project.status === 'In Progress' ? '#f59e0b' : '#10b981' }}>
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-bold text-[#e8e8f0] leading-tight transition-colors duration-200 group-hover:text-white"
        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: `color-mix(in srgb, #e8e8f0, ${project.color} 10%)` }}>
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-[#c8d8e8] font-light leading-relaxed opacity-55 flex-1"
        style={{ fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)' }}>
        {project.description}
      </p>

      {/* Tags + year */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}25` }}>
            {tag}
          </span>
        ))}
        <span className="ml-auto text-xs text-[#c8d8e8] opacity-25 font-light self-center">{project.year}</span>
      </div>

      {/* Hover bottom bar */}
      <div
        className="h-0.5 rounded-full transition-all duration-500 group-hover:opacity-100 opacity-0"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </motion.div>
  )
}

interface ProjectsSectionProps {
  onOpenProject: (id: string) => void
}

export default function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-10"
      style={{ background: '#050508' }}>

      <div className="absolute top-0 left-6 right-6 md:left-10 md:right-10 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#7c3aed]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#7c3aed] font-medium">Work</span>
          </div>
          <div className="flex items-end justify-between mb-16 md:mb-24">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              Projects
            </h2>
            <span className="text-[#c8d8e8] opacity-25 text-sm font-light hidden md:block">
              Click any card to view details
            </span>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.name} delay={0.1 + (i % 3) * 0.1} y={30}>
              <ProjectCard project={project} onOpen={onOpenProject} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
