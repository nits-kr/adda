import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md  mb-4 header fixed-top d-flex align-items-center">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/audit-report">
                  Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auditior-question#">
                  History
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/roles">
                  Certificates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Action Plan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;