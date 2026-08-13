import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function PortfolioPage() {
  return <main className="construction-page"><Image className="construction-logo" src="/logo-nelson.png" width={1254} height={1254} alt="Logo Nelson Souza Dev" priority /><div className="construction-icon"><Construction aria-hidden="true" /></div><p className="eyebrow">PORTFÓLIO</p><h1 className="construction-title">Em construção</h1><div className="divider" aria-hidden="true"><span /><i /><span /></div><p className="construction-copy">Estou preparando uma seleção dos meus melhores projetos. Em breve, novas ideias vão ganhar forma por aqui.</p><Link className="back-link" href="/"><ArrowLeft aria-hidden="true" />Voltar aos links</Link></main>;
}
