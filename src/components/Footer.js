import React from 'react';
import './Navbar.css'; // External CSS file
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';
export default function Footer() {



const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    e.target,
    "YOUR_PUBLIC_KEY"
  )
  .then(
    (result) => {
      alert("Message sent successfully!");
      e.target.reset();
    },
    (error) => {
      alert("Something went wrong!");
    }
  );
};

  
  return (
   <>
  <footer className="s-footer">
  <div className="row s-footer__content">

    {/* ABOUT */}
    <div className="column xl-6 lg-6 md-12 s-footer__block s-footer__about">
      <h3>About Me</h3>
      <p>
        I am a passionate Web Developer with hands-on experience in
        React, Angular, JavaScript, HTML, and CSS. I build modern, responsive,
        and user-friendly web applications including e-commerce systems,
        authentication modules, and dynamic UI components. Along with
        development, I also create clean UI designs, posters, and templates
        using Canva and Figma.
      </p>
    </div>

    {/* SITE LINKS */}
    <div className="column xl-3 lg-6 md-12 s-footer__block s-footer__site-links">
      {/* <h3>Quick Links</h3>
       <ul className="s-header__menu-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
           
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Project</Link></li>
          </ul> */}
    </div>

    {/* NEWSLETTER / CONTACT */}
    <div className="column xl-3 lg-6 md-12 tab-12 s-footer__block s-footer__newsletter">
      <h3>Work With Me</h3>
      <p>
        Looking for a responsive website, e-commerce app, or modern UI design?
        Feel free to reach out — I’m available for freelance and remote work.
      </p>

 <div className="subscribe-form">
  <form className="mc-form" onSubmit={sendEmail}>
    
    <input
      type="email"
      name="user_email"
      className="u-fullwidth text-center"
      placeholder="Your Email Address"
      required
    />

    <input
      type="submit"
      value="Contact Me"
      className="btn btn--primary btn--small u-fullwidth"
    />
  </form>
</div>

    </div>

  </div>

  {/* FOOTER BOTTOM */}
  <div className="row s-footer__bottom">

    <div className="column xl-6 lg-12">
      <ul className="s-footer__social social-list">
        <li>
          <a href="https://github.com/Amna-saleem22" target="_blank" rel="noreferrer">
            <span className="u-screen-reader-text">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noreferrer">
            <span className="u-screen-reader-text">LinkedIn</span>
          </a>
        </li>
       
      </ul>
    </div>

 

    <div className="ss-go-top">
      <a className="smoothscroll" title="Back to Top" href="#top">
        ↑
      </a>
    </div>

  </div>
</footer>


  </>
  );
}
