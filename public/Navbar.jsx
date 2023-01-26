import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
    <div className="container-fluid p-4 p-sm-5">
      <a className="navbar-brand" href="/"><h3><em>MUTUAL</em> AID</h3></a>
      <button id="toggleBtn" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav me-auto mb-1 mb-sm-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">Home</a>
          </li>
        </ul>
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item me-4 mb-3 mb-sm-0">
              <a className="nav-link" data-bs-toggle="modal" href="#LoginToggle">Login</a>
            </li>
            <li className="nav-item">
              <button className="secondary-pink" data-bs-toggle="modal" href="#RegisterToggle">Sign Up</button>
            </li>
          </ul>        
        </div>         
      </div>
    </div>
  </nav>
  )
}

export default Navbar