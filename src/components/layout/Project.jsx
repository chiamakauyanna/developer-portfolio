import ProjectCard from "../common/ProjectCard";

const Project = () => {
  return (
    <section
      id="Project"
      className="
        w-screen px-10 lg:px-32 md:px-20 
        bg-secondary text-textColor 
        pt-32 pb-32
      "
    >
      <div className="text-center max-w-6xl mx-auto">
        <div
          data-aos="fade-down"
          className="border-b border-accent inline-block"
        >
          <h2 className="font-semibold text-center p-2">
            My <span className="text-accent">Projects</span>
          </h2>
        </div>

        <div data-aos="zoom-in-up" className="mt-24">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Project;
