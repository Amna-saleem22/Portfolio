// import { Link } from 'react-router-dom';
// import './Navbar.css'; // External CSS file

// export default function Navbar() {
//   return (

//     <>



//       {/* 

//     <nav className="navbar">
//       <div className="logo">Amna</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//  */}












// <header className="s-header">
//   <div className="row s-header__inner width-sixteen-col">

//     <div className="s-header__block">
//       <div className="s-header__logo">
//         <a className="logo" href="index.html">
//           <img src="images/logo.svg" alt="Homepage" />
//         </a>
//       </div>

//       <a className="s-header__menu-toggle" href="#0">
//         <span>Menu</span>
//       </a>
//     </div>

//     <nav className="s-header__nav">
//       <ul className="s-header__menu-links">
//         <li><a href="about.html">About</a></li>
//         <li><a href="services.html">Services</a></li>
//         <li><a href="blog.html">Project</a></li>
//         <li><a href="contact.html">Contact</a></li>
//       </ul>

//       <div className="s-header__contact">
//         <a
//           href="contact.html"
//           className="btn btn--primary s-header__contact-btn"
//         >
//           Let's Work Together
//         </a>
//       </div>
//     </nav>

//   </div>
// </header>




//     </>











//   );
// }





import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <header className="s-header">
      <div className="row s-header__inner width-sixteen-col">

        <div className="s-header__block">
        

          <a className="s-header__menu-toggle" href="#0">
            <span>Menu</span>
          </a>
        </div>

        <nav className="s-header__nav">
          <ul className="s-header__menu-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Services</Link></li>
           
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Project</Link></li>
          </ul>

          <div className="s-header__contact">
            <Link
              to="/contact"
              className="btn btn--primary s-header__contact-btn"
            >
              Let's Work Together
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
}