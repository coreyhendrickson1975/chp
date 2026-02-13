import { useState } from "react";
import type { Project } from "@/lib/projects";

export function ProjectDetail({
  project,
  nextProject,
}: {
  project: Project;
  nextProject?: Project;
}) {
  return (
    <article className="pt-24">
      {/* Text Info */}
      <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="mb-10 text-balance text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {project.title}
        </h1>

        <div className="space-y-6">
          {project.description.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Gallery Grid — 3 columns */}
      <section className="px-4 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {project.gallery.map((src, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-muted ${project.galleryAspectRatio ? "" : "aspect-video"}`}
              style={project.galleryAspectRatio ? { aspectRatio: project.galleryAspectRatio } : undefined}
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`${project.title} — image ${index + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${project.slug === "camphill-foundation" ? "scale-105 group-hover:scale-110" : project.slug === "ramen-day" ? "scale-110 group-hover:scale-[1.15]" : "group-hover:scale-105"} ${index === 11 && project.slug === "woodstock-inn-and-resort" ? "object-bottom" : ""}`}
                loading={index < 3 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next project navigation */}
      {nextProject && <NextProjectLink project={nextProject} />}
    </article>
  );
}

function NextProjectLink({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`/work/${project.slug}`}
      className="group block border-t border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between px-6 py-8 md:px-10 lg:px-20">
        <div>
          <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
            Next
          </span>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[16/9]">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered
              ? `scale(${project.slug === "woodstock-inn-and-resort" ? 1.08 : 1.03})`
              : `scale(${project.slug === "woodstock-inn-and-resort" ? 1.05 : 1})`,
          }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center transition-colors duration-500"
          style={{
            backgroundColor: isHovered
              ? "hsla(0, 0%, 10%, 0.3)"
              : "hsla(0, 0%, 10%, 0.15)",
          }}
        >
          <h2 className="text-balance text-2xl font-medium tracking-tight text-primary-foreground md:text-4xl">
            {project.title}
          </h2>
        </div>
      </div>
    </a>
  );
}
