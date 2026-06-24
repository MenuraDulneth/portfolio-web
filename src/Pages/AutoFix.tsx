/**
 * AutoFix.tsx  —  Project Page
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit anything in this file to customise the AutoFix project page:
 *
 *  • liveUrl      → paste the live website URL here
 *  • sourceUrl    → paste the GitHub / repo URL here
 *  • screenshots  → add { src, caption } objects for each screenshot
 *                   Put image files in /public/screenshots/ and reference
 *                   them as  src: '/screenshots/autofix-dashboard.png'
 *                   or use a full URL from the internet.
 *
 * All other text (description, highlights, tags …) can be edited too.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import ProjectPageLayout from './_ProjectPageLayout'
import type { ProjectPageProps } from './_ProjectPageLayout'

type Props = Pick<ProjectPageProps, 'onBack'>

export default function AutoFixPage({ onBack }: Props) {
  return (
    <ProjectPageLayout
      onBack={onBack}
      number="01"
      name="AutoFix"
      type="Software Dev"
      status="Complete"
      color="#7c3aed"
      role="Full-Stack Developer"
      duration="2026"
      teamSize="Group Project"
      tags={['React', 'Node.js', 'Supabase']}

      description="Full-stack web-based vehicle service management platform connecting vehicle owners and garages."

      longDescription="AutoFix is a second-year SDGP group project aimed at modernising how vehicle owners and garages interact. The platform provides a seamless booking experience where car owners can find nearby garages, schedule services, and track their vehicle's complete maintenance history digitally. Garages benefit from a robust management dashboard for handling appointments, customer records, and service logs. A built-in AI chatbot assists users with quick queries and service recommendations."

      highlights={[
        'Secure JWT-based authentication with role separation (owner / garage / admin)',
        'Real-time booking management workflow with status notifications',
        'Digital service history records per vehicle',
        'AI chatbot integration for user assistance',
        'Row-level security on Supabase for multi-tenant data isolation',
      ]}

      // ── Add your live URL here ────────────────────────────────────────────
      liveUrl="https://www.autofix.lk/"

      // ── Add your source code URL here ────────────────────────────────────
      sourceUrl="https://github.com/Methdul/autofix"

      // ── Add screenshots here ──────────────────────────────────────────────
      // screenshots={[
      //  { src: '/screenshots/autofix-home.png',      caption: 'Home / landing page' },
      //   { src: '/screenshots/autofix-dashboard.png', caption: 'Garage management dashboard' },
      //   { src: '/screenshots/autofix-booking.png',   caption: 'Booking workflow' },
      // ]}
      screenshots={[]}
    />
  )
}
