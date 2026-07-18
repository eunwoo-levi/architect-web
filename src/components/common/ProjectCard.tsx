import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  category?: string;
  location?: string;
  priority?: boolean;
}

export default function ProjectCard({
  title,
  slug,
  imageUrl,
  category,
  location,
  priority = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative block overflow-hidden bg-stone-100"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          priority={priority}
        />

        {/* Permanent bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        {/* Hover darkening */}
        <div className="absolute inset-0 bg-stone-950/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category chip (top-left) */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-white/85 backdrop-blur-sm text-stone-800 text-[10px] tracking-[0.18em] uppercase font-medium px-2.5 py-1">
              {category}
            </span>
          </div>
        )}

        {/* View indicator (top-right) */}
        <div className="absolute top-4 right-4 translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="flex items-center gap-1.5 bg-accent text-white text-[10px] tracking-[0.2em] font-medium px-3 py-1.5">
            VIEW <span className="text-xs leading-none">→</span>
          </span>
        </div>

        {/* Bottom info (always visible) */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {location && (
            <span className="block text-[10px] tracking-[0.18em] text-accent-light uppercase mb-1.5">
              {location}
            </span>
          )}
          <h3 className="text-white font-serif font-semibold text-base md:text-lg tracking-tight leading-snug">
            {title}
          </h3>
          <div className="mt-2 h-px w-8 bg-accent/80 transition-all duration-500 group-hover:w-14" />
        </div>
      </div>
    </Link>
  );
}
