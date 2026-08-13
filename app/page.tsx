import { ArrowRight, AtSign, BriefcaseBusiness, Contact, GitFork, MessageCircle } from "lucide-react";

const SOCIAL_LINKS = {
  portfolio: "#",
  whatsapp: "https://wa.me/SEU_NUMERO",
  github: "#",
  linkedin: "#",
  instagram: "https://instagram.com/nelsonn.dev",
} as const;

const links = [
  { title: "Portfólio", icon: BriefcaseBusiness, href: SOCIAL_LINKS.portfolio },
  { title: "WhatsApp", icon: MessageCircle, href: SOCIAL_LINKS.whatsapp },
  { title: "GitHub", icon: GitFork, href: SOCIAL_LINKS.github },
  { title: "LinkedIn", icon: Contact, href: SOCIAL_LINKS.linkedin },
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span className="bracket bracket-left">&lt;</span>
      <span className="bracket bracket-right">&gt;</span>
      <span className="circuit circuit-a" />
      <span className="circuit circuit-b" />
      <span className="node node-a" />
      <span className="node node-b" />
      <span className="node node-c" />
      <span className="dot dot-a" />
      <span className="dot dot-b" />
      <span className="dot dot-c" />
    </div>
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
        <AtSign aria-hidden="true" />
      </a>
      <p>@nelsonn.dev</p>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <nav aria-label="Links principais">
        {links.map((link) => <LinkCard key={link.title} {...link} />)}
      </nav>
      <SocialFooter />
    </main>
  );
}
