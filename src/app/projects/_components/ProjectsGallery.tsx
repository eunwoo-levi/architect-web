"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/common/ProjectCard";
import type { Category, Project } from "../data";

const EASE = [0.16, 1, 0.3, 1] as const;

interface ProjectsGalleryProps {
  projects: Project[];
  categories: Category[];
}

export default function ProjectsGallery({ projects, categories }: ProjectsGalleryProps) {
  const [active, setActive] = useState<string>("all");

  const filters = useMemo(
    () => [
      { label: "전체", value: "all", count: projects.length },
      ...categories.map((c) => ({
        label: c.label,
        value: c.label,
        count: projects.filter((p) => p.category === c.label).length,
      })),
    ],
    [projects, categories],
  );

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [projects, active],
  );

  return (
    <div>
      {/* ── Filter Tabs ── */}
      <div className="mb-12 flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`group relative inline-flex items-center gap-2 px-4 py-2.5 text-xs md:text-sm tracking-wide transition-colors duration-300 border ${
                isActive
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-900"
              }`}
            >
              <span>{f.label}</span>
              <span
                className={`text-[10px] tabular-nums ${
                  isActive ? "text-accent-light" : "text-stone-400"
                }`}
              >
                {f.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Grid ── */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: EASE, delay: Math.min(i * 0.03, 0.3) }}
            >
              <ProjectCard
                title={project.title}
                slug={project.slug}
                imageUrl={project.imageUrl}
                category={project.category}
                location={project.location}
                priority={i < 3}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="py-20 text-center text-sm text-stone-400">
          해당 분야의 프로젝트가 없습니다.
        </p>
      )}
    </div>
  );
}
