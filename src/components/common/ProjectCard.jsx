import { projects } from "../../services/projects";

const ProjectCard = () => {
  return (
    <div className="flex flex-col w-full gap-32">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`
            flex flex-col md:flex-row items-center gap-16
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
          `}
          data-aos="fade-up"
        >
          {/* Floating Frame Image Block */}
          <div className="relative w-full md:w-1/2">
            {/* Floating neon frame */}
            <div
              className="
                absolute -top-8 md:-left-10 -left-6
                w-full h-full 
                rounded-lg 
                border-2 md:border-8 border-accent 
                opacity-80
              "
            ></div>

            {/* Main image card */}
            <div
              className="
                rounded-lg overflow-hidden 
                backdrop-blur-md
                transition-all duration-700
                hover:scale-105
              "
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full md:h-80 object-cover"
              />
            </div>
          </div>

          {/* Text Content Block */}
          <div className="w-full md:w-1/2 flex flex-col text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-4">
              {project.title}
            </h3>

            <p className="text-other text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            {project.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="
                      px-4 py-1 rounded-full text-xs 
                      bg-secondary/40 
                      text-textColor 
                      border border-accent/20 
                      backdrop-blur-sm
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block px-6 py-2 
                bg-accent text-black 
                rounded-lg font-semibold
                shadow-[0_0_20px_rgba(18,247,214,0.4)]
                hover:bg-accent/80
                transition-all duration-300
                w-fit
              "
            >
              View Project →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
