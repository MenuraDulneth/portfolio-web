/**
 * LegoBackrooms.tsx  —  Project Page
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit anything in this file to customise the LEGO Backrooms project page:
 *
 *  • liveUrl      → paste the live website / itch.io URL here
 *  • sourceUrl    → paste the GitHub / repo URL here
 *  • screenshots  → add { src, caption } objects for each screenshot
 *                   Put image files in /public/screenshots/ and reference
 *                   them as  src: '/screenshots/lego-backrooms-01.png'
 *                   or use a full URL from the internet.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import ProjectPageLayout from './_ProjectPageLayout'
import type { ProjectPageProps } from './_ProjectPageLayout'

type Props = Pick<ProjectPageProps, 'onBack'>

export default function BricksScapePage({ onBack }: Props) {
  return (
    <ProjectPageLayout
      onBack={onBack}
      number="03"
      name="LEGO BricksScape: The Missing Brick"
      type="Game Dev"
      status="In Progress"
      color="#10b981"
      role="Developer"
      duration="2026"
      teamSize="Individual"
      tags={['Unity', 'C#', 'leoCAD']}

      description="3D Unity escape room game featuring physics-based interactions, ray-casting puzzles, HUD systems, and trigger-driven mechanics within a structured nine-room progression."

      longDescription="LEGO BricksScape: The Missing Brick is a 3D first-person escape room built in Unity with a distinctive LEGO aesthetic set in the unsettling Backrooms universe. Players navigate nine interconnected rooms, each with a unique puzzle mechanic. Physics interactions let players pick up, throw, and stack LEGO bricks to solve challenges. A clean HUD communicates inventory and progress, while trigger-driven events keep pacing tight and surprises intact."

      highlights={[
        'Nine-room structured progression with distinct puzzle types per room',
        'Physics-based object interactions using Unity Rigidbody system',
        'Ray-casting mechanic for precise item targeting',
        'Custom HUD system for inventory and objective tracking',
        'Trigger-driven event system controlling room unlocks and cutscenes',
      ]}

      // ── Add your live URL here (e.g. itch.io page) ───────────────────────
      // liveUrl="https://itch.io/your-game"

      // ── Add your source code URL here ────────────────────────────────────
      // sourceUrl="https://github.com/yourusername/lego-backrooms"

      // ── Add screenshots here ──────────────────────────────────────────────
      screenshots={[
         { src: '/screenshots/BricksScape-Menu.png', caption: 'Main Menu' },
         { src: '/screenshots/BricksScape-Lego.png', caption: 'Machine Explotion' },
        ]}
    />
  )
}
