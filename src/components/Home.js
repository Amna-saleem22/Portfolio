import React from "react";

// import {ArrowDown} from './ArrowDown'; 

const Home = () => {


  // Internal Styles object
 const styles = {
    heroWrapper: {
      minHeight: '100vh',
      backgroundColor: '#1a1c1a',
      color: '#f4f4f4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 10%', // Added top/bottom padding for safety
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      zIndex: '10', // Ensures it stays above template backgrounds
    },
    customContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1200px',
      width: '100%',
      gap: '60px', // Increased gap for better spacing
      margin: '0 auto',
    },
    textSide: {
      flex: '1.5',
      textAlign: 'left',
    },
    introLine: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '25px',
    },
    goldLine: {
      width: '50px',
      height: '2px',
      backgroundColor: '#c59d5f',
    },
    greeting: {
      fontSize: '1.2rem',
      fontWeight: '400',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      color: '#f4f4f4',
      margin: 0,
    },
    mainHeading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '72px', // Locked size to prevent it from decreasing
      lineHeight: '1.1',
      fontWeight: '700',
      marginBottom: '50px',
      color: '#ffffff',
      maxWidth: '800px',
    },
    scrollIndicator: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      cursor: 'pointer',
      marginTop: '20px'
    },
    arrowCircle: {
      width: '45px',
      height: '45px',
      border: '1px solid #c59d5f',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#c59d5f',
      fontSize: '20px'
    },
    imageSide: {
      flex: '1',
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    mainImage: {
      width: '100%',
      maxWidth: '420px',
      height: '550px',
      objectFit: 'cover',
      display: 'block',
      boxShadow: '30px 30px 80px rgba(0,0,0,0.6)',
      position: 'relative',
      zIndex: '2',
    },
    decorLines: {
      position: 'absolute',
      left: '-60px',
      bottom: '100px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      zIndex: '1',
    },
    decorLineSpan: {
      width: '120px',
      height: '1px',
      backgroundColor: '#c59d5f',
      opacity: '0.5',
    }
 };

  return (
    <>
      {/* Preloader */}
      

    

        <section id="content" className="s-content">
   




















      {/* Import Fonts directly in the component */}
     <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Playfair+Display:wght@700&display=swap');
          
          /* Force reset for this specific section to override template defaults */
          .custom-hero h1, .custom-hero p {
            margin: 0; 
            padding: 0;
            border: none;
          }

          @media (max-width: 1024px) {
            .hero-flex-container { flex-direction: column !important; text-align: center !important; }
            .hero-text-side { padding-right: 0 !important; margin-bottom: 50px; }
            .hero-main-heading { font-size: 48px !important; }
            .hero-intro-line { justify-content: center; }
          }
        `}
      </style>

   <section className="custom-hero" style={styles.heroWrapper}>
        <div className="hero-flex-container" style={styles.customContainer}>
          
          <div className="hero-text-side" style={styles.textSide}>
            <div className="hero-intro-line" style={styles.introLine}>
              <span style={styles.goldLine}></span>
              <p style={styles.greeting}>Hello, I'm Amna</p>
            </div>
            <h1 className="hero-main-heading" style={styles.mainHeading}>
              I build professional <br />
  business websites <br />
  that drive results.
            </h1>
            
            <div style={styles.scrollIndicator}>
              <div style={styles.arrowCircle}>↓</div>
              <p style={{ fontSize: '14px', opacity: 0.7, letterSpacing: '1px' }}>SCROLL FOR MORE</p>
            </div>
          </div>

          <div style={styles.imageSide}>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
              alt="Code Workspace" 
              style={styles.mainImage} 
            />
            <div style={styles.decorLines}>
              <span style={styles.decorLineSpan}></span>
              <span style={styles.decorLineSpan}></span>
              <span style={styles.decorLineSpan}></span>
              <span style={styles.decorLineSpan}></span>
            </div>
          </div>

        </div>
      </section>























        
          {/* ABOUT */}
          <section id="about" className="s-about target-section">
            <div className="row s-about__content width-sixteen-col">
              <div className="column grid-block grid-section-split">

                {/* <img
                  src="/images/geometric_shape.svg"
                  alt=""
                  className="s-about__content-imgbg"
                /> */}

                <div className="section-header grid-section-split__header">
                  <div className="text-pretitle">About Me</div>
                  <h2 className="text-display-title">
                    Passionate about building reliable and impactful web solutions
                  </h2>
                </div>

                <div className="s-about__content-main grid-section-split__primary">
                  <p className="attention-getter">
                    I am a motivated Web Developer and Software Engineering diploma student with
                    hands-on experience in building responsive and user-friendly websites.
                    I enjoy turning ideas into clean, functional, and visually appealing digital products.
                  </p>

                  <p className="attention-getter">
                    I work with modern frontend and backend technologies including HTML, CSS,
                    JavaScript, React, ASP.NET MVC, C#, PHP, Node , MongoDB and MySQL.
                    My focus is on writing clean code and creating practical solutions that meet real business needs.
                  </p>

                  <p className="attention-getter">
                    Alongside my technical journey, I am also pursuing CMA (Cost & Management Accounting),
                    which helps me better understand business requirements and deliver value-driven web solutions.
                    I am always eager to learn, improve my skills, and grow as a professional developer.
                  </p>
                </div>

                <div className="s-about__content-btn grid-section-split__bottom">
                  <a href="about.html" className="btn btn--stroke u-fullwidth">
                    More About Me
                  </a>
                  <ul className="s-about__social social-list">
                    {/* LinkedIn */}
                    <li>
                      <a
                        href="https://www.linkedin.com/in/amna-saleem-it/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.5 7h4.8v2.3h.1c.67-1.27 2.3-2.6 4.7-2.6 5 0 5.9 3.3 5.9 7.6V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4v7.7h-5V7z" />
                        </svg>
                        <span className="u-screen-reader-text">LinkedIn</span>
                      </a>
                    </li>

                    {/* GitHub */}
                    <li>
                      <a
                        href="https://github.com/Amna-Saleem22"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.5.11-3.13 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.63.23 2.83.11 3.13.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.28 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                        </svg>
                        <span className="u-screen-reader-text">GitHub</span>
                      </a>
                    </li>
                  </ul>

                </div>

              </div>
            </div>
          </section>

          {/* EXPERTISE */}
          <section id="expertise" className="s-expertise">
            <div className="row s-expertise__content width-sixteen-col">
              <div className="column xl-12 grid-block grid-section-split">

                <div className="section-header grid-section-split__header">
                  <div className="text-pretitle">Expertise</div>
                  <h2 className="text-display-title">
                    My technical skills and areas of expertise
                  </h2>
                  <p className="lead">
                    I focus on building clean, responsive, and reliable web solutions using modern technologies.
                  </p>
                </div>

                <div className="s-expertise__content-main grid-section-split__primary">
                  <div className="grid-list-items list-items show-ctr">

                    <div className="grid-list-items__item list-items__item">
                      <h3 className="list-items__item-title">Frontend Development</h3>
                      <p>
                        Building responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.
                      </p>
                    </div>

                    <div className="grid-list-items__item list-items__item">
                      <h3 className="list-items__item-title">Backend Development</h3>
                      <p>
                        Developing dynamic web applications using ASP.NET MVC, C#, PHP, and MySQL.
                      </p>
                    </div>

                    <div className="grid-list-items__item list-items__item">
                      <h3 className="list-items__item-title">E-commerce Websites</h3>
                      <p>
                        Creating functional and secure e-commerce websites with product management and user-friendly flows.
                      </p>
                    </div>

                    <div className="grid-list-items__item list-items__item">
                      <h3 className="list-items__item-title">Business Websites</h3>
                      <p>
                        Designing professional websites for businesses, portfolios, and personal brands.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="s-expertise__content-btn grid-section-split__bottom">
                  <a href="#services" className="btn btn--stroke u-fullwidth">
                    View All Services
                  </a>
                </div>

              </div>
            </div>

          </section>
          <section id="clients" className="s-clients">

            <div className="row s-clients__content-block width-sixteen-col">
              <div className="row s-clients__content-block width-sixteen-col">
                <div className="column xl-12 grid-block grid-section-split">

                  <div className="section-header grid-section-split__header">
                    <div className="text-pretitle">Collaboration</div>
                    <h2 className="text-display-title">
                      Open to working with clients, startups, and teams
                    </h2>
                  </div>

                  <div className="grid-section-split__primary">
                    <p className="lead">
                      I am currently focused on building strong skills and working on real-world projects.
                      While I have not yet worked with official brands, I am actively looking for opportunities
                      to collaborate with clients and teams.
                    </p>

                    <p>
                      I approach every project with dedication, clear communication, and a strong focus on quality.
                      Whether it’s a small website, a business project, or a learning-based collaboration,
                      I am committed to delivering reliable and well-structured solutions.
                    </p>
                  </div>

                </div>
              </div>

            </div>

            {/* <div className="row s-clients__content-block width-sixteen-col">
              <div className="column xl-12">

                <div className="clients-list">
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/flash.svg" alt="" /></a>
                  </div>
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/rise.svg" alt="" /></a>
                  </div>
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/cactus.svg" alt="" /></a>
                  </div>
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/pinpoint.svg" alt="" /></a>
                  </div>
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/proline.svg" alt="" /></a>
                  </div>
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/vision.svg" alt="" /></a>
                  </div>
                  <div className="column clients-list__item">
                    <a href="#0"><img src="/images/clients/volume.svg" alt="" /></a>
                  </div>
                  <div className="column clients-list__item">
                    <a href="#0"><img src="/images/clients/hitech.svg" alt="" /></a>
                  </div>
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/terra.svg" alt="" /></a>
                  </div>
                  <div className="clients-list__item">
                    <a href="#0"><img src="/images/clients/chain.svg" alt="" /></a>
                  </div>
                </div>

              </div>
            </div> */}

            {/* <div className="row s-clients__content-block width-sixteen-col">
              <div className="column xl-12 testimonials">

                <div className="swiper-container testimonials__slider home-slider">
                  <div className="swiper-wrapper">

                    <div className="testimonials__slide swiper-slide">
                      <p>
                        Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                        rem nihil nostrum. Laudantium quia consequatur molestias.
                      </p>
                      <div className="testimonials__author">
                        <img src="/images/avatars/user-01.jpg" alt="Author image" className="testimonials__avatar" />
                        <cite className="testimonials__cite">
                          <strong>John Rockefeller</strong>
                          <span>Standard Oil Co.</span>
                        </cite>
                      </div>
                    </div>

                    <div className="testimonials__slide swiper-slide">
                      <p>
                        Nisi dolores quaerat fuga rem nihil nostrum. Molestiae incidunt consequatur quis ipsa autem nam sit enim magni.
                        Voluptas tempore rem. Laudantium quia consequatur molestias. Explicabo a quaerat sint autem dolore ducimus ut
                        consequatur neque.
                      </p>
                      <div className="testimonials__author">
                        <img src="/images/avatars/user-04.jpg" alt="Author image" className="testimonials__avatar" />
                        <cite className="testimonials__cite">
                          <strong>Andrew Carnegie</strong>
                          <span>Carnegie Steel Co.</span>
                        </cite>
                      </div>
                    </div>

                    <div className="testimonials__slide swiper-slide">
                      <p>
                        Voluptas tempore rem. Molestiae incidunt consequatur quis ipsa autem nam sit enim magni.
                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                        rem nihil nostrum. Laudantium quia consequatur molestias.
                      </p>
                      <div className="testimonials__author">
                        <img src="/images/avatars/user-06.jpg" alt="Author image" className="testimonials__avatar" />
                        <cite className="testimonials__cite">
                          <strong>Henry Ford</strong>
                          <span>Ford Motor Co.</span>
                        </cite>
                      </div>
                    </div>

                    <div className="testimonials__slide swiper-slide">
                      <p>
                        Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem.
                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                        rem nihil nostrum. Laudantium quia consequatur molestias.
                      </p>
                      <div className="testimonials__author">
                        <img src="/images/avatars/user-02.jpg" alt="Author image" className="testimonials__avatar" />
                        <cite className="testimonials__cite">
                          <strong>John Morgan</strong>
                          <span>JP Morgan & Co.</span>
                        </cite>
                      </div>
                    </div>

                  </div>

                  <div className="swiper-pagination"></div>
                </div> 
              </div>
            </div> */}

          </section>
          {/* CTA */}
         <section id="cta" className="s-cta">
  <div className="row row-x-center text-center">
    <div className="column xl-8 lg-12">
      <h2 className="text-display-title">
        Let’s build something meaningful together
      </h2>
      <p className="lead">
        I’m open to internships, freelance work, and entry-level opportunities.
        If you have an idea or a project in mind, let’s connect and discuss it.
      </p>
      <a href="#contact" className="btn btn--primary">
        Let’s Work Together
      </a>
    </div>
  </div>
</section>


<section id="education" className="s-journal">

  <div className="row s-journal__content width-sixteen-col">
    <div className="column xl-12 grid-block">

      <div className="grid-full section-header text-center">
        <div className="text-pretitle">Education</div>
        <h2 className="text-display-title">
          My education and learning journey
        </h2>
      </div>

      <div className="grid-full s-journal__content-main grid-list-items">

        {/* Education Card 1 */}
        <div className="grid-list-items__item blog-card">
          <div className="blog-card__header">
            <div className="blog-card__cat-links">
              <span>Diploma</span>
            </div>
            <h3 className="blog-card__title">
              Software Engineering Diploma
            </h3>
          </div>
          <div className="blog-card__text">
            <p>
              Currently pursuing a Software Engineering diploma where I have learned
              frontend and backend web development, including HTML, CSS, JavaScript, React,
              ASP.NET MVC, C#, PHP, Node, MongoDB and MySQL.
            </p>
          </div>
        </div>

        {/* Education Card 2 */}
        <div className="grid-list-items__item blog-card">
          <div className="blog-card__header">
            <div className="blog-card__cat-links">
              <span>Professional Studies</span>
            </div>
            <h3 className="blog-card__title">
              CMA (Cost & Management Accounting)
            </h3>
          </div>
          <div className="blog-card__text">
            <p>
              Alongside my technical education, I am pursuing CMA which helps me
              understand business processes, finance, and management from a practical perspective.
            </p>
          </div>
        </div>

        {/* Education Card 3 */}
        <div className="grid-list-items__item blog-card">
          <div className="blog-card__header">
            <div className="blog-card__cat-links">
              <span>Technical Skills</span>
            </div>
            <h3 className="blog-card__title">
              Web Development Skills
            </h3>
          </div>
          <div className="blog-card__text">
            <p>
              Gained hands-on experience in building responsive websites and web applications
              using React, ASP.NET MVC, React, GitHub, and modern development tools.
            </p>
          </div>
        </div>

        {/* Education Card 4 */}
        <div className="grid-list-items__item blog-card">
          <div className="blog-card__header">
            <div className="blog-card__cat-links">
              <span>Continuous Learning</span>
            </div>
            <h3 className="blog-card__title">
              Self-Learning & Practice
            </h3>
          </div>
          <div className="blog-card__text">
            <p>
              I continuously improve my skills through practice projects, online resources,
              and real-world problem solving to stay updated with modern web technologies.
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>

</section>


        </section>
      
    </>
  );
};

export default Home;
