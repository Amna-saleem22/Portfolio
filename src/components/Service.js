import React from "react";

const Services = () => {
  const servicesList = [
    {
      title: "Frontend Development",
      text: `I create responsive, pixel-perfect frontends using HTML, CSS, JavaScript, React, and Angular. 
      My focus is on clean code, smooth animations, and modern design principles for optimal user experience.`,
      items: ["React.js", "Angular", "Responsive Design", "CSS Animations"]
    },
    {
      title: "Backend Development",
      text: `I develop robust backend systems using C#, ASP.NET MVC, PHP, and Laravel. 
      My goal is to build scalable, secure, and high-performing web applications.`,
      items: ["ASP.NET MVC & Core", " PHP", "Node.js", "Database Management"]
    },
    {
      title: "Fullstack Development",
      text: `Combining frontend and backend skills to deliver complete web applications. 
      I ensure seamless integration between UI, server, and database for smooth functionality.`,
      items: [ "Database CRUD Operations", "Authentication & Security"]
    },
    {
      title: "Portfolio & Website Design",
      text: `Designing and developing professional portfolios, landing pages, and websites that reflect your brand identity. 
      I focus on modern layouts, typography, and user-friendly interfaces.`,
      items: ["Portfolio Websites", "Landing Pages", "Brand Identity", "UI/UX Design"]
    },
    {
      title: "Freelance Projects & Templates",
      text: `I create ready-to-use website templates, posters, and design materials on Canva and Figma, which can be customized for clients.`,
      items: ["Canva Design", "Website Templates", "Poster Design", "UI Templates"]
    },
    // {
    //   title: "Email & Digital Marketing Assistance",
    //   text: `I provide basic digital marketing solutions including email campaigns and social media guidance to help promote your business.`,
    //   items: ["Email Marketing", "Social Media Guidance", "Basic SEO Tips"]
    // }
  ];


  return (
    <section id="services" className="s-content">

      {/* Page Header */}
      <section className="s-pageheader pageheader">
        <div className="row">
          <div className="column xl-12">
            <h1 className="page-title">
              <span className="page-title__small-type text-pretitle">Services</span>
              My Expertise & Skills
            </h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="s-pagecontent pagecontent">
        <div className="row pageintro">
          <div className="column xl-6 lg-12">
            <h2 className="text-display-title">Skills & Services That I Offer</h2>
          </div>
          <div className="column xl-6 lg-12 u-flexitem-x-right">
            <p className="lead">
              I provide end-to-end web solutions for clients, including modern frontend designs, robust backend development, 
              and fullstack integration. I also offer portfolio websites, templates, and digital design services.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="row">
          <div className="column xl-12 grid-block">
            <div className="grid-full grid-list-items list-items show-ctr">
              {servicesList.map((service, idx) => (
                <div key={idx} className="grid-list-items__item list-items__item">
                  <div className="list-items__item-header">
                    <h3 className="list-items__item-title">{service.title}</h3>
                  </div>
                  <div className="list-items__item-text">
                    <p>{service.text}</p>
                    <ul className="list-services">
                      {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
 

      {/* CTA Section */}
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

    </section>
  );
};

export default Services;
