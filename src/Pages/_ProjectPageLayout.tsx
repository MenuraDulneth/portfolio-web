/**
 * _ProjectPageLayout.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Shared layout used by every project page.
 * Individual project pages import this and pass their own content as props.
 * You should not need to edit this file — edit the specific project page files.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, Users, Briefcase, CheckCircle, Clock, ExternalLink } from 'lucide-react'

export interface Screenshot {
  /** Path to image file (put images in /public/screenshots/) or a full URL */
  src: string
  /** Short caption shown below the image */
  caption?: string
}

export interface ProjectPageProps {
  /** Project number label e.g. "01" */
  number: string
  /** Display name */
  name: string
  /** Category label e.g. "Group Project" */
  type: string
  /** "In Progress" | "Complete" */
  status: 'In Progress' | 'Complete'
  /** Accent colour (hex) */
  color: string
  /** Short one-liner shown in the hero */
  description: string
  /** Full paragraph(s) for the Overview section */
  longDescription: string
  /** Tech / tool badges */
  tags: string[]
  /** Bullet points in Key Features */
  highlights: string[]
  /** Your role on the project */
  role: string
  /** Duration string e.g. "2026 – Ongoing" */
  duration: string
  /** "Individual" | "Group Project" etc. */
  teamSize: string
  /**
   * Live URL for the project — shown as a "View Live" button.
   * Set to undefined / remove the prop to hide the button.
   */
  liveUrl?: string
  /**
   * Source-code URL — shown as a "Source Code" button.
   * Set to undefined / remove the prop to hide the button.
   */
  sourceUrl?: string
  /**
   * Screenshots displayed in a gallery section.
   * Add as many { src, caption } objects as you like.
   * Leave the array empty (or omit the prop) to hide the gallery.
   */
  screenshots?: Screenshot[]
  /** Injected by App — goes back to the projects list */
  onBack: () => void
}

