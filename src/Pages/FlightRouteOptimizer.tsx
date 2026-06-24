/**
 * FlightRouteOptimizer.tsx  —  Project Page
 * ─────────────────────────────────────────────────────────────────────────────
 * Edit anything in this file to customise the Flight Route Optimizer page:
 *
 *  • liveUrl      → paste the live demo / hosted URL here
 *  • sourceUrl    → paste the GitHub / repo URL here
 *  • screenshots  → add { src, caption } objects for each screenshot
 *                   Great for console output captures or graph visualisations.
 *                   Put image files in /public/screenshots/ and reference
 *                   them as  src: '/screenshots/fro-graph.png'
 *                   or use a full URL from the internet.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import ProjectPageLayout from './_ProjectPageLayout'
import type { ProjectPageProps } from './_ProjectPageLayout'

type Props = Pick<ProjectPageProps, 'onBack'>

export default function FlightRouteOptimizerPage({ onBack }: Props) {
  return (
    <ProjectPageLayout
      onBack={onBack}
      number="05"
      name="Flight Route Optimizer"
      type="Algorithm"
      status="Complete"
      color="#ec4899"
      role="Solo Developer"
      duration="2024"
      teamSize="Individual"
      tags={['Python', 'Data Structures', 'Graph Algorithms']}

      description="Python program to manage and analyse international flight routes, displaying all possible paths and calculating the least-duration route between countries."

      longDescription="The Flight Route Optimization Program is a Python console application that models an international flight network as a graph. Users can explore all possible routes between two countries or request the fastest path based on flight durations. The graph traversal engine implements BFS for path discovery and a Dijkstra-inspired approach for optimal route calculation. Input validation ensures robust handling of unknown airports and disconnected routes."

      highlights={[
        'Graph-based flight network model using adjacency representation',
        'BFS traversal to enumerate all possible routes',
        'Least-duration path calculation via weighted shortest-path logic',
        'Comprehensive user input validation and error feedback',
        'Console UI with formatted route display',
      ]}

      // ── Add your live URL here (e.g. replit / online demo) ───────────────
      // liveUrl="https://replit.com/@yourusername/flight-route-optimizer"

      // ── Add your source code URL here ────────────────────────────────────
      // sourceUrl="https://github.com/yourusername/flight-route-optimizer"

      // ── Add screenshots here ──────────────────────────────────────────────
      // screenshots={[
      //   { src: '/screenshots/fro-console.png', caption: 'Console output — shortest path result' },
      //   { src: '/screenshots/fro-graph.png',   caption: 'Flight network graph visualisation' },
      // ]}
      screenshots={[]}
    />
  )
}
