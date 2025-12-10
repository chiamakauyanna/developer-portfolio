import aboutImg from "../../../src/assets/images/img3.png";
import Button from "../common/Button";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen bg-secondary py-24 flex items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 px-8 lg:px-20 text-textColor max-w-6xl w-full">
        {/* Image */}
        <div className="flex-1 flex justify-center" data-aos="zoom-in-down">
          <img
            src={aboutImg}
            alt="about me"
            className="w-64 h-64 lg:w-72 lg:h-72 object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1" data-aos="zoom-in-up">
          <h2 className="text-3xl font-semibold mb-8">
            About <span className="text-accent">Me</span>
          </h2>

          <p className="text-gray-300 mb-6 max-w-md text-base">
            I&apos;m Chiamaka Uyanna — a frontend developer who enjoys building
            clean, functional, and responsive user interfaces using React,
            Next.js, and Tailwind. I love bringing designs to life through
            thoughtful, user-focused code.
          </p>

          <div className="space-y-2 mb-6">
            <p className="text-base">
              <span className="font-semibold text-accent mr-5">Name:</span>{" "}
              Chiamaka Uyanna
            </p>
            <p className="text-base">
              <span className="font-semibold text-accent mr-5">Location:</span>{" "}
              Nigeria
            </p>
            <p className="text-base">
              <span className="font-semibold text-accent mr-5">Focus:</span>{" "}
              Frontend Development
            </p>
            <p className="text-base">
              <span className="font-semibold text-accent mr-5">Stack:</span>{" "}
              React · Next.js · Tailwind CSS
            </p>
            <p className="text-base">
              <span className="font-semibold text-accent mr-5">
                Experience:
              </span>{" "}
              Startup collab + personal projects
            </p>
          </div>

          <Button text="View All Projects" className="btn-primary mt-4" />
        </div>
      </div>
    </section>
  );
};

export default About;
