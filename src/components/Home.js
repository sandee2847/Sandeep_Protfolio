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
          <div className="col-lg-6 pe-xl-5 py-5">
            <div className="home-intro one-page-nav">
              <h6>
                <span>Hello.</span>
              </h6>
              <h1>
                <span style={{color:"blueViolet"}}>I’m</span> Sandeep Sharma<br />
                Front Developer
              </h1>
              <p>
                As a Software Engineer with expertise in <b>React.JS</b> and three years of experience, I specialize in building
                highly performant and responsive user interfaces. I am dedicated to delivering high-quality solutions
                that meet the needs of users and businesses alike.
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
              <img style={{ borderRadius: "20px" }} src="assets/img/sandeep.jpg" alt="image" height={600} width={700} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
