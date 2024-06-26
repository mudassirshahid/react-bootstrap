import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/logo.png'


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light container nav-index">
      <Link className="navbar-brand" to="/"><img src={logo} /></Link> {/* Use Link instead of anchor */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex nav-color">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> {/* Use Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About</Link> {/* Use Link */}
          </li>
          {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="" role="button" data-toggle="dropdown" aria-expanded="false">
              Services
            </Link>
            <div className="dropdown-menu nav-dd">
              <Link className="dropdown-item" to="/webdevelopment">Web Developement</Link> 
              <Link className="dropdown-item" to="/seo">SEO</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/webdesign">Web Design</Link> 
            </div>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="pricing">Pricing</Link> {/* Use Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="blog">Blog</Link> {/* Use Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="team">Team</Link> {/* Use Link */}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">Contact</Link> {/* Use Link */}
          </li>
        </ul>
       
      </div>
    </nav>
      </>
    
  );
}

export default Navbar;
