import Netflix from "@/public/Projects/netflix.png";
import Cryptos from "@/public/Projects/Cryptos.png";
import Spotify from "@/public/Projects/Spotify.png";
import Saas from "@/public/Projects/Saas.png";

import SS from "@/public/Projects/SS.png";
export const NavLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const Data = [
  {
    id: "1",
    title: "UR AI PAL",
    desc: "UR AI PAL is AI Software as a service provides 5 AI services Chat, Code, Image, Video, and Music generations integrating OpenAI and Replicate AI APIS",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Prisma",
      "Stripe",
      "Tailwind",
    ],
    github: "https://github.com/poshdy/ai-saas",
    site: "https://ai-saas-pearl-ten.vercel.app/",
    src: Saas,
  },
  {
    id: "2",
    title: "Spotify clone",
    desc: "Spotify clone is fullstack application you can Discover & Listen all trending songs and adding them in your Favorites list and store in Firebase firestore.",
    tech: ["React", "TypeScript", "Zustand", "Supabase", "Tailwind"],
    github: "https://github.com/poshdy/Tempom",
    site: "https://tempo-poshdy.vercel.app/",
    src: Spotify,
  }, 
  {

    id: "3",
    title: "Netflix clone",
    desc: "netflix clone is fullstack application comes with full crud opearations and complete authentication system with SSO using Supabase.",
    tech: ["Next", "React", "Typescript", "Supabase", "Tailwind"],
    github: "https://github.com/poshdy/netflixclone",
    site: "https://netflixclone-rho-lac.vercel.app/",
    src: Netflix,
  },
  {
    id: "4",
    title: "Crytos",
    desc: "All-in-one cryptocurrency tracking app. View the latest prices, get all currency stats, coin data visualization and read the latest crypto news.",
    tech: ["Next", "Typescript", "React", "shdcn ui"],
    github: "https://github.com/poshdy/cryptos",
    site: "https://cryptos-seven.vercel.app/",
    src: Cryptos,
  },
  // {
  //   id: "4",
  //   title: "Sniper Sneaker",
  //   desc: "Sniper Sneaker is Sneakers Ecommerce website built with React and Sanity with full shopping cart functionality",
  //   tech: [
  //     "React",
  //     "Javascript",
  //     "Redux toolkit",
  //     "Sanity.io",
  //     "React query",
  //     "Tailwind",
  //   ],
  //   github:
  //     "https://github.com/poshdy/SniperSneaker-sanity-ecom/tree/master/snipersneaker",
  //   site: "https://snipersneaker.vercel.app/",
  //   src: SS,
  // },

];
