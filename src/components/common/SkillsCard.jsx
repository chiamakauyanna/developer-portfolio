import { skills } from "../../services/Skills";

const SkillsCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.id}
            className="
              flex flex-col items-center justify-center gap-3
              px-4 py-6 rounded-xl
              border border-accent/10
              bg-secondary/40 backdrop-blur-sm
              hover:border-accent/50 hover:bg-secondary/60
              transition-all duration-300
              group
            "
          >
            <Icon className="text-4xl text-accent/70 group-hover:text-accent transition-colors duration-300" />
            <span className="text-sm font-medium text-textColor">{skill.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsCard;
