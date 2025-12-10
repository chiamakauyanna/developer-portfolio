import SkillsCard from "../common/SkillsCard"

const Skills = () => {
  return (
    <section id='skills'
    className="w-screen lg:px-40 md:px-32 p-10 bg-primary text-textColor pt-32">
      <div className="text-center">
       <div
        data-aos="fade-down"
        className="border-b border-accent inline-block mb-20"
      >
        <h2 className="font-semibold text-center p-2">
          My <span className="text-accent">Skills</span>
        </h2>
      </div>
       <div data-aos="zoom-in-up">
        <SkillsCard/>
       </div>
    </div>
    </section>
  )
}

export default Skills