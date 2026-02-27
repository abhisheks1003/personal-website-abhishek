export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  stack: string[];
  status: "Shipped" | "WIP" | "Prototype";
  githubUrl?: string;
  liveUrl?: string;
  screenshots: string[];
  learned: string;
}

export const projects: Project[] = [
  {
    slug: "ai-ops-dashboard",
    title: "AI Ops Dashboard",
    description:
      "Real-time operations dashboard powered by AI for monitoring deployments, system health, and automated incident response.",
    longDescription:
      "A comprehensive operations dashboard that uses AI to monitor deployments, track system health metrics, and automate incident response workflows. Built with Next.js for the frontend, Postgres for persistent storage, and deployed on Vercel with edge functions for low-latency data processing.",
    stack: ["Next.js", "Postgres", "Vercel", "TypeScript"],
    status: "WIP",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    screenshots: [],
    learned:
      "Learned how to architect real-time data pipelines with server-sent events and how to structure a Postgres schema for time-series operational data. Also gained experience with Vercel edge functions for latency-sensitive endpoints.",
  },
  {
    slug: "rfp-summarizer",
    title: "RFP Summarizer",
    description:
      "AI-powered tool that summarizes lengthy RFP documents and extracts key requirements using retrieval-augmented generation.",
    longDescription:
      "An intelligent document processing tool that ingests RFP (Request for Proposal) documents, chunks them for retrieval, and generates concise summaries highlighting key requirements, deadlines, and evaluation criteria. Uses a retrieval-augmented generation pipeline to ensure accuracy.",
    stack: ["LLM", "Retrieval", "Next.js", "TypeScript"],
    status: "Shipped",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    screenshots: [],
    learned:
      "Deepened understanding of RAG architectures, embedding strategies, and chunk-size trade-offs. Learned to build effective prompt chains that extract structured data from unstructured documents.",
  },
  {
    slug: "decision-latency-tracker",
    title: "Decision Latency Tracker",
    description:
      "Analytics tool that measures and visualizes how long key decisions take across teams and projects.",
    longDescription:
      "A data visualization tool that tracks decision-making timelines across projects and teams. Captures decision points, measures latency from proposal to resolution, and surfaces bottlenecks through interactive charts and dashboards.",
    stack: ["Analytics", "Data Viz", "TypeScript", "React"],
    status: "Prototype",
    githubUrl: "https://github.com",
    screenshots: [],
    learned:
      "Explored advanced charting techniques with SVG-based visualizations. Learned how to model decision workflows as directed graphs and compute critical-path latencies.",
  },
];
