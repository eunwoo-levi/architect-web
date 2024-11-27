import ProjectLink from './_components/ProjectLink';
import { data } from './data';

interface ProjectProps {
  title: string;
  imageUrl: string;
}

export default function ProjectPage() {
  return (
    <main className='w-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-center px-2 md:px-8 mt-[80px] mb-[100px]'>
      {data.map((project: ProjectProps) => (
        <ProjectLink key={project.title} title={project.title} imageUrl={project.imageUrl} />
      ))}
    </main>
  );
}
