import Netflix from "@/public/Projects/netflix.png";
import Cryptos from "@/public/Projects/Cryptos.png";
import Spotify from "@/public/Projects/Spotify.png";
import Abcity from "@/public/Projects/Abcity.png";
import SS from "@/public/Projects/SS.png";
import { StaticImageData } from "next/image";
export const NavLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];
interface Iprop {
  id: string;
  title: string;
  desc: string;
  tech: string[];
  github:string;
  site: string;
  src:  StaticImageData;
}

export const Data = [
  {
    id: "1",
    title: "Netflix clone",
    desc: "netflix clone is fullstack application comes with full crud opearations and complete authentication system with SSO using Supabase.",
    tech: ["Next", "React", "Typescript", "Supabase", "Tailwind"],
    github: "https://github.com/poshdy/netflixclone",
    site: "https://netflixclone-rho-lac.vercel.app/",
    src: Netflix,
  },
  {
    id: "2",
    title: "Spotify clone",
    desc: "Spotify clone is fullstack application you can Discover & Listen all trending songs and adding them in your Favorites list and store in Firebase firestore.",
    tech: ["React", "Javascript", "Redux toolkit", "Firebase", "Tailwind"],
    github: "https://github.com/poshdy/Tempom",
    site: "https://tempo-mauve.vercel.app/",
    src: Spotify,
  },
  {
    id: "3",
    title: "Crytos",
    desc: "All-in-one cryptocurrency tracking app. View the latest prices, get all currency stats, coin data visualization and read the latest crypto news.",
    tech: ["Next", "Typescript", "React", "shdcn ui"],
    github: "https://github.com/poshdy/cryptos",
    site: "https://cryptos-seven.vercel.app/",
    src: Cryptos,
  },
  {
    id: "4",
    title: "Sniper Sneaker",
    desc: "Sniper Sneaker is Sneakers Ecommerce website built with React and Sanity with full shopping cart functionality",
    tech: [
      "React",
      "Javascript",
      "Redux toolkit",
      "Sanity.io",
      "React query",
      "Tailwind",
    ],
    github:
      "https://github.com/poshdy/SniperSneaker-sanity-ecom/tree/master/snipersneaker",
    site: "https://snipersneaker.vercel.app/",
    src: SS,
  },
  {
    id: "5",
    title: "ABCITY",
    desc: "Abcity is fitness agency landing page also there is Bmi & Daily calorie calculators",
    tech: ["React", "Javascript", , "Tailwind", "React query"],
    github: "https://github.com/poshdy/ABCITY/tree/master/gbro",
    site: "https://abcity.vercel.app/",
    src: Abcity,
  },
];
