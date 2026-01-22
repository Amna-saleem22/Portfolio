import React from "react";
const Contact = () => {
  return (
    <div id="page" className="s-pagewrap">

      {/* Page Content */}
      <section id="content" className="s-content">

        {/* Page Header */}
        <section className="s-pageheader pageheader">
          <div className="row">
            <div className="column xl-12">
              <h1 className="page-title">
                <span className="page-title__small-type text-pretitle">Contact</span>
                Get In Touch
              </h1>
            </div>
          </div>
        </section> {/* end pageheader */}

        {/* Page Intro */}
   <section className="s-pagecontent pagecontent">

  {/* Intro Section */}
  <div className="row pageintro">
    <div className="column xl-6 lg-12">
      <h2 className="text-display-title">
        Let's Take Your Business to the Next Level
      </h2>
    </div>
    <div className="column xl-6 lg-12 u-flexitem-x-right">
      <p className="lead">
        I am here to help you grow your business with modern web solutions, responsive designs, and professional online presence. 
        Together, we can create something unique and impactful.
      </p>
    </div>
  </div> {/* end pageintro */}

  {/* Contact Main */}
  <div className="row width-narrower pagemain">
    <div className="column xl-12">

      <h2>Let's Work Together</h2>

      <div className="row">

        {/* Contact Form / CTA */}
        <div className="column xl-6 md-12 contact-cta">
          <p>
            Want to get in touch? Feel free to send me a message or an email and I’ll respond as soon as possible. 
            I value clear communication and timely delivery on all projects.
          </p>

          <a href="mailto:hello@monica.com" className="btn btn--primary u-fullwidth contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
              <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
            </svg>
            Send Me An Email
          </a>
        </div>

        {/* Contact Info / Social Links */}
        <div className="column xl-5 md-12 u-flexitem-x-right">

          {/* Social Links */}
          <div className="contact-block">
            <h6>Follow Me On Social</h6>
            {/* <ul className="contact-social social-list">
              {[
                { name: "Facebook", href: "#0", svgPath: "M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" },
                { name: "Twitter", href: "#0", svgPath: "M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" },
                { name: "Instagram", href: "#0", svgPath: "M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}>
                      <path d={item.svgPath}></path>
                    </svg>
                    <span className="u-screen-reader-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul> */}
            <ul className="contact-social social-list">
  <li>
    <a
      href="https://www.linkedin.com/in/amna-saleem-it/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-linkedin"></i>
      <span className="u-screen-reader-text">LinkedIn</span>
    </a>
  </li>

  <li>
    <a
      href="https://github.com/Amna-Saleem22"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa-brands fa-github"></i>
      <span className="u-screen-reader-text">GitHub</span>
    </a>
  </li>
</ul>

          </div>

          {/* Email */}
          <div className="contact-block">
            <h6>Email</h6>
            <a href="mailto:hello@monica.com">saleemamna431@gmail.com</a>
            <br />
             <a href="mailto:hello@monica.com">amnasaleemrao@gmail.com</a>
          </div>

          {/* Phone */}
          <div className="contact-block">
            <h6>Phone</h6>
            <ul className="contact-list">
              <li><a href="tel:+92 0335 3784278">+92 0335 3784278</a></li>
              <li><a href="tel:+92 0319 2034362">+92 0319 2034362 </a></li>
            </ul>
          </div>

        </div> {/* end contact info */}
      </div> {/* end row */}
    </div> {/* end column */}
  </div> {/* end pagemain */}

</section>
 {/* end pagecontent */}

      

      </section> {/* end s-content */}

    </div> /* end page-wrap */
  );
};

export default Contact;
