import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'
import styles from './ProjectDetail.module.css'

// ─────────────────────────────────────────────
// PROJECT DATA
// category: 'personal' | 'academic' | 'professional'
// ─────────────────────────────────────────────
export const projects = [

  // ══════════════════════════════════════════
  // PERSONAL
  // ══════════════════════════════════════════
  {
    id: 'portfolio-website',
    emoji: '🌐',
    tag: 'Personal Project',
    title: 'Personal Portfolio Website',
    dates: 'Jan 2026 – Present',
    shortDesc: 'A custom-built personal portfolio with a space/nature theme toggle, constellation animations, and a mascot.',
    accent: 'purple',
    category: 'personal',
    images: [],
    overview: `Designed and developed a personal portfolio website to showcase projects and technical experience. Built using React with multiple pages including Home, Projects, Skills, and Contact.

The site features a dual-theme system — a deep-space mode with a hand-drawn SVG astronaut mascot and Leo constellation, and a light nature mode with an animated meadow, pig mascot, clouds, and flowers. Every component is hand-crafted with no UI libraries, and the design is continuously updated with new projects and improvements.`,
    highlights: [
      'Dual light/dark theme with persistent preference and smooth transitions',
      'Custom SVG mascots: animated astronaut (dark) and kawaii pig (light)',
      'Hand-plotted Leo/Orion constellation with star glow filters and twinkling background stars',
      'Scroll-reveal animations via IntersectionObserver across all pages',
      'Project detail pages with photo slideshow, keyboard navigation, and category filtering',
      'Implemented responsive design and theme customization throughout',
      'Continuously updated with new projects and design improvements',
    ],
    implementation: `Built with React 18 and Vite, using React Router v6 for client-side routing (HashRouter for static hosting compatibility). CSS Modules scope all styles per component, with global design tokens defined as CSS custom properties in index.css.

The theme system uses a React Context (ThemeContext) that reads and writes to localStorage, applying a data-theme attribute to the document root so all CSS overrides cascade cleanly. The Home page conditionally renders entirely different scene components — SpaceScene and NatureScene — based on the active theme.

The SVG astronaut and pig mascots are fully hand-coded with animation keyframes for floating, arm-waving, and thruster flicker effects. The Leo constellation coordinates were manually plotted against real star map proportions.`,
    stack: ['React', 'Vite', 'React Router', 'CSS Modules', 'SVG Animation'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'helping-hand-tech',
    emoji: '🤝',
    tag: 'Personal · Leadership Role',
    title: 'Helping Hand Project — Tech Officer',
    dates: 'Aug 2023 – Present',
    shortDesc: 'Managing 3D printing operations and assistive technology fabrication for a student-run nonprofit at NC State.',
    accent: 'pink',
    category: 'personal',
    images: [],
    overview: `The Helping Hand Project is a student organization focused on designing and producing 3D-printed prosthetic devices for people in need. As Technology and Innovation Officer, I oversee all technical infrastructure and production operations for the club.

The role blends hands-on fabrication, equipment management, and member support — ensuring prosthetic components are produced reliably and to a standard that genuinely helps recipients.`,
    highlights: [
      'Serve as Technology and Innovation Officer overseeing all 3D printing operations',
      'Manage and maintain 3D printers used for prosthetic component production',
      'Organize filament, printer parts, tools, and technical documentation for the club',
      'Support members in preparing and printing prosthetic components',
      'Coordinate production workflows to meet delivery timelines for device recipients',
      'Focused on accessibility, assistive technology, and social impact',
    ],
    implementation: `Device designs originate in SolidWorks, where I help members model parts that meet both functional and printability constraints — wall thickness, support geometry, tolerances for moving parts, and material selection (PLA for lightweight devices, PETG for durability). Files are sliced in PrusaSlicer or Cura and queued across multiple printers.

I've developed standard operating procedures for the club's print farm: bed adhesion protocols, post-processing steps (sanding, heat-set inserts, assembly), and quality inspection checklists before devices are handed off. When prints fail, I diagnose and fix — whether it's a clogged nozzle, a warped bed, or a design that needs revision.`,
    stack: ['SolidWorks', 'AutoCAD', '3D Printing', 'PrusaSlicer', 'Assistive Tech'],
    link: null,
    linkLabel: null,
  },

  // ══════════════════════════════════════════
  // ACADEMIC
  // ══════════════════════════════════════════
  {
    id: 'spotify-ux-research',
    emoji: '🎵',
    tag: 'Academic · CSC408',
    title: 'Spotify UX Research',
    dates: 'CSC408',
    shortDesc: 'User research study identifying pain points in the Spotify experience for college students.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Conducted user research to identify pain points in the Spotify experience specifically for college students. The study focused on three core areas of the product: music discovery, playlist creation, and social sharing features.

Research findings were synthesized into concrete recommendations for improving Spotify's user experience, grounded in real user behavior and unmet needs identified through qualitative analysis.`,
    highlights: [
      'Designed and conducted one-on-one interviews with college student Spotify users',
      'Focused research scope on music discovery, playlist creation, and social sharing',
      'Analyzed qualitative responses to surface usability issues and unmet needs',
      'Synthesized findings into actionable UX recommendations for the product',
      'Applied user-centered research methods in a real-world product context',
    ],
    implementation: `The research process began with designing an interview protocol targeting the three focus areas. One-on-one interviews were conducted with college student participants, with sessions structured to surface both behavioral patterns and emotional responses to the product.

Qualitative data was analyzed using affinity mapping and thematic synthesis — grouping recurring pain points and unmet needs into clusters. These clusters informed a final set of UX recommendations addressing discoverability, playlist management friction, and underutilized social features. The project followed standard HCI research methodology from question framing through to final recommendation delivery.`,
    stack: ['User Research', 'Interview Design', 'Qualitative Analysis', 'UX', 'HCI'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'google-ai-survey',
    emoji: '🔍',
    tag: 'Academic · CSC408',
    title: 'Google AI Mode Survey',
    dates: 'CSC408',
    shortDesc: 'Survey study evaluating user perceptions of Google\'s AI-powered search features.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Designed and executed a survey study to evaluate how users perceive and interact with Google's AI-powered search features. The research focused on three dimensions: trust in AI-generated results, perceived usefulness, and accuracy of AI-assisted information.

The project examined how users engage with a rapidly evolving search paradigm — one that blends traditional results with AI-generated summaries — and identified trends in attitudes and behaviors across participants.`,
    highlights: [
      'Designed survey instrument to evaluate trust, usefulness, and accuracy perceptions',
      'Collected and analyzed responses related to AI-powered search interactions',
      'Identified trends in how users evaluate and rely on AI-generated results',
      'Explored user comfort and skepticism toward AI-assisted information retrieval',
      'Applied survey methodology within an HCI and UX research context',
    ],
    implementation: `The survey was designed with validated UX research scales adapted for AI-specific trust and usability dimensions. Questions targeted both behavioral frequency (how often participants used AI search features) and attitudinal measures (perceived accuracy, trust calibration, and willingness to rely on AI results).

Response data was analyzed to identify patterns across user segments, with particular attention to differences in trust levels and use cases. Findings contributed to a broader understanding of how AI integration in search products affects user mental models and information-seeking behavior.`,
    stack: ['Survey Design', 'User Research', 'Data Analysis', 'UX', 'HCI'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'coffee-maker',
    emoji: '☕',
    tag: 'Academic · CSC326',
    title: 'Coffee Maker Platform',
    dates: 'Jan 2025 – May 2025',
    shortDesc: 'Full-stack café order management platform with three role-based views.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `A full-stack web platform built for café order management, supporting three distinct user roles: customers placing orders, staff fulfilling them, and admins managing inventory and analytics. The project was developed by a team of six using Agile methodology over a full semester.

The platform handles the complete order lifecycle — from customer selection and payment to staff notification and inventory deduction — with a clean, role-appropriate UI for each user type. Applied object-oriented programming principles and modular class design throughout the system.`,
    highlights: [
      'Three role-based views: customer, staff, and admin with distinct permissions',
      'Java/SQL backend with RESTful API endpoints for order processing',
      'Applied object-oriented programming principles to model system components',
      'Designed modular classes to represent ingredients, brewing operations, and user commands',
      'CI/CD pipeline via Jenkins and GitHub Actions for automated testing and deployment',
      'Figma wireframes and UX prototypes developed before implementation',
    ],
    implementation: `The backend is written in Java with a relational SQL database managing users, orders, menu items, and inventory. RESTful API endpoints handle all business logic — order creation, status updates, inventory queries, and customer notifications — keeping the frontend fully decoupled.

The React/Node.js frontend serves three separate views, each gated by role-based authentication. The admin panel includes real-time inventory counters and order analytics. JUnit tests cover core backend logic, and the Jenkins CI/CD pipeline automatically runs the test suite on every push, blocking merges on failure.

The team of six operated in two-week Agile sprints with daily standups and retrospectives, using GitHub Projects for task tracking. Figma wireframes were produced for all major views before development began.`,
    stack: ['Java', 'SQL', 'React', 'Node.js', 'Jenkins', 'Figma', 'GitHub Actions'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'pokemon-data-mining',
    emoji: '⚡',
    tag: 'Academic · CSC422',
    title: 'Pokémon Data Mining',
    dates: 'CSC422',
    shortDesc: 'Data mining analysis of Pokémon attribute relationships using statistical and machine learning methods.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Analyzed a dataset of Pokémon attributes using data mining techniques to uncover patterns and relationships within the data. The project explored how base stats such as attack, defense, speed, and type interact and correlate across hundreds of Pokémon entries.

By applying statistical and machine learning methods to a familiar, well-structured dataset, the project demonstrated core data mining principles in a concrete and interpretable context.`,
    highlights: [
      'Analyzed Pokémon attribute dataset covering attack, defense, speed, and type',
      'Explored relationships and correlations between multiple stat dimensions',
      'Applied statistical methods to identify significant patterns within the data',
      'Used machine learning techniques for classification and pattern recognition',
      'Visualized findings to communicate trends clearly and interpretably',
    ],
    implementation: `The dataset was preprocessed to handle categorical variables (type classifications) and normalize continuous stats for comparison. Exploratory data analysis established baseline distributions and flagged interesting outliers.

Correlation analysis surfaced relationships between stat pairings — for example, examining whether high attack values correlate with lower defense, or whether certain types cluster around specific speed ranges. Machine learning methods including classification and clustering were applied to group Pokémon by statistical profile and predict type membership from base stats alone. Results were evaluated using standard metrics and presented with visualizations.`,
    stack: ['Python', 'Data Mining', 'Machine Learning', 'Statistical Analysis', 'Data Visualization'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'chips-challenge',
    emoji: '🧩',
    tag: 'Academic · CSC411',
    title: "Chip's Challenge",
    dates: 'CSC411',
    shortDesc: "Recreation of core Chip's Challenge puzzle game mechanics with grid-based movement and tile interactions.",
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Recreated the core mechanics of the classic puzzle game Chip's Challenge as a software engineering project. The implementation focuses on faithful reproduction of the gameplay systems: grid-based movement, tile interactions, obstacle management, and puzzle-solving logic.

The project required careful thinking about game state management, level design representation, and how different game elements interact — translating a well-known game into clean, maintainable code.`,
    highlights: [
      "Recreated core mechanics of Chip's Challenge including movement and tile interactions",
      'Implemented grid-based player movement with collision detection',
      'Designed game logic to manage obstacles, level progression, and player interactions',
      'Modeled puzzle-solving mechanics including keys, locks, and special tiles',
      'Applied software engineering principles to structure game state and logic cleanly',
    ],
    implementation: `The game world is represented as a 2D grid where each cell holds a tile type with associated properties and behaviors. Player movement is processed on a per-tick basis, with each move triggering tile interaction checks — pickup items, activating switches, or blocking on walls and hazards.

Game state management tracks inventory, level completion conditions, and tile states (e.g., toggled blocks, consumed items). Level data is stored in a structured format and loaded at runtime. The architecture separates concerns cleanly: the grid model, game logic, and rendering are decoupled so each can be tested and modified independently.`,
    stack: ['Java', 'OOP', 'Game Logic', 'Grid Systems', 'Software Engineering'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'celestial-library',
    emoji: '📚',
    tag: 'Academic · CSC281',
    title: 'The Celestial Library — Interactive Narrative',
    dates: 'CSC281',
    shortDesc: 'An interactive narrative experience centered around exploration, player choice, and branching storytelling.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Designed and developed an interactive narrative experience centered around exploration and storytelling. The Celestial Library invites players into a world where their choices shape the path of the story, with branching narrative paths that respond meaningfully to player decisions.

The project focused on the craft of narrative design — building a story world that feels coherent and immersive while giving players genuine agency over how it unfolds.`,
    highlights: [
      'Designed branching story paths where player choices affect narrative progression',
      'Built an immersive narrative world centered on exploration and discovery',
      'Focused on narrative design, player agency, and storytelling craft',
      'Developed interactive mechanics to support player-driven story exploration',
      'Balanced narrative coherence with meaningful choice and consequence',
    ],
    implementation: `The narrative structure was designed as a directed graph of story nodes, where each node represents a scene or moment and edges represent player choices that advance or branch the story. This structure was implemented in code with a state machine tracking which nodes had been visited and which story variables had been set.

Narrative design work included writing multiple branches that feel distinct while keeping the world internally consistent. Playtesting informed revisions to pacing, choice clarity, and the balance between linear storytelling and open exploration.`,
    stack: ['Interactive Narrative', 'Game Design', 'Narrative Systems', 'CSC281'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'puzzles-light-dark',
    emoji: '💡',
    tag: 'Academic · CSC281',
    title: 'Puzzles of the Light and Dark',
    dates: 'CSC281',
    shortDesc: 'A puzzle-based interactive experience where players manipulate light and shadow to progress.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Designed a puzzle-based interactive experience exploring themes of light and shadow. Players must manipulate environmental elements — controlling where light falls and where darkness persists — to unlock paths and solve challenges.

The project focused on translating an abstract concept (the interplay of light and dark) into concrete, satisfying game mechanics that reward careful observation and creative thinking.`,
    highlights: [
      'Designed gameplay mechanics requiring players to manipulate light and shadow',
      'Created puzzles that explore environmental interaction and cause-and-effect thinking',
      'Focused on game design principles including player engagement and puzzle progression',
      'Built a cohesive experience around a single core mechanic with increasing depth',
      'Balanced puzzle difficulty to maintain challenge without frustrating players',
    ],
    implementation: `Puzzle mechanics were designed around a core light propagation model — determining which areas of a level are illuminated based on light source positions, player-controlled reflectors, and opaque obstacles. Each puzzle layer introduced a new element (movable mirrors, shadow-casting objects, timed light pulses) to expand the mechanic's depth.

Level design went through multiple iterations of playtesting to calibrate difficulty progression. Early levels teach the core mechanic through low-stakes experimentation; later levels require multi-step planning and spatial reasoning. The design process emphasized clarity of feedback — players always understand why a solution worked or failed.`,
    stack: ['Game Design', 'Puzzle Design', 'Interactive Systems', 'CSC281'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'escape-room',
    emoji: '🔐',
    tag: 'Academic · CSC281',
    title: 'The Escape Room',
    dates: 'CSC281',
    shortDesc: 'An escape-room style interactive experience with sequential puzzles and collaborative problem-solving.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Designed an escape-room style experience involving puzzles and interactive problem solving. Players work through a sequence of challenges, uncovering clues and solving puzzles to progress toward an ultimate goal.

The project centered on the specific design challenges of the escape room genre: maintaining tension, gating progression logically, and creating satisfying "aha" moments when players crack a puzzle.`,
    highlights: [
      'Designed a sequence of interconnected puzzles requiring clue discovery to progress',
      'Focused on pacing, difficulty balance, and collaborative gameplay design',
      'Created logical puzzle gates that feel fair and rewarding when solved',
      'Built an atmosphere of tension and discovery appropriate to the escape room genre',
      'Iterated on puzzle design based on playtesting to ensure satisfying difficulty curves',
    ],
    implementation: `The experience was structured as a linear-with-branches progression model: certain puzzles must be solved before others unlock, but players have flexibility in the order they approach parallel challenges. This creates a sense of freedom while maintaining narrative and mechanical coherence.

Clue design was a central challenge — ensuring that every puzzle had sufficient information available to be solved without hand-holding, while keeping the solution non-obvious enough to be satisfying. Playtesting sessions revealed where players got stuck versus where solutions were too transparent, informing multiple rounds of revision to pacing and clue density.`,
    stack: ['Game Design', 'Puzzle Design', 'Interactive Narrative', 'CSC281'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'issue-manager',
    emoji: '📋',
    tag: 'Academic · CSC216',
    title: 'Issue Manager — To Do List',
    dates: 'CSC216',
    shortDesc: 'A task management system for creating, organizing, and tracking issues and to-do items.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Developed a task management system for creating and tracking issues or to-do items. The system provides functionality for organizing, updating, and managing tasks with a focus on clean object-oriented design and reliable data organization.

This project was an early introduction to software design principles — applying OOP concepts and data structures to build a functional, well-structured application.`,
    highlights: [
      'Implemented functionality for creating, organizing, updating, and managing tasks',
      'Applied object-oriented design principles throughout the system architecture',
      'Used data structures to efficiently manage and retrieve task information',
      'Designed clean interfaces for task creation, editing, and status tracking',
      'Focused on code organization, modularity, and maintainability',
    ],
    implementation: `The system models tasks as objects with associated properties — title, description, status, priority, and timestamps. A central manager class handles task storage and retrieval, with operations for adding, updating, filtering, and removing items.

Data structures were selected to support efficient lookup and ordered display of tasks. The project applied encapsulation and separation of concerns to keep the task model, management logic, and user interface decoupled — establishing patterns that support future extension without requiring rewrites of existing code.`,
    stack: ['Java', 'OOP', 'Data Structures', 'Software Design', 'CSC216'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'wolftasks',
    emoji: '🐺',
    tag: 'Academic · CSC216',
    title: 'WolfTasks — Task Planner',
    dates: 'CSC216',
    shortDesc: 'A structured task planning system with categorization, scheduling, and prioritization features.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Built a structured task planning system for organizing academic or personal tasks. WolfTasks supports task categorization, scheduling, and prioritization — giving users tools to manage their workload in an organized and intentional way.

The project extended core OOP and data organization skills into a more feature-complete application with a focus on clean architecture and usable design.`,
    highlights: [
      'Implemented task categorization, scheduling, and prioritization features',
      'Built a structured planning system tailored for academic and personal use',
      'Focused on data organization and clean object-oriented design patterns',
      'Designed the system to support flexible task management workflows',
      'Applied software engineering best practices for maintainability and extensibility',
    ],
    implementation: `Tasks in WolfTasks are associated with categories, due dates, and priority levels, stored in a structure that supports efficient sorting and filtering by any of these dimensions. The planner logic handles scheduling conflicts and priority ordering, surfacing the most relevant tasks to the user at any given time.

The architecture separates the data model (task objects and collections), business logic (scheduling, prioritization algorithms), and presentation — enabling independent testing of each layer. This project built on the Issue Manager foundation, extending it with richer data relationships and more sophisticated query capabilities.`,
    stack: ['Java', 'OOP', 'Data Structures', 'Software Design', 'CSC216'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'blackjack',
    emoji: '🃏',
    tag: 'Academic · CSC116',
    title: 'Blackjack Console Game',
    dates: 'CSC116',
    shortDesc: 'A console-based Blackjack implementation with full game logic, card dealing, and scoring.',
    accent: 'purple',
    category: 'academic',
    images: [],
    overview: `Implemented a console-based version of the Blackjack card game as an introductory programming project. The game supports full card dealing, player decision-making, scoring, and win/loss logic — all running through a text-based interface.

This was a foundational project applying fundamental programming concepts: control flow, arrays, and early object-oriented design in a fun, interactive context.`,
    highlights: [
      'Implemented full Blackjack game logic including card dealing and scoring',
      'Developed player interaction flow for hit, stand, and bust scenarios',
      'Applied fundamental programming concepts: control flow, arrays, and OOP',
      'Modeled a deck of cards with shuffling and dealing mechanics',
      'Built a complete, playable console game from scratch',
    ],
    implementation: `The deck is modeled as an array of card objects, each with a suit, face value, and numeric value for scoring. Shuffling is implemented using a Fisher-Yates algorithm to ensure uniform random distribution. The deal function pops cards from the shuffled deck into player and dealer hands.

Game logic handles all standard Blackjack rules: natural blackjack detection, dealer draw-to-17 behavior, bust checking, and final hand comparison for win/loss/push resolution. Player input is captured through the console and validated before processing. The project established core programming habits — clear variable naming, modular functions, and logical control flow — that carried forward into subsequent coursework.`,
    stack: ['Java', 'OOP', 'Control Flow', 'Arrays', 'Console I/O'],
    link: null,
    linkLabel: null,
  },

  

  // ══════════════════════════════════════════
  // PROFESSIONAL
  // ══════════════════════════════════════════
  {
    id: 'advising-chatbot',
    emoji: '🤖',
    tag: 'Academic · Senior Design',
    title: 'NCSU Advising Chatbot',
    dates: 'Jan 2026 – Present',
    shortDesc: 'AI-powered chatbot supporting 40,000+ NC State students during enrollment — in progress.',
    accent: 'purple',
    category: 'professional',
    images: [],
    overview: `An AI-powered advising chatbot built for NC State University, designed to support over 40,000 students navigating enrollment, course selection, and academic planning. The system integrates directly with NCSU's authentication infrastructure and is built to handle a high volume of concurrent queries reliably.

Developing conversational interactions to guide students toward relevant university resources, implementing natural language processing to interpret student questions and generate helpful, accurate responses.`,
    highlights: [
      'Retrieval-Augmented Generation (RAG) pipeline with intent-based query routing',
      'Vector search and metadata filtering via Qdrant for accurate document retrieval',
      'NCSU SSO authentication integration with role-based access control',
      'Comprehensive audit logging for compliance and access tracking',
      'Automated web scraping with document hashing and incremental embedding updates',
      'Weekly sponsor meetings aligning on budget, design, and system architecture',
    ],
    implementation: `The backend is built in Python and deployed on AWS, using Qdrant as the vector database for storing and retrieving embedded document chunks. An intent-classification layer routes incoming queries to the most relevant retrieval pipeline — distinguishing between enrollment FAQs, course-specific questions, and policy lookups — before passing context to the language model.

Authentication is handled via NCSU's SSO system, ensuring only verified students and staff can access the chatbot. All interactions are logged in an audit trail for administrative review and compliance.

The data pipeline automatically scrapes NCSU advising pages, hashes each document to detect changes, and performs incremental embedding updates — keeping the knowledge base current without full re-indexing. This approach respects university data policies and avoids exposing any restricted course content.`,
    stack: ['Python', 'AWS', 'Qdrant', 'RAG / LLMs', 'Vector Search', 'NLP'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'navigating-grey',
    emoji: '🧭',
    tag: 'Academic · CSC454',
    title: 'Navigating Grey',
    dates: 'CSC454',
    shortDesc: 'Full UX design process for a navigation-focused application, from sketches through high-fidelity Figma prototypes.',
    accent: 'purple',
    category: 'professional',
    images: [],
    overview: `Conducted a full UX design process for an application concept addressing navigation challenges. The project spanned the complete design lifecycle — from early concept sketches and wireframes through high-fidelity prototypes in Figma, user testing, and documented iteration.

The process was treated as a real design engagement: research-grounded, user-tested, and rigorously documented from initial concept through refined interface solution.`,
    highlights: [
      'Conducted a full UX design process from concept to high-fidelity prototype',
      'Developed design concepts through sketches, wireframes, and Figma prototypes',
      'Performed user testing and iterated on designs based on participant feedback',
      'Documented the complete design process from early ideation to final solution',
      'Applied HCI and UX principles throughout the design and evaluation phases',
    ],
    implementation: `The design process began with problem framing and user research to understand how people navigate ambiguous or complex environments. Early ideation produced multiple sketch concepts, narrowed through design critique to the most promising directions.

Wireframes established information architecture and interaction flows before moving into Figma for high-fidelity prototyping. User testing sessions with target participants surfaced pain points and areas of confusion, each round of feedback informing a revision pass. Final documentation captured the full arc of design decisions, tradeoffs considered, and rationale for the delivered solution.`,
    stack: ['Figma', 'UX Design', 'Prototyping', 'User Testing', 'HCI'],
    link: null,
    linkLabel: null,
  },
  {
    id: 'tissue-ml-dataset',
    emoji: '🔬',
    tag: 'Professional · NSF Research',
    title: 'Tissue Optical Readout ML Dataset',
    dates: 'May 2025 – Aug 2025',
    shortDesc: 'MATLAB GUI for generating ML training datasets from biomedical tissue spectroscopy models.',
    accent: 'purple',
    category: 'professional',
    images: [],
    overview: `An NSF-funded undergraduate research project conducted at UMass Lowell, focused on generating high-quality training datasets for machine learning models that evaluate mitochondrial function non-invasively through tissue optical readouts.

Developed a MATLAB GUI tool to generate machine learning training datasets from tissue optical spectroscopy models, simulating near-infrared spectroscopy signals based on configurable physiological parameters. The generated labeled absorbance datasets are used for training machine learning models analyzing mitochondrial function.`,
    highlights: [
      'Developed a MATLAB GUI tool to generate ML training datasets from tissue optical models',
      'Simulated near-infrared spectroscopy signals based on configurable physiological parameters',
      'Generated labeled absorbance datasets used for training ML models',
      'Research focus: non-invasive evaluation of mitochondrial function',
      'Conducted under NSF REU program at UMass Lowell Biomedical Engineering',
      'Datasets formatted for direct ingestion into Python-based ML training pipelines',
    ],
    implementation: `The MATLAB application provides a graphical interface for configuring multi-layer tissue models — adjusting parameters such as scattering coefficients, absorption properties, and chromophore concentrations (oxyhemoglobin, deoxyhemoglobin, cytochrome c oxidase). For each configuration, the tool simulates the expected optical absorption spectrum and exports it as a labeled data record.

Batch generation mode allows researchers to sweep across a defined parameter space, producing large labeled datasets suitable for supervised ML training. Output files are formatted for direct ingestion into Python-based ML pipelines.

The research addresses a key challenge in biomedical optics: creating enough physiologically diverse synthetic training data to build robust non-invasive diagnostic models, without requiring large volumes of invasive clinical measurements.`,
    stack: ['MATLAB', 'Machine Learning', 'GUI Design', 'Biomedical Data', 'Spectroscopy'],
    link: null,
    linkLabel: null,
  },

  // ── TEMPLATE ───────────────────────────────
  // {
  //   id: 'my-project',
  //   emoji: '🚀',
  //   tag: 'Tag · Context',
  //   title: 'Project Name',
  //   dates: 'Month Year – Month Year',
  //   shortDesc: 'One-sentence card description.',
  //   accent: 'purple',           // 'purple' | 'blue' | 'pink'
  //   category: 'academic',       // 'personal' | 'academic' | 'professional'
  //   images: [],
  //   overview: `...`,
  //   highlights: ['...'],
  //   implementation: `...`,
  //   stack: ['Tech1', 'Tech2'],
  //   link: null,
  //   linkLabel: null,
  // },
]

// ─────────────────────────────────────────────
// Shared accent map (used by Projects.jsx too)
// ─────────────────────────────────────────────
export const accentColor = {
  purple: '#9000b3',
  blue:   '#6495ed',
  pink:   '#f472b6',
}

// ─────────────────────────────────────────────
// Slideshow
// ─────────────────────────────────────────────
function Slideshow({ images, accent, title }) {
  const [idx, setIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const go = useCallback((next) => {
    if (transitioning || images.length < 2) return
    setTransitioning(true)
    setTimeout(() => { setIdx(next); setTransitioning(false) }, 280)
  }, [transitioning, images.length])

  const prev = () => go((idx - 1 + images.length) % images.length)
  const next = () => go((idx + 1) % images.length)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const color = accentColor[accent] || accentColor.purple

  if (!images || images.length === 0) {
    return (
      <div className={styles.slideshowEmpty} style={{ '--ac': color }}>
        <div className={styles.emptyInner}>
          <span className={styles.emptyIcon}>🖼</span>
          <span className={styles.emptyText}>Screenshots coming soon</span>
          <span className={styles.emptySubtext}>Add image paths in the project data to display them here</span>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.slideshow} style={{ '--ac': color }}>
      <div className={`${styles.slide} ${transitioning ? styles.sliding : ''}`}>
        <img src={images[idx].src} alt={images[idx].caption || title} className={styles.slideImg} />
        {images[idx].caption && <div className={styles.slideCaption}>{images[idx].caption}</div>}
      </div>
      {images.length > 1 && (
        <>
          <button className={`${styles.slideBtn} ${styles.slidePrev}`} onClick={prev} aria-label="Previous">‹</button>
          <button className={`${styles.slideBtn} ${styles.slideNext}`} onClick={next} aria-label="Next">›</button>
          <div className={styles.slideDots}>
            {images.map((_, i) => (
              <button key={i} className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
                onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
          <div className={styles.slideCount}>{idx + 1} / {images.length}</div>
        </>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────
// Detail page
// ─────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isDark } = useTheme()

  const project = projects.find(p => p.id === id)
  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) {
    return (
      <div className="page">
        <div className="page-content" style={{ textAlign: 'center', paddingTop: '8rem' }}>
          <p style={{ fontSize: '3rem' }}>🔭</p>
          <h2 className="page-title" style={{ marginTop: '1rem' }}>Project not found</h2>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '2rem' }}>← Back to Projects</Link>
        </div>
      </div>
    )
  }

  const color = accentColor[project.accent] || accentColor.purple

  return (
    <div className={`page ${isDark ? styles.dark : styles.light}`}>
      <div className={`page-content ${styles.detailContent}`}>

        <button className={styles.backBtn} onClick={() => navigate('/projects')} style={{ '--ac': color }}>
          <span className={styles.backArrow}>←</span>
          <span>All Projects</span>
        </button>

        <div className={`${styles.header} reveal`} style={{ '--ac': color }}>
          <div className={styles.headerMeta}>
            <span className={styles.headerEmoji}>{project.emoji}</span>
            <span className={styles.headerTag}>{project.tag}</span>
            <span className={styles.headerDates}>{project.dates}</span>
          </div>
          <h1 className={styles.headerTitle}>{project.title}</h1>
          <p className={styles.headerShort}>{project.shortDesc}</p>
          <div className={styles.headerStack}>
            {project.stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer"
               className="btn btn-primary" style={{ marginTop: '1.2rem', display: 'inline-block' }}>
              {project.linkLabel || 'View Project'} →
            </a>
          )}
        </div>

        <div className={`${styles.slideshowSection} reveal`}>
          <Slideshow images={project.images} accent={project.accent} title={project.title} />
        </div>

        <div className={styles.body}>
          <section className={`${styles.section} reveal`} style={{ '--ac': color }}>
            <div className={styles.sectionLabel}><span className={styles.sectionIcon}>📋</span><span>Overview</span></div>
            <div className={styles.sectionContent}>
              {project.overview.trim().split('\n\n').map((para, i) => (
                <p key={i} className={styles.para}>{para.trim()}</p>
              ))}
            </div>
          </section>

          <section className={`${styles.section} reveal`} style={{ '--ac': color }}>
            <div className={styles.sectionLabel}><span className={styles.sectionIcon}>✦</span><span>Highlighted Features</span></div>
            <ul className={styles.highlights}>
              {project.highlights.map((h, i) => (
                <li key={i} className={styles.highlightItem}>
                  <span className={styles.hlDot} style={{ background: color }}/>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={`${styles.section} reveal`} style={{ '--ac': color }}>
            <div className={styles.sectionLabel}><span className={styles.sectionIcon}>⚙️</span><span>Implementation</span></div>
            <div className={styles.sectionContent}>
              {project.implementation.trim().split('\n\n').map((para, i) => (
                <p key={i} className={styles.para}>{para.trim()}</p>
              ))}
            </div>
          </section>
        </div>

        <div className={`${styles.footerNav} reveal`}>
          <button className={styles.backBtn2} onClick={() => navigate('/projects')} style={{ '--ac': color }}>
            ← Back to all projects
          </button>
        </div>

      </div>
    </div>
  )
}