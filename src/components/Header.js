import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="top-header">
        <div className="container-fluid ">
          <div className="d-flex">
            <div className="col-lg-3">
              <img src="img/logo.svg" alt="" />
            </div>
            <div className="col-lg-9 ">
              <nav className="header-nav ms-auto float-end">
                <ul className="d-flex align-items-center">
                  <li className="nav-item d-block d-lg-none">
                    <Link
                      className="nav-link nav-icon search-bar-toggle "
                      to="#"
                    >
                      <i className="bi bi-search" />
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link nav-icon"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bi bi-bell" />
                      <span className="badge bg-primary badge-number">4</span>
                    </Link>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                      <li className="dropdown-header">
                        You have 4 new notifications
                        <Link to="#">
                          <span className="badge rounded-pill bg-primary p-2 ms-2">
                            View all
                          </span>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="notification-item">
                        <i className="bi bi-exclamation-circle text-warning" />
                        <div>
                          <h4>Lorem Ipsum</h4>
                          <p>Quae dolorem earum veritatis oditseno</p>
                          <p>30 min. ago</p>
                        </div>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="notification-item">
                        <i className="bi bi-x-circle text-danger" />
                        <div>
                          <h4>Atque rerum nesciunt</h4>
                          <p>Quae dolorem earum veritatis oditseno</p>
                          <p>1 hr. ago</p>
                        </div>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="notification-item">
                        <i className="bi bi-check-circle text-success" />
                        <div>
                          <h4>Sit rerum fuga</h4>
                          <p>Quae dolorem earum veritatis oditseno</p>
                          <p>2 hrs. ago</p>
                        </div>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="notification-item">
                        <i className="bi bi-info-circle text-primary" />
                        <div>
                          <h4>Dicta reprehenderit</h4>
                          <p>Quae dolorem earum veritatis oditseno</p>
                          <p>4 hrs. ago</p>
                        </div>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="dropdown-footer">
                        <Link to="#">Show all notifications</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown pe-3">
                    <Link
                      className="nav-link nav-profile d-flex align-items-center pe-0"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        src="assets/img/profile-img.jpg"
                        alt="Profile"
                        className="rounded-circle"
                      />
                      <span className="d-none d-md-block dropdown-toggle ps-2">
                        K. Anderson
                      </span>
                    </Link>

                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                      <li className="dropdown-header">
                        <h6>Kevin Anderson</h6>
                        <span>Web Designer</span>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item d-flex align-items-center"
                          to="users-profile.html"
                        >
                          <i className="bi bi-person" />
                          <span>My Profile</span>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item d-flex align-items-center"
                          to="users-profile.html"
                        >
                          <i className="bi bi-gear" />
                          <span>Account Settings</span>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item d-flex align-items-center"
                          to="pages-faq.html"
                        >
                          <i className="bi bi-question-circle" />
                          <span>Need Help?</span>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item d-flex align-items-center"
                          to="#"
                        >
                          <i className="bi bi-box-arrow-right" />
                          <span>Sign Out</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
