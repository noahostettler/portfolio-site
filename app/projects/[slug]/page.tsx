import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectMedia } from '../../components/ProjectMedia';
import { SiteFooter, SiteHeader } from '../../components/SiteHeader';
import { getProject, projects } from '../../data/projects';
import { withBasePath } from '../../lib/paths';
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); return project ? { title: `${project.title} — Noa Hostettler`, description: project.summary } : {}; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = getProject(slug); if (!project) notFound(); const current = projects.findIndex(p => p.slug === slug); const next = projects[(current + 1) % projects.length]; return <><SiteHeader /><main className={`project-page theme-${project.theme}`}>
  <header className="project-hero section-shell"><div className="project-breadcrumb"><Link href="/projects">Projets</Link><span>/</span><span>{project.index}</span></div><p className="eyebrow"><span /> {project.eyebrow}</p><h1>{project.title}</h1><div className="project-lede"><p>{project.summary}</p><dl><div><dt>Rôle</dt><dd>{project.role}</dd></div><div><dt>Contexte</dt><dd>{project.context}</dd></div><div><dt>Année</dt><dd>{project.year}</dd></div></dl></div>{project.link && <a className="primary-action steam-page-action" href={project.link.href} target="_blank" rel="noreferrer">{project.link.label}</a>}</header>
  <section className="media-stage section-shell"><ProjectMedia project={project} /></section>
  <section className="project-body section-shell"><div className="body-heading"><p className="eyebrow"><span /> Contribution</p><h2>Ce que j’ai construit.</h2></div><ol className="contribution-list">{project.contributions.map((item,index) => <li key={item}><span>0{index+1}</span><p>{item}</p></li>)}</ol></section>
  <section className="system-section section-shell"><div className="section-kicker"><span>TECH</span><p>Systèmes remarquables</p><i /></div><div className="system-grid">{project.systems.map(system => <article key={system.title}><h3>{system.title}</h3><p>{system.text}</p></article>)}</div></section>
  {project.secondaryImage && <section className="secondary-media section-shell"><img src={withBasePath(project.secondaryImage.src)} alt={project.secondaryImage.alt} /></section>}
  <section className="stack-section section-shell"><div><p className="eyebrow"><span /> Stack</p><h2>Technologies</h2></div><ul className="stack-list">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></section>
  <section className="next-project section-shell"><div><p>Projet suivant · {next.index}</p><h2>{next.shortTitle}</h2></div><Link className="next-project-button" href={`/projects/${next.slug}`}>Découvrir ce projet</Link></section>
  </main><SiteFooter /></>; }
