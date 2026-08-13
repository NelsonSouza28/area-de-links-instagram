import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

const SOCIAL_LINKS = {
  portfolio: "#",
  whatsapp: "https://wa.me/SEU_NUMERO",
  github: "#",
  linkedin: "#",
  instagram: "https://instagram.com/nelsonn.dev",
} as const;

const links = [
  { title: "Portfólio", icon: BriefcaseBusiness, href: SOCIAL_LINKS.portfolio },
  { title: "WhatsApp", icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp },
  { title: "GitHub", icon: FaGithub, href: SOCIAL_LINKS.github },
  { title: "LinkedIn", icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin },
];

function BrandMark() {
  return (
    <Image className="brand-mark" src="/logo-nelson.png" width={1254} height={1254} alt="Logo Nelson Souza Dev" priority />
  );
}

function Header() {
  return (
    <header className="header">
      <BrandMark />
      <h1>NELSON SOUZA</h1>
      <p className="dev">DEV</p>
      <div className="divider" aria-hidden="true"><span /><i /><span /></div>
      <p className="tagline">Desenvolvendo soluções inteligentes<br />para transformar ideias em realidade.</p>
    </header>
  );
}

function LinkCard({ title, href, icon: Icon }: (typeof links)[number]) {
  return (
    <a className="link-card" href={href} target="_blank" rel="noreferrer">
      <span className="icon-wrap"><Icon aria-hidden="true" /></span>
      <span className="card-title">{title}</span>
      <ArrowRight className="arrow" aria-hidden="true" />
    </a>
  );
}

function SocialFooter() {
  return (
    <footer>
      <div className="connect"><span />CONECTE-SE COMIGO<span /></div>
      <a className="instagram" href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram @nelsonn.dev">
        <FaInstagram aria-hidden="true" />
      </a>
      <p>@nelsonn.dev</p>
    </footer>
  );
}

export default function Home() {
  return <main><Header /><nav aria-label="Links principais">{links.map((link) => <LinkCard key={link.title} {...link} />)}</nav><SocialFooter /></main>;
}
