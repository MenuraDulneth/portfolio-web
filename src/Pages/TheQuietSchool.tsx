/**
 * TheQuietSchool.tsx  —  Project Page
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit anything in this file to customise The Quiet School project page:
 *
 *  • liveUrl      → paste the live website / itch.io URL here
 *  • sourceUrl    → paste the GitHub / repo URL here
 *  • screenshots  → add { src, caption } objects for each screenshot
 *                   Put image files in /public/screenshots/ and reference
 *                   them as  src: '/screenshots/quiet-school-01.png'
 *                   or use a full URL from the internet.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import ProjectPageLayout from './_ProjectPageLayout'
import type { ProjectPageProps } from './_ProjectPageLayout'

type Props = Pick<ProjectPageProps, 'onBack'>

export default function TheQuietSchoolPage({ onBack }: Props) {
  return (
    <ProjectPageLayout
      onBack={onBack}
      number="02"
      name="The Quiet School"
      type="Game Dev"
      status="Complete"
      color="#06b6d4"
      role="Solo Developer & Designer"
      duration="2026"
      teamSize="Individual"
      tags={['Unreal Engine', 'Blueprint', 'Blender', 'Level Design']}

      description="First-person psychological horror game set inside an abandoned school, exploring themes of trauma and distorted memory."

      longDescription="The Quiet School is an individual Unreal Engine project that blends psychological horror with narrative exploration. The game places the player inside an eerily silent, decaying school, where each room hides fragmented memories and distorted reality. Atmospheric lighting shifts dynamically as the story progresses, and layered sound design builds constant dread without relying on cheap jump-scares. Puzzles are woven naturally into the environment and gated by a Blueprint-driven progression system."

      highlights={[
        'Full Blueprint Visual Scripting for all game logic and puzzle gates',
        'Dynamic lighting system that shifts tone with story progression',
        'Custom 3D assets modelled and textured in Blender',
        'Layered spatial audio for immersive atmosphere',
        'Non-linear narrative told through environmental storytelling',
      ]}

      // ── Add your live URL here (e.g. itch.io page) ───────────────────────
      liveUrl="https://www.youtube.com/watch?v=m3Y9E3B3TvU"

      // ── Add your source code URL here ────────────────────────────────────
      // sourceUrl="https://github.com/yourusername/the-quiet-school"

      // ── Add screenshots here ──────────────────────────────────────────────
      screenshots={[
        { src: '/screenshots/QuiteSchool.webp',  caption: 'School hallway — modelled in Blender' },
        { src: '/screenshots/QuiteSchool-hallway.webp',   caption: 'Second Floor — chairs and tables scene' },
        { src: '/screenshots/QuiteSchool-Architecture.jpeg', caption: 'Game Architecture' },

      ]}
    />
  )
}
