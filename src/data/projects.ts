export interface Project {
  id: string
  number: string
  name: string
  type: string
  year: string
  description: string
  longDescription: string
  tags: string[]
  color: string
  status: 'In Progress' | 'Complete'
  highlights: string[]
  role: string
  duration: string
  teamSize: string
}

export const PROJECTS: Project[] = [
  {
    id: 'autofix',
    number: '01',
    name: 'AutoFix',
    type: 'Software Development',
    year: '2026',
    description:
      'Full-stack web-based vehicle service management platform connecting vehicle owners and garages. Features secure authentication, role-based access control, booking workflow, digital service history, and AI chatbot integration.',
    longDescription:
      'AutoFix is a second-year group project aimed at modernising how vehicle owners and garages interact. The platform provides a seamless booking experience where car owners can find nearby garages, schedule services, and track their vehicle\'s complete maintenance history digitally. Garages benefit from a robust management dashboard for handling appointments, customer records, and service logs. A built-in AI chatbot assists users with quick queries and service recommendations.',
    tags: ['React', 'Node.js', 'Supabase'],
    color: '#7c3aed',
    status: 'Complete',
    highlights: [
      'Secure JWT-based authentication with role separation (owner / garage / admin)',
      'Real-time booking management workflow with status notifications',
      'Digital service history records per vehicle',
      'AI chatbot integration for user assistance',
      'Row-level security on Supabase for multi-tenant data isolation',
    ],
    role: 'Full-Stack Developer',
    duration: '2026 – Ongoing',
    teamSize: 'Group',
  },
  {
    id: 'the-quiet-school',
    number: '02',
    name: 'The Quiet School',
    type: 'Game Dev',
    year: '2026',
    description:
      'First-person psychological horror game set inside an abandoned school. Explores themes of trauma and distorted memory through atmospheric lighting, sound design, and Blueprint-based puzzle progression systems.',
    longDescription:
      'The Quiet School is an individual Unreal Engine project that blends psychological horror with narrative exploration. The game places the player inside an eerily silent, decaying school, where each room hides fragmented memories and distorted reality. Atmospheric lighting shifts dynamically as the story progresses, and layered sound design builds constant dread without relying on cheap jump-scares. Puzzles are woven naturally into the environment and gated by a Blueprint-driven progression system.',
    tags: ['Unreal Engine', 'Blueprint', 'Blender', 'Level Design'],
    color: '#06b6d4',
    status: 'Complete',
    highlights: [
      'Full Blueprint Visual Scripting for all game logic and puzzle gates',
      'Dynamic lighting system that shifts tone with story progression',
      'Custom 3D assets modelled and textured in Blender',
      'Layered spatial audio for immersive atmosphere',
      'Non-linear narrative told through environmental storytelling',
    ],
    role: 'Solo Developer & Designer',
    duration: '2026',
    teamSize: 'Individual',
  },
  {
    id: 'BricksScape',
    number: '03',
    name: 'LEGO BricksScape: The Missing Brick',
    type: 'Game Dev',
    year: '2026',
    description:
      '3D Unity escape room game featuring physics-based interactions, ray-casting puzzles, HUD systems, and trigger-driven mechanics within a structured nine-room progression.',
    longDescription:
      'LEGO BricksScape: The Missing Brick is a 3D first-person escape room built in Unity with a distinctive LEGO aesthetic set in the unsettling BricksScape universe. Players navigate nine interconnected rooms, each with a unique puzzle mechanic. Physics interactions let players pick up, throw, and stack LEGO bricks to solve challenges. A clean HUD communicates inventory and progress, while trigger-driven events keep pacing tight and surprises intact.',
    tags: ['Unity', 'C#', 'leoCAD'],
    color: '#10b981',
    status: 'In Progress',
    highlights: [
      'Nine-room structured progression with distinct puzzle types per room',
      'Physics-based object interactions using Unity Rigidbody system',
      'Ray-casting mechanic for precise item targeting',
      'Custom HUD system for inventory and objective tracking',
      'Trigger-driven event system controlling room unlocks and cutscenes',
    ],
    role: 'Solo Developer',
    duration: '2026',
    teamSize: 'Individual',
  },
  {
    id: 'smart-campus-api',
    number: '04',
    name: 'Smart Campus API',
    type: 'Backend',
    year: '2026',
    description:
      'RESTful backend API for smart campus room and sensor management, featuring room allocation, sensor registration, real-time value updates, historical reading tracking, and custom error handling.',
    longDescription:
      'The Smart Campus Sensor & Room Management API is a RESTful service built with Java and JAX-RS, designed to power a smart university campus system. It handles room allocation for bookings, registers IoT sensors across campus, receives real-time sensor readings (temperature, humidity, occupancy), and stores historical data for analysis. Every endpoint was documented and tested with Postman to ensure reliability and consistent error responses.',
    tags: ['Java', 'JAX-RS', 'Maven', 'Postman', 'JSON'],
    color: '#f59e0b',
    status: 'Complete',
    highlights: [
      'RESTful endpoints for room CRUD and sensor registration',
      'Real-time sensor value ingestion with timestamp logging',
      'Historical reading retrieval with filtering support',
      'Custom error handling middleware with consistent JSON error responses',
      'Full endpoint test suite documented in Postman',
    ],
    role: 'Backend Developer',
    duration: '2026',
    teamSize: 'Individual',
  },
  {
    id: 'flight-route-optimizer',
    number: '05',
    name: 'Flight Route Optimizer',
    type: 'Algorithm',
    year: '2024',
    description:
      'Python program to manage and analyze international flight routes, displaying all possible paths and calculating the least-duration route between countries using data structures and user input validation.',
    longDescription:
      'The Flight Route Optimization Program is a Python console application that models an international flight network as a graph. Users can explore all possible routes between two countries or request the fastest path based on flight durations. The graph traversal engine implements BFS for path discovery and a Dijkstra-inspired approach for optimal route calculation. Input validation ensures robust handling of unknown airports and disconnected routes.',
    tags: ['Python', 'Data Structures', 'Graph Algorithms'],
    color: '#ec4899',
    status: 'Complete',
    highlights: [
      'Graph-based flight network model using adjacency representation',
      'BFS traversal to enumerate all possible routes',
      'Least-duration path calculation via weighted shortest-path logic',
      'Comprehensive user input validation and error feedback',
      'Console UI with formatted route display',
    ],
    role: 'Solo Developer',
    duration: '2024',
    teamSize: 'Individual',
  },
  {
    id: 'silent-sea',
    number: '06',
    name: 'Silent Sea Website',
    type: 'Web Dev',
    year: '2025',
    description:
      'Website themed around the UN Life Below Water goal, featuring a styled feedback form, navigation bar, and front-end validation. Focused on ocean conservation awareness.',
    longDescription:
      'Silent Sea is an awareness website built around the United Nations Sustainable Development Goal 14: Life Below Water. The site communicates the importance of ocean conservation through compelling visuals and structured content. A fully styled responsive navigation bar guides users across sections, while a feedback form with client-side validation lets visitors engage. The project reinforced core HTML/CSS/JS skills while delivering a meaningful real-world topic.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#38bdf8',
    status: 'Complete',
    highlights: [
      'Responsive layout built from scratch without frameworks',
      'Client-side form validation with descriptive inline error messages',
      'Ocean-themed visual design aligned with UN SDG 14 branding',
      'Semantic HTML for accessibility and SEO',
      'Pure CSS animations for wave and particle effects',
    ],
    role: 'Solo Developer & Designer',
    duration: '2025',
    teamSize: 'Individual',
  },
]
