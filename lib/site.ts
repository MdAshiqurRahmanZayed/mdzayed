import { portfolioData } from "@/data/portfolio";

export const siteUrl = "https://ashiqzayed.app";
export const siteName = portfolioData.profile.name;
// Spellings people may search for. Used in keywords and structured data only.
export const nameVariants = [
  "Md. Ashiqur Rahman Zayed",
  "Md Ashiqur Rahman Zayed",
  "MD Ashiqur Rahman Zayed",
  "Ashiqur Rahman Zayed",
  "Ashiqur Zayed",
  "Ashiq Zayed",
  "Md Zayed",
  "Zayed",
];

export const siteDescription =
  "Software Engineer building scalable backend systems with Django and Odoo. Portfolio, experience and projects of Md. Ashiqur Rahman Zayed.";

export const routes = [
  { path: "/", priority: 1 },
  { path: "/career/", priority: 0.8 },
  { path: "/creative-showcase/", priority: 0.7 },
  { path: "/achievement/", priority: 0.6 },
  { path: "/contact/", priority: 0.6 },
];
