export const CATEGORIES = [
  {
    id: 'learning',
    label: 'Learning',
    tagline: 'Designing interfaces that help users build understanding and grow confidence.',
    description: 'I approach complex, data-heavy systems with a focus on clarity and comprehension. My goal is to reduce cognitive load by structuring information in a way that is intuitive and easy to navigate. I achieve this through clear information hierarchy, progressive disclosure, and thoughtful interaction patterns. The result is an experience that allows users to understand and act without hesitation.',
    color: '#e8612a',
    softColor: '#fdeee7',
    icon: 'brain',
  },
  {
    id: 'exploration',
    label: 'Exploration',
    tagline: 'Building spaces where users can freely discover, connect ideas, and move forward.',
    description: 'I view design as a facilitator of alignment across teams and disciplines. My work focuses on creating interfaces and systems that support clear communication and shared understanding. I incorporate visibility into workflows, shared states, and collaborative touchpoints to reduce ambiguity. This enables teams to work more cohesively and efficiently.',
    color: '#2e8c6e',
    softColor: '#e0f5ee',
    icon: 'people',
  },
  {
    id: 'data-retrieval',
    label: 'Data Retrieval',
    tagline: 'Surfacing the right information at the right moment so users can act with confidence.',
    description: 'I design interfaces that go beyond presenting information to actively support decision-making. This involves structuring data to highlight key insights and guide users toward next steps. I use visual hierarchy, data prioritization, and contextual cues to make information actionable. The goal is to enable faster, more confident decisions.',
    color: '#7c4dbd',
    softColor: '#ede8f8',
    icon: 'target',
  },
];

