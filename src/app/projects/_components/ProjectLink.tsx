import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  imageUrl: string;
}

export default function ProjectLink({ title, imageUrl }: ProjectProps) {
  return (
    <Link
      href={`/projects/${title}`}
      className='relative hover:z-10 group flex flex-col hover:scale-105 hover:ring-4 ring-amber-700 transform duration-200'
    >
      <Image
        src={imageUrl}
        alt='project'
        width={280}
        height={280}
        className='object-cover lg:w-[400px] lg:h-[400px] rounded-sm'
      />
      <div className='absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black/30 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
        {title}
      </div>
    </Link>
  );
}
