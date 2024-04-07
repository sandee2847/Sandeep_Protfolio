import SectionTitleOffer from "./SectionTitleOffer";

const serviceData = [
  {
    id: 1,
    name: "Web Design",
    icon: "bi bi-phone",
    desc: "Transform your online presence with our exceptional web designing services. We combine creativity with functionality to deliver visually stunning and user-friendly websites. Our talented team of designers has a keen eye for detail and a deep understanding of user experience to create captivating and engaging designs. From responsive layouts to intuitive navigation, we ensure that your website stands out from the crowd. With a focus on brand consistency and effective communication, we bring your vision to life and business.",
  },
  {
    id: 2,
    name: "Web Development",
    icon: "bi bi-laptop",
    desc: "Elevate your online presence with our top-notch web development services. We specialize in creating visually stunning, user-friendly websites tailored to your unique requirements. Our experienced team utilizes the latest technologies to deliver responsive and SEO-optimized websites that drive results. From concept to launch, we provide a seamless development process, ensuring your vision is brought to life. Step into the digital realm with confidence and let our web development expertise propel your business forward.",
  },
  {
    id: 3,
    name: "Software Development",
    icon: "bi bi-phone",
    desc: "Empower your business with our exceptional software development services. We specialize in crafting bespoke software solutions that cater to your specific needs. Our experienced team of developers utilizes cutting-edge technologies to create robust, scalable, and secure software applications. From concept to deployment, we follow a rigorous development process to ensure high-quality and on-time delivery. With a focus on innovation and user-centric design, we help businesses streamline operations, enhance productivity.",
  },
  // {
  //   id: 4,
  //   name: "Web Design",
  //   icon: "bi bi-columns",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
  // {
  //   id: 5,
  //   name: "Development",
  //   icon: "bi bi-distribute-vertical",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
  // {
  //   id: 6,
  //   name: "SEO Marketing",
  //   icon: "bi bi-globe2",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitleOffer heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
