import type { Project } from '../data/projects';
import { withBasePath } from '../lib/paths';
export function ProjectMedia({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.media.type === 'video') {
    return (
      <video
        key={project.media.src}
        className={compact ? 'card-media' : 'project-video'}
        src={withBasePath(project.media.src)}
        controls={!compact}
        muted={compact}
        loop={compact}
        playsInline
        preload="metadata"
        poster={project.media.poster ? withBasePath(project.media.poster) : undefined}
        aria-label={project.media.alt}
      />
    );
  }

  return <img className={compact ? 'card-media' : 'project-video'} src={withBasePath(project.media.src)} alt={project.media.alt} />;
}
