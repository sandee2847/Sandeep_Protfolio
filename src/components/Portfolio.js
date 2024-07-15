import SectionTitle from "./SectionTitle";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    title: "Gantt Chart",
    subtitle: "Mern Stack",
    image: "assets/img/Gantt-chart.jpg",
    // link: "https://hminnovance.com/"
  },
  {
    id: 2,
    title: "File Manager",
    subtitle: "Mern Stack",
    image: "assets/img/File-manager.jpg",
    // link: "https://hminnovance.com/"
  },
  {
    id: 3,
    title: "Account",
    subtitle: "Mern Stack",
    image: "assets/img/Account.jpg",
    // link: "https://hminnovance.com/"
  },
  {
    id: 4,
    title: "Tasks",
    subtitle: "Mern Stack",
    image: "assets/img/Tools.jpg",
    // link: "https://hminnovance.com/"
  },
  {
    id: 5,
    title: "Timeline",
    subtitle: "Mern Stack",
    image: "assets/img/Timeline.jpg",
    // link: "https://hminnovance.com/"
  },
  {
    id: 6,
    title: "Company Website",
    subtitle: "Mern Stack",
    image: "assets/img/hm.png",
    link: "https://hminnovance.com/"
  },
  {
    id: 7,
    title: "Online Food Ordering",
    subtitle: "Mern Stack",
    image: "assets/img/kimaye.png",
    link: "https://www.kimaye.com/"
  },
  {
    id: 8,
    title: "E-commerce Web App",
    subtitle: "Mern stack",
    image: "assets/img/jaipurkurti.png",
    link: "https://www.jaipurkurti.com/"
  },
  {
    id: 9,
    title: "Cricbuzz Clone",
    subtitle: "Html, Css, JavaScript, Json",
    image: "assets/img/cricbuzz.png",
    link: "https://www.cricbuzz.com/"
  },
  {
    id: 10,
    title: "APPLE TV + - clone (Solo Project)",
    subtitle: "Mern Stack",
    image: "assets/img/vague.png",
    link: ""
  },
  {
    id: 11,
    title: "Sugar Cosmetics",
    subtitle: "Mern Stack",
    image: "assets/img/sugar.jpg",
    link: ""
  },
];

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(true)
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} portfolio={portfolio} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a href={portfolio.image} className="gallery-link">
                    <img src={portfolio.image} alt="image" />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  {/* <a href={portfolio.image} className="gallery-link">
                    <i className="fas fa-arrow-right" />
                  </a> */}
                  <a href={portfolio.link} target="_blank" className="gallery-link">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