export default function ProjectPageLayout({
  number,
  name,
  type,
  status,
  color,
  longDescription,
  tags,
  highlights,
  role,
  duration,
  teamSize,
  liveUrl,
  sourceUrl,
  screenshots = [],
  onBack,
}: ProjectPageProps) {
  const totalProjects = '06'

  return (
    <AnimatePresence>
      <motion.div
        key="detail"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="min-h-screen"
        style={{ background: '#050508' }}
      >
        {/* ── Top nav ─────────────────────────────────────────────────────── */}
        <div
          className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-5"
          style={{
            background: 'rgba(5,5,8,0.85)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#c8d8e8] opacity-60 hover:opacity-100 transition-opacity duration-200 text-sm uppercase tracking-wider font-medium"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
          <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-30 text-[#c8d8e8]">
            {number} / {totalProjects}
          </span>
        </div>

        {/* ── Hero banner ──────────────────────────────────────────────────── */}
        <div className="relative px-6 md:px-10 pt-16 pb-20 overflow-hidden">
          {/* Glow blob */}
          <div
            className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              filter: 'blur(60px)',
            }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(200,216,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200,216,232,0.5) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px" style={{ background: color }} />
              <span
                className="text-xs uppercase tracking-[0.3em] font-medium"
                style={{ color }}
              >
                {type}
              </span>
              <div className="flex items-center gap-1.5 ml-4">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: status === 'In Progress' ? '#f59e0b' : '#10b981' }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: status === 'In Progress' ? '#f59e0b' : '#10b981' }}
                >
                  {status}
                </span>
              </div>
            </motion.div>

            {/* Number + title */}
            <div className="flex items-start gap-9 mb-10">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05, duration: 0.8 }}
                className="font-black leading-none select-none hidden sm:block"
                style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', color: `${color}25` }}
              >
                {number}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="font-black uppercase leading-none tracking-tight"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 6rem)',
                  background: `linear-gradient(160deg, #4a4f5e 0%, #c8d8e8 60%, ${color}99 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {name}
              </motion.h1>
            </div>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              {[
                { icon: Calendar, label: 'Year', value: duration },
                { icon: Users, label: 'Team', value: teamSize },
                { icon: Briefcase, label: 'Role', value: role },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon size={14} style={{ color }} />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#c8d8e8] opacity-40 font-medium">
                    {label}:
                  </span>
                  <span className="text-sm text-[#c8d8e8] font-medium">{value}</span>
                </div>
              ))}
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{
                    background: `${color}18`,
                    color,
                    border: `1px solid ${color}30`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            {(liveUrl || sourceUrl) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                    style={{
                      background: color,
                      color: '#050508',
                    }}
                  >
                    <ExternalLink size={14} />
                    View Live
                  </a>
                )}
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      color: '#c8d8e8',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <ExternalLink size={14} />
                    Source Code
                  </a>
                )}
              </motion.div>
            )}
          </div>
        </div>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <div className="px-6 md:px-10 pb-24">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left: overview + highlights */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-px" style={{ background: color }} />
                  <span
                    className="text-xs uppercase tracking-[0.25em] font-medium"
                    style={{ color }}
                  >
                    Overview
                  </span>
                </div>
                <p
                  className="text-[#c8d8e8] font-light leading-relaxed opacity-80"
                  style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}
                >
                  {longDescription}
                </p>
              </motion.div>

              {/* Key features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${color}20`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-5 h-px" style={{ background: color }} />
                  <span
                    className="text-xs uppercase tracking-[0.25em] font-medium"
                    style={{ color }}
                  >
                    Key Features
                  </span>
                </div>
                <ul className="flex flex-col gap-4">
                  {highlights.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color }}
                      />
                      <span className="text-[#c8d8e8] font-light leading-relaxed opacity-75 text-sm">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Screenshots gallery */}
              {screenshots.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.7 }}
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-5 h-px" style={{ background: color }} />
                    <span
                      className="text-xs uppercase tracking-[0.25em] font-medium"
                      style={{ color }}
                    >
                      Screenshots
                    </span>
                  </div>
                  <div className="flex flex-col gap-6">
                    {screenshots.map((shot, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <img
                          src={shot.src}
                          alt={shot.caption ?? `Screenshot ${i + 1}`}
                          className="rounded-xl w-full object-cover"
                          style={{ border: `1px solid ${color}20` }}
                        />
                        {shot.caption && (
                          <p className="text-xs text-[#c8d8e8] opacity-40 text-center">
                            {shot.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right: sidebar */}
            <div className="flex flex-col gap-6">

              {/* Quick info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-px" style={{ background: color }} />
                  <span
                    className="text-xs uppercase tracking-[0.25em] font-medium"
                    style={{ color }}
                  >
                    Info
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Type', value: type },
                    { label: 'Status', value: status },
                    { label: 'Year', value: duration },
                    { label: 'Team', value: teamSize },
                    { label: 'Role', value: role },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#c8d8e8] opacity-35 font-medium">
                        {label}
                      </span>
                      <span className="text-sm text-[#c8d8e8] font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${color}20`,
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-px" style={{ background: color }} />
                  <span
                    className="text-xs uppercase tracking-[0.25em] font-medium"
                    style={{ color }}
                  >
                    Stack
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {tags.map(tag => (
                    <div key={tag} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: color }}
                      />
                      <span className="text-sm text-[#c8d8e8] font-medium">{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Status card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="rounded-2xl p-6 flex items-center gap-4"
                style={{
                  background:
                    status === 'In Progress'
                      ? 'rgba(245,158,11,0.06)'
                      : 'rgba(16,185,129,0.06)',
                  border: `1px solid ${status === 'In Progress' ? '#f59e0b' : '#10b981'}25`,
                }}
              >
                <Clock
                  size={20}
                  style={{
                    color: status === 'In Progress' ? '#f59e0b' : '#10b981',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] opacity-50 text-[#c8d8e8] font-medium mb-0.5">
                    Project Status
                  </div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: status === 'In Progress' ? '#f59e0b' : '#10b981' }}
                  >
                    {status}
                  </div>
                </div>
              </motion.div>

              {/* Links card (sidebar repeat) */}
              {(liveUrl || sourceUrl) && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.65, duration: 0.7 }}
                  className="rounded-2xl p-6 flex flex-col gap-3"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-5 h-px" style={{ background: color }} />
                    <span
                      className="text-xs uppercase tracking-[0.25em] font-medium"
                      style={{ color }}
                    >
                      Links
                    </span>
                  </div>
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#c8d8e8] opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={13} style={{ color }} />
                      Live Website
                    </a>
                  )}
                  {sourceUrl && (
                    <a
                      href={sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[#c8d8e8] opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={13} style={{ color }} />
                      Source Code
                    </a>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* ── Bottom nav ───────────────────────────────────────────────────── */}
        <div className="px-6 md:px-10 pb-16 border-t border-white/5 pt-10">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c8d8e8] opacity-30 mb-6 text-center">
              More Projects
            </p>
            <button
              onClick={onBack}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-medium uppercase tracking-widest text-[#c8d8e8] transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <ArrowLeft size={14} />
              Back to all projects
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
