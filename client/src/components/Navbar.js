import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " >
  {/* Container wrapper */}
  <div className="container-fluid">
    {/* Toggle button */}
    <button
      data-mdb-collapse-init=""
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      {/* Left links */}
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        {/* Navbar dropdown */}
        <li className="nav-item dropdown">
          <a
            data-mdb-dropdown-init=""
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            aria-expanded="false"
          >
            Dropdown
          </a>
          {/* Dropdown menu */}
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
  </div>
  {/* Container wrapper */}
</nav>

    </div>
  )
}

export default Navbar
