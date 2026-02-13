import { useState } from "react";
import { projects } from "@/lib/projects";

function PortfolioCard({
  title,
  slug,
  image,
  priority = false,
  aspectRatio = "video",
  baseScale = 1,
}: {
  title: string;
  slug: string;
  image: string;
  priority?: boolean;
  aspectRatio?: "video" | "cinematic";
  baseScale?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`/work/${slug}`}
      className="group relative block overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-full overflow-hidden ${aspectRatio === "cinematic" ? "aspect-[16/9]" : "aspect-video"}`}>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out ${slug === "camphill-foundation" ? "object-top" : slug === "vermont-housing-and-conservation-board" ? "object-bottom" : "object-cover object-center"}`}
          style={{
            objectFit: "cover",
            transform: isHovered ? `scale(${baseScale + 0.05})` : `scale(${baseScale})`,
          }}
          loading={priority ? "eager" : "lazy"}
        />
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{
            backgroundColor: isHovered
              ? "hsla(0, 0%, 10%, 0.15)"
              : "hsla(0, 0%, 10%, 0)",
          }}
        />
      </div>
      <div className="py-4">
        <h3 className="text-sm font-medium tracking-wide text-foreground">
          {title}
        </h3>
      </div>
    </a>
  );
}

export function PortfolioGrid() {
  return (
    <section id="work" className="scroll-mt-24 px-6 pb-24 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
        {projects.map((project, index) => (
          <PortfolioCard
            key={project.slug}
            title={project.title}
            slug={project.slug}
            image={project.image}
            priority={index < 3}
            aspectRatio={index < 3 ? "cinematic" : "video"}
            baseScale={project.slug === "camphill-foundation" ? 1.1 : project.slug === "woodstock-inn-and-resort" ? 1.05 : project.slug === "ramen-day" ? 1.4 : 1}
          />
        ))}
      </div>
    </section>
  );
}
