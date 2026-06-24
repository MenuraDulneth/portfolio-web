/**
 * SilentSea.tsx  —  Project Page
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit anything in this file to customise the Silent Sea project page:
 *
 *  • liveUrl      → paste the live website URL here
 *  • sourceUrl    → paste the GitHub / repo URL here
 *  • screenshots  → add { src, caption } objects for each screenshot
 *                   Put image files in /public/screenshots/ and reference
 *                   them as  src: '/screenshots/silent-sea-home.png'
 *                   or use a full URL from the internet.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import ProjectPageLayout from './_ProjectPageLayout'
import type { ProjectPageProps } from './_ProjectPageLayout'

type Props = Pick<ProjectPageProps, 'onBack'>

export default function SilentSeaPage({ onBack }: Props) {
  return (
    <ProjectPageLayout
      onBack={onBack}
      number="06"
      name="Silent Sea Website"
      type="Web"
      status="Complete"
      color="#38bdf8"
      role="Solo Developer & Designer"
      duration="2025"
      teamSize="Individual"
      tags={['HTML', 'CSS', 'JavaScript']}

      description="Website themed around the UN Life Below Water goal, featuring a styled feedback form, navigation bar, and front-end validation. Focused on ocean conservation awareness."

      longDescription="Silent Sea is an awareness website built around the United Nations Sustainable Development Goal 14: Life Below Water. The site communicates the importance of ocean conservation through compelling visuals and structured content. A fully styled responsive navigation bar guides users across sections, while a feedback form with client-side validation lets visitors engage. The project reinforced core HTML/CSS/JS skills while delivering a meaningful real-world topic."

      highlights={[
        'Responsive layout built from scratch without frameworks',
        'Client-side form validation with descriptive inline error messages',
        'Ocean-themed visual design aligned with UN SDG 14 branding',
        'Semantic HTML for accessibility and SEO',
        'Pure CSS animations for wave and particle effects',
      ]}

      // ── Add your live URL here ────────────────────────────────────────────
      // liveUrl="https://your-silent-sea-site.com"

      // ── Add your source code URL here ────────────────────────────────────
      // sourceUrl="https://github.com/yourusername/silent-sea"

      // ── Add screenshots here ──────────────────────────────────────────────
      // screenshots={[
      //   { src: '/screenshots/ss-home.png',    caption: 'Landing page with wave animations' },
      //   { src: '/screenshots/ss-form.png',    caption: 'Feedback form with validation' },
      //   { src: '/screenshots/ss-mobile.png',  caption: 'Mobile responsive layout' },
      // ]}
      screenshots={[]}
    />
  )
}