export const PROJECTS = [
  {
    id: 'project-alpha',
    title: 'Self-Service Analytics Platform',
    tagline: '',
    categories: ['data-retrieval'],
    coverColor: '#000000',
    maturity: 'Deployed Solution',
    evidence: 'Validated Impact',
    year: '2025',
    role: 'Product Designer & Developer',
    roleSummary: 'Owned and drove the project end-to-end, from user research and design to prototyping, development, and deployment.',
    company: 'Thermo Fisher Scientific',
    sector: 'Bioinformatics',
    tools: ['Streamlit', 'SQL', 'Python'],
    links: [],
    caseStudy: {
      product:
        'A self-service analytics application that automates complex analyses, allowing users to generate insights independently without relying on other teams.',
      productMedia: { component: 'SelfServiceAnimation' , caption: 'Representation of the product\'s core features'},

      context:
        'A supporting internal team was servicing requests coming from a customer-facing team. These requests required manual data retrieval, processing, and formatting to be done by the supporting team. The requests were not always complex, but they did pull the supporting team away from higher-priority work and left the customer-facing team waiting up to days for answers. Starting from a stakeholder brief, I mapped both teams\' workflows to identify where the friction actually lived before any design decisions were made.',
      contextMedia: { component: 'TeamsChatAnimation', caption: 'A typical data request could take up to 1-2 days depending on support team member\'s workload.' },

      personas: [
        {
          role: 'Customer-Facing Team Member',
          need: '',
          quote: '',
          goals: [
            'Get timely insights without waiting on other teams',
          ],
          painPoints: [
            'Blocked by cross-team availability and response times',
            'Has to mediate any changes to requests, which adds delays', 
          ],
        },
        {
          role: 'Supporting Team Member',
          need: '',
          quote: '',
          goals: [
            'Reduce servicing of repeated requests',
            'Finish requests without putting aside core responsibilities',
          ],
          painPoints: [
            'Puts aside core responsibilities to field these requests manually',
            'Sometimes data is not readily available so they have to do ad-hoc data retrieval and processing to fulfill requests',
          ],
        },
      ],

      problemState:
        'Dependence on multiple teams increased turnaround time, created overhead on both sides of every handoff. The process was inefficient and frustrating for both teams, with the customer-facing team left waiting for insights and the supporting team pulled away from their core work to service requests. For the business, delayed data access slowed response to customer needs and hindered timely action.',
      problemMedia: '',

      designQuestion:
        'How might we design an application that handles complex backend processes behind the scenes while delivering a simple, intuitive experience to users?',
      designQuestionMedia: '',
      designGoals: ['Reduce time-to-insight for the customer-facing team', 'Eliminate manual handoffs between teams', 'Build something non-technical users could operate independently'],

      opportunity:
        'Provide a self-service tool that empowers users to run analyses autonomously and without co-dependency while maintaining accuracy and reliability.',

      opportunityMedia: '',

      solutionGoal:
        'Built an interface that guides users through analysis setup, automatically handles data processing, and generates results. Designed clear visualizations and reports to communicate findings effectively without additional interpretation. Prototyped and tested workflows to ensure users can independently generate insights with minimal errors.',
        goalMedia: '',

        solutionSteps:
        [
        {
          label: 'User Research & Needs Mapping',
          items: [
            'Interviewed data consumers to understand challenges in interpreting datasets',
            'Mapped workflows to identify points where lack of context caused friction',
          ],
        },
        {
          label: 'Information Architecture',
          items: [
            'Determined key metadata, categories, and relationships between datasets',
            'Created structured hierarchy and navigation paths to make the platform intuitive',
          ],
        }],
        stepsMedia: { component: 'UserPersonas' },

        solutionExecute:[
        {
          label: 'System Architecture & Integration',
          items: [
            'Designed and implemented a centralized platform that connects existing data sources and automates retrieval.',
            'Added API and access layers to allow the customer-facing team to query data directly without manual intervention.',
            ],
          },
        {
          label: 'User Interface & Usability',
          items: [
            'Created dashboards and self-service tools that allow users to filter, explore, and export data independently.',
            'Included metadata and contextual descriptions so users can understand and act on the data efficiently.',
            ],
          },
        {
          label: 'Testing & Iteration',
          items: [
            'Conducted usability testing with the customer-facing team to ensure workflows were intuitive and data retrieval was seamless.',
            'Iterated on design and backend processes based on feedback',
            ],
          },

        {
          label: 'Deployment & Handoff',
          items: [
            'Delivered a fully functional platform with training and documentation, enabling the customer-facing team to operate autonomously.',
            'Reduced manual cross-team requests and improved workflow efficiency',
            ],
          },
        ],
        
        executeMedia: '',

      impact:
        'Reduces cross-team dependency, accelerates decision-making, and empowers users to access actionable insights faster and more confidently.',

      impactHeadline: [
        { stat: '2 days → < 10 seconds', context: 'turnaround time, from manual request to instant self-service' },
        { stat: '100% adoption', context: 'entire customer-facing team onboarded and utilized the tool.' },
      ],
      impactMedia: '',
      improvements: 'This tool could accommadate for more analysis types.',

      goalsMet:
        ['Customer-facing team can access data independently without supporting team', 'Manual handoffs eliminated with the request queue reduced to zero', 'Non-technical users operate the tool without training'],

      designSystemLabel: '',
      designSystem: '',
      designSystemMedia: '',
      designSystemMap: null,
      processSteps: [
        { step: 'Flow Mapping', notes: 'Mapped end-to-end workflows for both the customer-facing team and supporting team and the underlying backend pipelines.', media: { component: 'FlowDiagram' } },
        { step: 'Wireframes', notes: 'Wireframed to illustrate the functionality and linear experience — each screen reflects one step in the user journey through the tool.', media: { src: '/self_wireframe.png', caption: 'Screens of tool' } },
        { step: 'Develop', notes: 'Built early prototypes directly in Streamlit with SQL and Python to test feasibility alongside the design. Code and design evolved together.' },
        {
          step: 'Design Decisions',
          notes: [
            'Streamlit was chosen intentionally due to the project’s backend-heavy nature and tight timeline. The priority was building reliable data access and query logic, rather than investing time in a custom UI.',
          ],
          designSystemMap: {
            systemContext: '',
            foundations: [
              'Single-page linear flow: upload → analyze → download',
              'Streamlit defaults as the visual standard with no custom design system needed',
              'Copy written for context, not data science terminology',
            ],
            components: [
              'st.file_uploader: drag and drop CSV intake',
              'st.button and st.progress: clear submit and feedback loop',
              'st.download_button: zero-confusion result delivery',
              'st.success and st.error: immediate status at every step',
            ],
            interactionPatterns: [
              'One decision per screen with no branching or confusion',
              'Feedback at every step with no silent failures',
            ],
            designStrategyPoints: [
              'Reduce time-to-insight: one flow, no navigation overhead',
              'Eliminate handoffs: self-contained, no cross-team dependency',
              'Non-technical first: Streamlit\'s constraint enforced plain language throughout',
            ],
          },
          media: { component: 'HiFiButtons' },
        },
        { step: 'Prototype', notes: 'Ran walkthroughs with both teams to validate the self-service flow and uncover edge cases.' },
        { step: 'Deployment', notes: 'Made available to the customer-facing team.'},
        {
          step: 'Feedback',
          notes: 'Consensus across teams confirmed the tool was valuable, easy to use, met goals and potential to expanded beyond its original scope.',
          media: { component: 'SelfServiceFeedback' },
        },
      ],
    },
  },

  /* {
    id: 'project-beta',
    title: 'RAG Metadata Tool',
    tagline: '',
    categories: ['exploration'],
    coverColor: '#DDE4E8',
    maturity: 'Prototyped Solution',
    evidence: 'Tested Concept',
    year: '2025',
    role: 'Sole Product Designer & Developer',
    roleSummary: 'Led design and built the product — from AI pipeline UX to the conversational interface in React.',
    company: 'Thermo Fisher Scientific',
    tools: ['AI Model', 'React.js', 'FastAPI', 'RAG'],
    caseStudy: {
      product:
        'An AI-powered RAG chatbot that generates metadata and enables users to query and understand databases through context-aware conversations tailored to their usecase.',
      productMedia: { component: 'HiFiRAGChat' },
      context:
        'Raw datasets alone are often difficult for users to interpret or act on. Without proper context, descriptions, or structured organization, the data’s value remains inaccessible.',
      contextMedia: '',     /*  [
  { src: '/images/wireframe-1.png', caption: 'Initial wireframes' },
  { src: '/images/wireframe-2.png', caption: 'Refined layout' },
], 

      problemState:
        'Users struggle to make sense of datasets because there is no platform that organizes the information in a way that is understandable and actionable. Lack of metadata, structure, and exploration tools leads to underutilization of the data.',
      problemMedia: '',

      designQuestion:
        'How might we create a platform that organizes datasets with meaningful context, descriptions, and structure, so users can easily understand and act on the information they need?',
      failureMedia: '',

      opportunity:
        'There is an opportunity to design a system that not only stores data but presents it in a way that aligns with user needs—making datasets more comprehensible, navigable, and actionable.',
      opportunityMedia: '',

      solutionGoal:
        'Create a platform that transforms raw datasets into actionable insights by providing: Contextual descriptions and metadata for each dataset, A clear, structured organization for easy navigation, Tools for exploration and interaction, allowing users to extract the information they need efficiently',
        goalMedia: '',

        solutionSteps: [
          {
            label: 'User Research & Needs Mapping',
            items: [
              'Interviewed data consumers to understand challenges in interpreting datasets',
              'Mapped workflows to identify points where lack of context caused friction',
            ],
          },
          {
            label: 'Information Architecture',
            items: [
              'Determined key metadata, categories, and relationships between datasets',
              'Created structured hierarchy and navigation paths to make the platform intuitive',
            ],
          },
          {
            label: 'Wireframing & Prototyping',
            items: [
              'Sketched whiteboard flows of dataset exploration and context display',
              'Iterated on wireframes to ensure clear visibility of metadata and actionable insights',
            ],
          },
          {
            label: 'Interaction & Exploration Design',
            items: [
              'Designed interactive features for filtering, searching, and linking related datasets',
              'Incorporated visual cues to guide users through data interpretation',
            ],
          },
        ],
        stepsMedia: '',

        solutionExecute: [
          'Built a platform that integrated raw datasets with structured metadata, contextual descriptions, and interactive exploration tools',
          'Developed dashboards and navigation flows that aligned with user workflows',
          'Iteratively tested prototypes with users to refine usability and ensure actionable insights were easy to extract',
          'Delivered a product that reduced cognitive load, improved understanding, and enabled users to make decisions faster',
        ],
        executeMedia: '',

      impactHeadline: [
        { stat: 'Data contextualized for actionable insights', context: '' },
        { stat: 'Accelerates research workflows', context: 'AI-generated metadata replaced the manual annotation workflow' },
      ],
      impact:
        'Improved data comprehension and usability for end users. Reduced time spent manually interpreting or cleaning datasets. Enabled more effective decision-making and downstream workflows.',
      impactMedia: '',
      improvements: 'The metadata editing experience could be extended with validation feedback — flagging likely errors or inconsistencies in the AI-generated output before the user accepts them. Batch curation across multiple datasets would also reduce the overhead for users managing large collections.',

      designSystem: '',
      designSystemMedia: '',
      designSystemMap: null,
      processSteps: [
        { step: 'User Flows', notes: 'Mapped the journey from raw dataset upload → AI metadata generation → conversational exploration, identifying where users needed the most guidance.' },
        { step: 'Wireframes', notes: 'Structured the three-stage pipeline UI: ingestion view, metadata preview with edit capability, and a conversational chat interface for dataset exploration.' },
        { step: 'Vibe Coding', notes: 'Prototyped the AI interaction loop in React.js + FastAPI to test response latency, context retention, and the feel of the conversational interface in real conditions.' },
        {
          step: 'Design Decisions',
          notes: [
            'Conversation as the primary interface — users access data through natural language, not navigation menus',
            'AI-generated metadata cards labelled explicitly as AI-generated with curator attribution — trust signals built into the component, not added as an afterthought',
            'Pop-out context panels keep users in the flow — deeper detail available without losing place in the chat',
            'Quick action buttons surfaced inline with AI responses to reduce decision overhead at the moment of insight',
          ],
          designSystemMap: {
            systemContext: 'No predefined design system — lightweight, interaction-first interface built from scratch.',
            designStrategy: 'Exploratory but guided, centred on conversational discovery',
            foundations: [
              'Neutral, content-first color system — UI recedes so data can lead',
              'Dialogue as the primary interface metaphor',
            ],
            components: [
              'Chat interface — primary interaction layer',
              'Quick action buttons — inline with AI responses',
              'Pop-outs for deeper dataset context',
              'Metadata cards with AI attribution labels',
            ],
            interactionPatterns: [
              'AI-driven exploration with user-initiated depth',
              'Expandable context via pop-outs — detail on demand',
            ],
            designStrategyPoints: [
              'Conversation over navigation — reduce friction to insight',
              'Trust first — AI output clearly identified and attributed',
              'Interaction-first throughout — no static views',
            ],
            outcome: 'Transformed metadata exploration into a conversational, intuitive workflow.',
          },
          media: { component: 'HiFiRAG' },
        },
        { step: 'Prototype', notes: 'Concept-tested the chat-based exploration flow with potential users to validate whether the AI explanations improved dataset comprehension versus raw browsing.' },
        { step: 'Handoff & Ship', notes: 'Prepared detailed specs and component documentation for engineering handoff. The project remained exploratory and was not shipped to production.' },
        {
          step: 'Feedback',
          notes: 'Presented the prototype at an internal showcase. No formal feedback was collected — the impressions below reflect the general sentiment heard from attendees during and after the session.',
          media: { component: 'RAGFeedback' },
        },
      ],
    },
  }, */

  {
    id: 'project-gamma',
    title: 'Alzheimer\'s: APOE-Associated Gene Expression Explorer',
    tagline: '',
    categories: ['exploration'],
    coverColor: '#E4E8DD',
    maturity: 'Deployed Solution',
    evidence: 'Observed Use',
    year: '2023',
    role: 'Interface Designer & Front-End Developer',
    roleSummary: 'Led the design and front-end development of the platform, contributing to end-to-end user experience from interaction design to implementation. Focused on creating intuitive workflows, architecting data interactions, and building a responsive interface that enables seamless exploration of complex laboratory datasets.',
    company: 'Boston University',
    tools: ['HTML', 'CSS', 'JavaScript','SQL','Python'],
    caseStudy: {
      product:
        'A data exploration platform that visualizes analyzed data, enabling users to explore trends and relationships across disparate datasets.',
      productMedia: { component: 'APOEProductAnimation' },
      context:
        `The lab was investigating APOE gene expression in relation to Alzheimer’s disease. They had collected multi-dimensional datasets for their research however had difficulty translating the data into actionable insights. Insights remained difficult to access due to fragmented storage across files and the absence of an interactive system for exploration.`,
      contextMedia: '',

      problemState:
        'Lab\'s researchers need a way to efficiently access, navigate, and interpret complex experimental datasets, but current data storage methods lack structure, interactivity, and contextual clarity.',
      problemMedia: { component: 'RAGProblemAnimation' },

      designQuestion:
        'How might we create a structured, interactive platform that helps researchers efficiently access, navigate, and interpret complex datasets?',
      designGoals: [],
      designGoalsMedia: { component: 'APOEDesignContext' },
      failureMedia: '',

      opportunity:
        'Our team was given the opportunity to transform static, distributed datasets into an integrated, interactive platform.',
      opportunityMedia: '',

      solutionGoal:
        ['Centralize experimental data into a unified, interactive platform',
         'Enable intuitive navigation across multiple data types and sources',
         'Reduce cognitive load through clear structure and guided interactions',
         'Support meaningful exploration through dynamic, responsive visualizations',
         'Improve usability with onboarding and contextual guidance'],
      goalsMet:
        ['Enabled lab members to quickly and intuitively access gene information','Surfaced previously hidden data and revealed connections that were not apparent before','Transformed fragmented, static datasets into a cohesive, actionable experience.', 'Supported independent exploration and interpretation of experimental results.', 'Accelerated insight generation and improved efficiency in analyzing datasets.'],

      solutionSteps:[
        {label:'User Journey & Workflow Mapping',items:[
          'Since no existing platform generated this data for the lab, we needed to map how lab members intended to interact with and visualize it. This involved understanding the questions they wanted to answer and identifying the types of visualizations and data representations that would best support their workflows',
          
        ]},
        {label:'Information & Interaction Architecture',items:[
          'Designed interaction patterns that allow users to filter, select, and drill into data'
        ]},
        {label:'Interface Design',items:[
          'Prioritized clarity and usability to reduce cognitive overload',
          'Designed layouts that highlight relationships between datasets and visualizations',
          'Interaction Design for Visualizations',
          'Created dynamic behaviors where user inputs directly update visual outputs',
          'Ensured interactions feel predictable and responsive',
        ]},
        {label:'Onboarding & Guidance',items:[
          'Designed a tutorial page to introduce users to the platform’s features',
        ]}],
      stepsMedia: '',

      solutionExecute:
        'Designed and developed the front-end interface by translating workflows and wireframes into an interactive application, implemented dynamic data interactions that allow users to select parameters and instantly view corresponding visualizations, built a responsive UI to support seamless navigation across datasets and views, integrated onboarding flows and tutorials to guide first-time users, and iterated on interaction patterns to ensure reliability and clarity in how data updates based on user input.',
      executeMedia: '',

      impactHeadline: [
        { stat: 'Fragmented spreadsheets → unified explorer', context: 'Lab data that lived across disconnected files became queryable in one place for the first time' },
        { stat: 'Independent exploration', context: 'Lab members without programming backgrounds could explore gene expression data without researcher support' },
      ],
      impact:
        'Before this platform, understanding the dataset required going directly to the researchers who built it. Afterwards, lab members could explore gene expression patterns, filter by condition, and surface comparisons independently. The data did not change. The accessibility of it did.',
      impactMedia: '',
      improvements: 'Future iterations could have included designing for features that allow for more indepth comparative visualizations.',

      designSystem: '',
      designSystemMedia: '',
      designSystemMap: null,
      processSteps: [
        {
          step: 'User Flows',
          notes: 'Mapped the end-to-end workflows for data retrieval and analysis before touching the interface. This included the backend analysis procedures and the paths lab members would take to select parameters, trigger analyses, and interpret results.',
          media: { component: 'APOEUserFlows' },
        },
        {
          step: 'Wireframes',
          notes: 'Explored two layout approaches before arriving at the final structure. A prototype review with the lab drove the consolidation from V1 to V2.',
          media: [
            { src: '/Screenshot 2026-04-08 at 10.20.47 AM.png', caption: 'V1 — 3-screen flow: search → configure parameters → results' },
            { type: 'feedback', label: 'Feedback from prototype review', items: [
              'First 2 screens could be condensed together',
              'Input form format was taking up too much space',
              'No instruction on what each analysis type means — confusing for users',
              'First set of screens didn\'t feel lightweight enough',
            ]},
            { src: '/Screenshot 2026-04-08 at 10.21.07 AM.png', caption: 'V2 — 2-screen flow: consolidated filters inline with analysis selection' },
          ],
        },
        { step: 'Coding Stack', notes: 'Built the full application in HTML, CSS, JavaScript, SQL, and Python.' },
        {
          step: 'Design Decisions',
          notes: [],
          designSystemMap: {
            systemContext: '',
            designStrategy: '',
            foundations: [
              'Soft, non-harsh color palette for extended research sessions',
              'Readability of quantitative data as the primary visual constraint',
            ],
            components: [
              'Graphs + data tables — core visualization layer',
              'Dropdowns for dynamic filtering and parameter switching',
              'Tutorial overlay for first-time guidance',
            ],
            interactionPatterns: [
              'User-driven data exploration with no forced paths',
              'Quick parameter switching with instant visual updates',
            ],
            designStrategyPoints: [
              'Support flexible exploration because researchers need freedom to follow the data',
              'Guided entry points reduce initial overwhelm',
              'Minimize visual noise so data dominates, not interface chrome',
            ],
            outcome: 'Created a system that supports flexible yet intuitive data exploration.',
          },
          media: { component: 'HiFiBioinformatics' },
        },
        { step: 'Prototype', notes: 'Walked through the interface with professor to validate that data exploration felt intuitive and that the review workflow mapped to how they actually made decisions.' },
        { step: 'Handoff & Ship', notes: 'Group deployed and delievered the application to professor at end of project.' },
        {
          step: 'Feedback',
          notes: 'There was no formal feedback cycle. The project was scoped around requirements set by the professor — the platform was built to meet those requirements and delivered to the lab. The reception reflected that what was asked for had been delivered.',
          media: { component: 'APOEFeedback' },
        },
      ],
    },
  },

  /* {
    id: 'project-delta',
    title: 'Scanpy Landing Page Redesign',
    tagline: 'Redesign for Cognitive Friendly Hierarchy',
    categories: ['learning'],
    coverColor: '#EDE8E0',
    year: '2025',
    role: 'Sole Product Designer',
    roleSummary: 'Solo redesign — research, IA, and high-fidelity UI for improved cognitive hierarchy.',
    company: 'Independent',
    tools: ['Figma'],
    caseStudy: {
      context:
        'A product team scaling from 3 to 12 designers needed a shared foundation to build consistent experiences across a growing suite of 4 products — each with overlapping but subtly different UI needs.',
      contextMedia: 'Audit: component inventory across 4 products — 340 unique instances, 23% consistent',

      problemState:
        'But each designer worked from their own Figma file. Components were duplicated, diverged over time, and named differently across teams. Engineering had no reliable source of truth — they were reverse-engineering design intent from each new file they received.',
      problemMedia: 'Side-by-side: the same "button" component, 11 variations across 4 product files',

      designQuestion:
        'Therefore visual inconsistencies shipped regularly, and engineers spent an estimated 30% of UI development time making decisions that should have been resolved at the design layer — spacing calls, colour choices, interaction states.',
      failureMedia: 'Engineering time log: UI decision overhead per sprint across 3 teams',

      opportunity:
        'So there was an opportunity to design a token-based design system that both designers and engineers could use as a single source of truth — one that scaled as the product evolved rather than requiring a rebuild every 18 months.',
      opportunityMedia: 'Token architecture diagram: primitive → semantic → component',

      solutionGoal:
        'By giving designers a library of components covering 90% of everyday use cases, with explicit guidance on when — and how — to create a new pattern.',
      goalMedia: 'Component coverage audit: 90 components mapped to 4 product surface areas',

      solutionSteps:
        'Guiding both designers and engineers through a shared token architecture (primitive → semantic → component), documented in Storybook with usage rationale, do/don\'t examples, and accessibility annotations for every component.',
      stepsMedia: 'Storybook: button component page with all variants, states, and guidelines',

      solutionExecute:
        'And enabling a Figma-to-code pipeline using design tokens synced via a shared JSON file — eliminating the handoff gap for colour, spacing, and typography entirely.',
      executeMedia: 'Pipeline diagram: Figma tokens → JSON → Tailwind config → Storybook',

      impact:
        'New feature UI now takes 40% less design time on average. Engineering UI decision overhead dropped from 30% to under 8% of sprint time. Two additional product teams adopted the system within 3 months of launch without any formal onboarding.',
      impactMedia: 'Adoption curve: system usage across 6 teams over 6 months',

      designSystem:
        'Built on an 8px base grid. 5-level semantic colour scale with a separate data visualisation palette. 3-tier type system: display / body / label. Dark mode supported from day one via a single token swap.',
      designSystemMedia: 'Token sheet: colour, spacing, radius, elevation, and motion primitives',
    },
  }, */

  {
    id: 'project-epsilon',
    title: 'UCSC Genome Browser Reimagined',
    tagline: 'A self-initiated redesign exploring density and hierarchy in scientific tooling.',
    categories: ['exploration'],
    coverImage: '../../public/ucsc.png',
    // coverColor: '#E8DDE8',
    maturity: 'Design Exploration',
    evidence: 'Tested Concept',
    sector: 'Bioinformatics Tooling',
    year: '2026',
    role: 'Product Designer',
    roleSummary: 'Chose and framed the problem independently, ran a heuristic evaluation, redesigned the interface, built it in React, and tested the concept with users — all self-directed.',
    company: 'Independent',
    tools: ['Figma', 'React.js'],
    links: [
      { label: 'Live app', type: 'live', url: 'https://genomebrowserdesign.netlify.app/' },{ label: 'Feedback Form',  url: 'https://forms.gle/awwXiawfjeeTVjeY8' },
    ],
    caseStudy: {
      product:
        'A self-initiated redesign of the UCSC Genome Browser that explores how a tool used daily by researchers could be made less cognitively demanding while preserving the depth users rely on.',
      productMedia: { type: 'embed', url: 'https://genomebrowserdesign.netlify.app/', caption: 'Live prototype — interact directly', bleed: true },
      context:
        'the UCSC Genome Browser is a highly powerful tool that often presents a steep learning curve. While it contains extensive functionality, it can be difficult to navigate without prior expertise, effectively adding cognitive load on top of the research itself. This raised a question for me about whether this friction is an inherent limitation of the system or a solvable design problem.',
      contextMedia: '',

      problemState:
        'The current interface can be overwhelming, causing cognitive overload, inefficient navigation, and missed insights due to poor hierarchy and lack of context-aware guidance.',
      problemMedia: { type: 'embed', url: 'https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&lastVirtModeType=default&lastVirtModeExtraState=&virtModeType=default&virtMode=0&nonVirtPosition=&position=chr7%3A155799529%2D155812871&hgsid=3906361071_vRJPN3jaZTca6KQPpg7JaQXuk3so', caption: 'UCSC Genome Browser interface preview', bleed: true },

      designQuestion:
        'How can the interface help users explore genomic data efficiently while keeping flexibility and depth intact?',
      failureMedia: '',

      opportunity:
        'Improve navigation, reduce cognitive load, and enhance comprehension by introducing context-aware interactions, better hierarchy, and guided workflows.',
      opportunityMedia: '',

      solutionGoal:
        'By understanding who the user was and what they were trying to achieve on day one — through a short, focused intake — and building the rest of onboarding around that answer.',
      goalMedia: 'user personas',

      solutionSteps:
        'Guiding them through a path with visible progress, each step ending in a concrete output — not a form submitted, but something real: a report generated, a team member invited, a workflow configured.',
      stepsMedia: '',

      solutionExecute:
        'Redesigned the interface layout to improve clarity and accessibility while preserving the existing track-based mental model, introduced context-aware interaction patterns that dynamically surface relevant tracks and configuration options, explored AI-assisted features to support track discovery and user guidance, and developed prototypes demonstrating a more intuitive and streamlined genomic exploration experience.',
      executeMedia: '',

      impactHeadline: [
        { stat: 'Reduced cognitive load during use of annotation tracks', context: '' },
        { stat: '', context: '' },
      ],
      impact:
        'This exploration revealed that the core problem in the UCSC Browser is not missing features — it is density without hierarchy. Small structural changes (progressive disclosure, visible active state, contextual labels) had an outsized effect on how navigable the interface felt. The 3-user review was directional, not conclusive, but consistent enough to validate the approach as worth pursuing further.',
      improvements: '',

      designSystem: '',
      designSystemMedia: '',
      designSystemMap: null,
      processSteps: [
        {
          step: 'Heuristic Evaluation',
          notes: [
            'Feedback — selected tracks do not refresh upon selection, leaving users unsure whether their action registered (High)',
            'Recognition — hundreds of tool names displayed simultaneously with no way to understand which to use without prior knowledge (High)',
            'Minimalism — too many competing calls to action visible at once with no visual hierarchy between primary and secondary actions (High)',
            'Visibility — no clear indication of which tracks are currently active; open vs. closed states are not visually distinguishable (Med)',
            'User control — toggle system is inconsistent and hard to parse; users cannot easily reverse or compare track selections (Med)',
            'Help & context — sections have no labels or explanations; users with less domain knowledge have no anchor point for navigation (Med)',
          ],
        },
        {
          step: 'Design Decisions',
          notes: [],
          designSystemMap: {
            systemContext: 'Redesign of an existing expert tool — constrained by user familiarity and existing mental models.',
            designStrategy: '',
            foundations: [
              'Original color identity preserved — expert users navigate by color recognition',
              'Track-based layout retained as the primary mental model',
            ],
            components: [
              'Expand/collapse panels for progressive disclosure',
              'AI-assisted search as an optional overlay',
              'Auto-refresh toggle with visible state indicators',
            ],
            interactionPatterns: [
              'Progressive disclosure — reduce visible complexity without removing depth',
              'Optional AI acceleration — power users keep manual control, new users get guided help',
            ],
            designStrategyPoints: [
              'Familiarity over novelty — muscle memory matters for expert tools',
              'Density is the core UX problem, not missing features',
              'Every change earns its place by addressing a specific heuristic finding',
            ],
            outcome: 'A redesign that feels immediately familiar to expert users while being meaningfully easier to navigate for newcomers.',
          },
        },
        { step: 'Vibe Coding', notes: 'Built the redesign in React.js — using the browser directly as the prototyping environment. Vibe coding let the interface decisions stay grounded in real interaction behavior rather than static mockups, making it faster to validate layout density, toggle responsiveness, and the AI search integration.' },
        { step: 'Concept Testing', notes: 'Shared the live prototype with 3 users at varying familiarity levels — from active users to those familiar but not regular. Asked them to explore freely before completing a short survey. The goal was directional signal, not statistical proof.' },
        {
          step: 'Feedback',
          notes: 'All 3 users rated the redesign more efficient than the original.  The auto-refresh on track selection and section descriptions were called out specifically as the most impactful changes.',
          link: { label: 'View feedback form', url: 'https://forms.gle/awwXiawfjeeTVjeY8' },
          media: { component: 'UCSCFeedback' },
        },
      ],
    },

  },
/*   {
    id: 'project-zeta',
    title: 'Scikit-Learn Learning Lab',
    tagline: 'A goal-first adaptive companion that recommends the right ML model and walks you through using it — based on what you want to build and what you already know.',
    categories: ['learning'],
    coverColor: '#E8DDE8',
    maturity: 'Prototyped Solution',
    evidence: 'Tested Concept',
    year: '2026',
    role: 'Sole Product Designer & Developer',
    roleSummary: 'Sole designer and developer — defined the adaptive learning architecture, designed all interaction flows, and built the working prototype in React.js.',
    company: 'Independent',
    tools: ['React.js', 'Figma'],
    caseStudy: {
      product:
        'An adaptive learning companion for Scikit-Learn that starts with your goal, recommends the right model, checks what you already know, and walks you through implementation — step by step, at your level.',
      productMedia: { component: 'HiFiScikit' },

      context:
        'Scikit-Learn is the most widely used ML library in Python, but its documentation is a single long-form reference page. Users arrive with a goal — "I want to predict customer churn," "I need to cluster these records" — and are immediately confronted with a library index, not a guide. There is no system that asks what you\'re trying to do.',
      contextMedia: '',

      personas: [
        {
          role: 'The Goal-Driven Newcomer',
          need: 'Has a concrete task but doesn\'t know which ML model applies or how to start.',
          quote: '"I just need to know which model to use and how to run it — I don\'t need the full theory."',
          goals: [
            'Identify which Scikit-Learn model fits their use case',
            'Understand enough to implement it without getting lost',
          ],
          painPoints: [
            'Scikit-Learn docs assume you already know what you need — no entry point for goal-first users',
            'Tutorials cover everything but nothing specific to their task',
          ],
        },
        {
          role: 'The Practitioner Refreshing',
          need: 'Knows ML concepts but wants to quickly confirm the right API and get the key parameters without reading the full reference.',
          quote: '"I know roughly what I need — I just want the relevant bits fast."',
          goals: [
            'Quickly validate model choice and get the right method calls',
            'Skip the explanation depth they don\'t need',
          ],
          painPoints: [
            'Reference docs are comprehensive but not scannable for specific use-case confirmation',
            'No way to say "I already know this — just show me the implementation"',
          ],
        },
      ],

      problemState:
        'The entire burden of relevance is on the user. Scikit-Learn\'s docs don\'t adapt to what you\'re trying to build or how much you know. Newcomers get lost trying to map their goal to a model name. Practitioners waste time scanning for what\'s applicable. Both groups eventually give up on the docs and search externally — finding answers faster from Stack Overflow than from the official source.',
      problemMedia: '',

      opportunity:
        'By starting with intent rather than a library index, a learning tool can surface only what\'s relevant, explain it at the right depth for that user, and walk through implementation in a way that feels like a knowledgeable colleague — not a reference manual that expects you to already know the answers.',

      designQuestion:
        'How might we design a learning tool that starts with what you\'re trying to achieve, adapts to what you already know, and guides you through Scikit-Learn in a way that respects your context — without requiring you to know the right questions to ask?',

      impactHeadline: [
        { stat: 'Goal-first entry', context: 'Users describe intent in plain language — no ML vocabulary required to start' },
        { stat: 'Adaptive depth', context: 'Familiarity check personalizes explanation level before any content is shown' },
      ],
      impact:
        'Early concept testing showed users completing model selection and implementation setup significantly faster than with the official docs — and reporting higher confidence in their choice. Newcomers felt guided rather than overwhelmed; practitioners appreciated the shortcut path that respected their existing knowledge.',
      impactMedia: '',
      goalsMet: [
        'Users with no ML background can identify the right model from a plain-language goal description',
        'Familiarity-adaptive paths prevent both patronising beginners and boring experts',
        'Read-only code end state gives something concrete without sandbox dependencies',
        '"No thanks, I got it" exit respected user autonomy at every step',
      ],

      designSystemLabel: '',
      designSystem: '',
      designSystemMedia: '',
      designSystemMap: null,

      processSteps: [
        {
          step: 'User Flows',
          notes: 'Mapped two distinct paths: the goal-driven newcomer journey (goal → model match → familiarity check → guided walkthrough → code end state) and the practitioner shortcut (goal → model match → "I got it from here" exit). The critical branching moment — after model recommendation — became the core design decision point.',
        },
        {
          step: 'Design Goals',
          notes: [
            'Start with what the user wants to build — not with a model index',
            'Adapt explanation depth to familiarity — don\'t patronise or assume',
            'Give something concrete at the end: a working code starting point, not a wall of theory',
            'Respect user autonomy — always offer an exit for people who don\'t need hand-holding',
          ],
        },
        {
          step: 'Wireframes',
          notes: 'Designed five key screens: goal intake, model recommendation, familiarity check (Scikit-Learn and ML separately), contextual step-by-step walkthrough, and a code end state. Each screen was a single decision — no multi-question pages.',
        },
        {
          step: 'Vibe Coding',
          notes: 'Built the adaptive branching logic in React.js early to test whether the familiarity check felt natural in the flow or like an interruption. Prototyped the goal→model matching to validate that plain-language input could route reliably to the right model recommendation.',
        },
        {
          step: 'Design Decisions',
          notes: [
            'Edtech aesthetic over developer tool aesthetic — warm amber palette, rounded cards, friendly copy — the app needs to feel safe for non-technical users, not intimidating',
            'One decision per screen — no multi-question forms; each screen has a single clear prompt and a clear action',
            'Familiarity checked on two axes (Scikit-Learn and ML separately) — someone can be ML-familiar but Scikit-Learn-new, and the content needs to reflect that',
            '"Yes Please / No Thanks" binary at the model match screen — explicit opt-in to the guided path, explicit respect for the user who doesn\'t need it',
            'Read-only code snippet as end state — concrete, copyable, dependency-free; no sandbox runtime required',
          ],
          designSystemMap: {
            systemContext: 'Custom edtech design system — warm, low-anxiety, built to feel approachable for non-technical users.',
            designStrategy: 'Goal-first, familiarity-adaptive, single decision per screen',
            foundations: [
              'Warm amber (#E5A23A) as primary — welcoming, not clinical; edtech energy without being childish',
              'Off-white cards on amber header — clear content/context separation',
              'Rounded corners throughout — softness signals safety for anxious learners',
            ],
            components: [
              'Goal input card — large text area, plain-language prompt, browse-by-goal chips',
              'Model match card — recommendation with plain-language rationale + Yes/No CTA',
              'Familiarity toggle pair — binary, tactile, two axes',
              'Step walkthrough — progress rail, contextualized per-step explanation, current step expanded',
              'Code end state — syntax-highlighted read-only snippet + copy button + docs CTA',
            ],
            interactionPatterns: [
              'Linear adaptive path — each screen unlocks only after the previous decision',
              'Opt-out available at every step — user always in control of depth',
            ],
            designStrategyPoints: [
              'Feel like a colleague, not a textbook — copy is conversational throughout',
              'Familiarity-adaptive: same flow, different depth of explanation',
              'Never require ML vocabulary to enter — plain language maps to model recommendation',
            ],
            outcome: 'Users with no ML background could identify and begin implementing the right model in under 5 minutes.',
          },
        },
        {
          step: 'Prototype',
          notes: 'Tested the goal→model→walkthrough flow with ML newcomers and practitioners. Validated that the familiarity check felt natural rather than intrusive, and that the "No Thanks" exit was used confidently by practitioners without feeling like they were skipping something important.',
        },
        {
          step: 'Handoff & Ship',
          notes: 'Ongoing build in React.js. Component architecture supports adding new model pathways without redesigning the flow — each model gets its own walkthrough steps configuration.',
        },
        {
          step: 'Feedback & Iteration',
          notes: 'Early testing showed the goal input was the highest-drop moment — users unsure what to type. Iterated by adding "browse by goal type" chips (Predict something / Group similar things / Detect anomalies) as fallback entry points for users who couldn\'t articulate their goal in words.',
        },
      ],
    },
  }, */

  /* {
    id: 'project-zeta',
    title: 'Scikit-Learn Learning App',
    tagline: 'An interactive learning app to help users understand and apply Scikit-Learn concepts more effectively.',
    categories: ['learning', 'data-retrieval'],
    coverColor: '#E8DDE8',
    maturity: 'Concept Exploration',
    evidence: 'Concept Only',
    year: '2026',
    role: 'Sole Product Designer',
    roleSummary: 'Sole designer — defined learning architecture, interaction patterns, and the sandbox experience.',
    company: 'Independent',
    tools: ['Figma', 'React.js'],
    caseStudy: {
      context:
        ' New users of Scikit-Learn, a popular machine learning library, often struggled to understand its concepts and apply them effectively in their projects. The existing documentation was comprehensive but overwhelming, leading to a steep learning curve and underutilization of the library\'s capabilities.',
      contextMedia: ' User feedback and session recordings showing new users struggling to navigate Scikit-Learn documentation and apply its concepts in their projects',

      problemState:
        ' How might we design an interactive learning app that simplifies the learning process, provides contextual guidance, and helps users apply Scikit-Learn concepts more effectively in their projects?',
      problemMedia: ' A user journey map illustrating the challenges faced by new users when trying to learn and apply Scikit-Learn concepts, highlighting points of confusion and frustration',

      designQuestion:
        ' Therefore new users often felt overwhelmed and frustrated, leading to a high drop-off rate in learning and underutilization of Scikit-Learn\'s capabilities. Many users resorted to external resources or abandoned their projects altogether due to the steep learning curve.',
      failureMedia: ' A graph showing the drop-off rate of new users trying to learn Scikit-Learn concepts, with a clear indication of points where users struggled and disengaged',

      opportunity:
        ' So there was an opportunity to design an interactive learning app that provides a structured and engaging learning experience, with contextual guidance and practical examples to help users understand and apply Scikit-Learn concepts more effectively.',
      opportunityMedia: ' A concept sketch of the proposed interactive learning app, showing how it would provide structured lessons, contextual guidance, and practical examples to help users learn and apply Scikit-Learn concepts more effectively',

      solutionGoal:
        'By creating an interactive learning app that breaks down complex Scikit-Learn concepts into digestible lessons, provides contextual guidance, and offers practical examples to help users understand and apply the concepts more effectively in their projects.',
      goalMedia: ' A user journey map illustrating the new learning experience with the interactive learning app, highlighting key touchpoints and improvements in user engagement and understanding of Scikit-Learn concepts',

      solutionSteps:
        'Guiding users through a structured learning path that includes interactive lessons, contextual guidance, and practical examples to help them understand and apply Scikit-Learn concepts more effectively in their projects.',
      stepsMedia: ' Wireframes: the interactive learning app\'s structured learning path, including lesson layouts, contextual guidance features, and practical example sections',

      solutionExecute:
        'And enabling users to track their learning progress, receive personalized recommendations based on their learning style and goals, and apply Scikit-Learn concepts in a sandbox environment to practice and reinforce their understanding.',
      executeMedia: ' Prototype: a user navigating through the interactive learning app, tracking their progress, receiving personalized recommendations, and applying Scikit-Learn concepts in a sandbox environment',

      impactHeadline: [
        { stat: 'Abstract Understanding → Understanding rooted in user context', context: '' },
        { stat: '', context: '' },
      ],
      impact:
        'The interactive learning app significantly improved user engagement and understanding of Scikit-Learn concepts, leading to increased utilization of the library\'s capabilities. Users reported feeling more confident in their ability to learn and apply Scikit-Learn concepts effectively in their projects, resulting in a higher success rate and reduced drop-off.',
      impactMedia: ' A graph showing increased user engagement and improved understanding of Scikit-Learn concepts after using the interactive learning app, with a clear indication of improvements in user confidence and project success rates',

      designSystem:
        ' The design system for the interactive learning app was built on a foundation of clarity, engagement, and accessibility. The color palette was chosen to be visually appealing while ensuring high contrast for readability. Typography was selected to enhance legibility and hierarchy, with a focus on making complex information easy to digest. Motion was used strategically to provide feedback and guide users through the learning experience, creating a seamless and intuitive user experience.',
      designSystemMedia: ' A style guide showcasing the design system components, color palette, typography, and motion guidelines used in the interactive learning app',
      designSystemMap: {
        systemContext: 'Custom-built system for explaining ML models interactively.',
        designStrategy: 'Guided paths with goal-based freedom',
        foundations: ['Themed UI for consistency', 'Emphasis on cognitive hierarchy', 'Designed for learning + exploration'],
        components: ['AI search bar', 'Chat feature', 'Expandable/collapsible sections', 'Interactive widgets'],
        interactionPatterns: ['Goal-driven exploration', 'Layered information reveal', 'Mixed structured + free exploration'],
        designStrategyPoints: ['Structured entry, open exploration', 'Learning through doing', 'Reduce ML complexity'],
        outcome: 'Enabled users to understand complex models through interactive learning flows.',
      },
      processSteps: [
        { step: 'User Flows', notes: 'Mapped the learning journey of a new Scikit-Learn user — from confusion with raw documentation to successfully applying a concept in a project — identifying where structured guidance was needed most.' },
        { step: 'Wireframes', notes: 'Structured the learning app architecture: lesson sequencing, contextual guidance overlays, interactive code examples, and a progress tracking system.' },
        { step: 'Vibe Coding', notes: 'Built an interactive sandbox in React.js to let users run and modify Scikit-Learn code directly in the app — testing whether live execution meaningfully improved concept retention.' },
        { step: 'High-Fidelity UI', notes: 'Designed a clear, distraction-free learning environment with a colour system focused on readability, and motion used only to signal progress and correct answers.', media: { component: 'HiFiScikit' } },
        { step: 'Prototype', notes: 'Tested with new Scikit-Learn users to validate whether the structured path reduced drop-off and increased confidence in applying concepts to real projects.' },
        { step: 'Handoff & Ship', notes: 'Delivered Figma specs and a component library covering lesson layouts, interactive code blocks, and progress states for the development team.' },
        { step: 'Feedback & Iteration', notes: 'Refined lesson pacing and hint system based on user testing; reduced cognitive overload by breaking multi-concept lessons into single-focus micro-lessons.' },
      ],
    },
  }, */

  {
    id: 'project-eta',
    title: 'AI-Generated Short-Form Visual Companion for Scientific Posters',
    tagline: 'A design concept for making research posters legible to a time-constrained audience.',
    categories: ['learning'],
    coverImage: '../../public/poster.png',
    coverColor: '#E8DDE8',
    maturity: 'Design Exploration',
    evidence: 'Untested Concept',
    year: '2026',
    role: 'Product Designer',
    roleSummary: 'Explored the problem end-to-end — framed the hypothesis, designed both surfaces, built a working prototype, and published the thinking publicly as a LinkedIn article to invite discussion.',
    company: 'Independent',
    sector: 'Research Communication',
    tools: ['AI Model','Figma', 'React.js'],
    links: [
      { label: 'LinkedIn Article', url: 'https://www.linkedin.com/pulse/exploring-ai-cognitive-assistant-scientific-posters-manasa-rapuru-v0y0c/?trackingId=lfjTD6xZQ7eYvOqVYkY7JA%3D%3D' },{ label: 'Prototype', url: '' },{ label: 'Feedback Form', url: 'https://forms.gle/iAWpz6ugb5Ekmf6T8' },
      ],
    caseStudy: {
      product:
        'A self-initiated design concept exploring whether AI could close the comprehension gap at academic poster sessions. The question driving it: what if a researcher could give every attendee a plain-language summary of their work, accessible in under five seconds, without being present to explain it? This is an exploration of that idea — not a shipped product, but a worked-through design hypothesis.',
      productMedia: null,
      context:
        'This project started from personal experience. Having stood in front of posters as both a presenter and an audience member, and hearing the same frustration from peers, the problem felt worth exploring. Presenters spend weeks on research that attendees have maybe two minutes to absorb. The poster format has not changed, but the problem of comprehension under time pressure is real and consistent across conferences.',
      contextMedia: { component: 'PosterContextAnimation' },

      problemState:
        'Scientific posters are designed for depth, not speed. Attendees navigating a session have limited time per poster and no easy way to quickly assess whether a piece of research is relevant to them — leading to surface-level engagement or posters being skipped entirely. Presenters have no lightweight way to extend the reach of their work beyond the session itself.',
      
      problemMedia: '',

      designQuestion:
        'How do you design a two-sided product where the effort required from the author is low enough that they actually use it, and the output is useful enough that attendees find it worth opening?',

      failureMedia: '',

      opportunity:
        'Create a system that improves comprehension speed while keeping poster layouts intact, making research more accessible without adding burden to creators or viewers.',
      opportunityMedia: '',

      solutionGoal:
        ' By designing an AI-generated cognitive assistant that provides a mobile-friendly explanation page summarizing the key ideas behind the research in plain language, helping attendees quickly understand the poster and decide which ones to engage with more deeply during a poster session.',
      goalMedia: ' A user journey map illustrating the new experience with the AI-generated cognitive assistant and highlighting key points of satisfaction or dissatisfaction during user engagement.',

      solutionSteps:
        ' Guiding attendees through a simple process of scanning a QR code on the poster, which leads them to a mobile-friendly explanation page that uses AI to generate a plain language summary of the research, including the research question, methods, and key findings. The assistant could also provide additional features such as highlighting key figures, providing definitions for technical terms, and offering related resources for further exploration.',
      stepsMedia: ' Wireframes: the AI-generated cognitive assistant\'s user flow, including the QR code scanning process, the mobile-friendly explanation page layout, and the AI-generated summary features',

      solutionExecute:
        ' And enabling attendees to quickly access and understand the key information on scientific posters through the AI-generated cognitive assistant, leading to increased engagement and more meaningful knowledge exchange during poster sessions.',
      executeMedia: ' Prototype: a user scanning a QR code on a scientific poster and being directed to the AI-generated cognitive assistant\'s mobile-friendly explanation page, where they can quickly understand the key information about the research being presented',

      impactHeadline: [
        { stat: 'Concept, not yet validated', context: 'Built to provoke a question, not to claim an answer' },
        { stat: 'Two open hypotheses', context: 'Does it improve comprehension? Is it necessary, or just convenient?' },
      ],
      impact:
        'This is a design concept grounded in observed behaviour, not a shipped product. The hypothesis is that a plain-language AI summary, accessed in under five seconds via QR code, would meaningfully improve how quickly an attendee can assess whether a poster is worth deeper engagement. What I do not yet know is whether users would experience this as genuinely useful or as a layer of friction replacing the natural act of talking to the presenter. That tension is the most interesting thing to test.',
      impactMedia: '',
      improvements: 'The author submission flow assumes researchers will engage with it ahead of the conference — that assumption needs pressure-testing against the reality of last-minute preparation. The AI summary quality also depends heavily on what the author submits; a structured input guide or smart prompts would raise the floor on output quality without adding friction.',

      designSystem: '',
      designSystemMedia: '',
      designSystemMap: null,
      processSteps: [
        { step: 'User Flows', notes: 'Mapped two separate journeys. The author flow: from deciding to add a QR code through to submitting content and having the artifact generated. The attendee flow: from spotting the QR code at a poster session through to reading the summary and deciding whether to engage deeper. Both flows needed to work independently but produce a connected result.', media: { component: 'PosterPersonas' } },
        { step: 'Wireframes', notes: 'Designed both surfaces separately. The author interface needed to feel lightweight enough that a researcher would use it in the days before a conference, not just ignore it. The artifact needed to be readable in under two minutes on a phone in a noisy room.', media: { component: 'PosterWireframes' } },
        { step: 'Vibe Coding', notes: 'Prototyped the AI summary generation pipeline in React.js to test how well AI-generated plain language matched attendee comprehension needs in early concept tests.' },
        {
          step: 'Design Decisions',
          notes: [],
          designSystemMap: {
            systemContext: '',
            designStrategy: '',
            foundations: [
              'High-contrast palette for bright/outdoor conference lighting',
              'Mobile-optimised with large tap targets and short scrollable sections',
              'Content-first: UI recedes entirely so the summary leads',
            ],
            components: [
              'Plain-language summary card — AI-structured, human-readable',
              'Inline term definitions — no external glossary needed',
              'Key figures highlighted with annotation overlays',
              'Full paper CTA — clear path to depth for engaged readers',
            ],
            interactionPatterns: [
              'Linear read: one section at a time with no branching',
              'Tap to expand figures or term definitions inline',
            ],
            designStrategyPoints: [
              'Zero friction entry: QR to content in under 5 seconds',
              'Scientific rigour and plain language together, not a trade-off',
              'Structured storytelling matched to attendee reading behaviour',
            ],
            outcome: 'Helped attendees quickly grasp research and make informed decisions about which posters to engage with more deeply.',
          },
          media: null,
        },
        { step: 'Pressure Testing', notes: 'Built a working prototype to make the concept tangible enough to test the core interaction — QR to summary in under five seconds. The prototype was the thinking tool, not a validation instrument.' },
        { step: 'Handoff & Ship', notes: 'This project is not shipped. It exists as a design concept and working prototype, published as a LinkedIn article to invite discussion and gather reactions from the research and design community.' },
        { step: 'Feedback & Iteration', notes: 'No formal testing has been conducted. The two questions I would take into a real validation study: first, does a plain-language AI summary genuinely help someone understand the research faster, or does it just feel like it does? Second, does it replace the conversation with the presenter, which is often the most valuable part of a poster session, or does it create a better starting point for that conversation? The answer to the second question would determine whether this is a useful tool or an elegant solution to the wrong problem.', link: { label: 'View feedback form', url: 'https://forms.gle/iAWpz6ugb5Ekmf6T8' } },
      ],
    },
  },

];

