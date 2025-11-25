import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillBootstrapFill, BsRobot } from "react-icons/bs";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaNpm, FaGolang } from "react-icons/fa6";
import {
  SiCss3,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiLaravel,
  SiPhp,
  SiVuedotjs,
  SiFirebase,
  SiMysql,
  SiSupabase,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
} from "react-icons/si";

export type SkillProps = {
  [key: string]: {
    icon: JSX.Element;
    background: string;
    color: string;
    isActive?: boolean;
  };
};

const iconSize = 26;

export const STACKS: SkillProps = {
  Figma: {
    icon: <SiFigma size={iconSize} />,
    background: "bg-pink-500",
    color: "text-pink-500",
    isActive: true,
  },
  Framer: {
    icon: <TbBrandFramerMotion size={iconSize} />,
    background: "bg-indigo-500",
    color: "text-indigo-500",
    isActive: true,
  },
  Illustrator: {
    icon: <SiAdobeillustrator size={iconSize} />,
    background: "bg-orange-600",
    color: "text-orange-600",
    isActive: true,
  },
  Photoshop: {
    icon: <SiAdobephotoshop size={iconSize} />,
    background: "bg-blue-700",
    color: "text-blue-700",
    isActive: true,
  },
  Canva: {
    icon: <SiCanva size={iconSize} />,
    background: "bg-teal-500",
    color: "text-teal-500",
    isActive: true,
  },
  HTML: {
    icon: <SiHtml5 size={iconSize} />,
    background: "bg-orange-500",
    color: "text-orange-500",
    isActive: true,
  },
  CSS: {
    icon: <SiCss3 size={iconSize} />,
    background: "bg-blue-500",
    color: "text-blue-500",
    isActive: true,
  },
  JavaScript: {
    icon: <SiJavascript size={iconSize} />,
    background: "bg-yellow-400",
    color: "text-yellow-400",
    isActive: true,
  },
  Bootstrap: {
    icon: <BsFillBootstrapFill size={iconSize} />,
    background: "bg-violet-600",
    color: "text-violet-600",
    isActive: true,
  },
  TailwindCSS: {
    icon: <SiTailwindcss size={iconSize} />,
    background: "bg-sky-400",
    color: "text-sky-400",
    isActive: true,
  },
  Vue: {
    icon: <SiVuedotjs size={iconSize} />,
    background: "bg-green-400",
    color: "text-green-400",
    isActive: true,
  },
  Vite: {
    icon: <SiVite size={iconSize} />,
    background: "bg-purple-500",
    color: "text-purple-500",
    isActive: true,
  },
  npm: {
    icon: <FaNpm size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-500",
    isActive: true,
  },
  PHP: {
    icon: <SiPhp size={iconSize} />,
    background: "bg-indigo-400",
    color: "text-indigo-400",
    isActive: true,
  },
  Laravel: {
    icon: <SiLaravel size={iconSize} />,
    background: "bg-red-700",
    color: "text-red-700",
    isActive: true,
  },
  MySQL: {
    icon: <SiMysql size={iconSize} />,
    background: "bg-cyan-700",
    color: "text-cyan-700",
    isActive: true,
  },
  Firebase: {
    icon: <SiFirebase size={iconSize} />,
    background: "bg-amber-500",
    color: "text-amber-500",
    isActive: true,
  },
  Supabase: {
    icon: <SiSupabase size={iconSize} />,
    background: "bg-emerald-500",
    color: "text-emerald-500",
    isActive: true,
  },
  Github: {
    icon: <SiGithub size={iconSize} />,
    background: "bg-slate-800",
    color: "text-neutral-50",
    isActive: true,
  },
  AI: {
    icon: <BsRobot size={iconSize} />,
    background: "bg-fuchsia-700",
    color: "text-fuchsia-700",
    isActive: true,
  },
};
