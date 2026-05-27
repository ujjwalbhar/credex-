import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  DatabaseZap,
  Gem,
  Server,
  Sparkles,
} from "lucide-react";

export type CreditListing = {
  id: string;
  provider: string;
  category: "AI API" | "Cloud" | "Developer Tools";
  amount: number;
  discount: number;
  validity: string;
  transferTime: string;
  verification: string;
  status: "Ready" | "Limited" | "New";
  minimumOrder: number;
  icon: typeof Bot;
  accent: string;
};

export const creditListings: CreditListing[] = [
  {
    id: "openai-tier5",
    provider: "OpenAI API Credits",
    category: "AI API",
    amount: 25000,
    discount: 48,
    validity: "12 months",
    transferTime: "12-24 hours",
    verification: "Tier, balance, and ownership verified",
    status: "Ready",
    minimumOrder: 2500,
    icon: Sparkles,
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "anthropic-enterprise",
    provider: "Anthropic Claude Credits",
    category: "AI API",
    amount: 10000,
    discount: 52,
    validity: "12 months",
    transferTime: "24 hours",
    verification: "Console access and invoice trail reviewed",
    status: "Limited",
    minimumOrder: 1000,
    icon: BrainCircuit,
    accent: "bg-amber-100 text-amber-700",
  },
  {
    id: "aws-startup",
    provider: "AWS Startup Credits",
    category: "Cloud",
    amount: 100000,
    discount: 60,
    validity: "24 months",
    transferTime: "1-3 days",
    verification: "Account health, org transfer, and eligibility checked",
    status: "Ready",
    minimumOrder: 5000,
    icon: Cloud,
    accent: "bg-sky-100 text-sky-700",
  },
  {
    id: "gcp-growth",
    provider: "Google Cloud Credits",
    category: "Cloud",
    amount: 50000,
    discount: 55,
    validity: "18 months",
    transferTime: "1-2 days",
    verification: "Billing account and expiration verified",
    status: "New",
    minimumOrder: 5000,
    icon: Server,
    accent: "bg-rose-100 text-rose-700",
  },
  {
    id: "azure-openai",
    provider: "Azure OpenAI Credits",
    category: "AI API",
    amount: 25000,
    discount: 45,
    validity: "12 months",
    transferTime: "24-48 hours",
    verification: "Tenant, SKU, and credit balance verified",
    status: "Ready",
    minimumOrder: 5000,
    icon: Bot,
    accent: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "cursor-business",
    provider: "Cursor Business Seats",
    category: "Developer Tools",
    amount: 12000,
    discount: 35,
    validity: "Annual seats",
    transferTime: "Same day",
    verification: "Seat ownership and admin transfer verified",
    status: "Limited",
    minimumOrder: 1200,
    icon: Code2,
    accent: "bg-lime-100 text-lime-700",
  },
  {
    id: "pinecone-vector",
    provider: "Vector DB Credits",
    category: "Developer Tools",
    amount: 8000,
    discount: 42,
    validity: "12 months",
    transferTime: "24 hours",
    verification: "Credit source and workspace transfer checked",
    status: "New",
    minimumOrder: 1000,
    icon: DatabaseZap,
    accent: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "gemini-cloud",
    provider: "Gemini API Credits",
    category: "AI API",
    amount: 15000,
    discount: 44,
    validity: "12 months",
    transferTime: "24 hours",
    verification: "Project access and billing controls verified",
    status: "Ready",
    minimumOrder: 1500,
    icon: Gem,
    accent: "bg-orange-100 text-orange-700",
  },
];

export const categories = ["All", "AI API", "Cloud", "Developer Tools"] as const;
