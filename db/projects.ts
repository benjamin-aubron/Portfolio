import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    name: "Alaska Pete's Roadhouse Grille",
    src:"alaskaPete.png",
    description: "Création d'un site d'un restaurant permettant de présenter les menus, passer des commandes, réserver une table et gérer les paiements.",
    date: "Février 2025",
    techs: ["Next.js", "TailwindCSS", "TypeScript","BetterAuth", "Stripe", "Prisma"],
    url: "https://github.com/Benjamin-AUBRON/portfolio",
    github: "https://github.com/benjamin-aubron",
  },
  {
    name: "Amicale du Don du Sang de Lyon",
    src:"adsl.png",
    description: "Ce site, créé avec Docusaurus a pour objectif de présenter l'association, son fonctionnement (via la documentation) et son activité (via le blog).",
    date: "Décembre 2024 → Aujourd'hui",
    techs: ["React", "Docusaurus", "TailwindCSS"],
    url: "https://github.com/Benjamin-AUBRON/portfolio",
    github: "https://github.com/benjamin-aubron",
  },
  {
    name: "TheCryptoGalaxy",
    src:"theCryptoGalaxy.png",
    description: "TheCryptoGalaxy est un site rassemblant à un seul endroit les meilleurs outils et Dapp des écosystèmes blockchain les plus développés.",
    date: "2023 → Aujourd'hui",
    techs: ["React", "Next.js", "TailwindCSS", "TypeScript", "MagicUI"],
    url: "https://github.com/Benjamin-AUBRON/portfolio",
    github: "https://github.com/benjamin-aubron",
  }]