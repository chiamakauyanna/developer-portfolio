import { skills } from "../../services/Skills";

const SkillsCard = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 w-full">
      {skills.map((skill) => (
        <div key={skill.id} className="w-full">
          <div className="flex justify-between mb-1">
            <span className="text-lg font-semibold">{skill.text}</span>
            <span className="text-sm font-medium text-accent">
              {skill.level}%
            </span>
          </div>

          <div className="w-full bg-secondary/40 rounded-xl h-2 overflow-hidden">
            <div
              className="h-full bg-accent rounded-xl transition-all duration-700 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
