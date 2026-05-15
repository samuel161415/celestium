export type RoadmapItem = {
  id: number;
  range: string;
  title: string;
  description: string;
  status: "done" | "in-progress" | "upcoming";
};

export const roadmapItems: RoadmapItem[] = [
  {
    id: 1,
    range: "Sep 2025 – Sep 2025",
    title: "Academy",
    description:
      "Launch of the Celestium Academy — onboarding materials, partner education, and developer guides.",
    status: "done",
  },
  {
    id: 2,
    range: "Oct 2025 – Oct 2025",
    title: "Event: Global Markets",
    description:
      "Cross-market liquidity event with featured pools and partner-driven prediction markets.",
    status: "done",
  },
  {
    id: 3,
    range: "Sep 2025 – Nov 2025",
    title: "celestium.network First Language Mutation",
    description:
      "Internationalization layer — first non-English locale ships across the staking and gaming surfaces.",
    status: "in-progress",
  },
  {
    id: 4,
    range: "Oct 2025 – Nov 2025",
    title: "Celestium Docs Update",
    description:
      "Comprehensive refresh of public docs covering CELT tokenomics, partner SDK, and CORE integration.",
    status: "in-progress",
  },
  {
    id: 5,
    range: "Oct 2025 – Nov 2025",
    title: "Academy V2",
    description:
      "Second iteration of the Academy with structured tracks for stakers, partners, and game studios.",
    status: "done",
  },
  {
    id: 6,
    range: "Oct 2025 – Nov 2025",
    title: "Stones",
    description:
      "Introduction of Stones — on-chain reputation primitives tied to staking longevity and partner activity.",
    status: "upcoming",
  },
  {
    id: 7,
    range: "Oct 2025 – Nov 2025",
    title: "Stats Page",
    description:
      "Unified analytics surface for ecosystem-wide volume, partner performance, and pool health.",
    status: "in-progress",
  },
  {
    id: 8,
    range: "Nov 2025 – Dec 2025",
    title: "Event Management Part A",
    description:
      "First module of the on-chain event engine enabling partners to spin up custom prediction markets.",
    status: "upcoming",
  },
  {
    id: 9,
    range: "Dec 2025 – Jan 2026",
    title: "Multiplayer Roulette",
    description:
      "Flagship multiplayer gaming primitive — provably fair, partner-pluggable, fully on-chain settlement.",
    status: "upcoming",
  },

  {
    id: 10,
    range: "Jan 2026 – Jan 2026",
    title: "MVP Planning & Architecture",
    description:
      "Finalize platform architecture, core smart contract design, and MVP feature specifications.",
    status: "done",
  },
  {
    id: 11,
    range: "Feb 2026 – Feb 2026",
    title: "Core Platform Development",
    description:
      "Start development of staking, partner pools, and basic gaming primitives for MVP.",
    status: "done",
  },
  {
    id: 12,
    range: "Mar 2026 – Mar 2026",
    title: "Internal Testing & QA",
    description:
      "Begin internal testing of smart contracts and platform functionality with the dev team.",
    status: "done",
  },
  {
    id: 13,
    range: "Apr 2026 – Apr 2026",
    title: "Beta Partner Onboarding",
    description:
      "Invite first wave of partners and beta users to test the MVP environment and provide feedback.",
    status: "done",
  },
  {
    id: 14,
    range: "May 2026 – May 2026",
    title: "MVP Core Launch",
    description:
      "Deploy MVP platform publicly for staking, partner pools, and initial gaming primitives.",
    status: "in-progress",
  },
];
