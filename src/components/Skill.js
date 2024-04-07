import SectionTitleSkill from "./SectionTitleSkill";
import { SiNextdotjs, SiHtml5, SiCss3, SiReact, SiBootstrap, SiTailwindcss, SiGithub, SiJavascript, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const next = <SiNextdotjs />
const skillsData = [
  { id: 1, name: "HTML", icons: <SiHtml5 /> },
  { id: 2, name: "CSS", icons: <SiCss3 /> },
  { id: 3, name: "React JS", icons: <SiReact /> },
  { id: 4, name: "Next JS", icons: <SiNextdotjs /> },
  { id: 5, name: "Bootstrap", icons: <SiBootstrap /> },
  { id: 6, name: "TailWind Css", icons: <SiTailwindcss /> },
  { id: 7, name: "Git & GitHub", icons: <SiGithub /> },
  { id: 8, name: "JavaScript", icons: <SiJavascript /> },
  { id: 8, name: "Node JS", icons: <SiNodedotjs /> },
  { id: 8, name: "Express JS", icons: <SiExpress /> },
  { id: 8, name: "MongoDB", icons: <SiMongodb /> },
];
const experiencesData = [
  {
    id: 1,
    date: "07/2023 - Present",
    designation: "Software Engineer (React js)",
    company: "idesign.market",
  },
  {
    id: 2,
    date: "08/2022 - 07/2023",
    designation: "Front-end Developer",
    company: "H&M Innovance LLP",
  },
  {
    id: 3,
    date: "08/2021 - 08/2022",
    designation: "Front-end Developer",
    company: "Go Business India Pvt. Ltd.",
  },


  // {
  //   id: 3,
  //   date: "Jan 2021 - Present",
  //   designation: "Creative Director",
  //   company: "pxdraft Ltd, UK",
  // },
  // {
  //   id: 4,
  //   date: "Jan 2021 - Present",
  //   designation: "Creative Director",
  //   company: "pxdraft Ltd, UK",
  // },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitleSkill
              heading={"Skills and  Experience"}
              subHeading={"Experience"}
              text={
                `As a React developer, I specialize in creating dynamic user interfaces with efficient state management using Redux. I integrate RESTful APIs seamlessly, prioritize UI/UX principles, and conduct thorough testing for code quality assurance. Proficient in modern JavaScript, I collaborate effectively using Git and prioritize continuous learning for innovative solutions.`
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        {skill.icons}
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/sandeep.jpg" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
