const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="effect-1">
        <img src="assets/img/effect-1.svg" className="svg" alt="image" />
      </div>
      <div className="effect-2">
        <img src="assets/img/effect-2.svg" className="svg" alt="image" />
      </div>
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 pe-xl-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>
                <span style={{ color: "blueViolet" }}>I’m</span> Sandeep Sharma
                <br />
                Mern Developer
              </h1>
              <p>
                I am a proficient <b>React and Node.js</b> developer with 3 years of
                React experience and 6-8 months in Node.js. At idesign.market
                Pvt Ltd, I delivered 5-8 projects, crafting dynamic, responsive
                interfaces. As a freelancer, I completed 3 Node.js projects,
                showcasing my skills in server-side development and database
                integration. My expertise spans frontend technologies like
                React.js and Redux, and backend frameworks like Express.js with
                MongoDB. I excel in creating robust, scalable applications using
                Agile methodology, with a keen eye for detail and strong
                problem-solving abilities. My commitment to continuous learning
                ensures I stay updated with the latest industry trends.
              </p>
              <div className="btn-bar">
                <a className="px-btn px-btn-theme" href="#contactus">
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-image">
              <img
                style={{ borderRadius: "20px" }}
                src="assets/img/sandeep.jpg"
                alt="image"
                height={600}
                width={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
