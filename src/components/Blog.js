import React from "react";

const Blog = () => {
  return (
    <>
    <section id="content" className="s-content">

  <section className="s-pageheader pageheader">
    <div className="row">
      <div className="column xl-12">
        <h1 className="page-title">
          <span className="page-title__small-type text-pretitle">My Portfolio</span>
          Projects & Learnings
        </h1>
      </div>
    </div>
  </section>

  <section className="s-pagecontent pagecontent">
    <div className="row">
      <div className="column xl-12 grid-block">
        <div className="grid-full grid-list-items">

          {/* Blog Card 1 - Frontend Project */}
        <div className="grid-list-items__item blog-card">
  <div className="blog-card__header">
    <div className="blog-card__cat-links">
      <a href="#0">Frontend</a>
    </div>
    <h3 className="blog-card__title">
      <a href="#0">Responsive Website with React & CSS</a>
    </h3>
  </div>

  <div className="blog-card__text">
    <p>
      Created a fully responsive personal portfolio website using React, CSS,
      and JavaScript. Implemented modern UI design, smooth transitions, and
      interactive elements.
    </p>

    {/* Project Actions */}
    <div className="project-links">
      <a
        href="https://seed-inov-eaqm.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--stroke"
      >
        View Project
      </a>

      <a
        href="https://github.com/Amna-saleem22/seedInov"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--text"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

          {/* Blog Card 2 - Backend Project */}
         <div className="grid-list-items__item blog-card">
          <div className="blog-card__header">
            <div className="blog-card__cat-links">
              <a href="#0">Angular</a>
            </div>
            <h3 className="blog-card__title">
              <a href="https://project-angular-flax.vercel.app/" target="_blank" rel="noopener noreferrer">
                Electronic Shop (Angular)
              </a>
            </h3>
          </div>
          <div className="blog-card__text">
            <p>
              A fully functional electronic e-shop built with Angular. Features include product listing, category filtering, cart management, and responsive layout for desktop and mobile. This project demonstrates skills in Angular components, services, routing, and API handling.
            </p>

            <div className="project-links">
              <a
                href="https://project-angular-flax.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--stroke"
              >
                View Project
              </a>
              <a
                href="https://github.com/Amna-saleem22/Project-angular/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--text"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

          {/* Blog Card 3 - Fullstack Project */}
          <div className="grid-list-items__item blog-card">
            <div className="blog-card__header">
              <div className="blog-card__cat-links">
                <a href="#0">Fullstack</a>
              </div>
              <h3 className="blog-card__title">
                <a href="#0">
                  Laundry Management Web App
                </a>
              </h3>
            </div>
            <div className="blog-card__text">
              <p>
                Implemented a fullstack laundry management system using ASP.NET MVC for backend and Angular for frontend. Features include customer management, delivery tracking, and invoice generation. Enhanced my understanding of integrated systems and frontend-backend communication.
              </p>
            </div>
             <div className="project-links">
     

      <a
        href="https://github.com/Amna-saleem22/Laundry-Management-System/tree/main/eproject/eproject"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--text"
      >
        GitHub
      </a>
    </div>
          </div>

          {/* Blog Card 4 - Design Skill */}
        <div className="grid-list-items__item blog-card">
  <div className="blog-card__header">
    <div className="blog-card__cat-links">
      <a href="#0">UI/UX + Frontend</a>
    </div>
    <h3 className="blog-card__title">
      <a
        href="https://profile-navy-gamma.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Web App with Login & Add to Cart
      </a>
    </h3>
  </div>

  <div className="blog-card__text">
    <p>
      Designed and developed a modern profile-based web application with a clean
      UI/UX. The project includes user authentication (login system) and add-to-cart
      functionality. Focused on responsive design, smooth user experience, and
      component-based structure. This project helped strengthen my frontend logic,
      UI design skills, and real-world feature implementation.
    </p>

    <div className="project-links">
      <a
        href="https://profile-navy-gamma.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--stroke"
      >
        View Project
      </a>

      <a
        href="https://github.com/Amna-saleem22/Profile"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--text"
      >
        GitHub
      </a>
    </div>
  </div>
</div>


          {/* Blog Card 5 - SEO & Digital Marketing */}
        <div className="grid-list-items__item blog-card">
  <div className="blog-card__header">
    <div className="blog-card__cat-links">
      <a href="#0">E-Commerce</a>
    </div>
    <h3 className="blog-card__title">
      <a
        href="https://github.com/Amna-saleem22/ecommerce-site"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dynamic E-Commerce Website
      </a>
    </h3>
  </div>

  <div className="blog-card__text">
    <p>
      Developed a dynamic e-commerce website with core shopping functionalities.
      The project includes product listing, add-to-cart functionality, and dynamic
      data handling. Focused on clean UI, reusable components, and frontend logic.
      This project strengthened my understanding of e-commerce workflows and
      real-world web application behavior.
    </p>

    <div className="project-links">
      <a
        href="https://github.com/Amna-saleem22/ecommerce-site"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--text"
      >
        GitHub
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>

    {/* Pagination */}
    {/* <div className="row navigation pagination">
      <div className="column xl-12">
        <nav className="pgn">
          <ul>
            <li>
              <a className="pgn__prev" href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"/>
                </svg>
              </a>
            </li>
            <li><a className="pgn__num" href="#0">1</a></li>
            <li><span className="pgn__num current">2</span></li>
            <li><a className="pgn__num" href="#0">3</a></li>
            <li><span className="pgn__num dots">…</span></li>
            <li><a className="pgn__num" href="#0">5</a></li>
            <li>
              <a className="pgn__next" href="#0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div> */}

  </section>
</section>


      {/* Call to Action */}
        <section id="cta" className="s-cta">
        <div className="row row-x-center text-center">
          <div className="column xl-8 lg-12">
            <h2 className="text-display-title">
              Let’s Build Something Amazing Together
            </h2>
            <p className="lead">
              I am available for freelance projects, internships, and entry-level opportunities. 
              Reach out to discuss your idea or project.
            </p>
            <a href="#contact" className="btn btn--primary">
              Let’s Work Together
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
