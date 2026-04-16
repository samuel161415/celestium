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
    range: "Sep 2024 – Sep 2024",
    title: "Academy",
    description:
      "Launch of the Celestium Academy — onboarding materials, partner education, and developer guides.",
    status: "done",
  },
  {
    id: 2,
    range: "Oct 2024 – Oct 2024",
    title: "Event: Global Markets",
    description:
      "Cross-market liquidity event with featured pools and partner-driven prediction markets.",
    status: "done",
  },
  {
    id: 3,
    range: "Sep 2024 – Nov 2024",
    title: "celestium.network First Language Mutation",
    description:
      "Internationalization layer — first non-English locale ships across the staking and gaming surfaces.",
    status: "in-progress",
  },
  {
    id: 4,
    range: "Oct 2024 – Nov 2024",
    title: "Celestium Docs Update",
    description:
      "Comprehensive refresh of public docs covering CELT tokenomics, partner SDK, and CORE integration.",
    status: "in-progress",
  },
  {
    id: 5,
    range: "Oct 2024 – Nov 2024",
    title: "Academy V2",
    description:
      "Second iteration of the Academy with structured tracks for stakers, partners, and game studios.",
    status: "done",
  },
  {
    id: 6,
    range: "Oct 2024 – Nov 2024",
    title: "Stones",
    description:
      "Introduction of Stones — on-chain reputation primitives tied to staking longevity and partner activity.",
    status: "upcoming",
  },
  {
    id: 7,
    range: "Oct 2024 – Nov 2024",
    title: "Stats Page",
    description:
      "Unified analytics surface for ecosystem-wide volume, partner performance, and pool health.",
    status: "in-progress",
  },
  {
    id: 8,
    range: "Nov 2024 – Dec 2024",
    title: "Event Management Part A",
    description:
      "First module of the on-chain event engine enabling partners to spin up custom prediction markets.",
    status: "upcoming",
  },
  {
    id: 9,
    range: "Dec 2024 – Jan 2025",
    title: "Multiplayer Roulette",
    description:
      "Flagship multiplayer gaming primitive — provably fair, partner-pluggable, fully on-chain settlement.",
    status: "upcoming",
  },
];
