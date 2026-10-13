import Link from 'next/link';
import { ProjectMedia } from '../components/ProjectMedia';
import { SiteFooter, SiteHeader } from '../components/SiteHeader';
import { projects } from '../data/projects';
export default function ProjectsPage() { return <><SiteHeader /><main><header className="page-hero section-shell"><p className="eyebrow"><span /> Index</p><h1>Projets</h1><p>Six projets, présentés selon ce que le code et les productions permettent de vérifier.</p></header><section className="projects-grid section-shell">{projects.map(project => <Link key={project.slug} href={`/projects/${project.slug}`} className={`project-tile theme-${project.theme}`}><div className="tile-media"><ProjectMedia project={project} compact /><span>{project.index}</span></div><p className="project-meta">{project.context}</p><h2>{project.shortTitle}</h2><p>{project.summary}</p><div className="tile-footer"><span>{project.role}</span><i aria-hidden="true" /></div></Link>)}</section></main><SiteFooter /></>; }
