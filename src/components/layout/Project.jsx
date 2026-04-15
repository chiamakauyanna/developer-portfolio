import { useState } from "react";
import { projects } from "../../services/projects";
import ProjectCard from "../common/ProjectCard";

const tabs = [
  { label: "All", value: "all" },
  { label: "React", value: "react" },
  { label: "Landing Pages", value: "landing" },
  { label: "UI", value: "ui" },
  { label: "Vanilla JS", value: "vanilla" },
];

const Project = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

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

        {/* Filter Tabs */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                border transition-all duration-300
                ${
                  active === tab.value
                    ? "bg-accent text-black border-accent shadow-[0_0_14px_rgba(18,247,214,0.4)]"
                    : "bg-transparent text-textColor border-accent/30 hover:border-accent hover:text-accent"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div data-aos="zoom-in-up" className="mt-24">
          <ProjectCard projects={filtered} />
        </div>
      </div>
    </section>
  );
};

export default Project;