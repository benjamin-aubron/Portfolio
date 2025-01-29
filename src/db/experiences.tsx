import { Experience } from "@/types/types";

export const experiences: Experience[] = [
  {
    entity:"",
    position: "Développeur Web",
    place: "Lyon, France",	
    activity: "study",
    startDate: "2024",
    duration: "1 an",
    description: "Formation au développement web en autodidacte, en utilisant React et en particulier le framework Next.js. Création de sites et d’applications web. Gestion de l’authentification et de bases de données.",
    skills: ["React,", "Next,", "PostgreSQL,", "Prisma,", "Docusaurus"],
  },
  {
    entity: "Euronet",
    position: "Projet Entrepreuneurial",
    place: "Lyon, France",
    activity: "entrepreneurship",
    startDate: "2022",
    endDate: "2024",
    duration: "2 ans",
    description: "Développement d’une plateforme pour la transparence des comptes publics dans l’objectif de rendre accessible aux contribuables les données sur le bon usage de l’argent public.",
    skills: ["Web3,", "Blockchain,", "Finance Publique"],
  },
  {
    entity: "HarvardX",
    position: "Formation Data Science",             
    place: "Chambéry, France",
    activity: "study",
    startDate: "2021",
    endDate: "2022",
    duration: "1 an",
    description: "Formation diplômante “Data Science with R” d’HarvardX. Data Science avec Python en machine learning et deep learning (Keras et TensorFlow). Création d’un logiciel d’achat vente d’actif numérique avec effet levier et stratégies optimisées par IA. Optimisation de portefeuille selon les concepts de Markovitz",
    skills: ["Python,", "R,", "Machine-learning,", "Deep-learning,", "Keras,", "Tensorflow,", "Scikit-learn"],
  },
  {
    entity: "Manufacture Cartier",
    position: "Ingénieur en logistique industrielle",
    place: "Fribourg, Suisse",	
    activity: "job",
    startDate: "2018",
    endDate: "2020",
    duration: "2 ans",
    description: (
      <div>
        <h3 className="text-xl pb-1">Chargé de missions logistique :</h3>
        <p className="pb-2"> Refonte des flux de production de la ligne Or, flux tiré vs flux poussé, gestion des stocks, organisation de production et suivi d’efficience. Création d’indicateurs pour le pilotage de production. Responsabilité du portefeuille de projets de la manufacture.</p>
        <h3 className="text-xl pb-1">Ordonnanceur :</h3>
        <p>Ordonnancement des métiers d’usinage, polissage et assemblage pour la ligne Or de la manufacture. Gestion des stocks des produits semi-finis pour assurer la production des montres. Création de KPI pour assurer le suivi des quantités de lancements sur les nouveautés.</p>
      </div>
    ),
    skills: ["Ordonnancement,", "Gestion de stocks,", "KPI,", "PM Office,", "Production,", "Logistique"],
  },
  {
    entity: "Chaumet",
    position: "Stage Assistant chef de projet",
    place: "Paris, France",
    activity: "job",
    startDate: "2018",
    endDate: "2018",
    duration: "6 mois",
    description: "Calcul des lead time et simulation des coûts de transports entre la France et les clients en Asie, incluant les coûts de douanes en fonction des produits.",
    skills: ["Python,", "Django,", "PostgreSQL,", "Docker,", "Kubernetes,", "AWS"],
  },
  {
    entity: "UTBM",
    position: "Master Affaires Industrielles Internationales (A2i)",
    place: "Belfort, France",
    activity: "study",
    startDate: "2017",
    endDate: "2018",
    duration: "1 an",
    description: "",
  },
  { 
    entity: "UTSEUS",
    position: "Diplôme universitaire sur l’innovation et l’entrepreneuriat",
    place: "Shanghai, Chine",
    activity: "study",
    startDate: "2017",
    endDate: "2017",
    duration: "6 mois",
    description: "",
  },
  {
    entity: "UTBM",
    position: "Diplôme d’ingénieur en Logistique industrielle",
    place: "Belfot, France",
    activity: "study",
    startDate: "2014",
    endDate: "2018",
    duration: "4 ans",
    description: "",
  },

]

