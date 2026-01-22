import React from "react";

const About = () => {
  return (
    <div id="page" className="s-pagewrap">

      {/* Page Header */}
      <section id="content" className="s-content">

        <section className="s-pageheader pageheader">
          <div className="row">
            <div className="column xl-12">
              <h1 className="page-title">
                <span className="page-title__small-type text-pretitle">About</span>
                Hi, I'm Amna!
              </h1>
            </div>
          </div>
        </section> {/* end pageheader */}

        {/* Page Content */}
      <section className="s-pagecontent pagecontent">

  {/* Intro Section */}
  <div className="row pageintro">
    <div className="column xl-6 lg-12">
      <h2 className="text-display-title">
        Inspiring Words to Describe Myself
      </h2>
    </div>
    <div className="column xl-6 lg-12 u-flexitem-x-right">
      <p className="lead">
        I am a passionate web developer and designer with a strong drive to create modern, responsive, and user-friendly websites. 
        I enjoy turning complex ideas into simple, elegant solutions, and continuously strive to improve my skills and knowledge in web development.
      </p>
    </div>
  </div> {/* end pageintro */}

  {/* About Section */}
  <div className="row pagemain">
    <div className="column xl-12">

      <h2>My Journey</h2>
      <p>
        I started my journey in software development with a strong curiosity about how websites and applications work. 
        Over time, I gained hands-on experience in frontend and backend technologies, including HTML, CSS, JavaScript, Angular, PHP, Laravel, and C#. 
        My goal is to deliver high-quality solutions that exceed client expectations.
      </p>

      <h2 className="u-add-bottom">My Core Values</h2>
      <div className="grid-list-items list-items">
        {[
          { title: "Passion", text: "I am deeply passionate about coding and design. Every project is an opportunity to learn, innovate, and provide value to clients." },
          { title: "Quality", text: "I ensure that every website and application I create is responsive, optimized, and maintains high standards of usability and aesthetics." },
          { title: "Reliability", text: "Clients can trust me to deliver projects on time and communicate clearly throughout the development process." },
          { title: "Continuous Learning", text: "I constantly update my knowledge and skills to stay ahead of emerging technologies and best practices in software development." }
        ].map((item, index) => (
          <div key={index} className="grid-list-items__item list-items__item u-remove-bottom">
            <div className="list-items__item-header">
              <h6 className="list-items__item-small-title">{item.title}</h6>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div> {/* end grid-list-items */}

      <h2>Why Work With Me</h2>
      <p>
        I combine creativity with technical expertise to build solutions that are not only functional but also visually appealing. 
        My collaborative approach ensures clients are involved at every step, making the development process smooth and efficient.
      </p>
      <p>
        From small personal projects to larger commercial applications, I strive to understand client needs and translate them into reliable, scalable, and beautiful digital experiences.
      </p>

      <h2>About Myself</h2>
      <p>
        Beyond coding, I am an enthusiastic learner who enjoys exploring new technologies and design trends. 
        I believe in self-improvement, logical problem-solving, and delivering work that makes a real impact. 
        I am committed, detail-oriented, and always ready to take on new challenges to grow as a professional.
      </p>

    </div> {/* end column */}
  </div> {/* end pagemain */}

</section>


        {/* Testimonials */}
       
      </section> {/* end s-content */}

      {/* Call to Action */}
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
</section>{/* end s-cta */}

    </div> /* end page-wrap */
  );
};

export default About;
