/**
 * SmartCampusAPI.tsx  —  Project Page
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit anything in this file to customise the Smart Campus API project page:
 *
 *  • liveUrl      → paste the live API / docs URL here
 *  • sourceUrl    → paste the GitHub / repo URL here
 *  • screenshots  → add { src, caption } objects for each screenshot
 *                   Great for Postman collection screenshots, Swagger UI,
 *                   or architecture diagrams.
 *                   Put image files in /public/screenshots/ and reference
 *                   them as  src: '/screenshots/smart-campus-postman.png'
 *                   or use a full URL from the internet.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import ProjectPageLayout from './_ProjectPageLayout'
import type { ProjectPageProps } from './_ProjectPageLayout'

type Props = Pick<ProjectPageProps, 'onBack'>

export default function SmartCampusAPIPage({ onBack }: Props) {
  return (
    <ProjectPageLayout
      onBack={onBack}
      number="04"
      name="Smart Campus API"
      type="Backend"
      status="Complete"
      color="#f59e0b"
      role="Backend Developer"
      duration="2026"
      teamSize="Individual"
      tags={['Java', 'JAX-RS', 'Maven', 'Postman', 'JSON']}

      description="RESTful backend API for smart campus room and sensor management, featuring room allocation, sensor registration, real-time value updates, historical reading tracking, and custom error handling."

      longDescription="The Smart Campus Sensor & Room Management API is a RESTful service built with Java and JAX-RS, designed to power a smart university campus system. It handles room allocation for bookings, registers IoT sensors across campus, receives real-time sensor readings (temperature, humidity, occupancy), and stores historical data for analysis. Every endpoint was documented and tested with Postman to ensure reliability and consistent error responses."

      highlights={[
        'RESTful endpoints for room CRUD and sensor registration',
        'Real-time sensor value ingestion with timestamp logging',
        'Historical reading retrieval with filtering support',
        'Custom error handling middleware with consistent JSON error responses',
        'Full endpoint test suite documented in Postman',
      ]}

      // ── Add your live URL here (e.g. hosted API or Swagger docs) ─────────
      // liveUrl="https://your-api-docs-url.com"

      // ── Add your source code URL here ────────────────────────────────────
      // sourceUrl="https://github.com/yourusername/smart-campus-api"

      // ── Add screenshots here ──────────────────────────────────────────────
      // screenshots={[
      //   { src: '/screenshots/sc-postman.png',    caption: 'Postman test suite' },
      //   { src: '/screenshots/sc-endpoints.png',  caption: 'API endpoint overview' },
      //   { src: '/screenshots/sc-arch.png',       caption: 'System architecture diagram' },
      // ]}
      screenshots={[]}
    />
  )
}
