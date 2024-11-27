import Image from 'next/image';
import Link from 'next/link';

export default function ProjectLink(title: string, imageUrl: string) {
  return (
    <Link href={`/projects/${title}`}>
      <Image src={imageUrl} alt='project' width={80} height={80} />
    </Link>
  );
}
