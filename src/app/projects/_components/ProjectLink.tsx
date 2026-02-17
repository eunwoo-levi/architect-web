import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  imageUrl: string;
  category?: string;
}

export default function ProjectLink({ title, imageUrl, category }: ProjectProps) {
  return (
    <Link
      href={`/projects/${encodeURIComponent(title)}`}
      className="group relative block overflow-hidden bg-stone-100"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Permanent subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {category && (
            <span className="text-[10px] tracking-[0.2em] text-accent-light uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {category}
            </span>
          )}
          <h3 className="text-white font-medium text-sm tracking-wide translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
        </div>

        {/* View indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 text-stone-900 text-[10px] tracking-widest font-medium px-3 py-1.5">
            VIEW
          </div>
        </div>
      </div>
    </Link>
  );
}
