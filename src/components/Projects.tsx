import Section, { Reveal } from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section id="projects" index="02" label="Selected Projects" title="Selected work, built with care.">
      {projects.map((p, i) => <Reveal key={p.name}><ProjectCard p={p} index={i} /></Reveal>)}
    </Section>
  );
}