/* export const PROJECTS = [
  {
    id: 'project-alpha',
    title: 'Unified Data Dashboard',
    tagline: 'Turning fragmented analytics into a single source of truth.',
    categories: ['learning', 'data-retrieval'],
    coverColor: '#E8E4DC',
    year: '2024',
    role: 'Sole Product Designer',
    company: 'Company A',
    caseStudy: {
      context:
        'Operations managers needed to review weekly performance metrics to allocate budget across product lines — a decision made every Monday morning, with real financial consequences.',
      contextMedia: 'Screen recording: manager switching between Salesforce, Looker, and three Google Sheets',

      problemState:
        'But this process was completely fragmented. Data lived across Salesforce, Looker, an internal database, and several spreadsheets maintained by different teams. Getting a complete picture meant opening five tools, cross-referencing manually, and hoping the numbers aligned.',
      problemMedia: 'Research synthesis: 6 interview quotes mapped to pain points in the Monday ritual',

      designQuestion:
        'Therefore they struggled to make confident decisions in the room. Teams were spending 3+ hours every Monday just gathering data before any decision could be made. By the time the meeting started, some figures were already outdated — and no one was sure whose numbers were right.',
      failureMedia: 'Journey map showing the 3.2-hour pre-meeting data gathering ritual',

      opportunity:
        'So there was an opportunity to design a product that centralised all performance data in one place — pulling from every source automatically, normalising it, and surfacing the week\'s most critical signals before anyone asked.',
      opportunityMedia: 'Concept sketch: a single "Monday view" with connected data sources',

      solutionGoal:
        'By helping users define which metrics mattered to their role and pin them at the top of their view — a 10-minute setup, done once.',
      goalMedia: 'Requirements mapping: 4 user roles × their core metrics',

      solutionSteps:
        'Guiding them through a structured setup flow — connect sources, choose metrics, set alert thresholds — that required no engineering support and no IT ticket.',
      stepsMedia: 'Wireframe progression: setup flow across 3 screens',

      solutionExecute:
        'And enabling them to act on insights — approve budgets, flag anomalies, export a PDF summary — without leaving the dashboard or opening another tab.',
      executeMedia: 'Prototype: inline budget approval with one-click confirmation',

      impact:
        'Time-to-decision dropped from 3.2 hours to 28 minutes. The dashboard was adopted by 4 teams within the first 6 weeks, with zero migration support from engineering. Internal NPS: 74.',
      impactMedia: 'Before/after: Monday meeting prep time across 4 teams over 8 weeks',

      designSystem:
        'Built on a 4px grid with a data-forward colour scale — 5 levels, colorblind-safe. Typography: Inter for data labels and UI, DM Serif for report headers. Motion used only to draw attention to threshold breaches.',
      designSystemMedia: 'Component library: data cells, status chips, chart tokens, and alert states',
    },
  },

  {
    id: 'project-beta',
    title: 'Workflow Triage Tool',
    tagline: 'Helping ops teams prioritize without opening five tabs.',
    categories: ['learning'],
    coverColor: '#DDE4E8',
    year: '2023',
    role: 'Sole Product Designer',
    company: 'Company B',
    caseStudy: {
      context:
        'Support operations teams were responsible for routing incoming escalations — from enterprise clients — to the right product or engineering team. Every escalation had an SLA. Missing one meant a contractual breach.',
      contextMedia: 'Day-in-the-life observation: ops manager triaging at 9am across four open tabs',

      problemState:
        'But requests arrived through four separate channels: email, Slack, Jira tickets, and phone calls logged in a shared spreadsheet. There was no unified view — just a constant context-switch between tools, each with its own format and urgency signals.',
      problemMedia: 'Audit: 47 incoming requests across one day, mapped to their entry channel',

      designQuestion:
        'Therefore they struggled to respond fast enough. High-priority issues regularly fell through the cracks. The average response time to P1 incidents was 4.7 hours — well above the 1-hour SLA. Two enterprise clients had already raised formal complaints.',
      failureMedia: 'SLA breach data: 34% of P1s missed in Q3, charted by entry channel',

      opportunity:
        'So there was an opportunity to design a unified triage interface that ingested from all four channels, auto-scored severity, and surfaced what needed attention right now — not what arrived most recently.',
      opportunityMedia: 'Whiteboard session: severity scoring model with ops team leads',

      solutionGoal:
        'By helping users see their real-time queue the moment they logged in — ordered by severity and SLA proximity, not arrival time.',
      goalMedia: 'Priority model: 4 variables (severity, SLA time remaining, client tier, recurrence)',

      solutionSteps:
        'Guiding them through a card-based triage flow — each item claimable, escalatable, or resolvable in two clicks. Status visible to all team members simultaneously so work was never duplicated.',
      stepsMedia: 'Wireframes: queue view, card detail, and escalation modal',

      solutionExecute:
        'And enabling them to route to the correct Slack channel or Jira board directly from the card — no tab-switching, no copy-pasting ticket numbers.',
      executeMedia: 'Prototype: one-click Jira escalation from triage card',

      impact:
        'P1 response time dropped from 4.7 hours to 52 minutes. Missed escalations fell by 78%. The ops team recovered an estimated 6 hours of collective productivity per week — and both enterprise client complaints were formally closed within 30 days of launch.',
      impactMedia: 'Response time trend: 12 weeks pre and post launch, by severity tier',

      designSystem:
        'Severity communicated through shape and position — not just colour — to remain accessible across all vision types. Monospace type for ticket IDs and timestamps. Motion used for one thing only: a subtle pulse on newly arrived P1 cards.',
      designSystemMedia: 'Design tokens: severity scale, status indicators, and alert motion specs',
    },
  },

  {
    id: 'project-gamma',
    title: 'Cross-Team Review Hub',
    tagline: 'One space for every stakeholder to align, annotate, and ship.',
    categories: ['exploration'],
    coverColor: '#E4E8DD',
    year: '2024',
    role: 'Sole Product Designer',
    company: 'Company C',
    caseStudy: {
      context:
        'Design, product, and marketing teams needed a reliable way to review and approve design work before engineering handoff. At any given time, 6–8 projects were in active review across teams.',
      contextMedia: 'Stakeholder map: 14 people involved in a single design review cycle',

      problemState:
        'But the review process was completely scattered. Feedback lived in Figma comments, Slack threads, email replies, and a Notion doc that nobody kept up to date. There was no single record of what had been decided — or by whom.',
      problemMedia: 'Feedback audit: one design reviewed across 5 channels, 23 contradictory comments',

      designQuestion:
        'Therefore designers struggled to know what was final. They received contradictory feedback from different stakeholders, with no way to tell which comments represented decisions versus opinions. Handoffs were delayed by an average of 5 days while the same questions were relitigated in yet another meeting.',
      failureMedia: 'Timeline: average 8-day review cycle mapped against actual decision moments',

      opportunity:
        'So there was an opportunity to design a dedicated review space where work was presented in context, feedback was structured, and approvals were explicit — with a clear record of who signed off and when.',
      opportunityMedia: 'Concept: a review "stage" that mirrors how work is actually presented in design critiques',

      solutionGoal:
        'By giving every stakeholder a single URL to review the full user flow — in context, not as isolated screens — with their role and scope of feedback clearly defined upfront.',
      goalMedia: 'Role-based access model: viewer / commenter / approver per project',

      solutionSteps:
        'Guiding them through a structured review template: overview → annotated flows → open questions → approval gate. Stakeholders could only mark a project approved once all open questions had a resolution.',
      stepsMedia: 'Wireframes: review template, annotation layer, and resolution thread',

      solutionExecute:
        'And enabling a one-click Jira handoff with all approved assets, decisions, and design specs attached — automatically, without the designer assembling a handoff doc by hand.',
      executeMedia: 'Prototype: approval gate → Jira ticket with auto-populated spec summary',

      impact:
        'The average review cycle dropped from 8 days to 3. Engineering revision requests — caused by unclear or misunderstood specs — fell by 40% in the first quarter after launch.',
      impactMedia: 'Review cycle duration: 10 projects before and after, by team',

      designSystem:
        'Deliberately minimal UI — the product being reviewed should hold all the attention, not the tool. Annotation colours mapped to stakeholder roles for instant attribution. No decorative motion anywhere in the interface.',
      designSystemMedia: 'UI kit: annotation system, role colour palette, and approval states',
    },
  },

  {
    id: 'project-delta',
    title: 'Modular Design System',
    tagline: 'A component library that scales from startup to enterprise.',
    categories: ['data-retrieval'],
    coverColor: '#EDE8E0',
    year: '2023',
    role: 'Sole Design Systems Lead',
    company: 'Company D',
    caseStudy: {
      context:
        'A product team scaling from 3 to 12 designers needed a shared foundation to build consistent experiences across a growing suite of 4 products — each with overlapping but subtly different UI needs.',
      contextMedia: 'Audit: component inventory across 4 products — 340 unique instances, 23% consistent',

      problemState:
        'But each designer worked from their own Figma file. Components were duplicated, diverged over time, and named differently across teams. Engineering had no reliable source of truth — they were reverse-engineering design intent from each new file they received.',
      problemMedia: 'Side-by-side: the same "button" component, 11 variations across 4 product files',

      designQuestion:
        'Therefore visual inconsistencies shipped regularly, and engineers spent an estimated 30% of UI development time making decisions that should have been resolved at the design layer — spacing calls, colour choices, interaction states.',
      failureMedia: 'Engineering time log: UI decision overhead per sprint across 3 teams',

      opportunity:
        'So there was an opportunity to design a token-based design system that both designers and engineers could use as a single source of truth — one that scaled as the product evolved rather than requiring a rebuild every 18 months.',
      opportunityMedia: 'Token architecture diagram: primitive → semantic → component',

      solutionGoal:
        'By giving designers a library of components covering 90% of everyday use cases, with explicit guidance on when — and how — to create a new pattern.',
      goalMedia: 'Component coverage audit: 90 components mapped to 4 product surface areas',

      solutionSteps:
        'Guiding both designers and engineers through a shared token architecture (primitive → semantic → component), documented in Storybook with usage rationale, do/don\'t examples, and accessibility annotations for every component.',
      stepsMedia: 'Storybook: button component page with all variants, states, and guidelines',

      solutionExecute:
        'And enabling a Figma-to-code pipeline using design tokens synced via a shared JSON file — eliminating the handoff gap for colour, spacing, and typography entirely.',
      executeMedia: 'Pipeline diagram: Figma tokens → JSON → Tailwind config → Storybook',

      impact:
        'New feature UI now takes 40% less design time on average. Engineering UI decision overhead dropped from 30% to under 8% of sprint time. Two additional product teams adopted the system within 3 months of launch without any formal onboarding.',
      impactMedia: 'Adoption curve: system usage across 6 teams over 6 months',

      designSystem:
        'Built on an 8px base grid. 5-level semantic colour scale with a separate data visualisation palette. 3-tier type system: display / body / label. Dark mode supported from day one via a single token swap.',
      designSystemMedia: 'Token sheet: colour, spacing, radius, elevation, and motion primitives',
    },
  },

  {
    id: 'project-epsilon',
    title: 'Onboarding Re-Architecture',
    tagline: 'Reducing time-to-value for complex B2B products.',
    categories: ['learning'],
    coverColor: '#E8DDE8',
    year: '2022',
    role: 'Sole Product Designer',
    company: 'Company E',
    caseStudy: {
      context:
        'New customers of a complex B2B SaaS platform needed to configure the product to match their specific workflows before they could get any value from it. First impressions were everything — and the clock started at signup.',
      contextMedia: 'Session recordings: 8 new users in their first 30 minutes, side by side',

      problemState:
        'But onboarding was a 47-step process documented in a PDF walkthrough emailed at signup. Support agents guided customers through it manually, one call at a time. Every customer\'s first experience was: read a PDF, get confused, book a call, repeat.',
      problemMedia: 'Onboarding audit: PDF walkthrough annotated with 19 common drop-off points',

      designQuestion:
        'Therefore 62% of new customers never completed setup. Most abandoned before reaching their first moment of meaningful output — a live report, a configured workspace, anything that proved the product worked for them. They churned within 60 days, citing the product as too complex to get started with.',
      failureMedia: 'Funnel: signup → setup complete → first value moment, with 62% drop-off marked',

      opportunity:
        'So there was an opportunity to design an in-product onboarding experience that adapted to each customer\'s role and use case — and guided them to their first success moment without a support call, a PDF, or a second visit.',
      opportunityMedia: 'Concept: adaptive onboarding paths based on a 4-question intake',

      solutionGoal:
        'By understanding who the user was and what they were trying to achieve on day one — through a short, focused intake — and building the rest of onboarding around that answer.',
      goalMedia: 'Intake model: 4 questions mapped to 6 onboarding paths and their success definitions',

      solutionSteps:
        'Guiding them through a path with visible progress, each step ending in a concrete output — not a form submitted, but something real: a report generated, a team member invited, a workflow configured.',
      stepsMedia: 'Wireframes: adaptive onboarding flow across 3 user types',

      solutionExecute:
        'And enabling users to reach their first meaningful moment — a live report or an active workspace — within 15 minutes, without leaving the onboarding flow or contacting support.',
      executeMedia: 'Prototype: first-time user reaching live report in under 12 minutes',

      impact:
        'Activation rate increased from 38% to 71% in the first 90 days after launch. Support-assisted onboarding dropped by 55%. Churn within the first 60 days fell from 28% to 11%. The team estimated $1.2M in recovered ARR from customers who would previously have churned.',
      impactMedia: 'Key metrics: activation, churn, and support volume — 90-day pre/post comparison',

      designSystem:
        'Warm, encouraging copy throughout — progress framed as "you\'re building something" not "you\'re filling in a form." Progress indicators use position, not percentage, to reduce completion anxiety. Motion used to guide attention from one step to the next, never to decorate.',
      designSystemMedia: 'Onboarding component kit: progress rail, step cards, success moments, and empty states',
    },
  },
]; */

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectsByCategory(categoryId) {
  return PROJECTS.filter((p) => p.categories.includes(categoryId));
}

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id);
}

export function getCategoryById(id) {
  return CATEGORIES.find((c) => c.id === id);
}
