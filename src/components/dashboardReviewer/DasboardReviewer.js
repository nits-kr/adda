import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";

function DasboardReviewer() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="modal fade" id="ExtralargeModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Duplicate</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    Title
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      id="inputText"
                      placeholder="Data Management Audit-June2023"
                    />
                  </div>
                </div>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-3 pt-0">
                    Need Uploaded Evidences
                  </legend>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Example checkbox
                      </label>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <main id="main" className="main">
        <div className="container">
          <div className="pagetitle">
            <h1>Auditor Dashboard</h1>
          </div>
          {/* End Page Title */}
          <section className="section dashboard">
            <div className="row">
              {/* Left side columns */}
              <div className="col-lg-12">
                <div className="row">
                  {/* Sales Card */}
                  <div className="col-xxl-3 col-md-3">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Today
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Month
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Year
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          Total <span>| Today</span>
                        </h5>
                        <div className="align-items-center">
                          <div className="ps-3 float-start">
                            <h6>145</h6>
                          </div>
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center float-end">
                            <img src="img/total-icon.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Sales Card */}
                  {/* Revenue Card */}
                  <div className="col-xxl-3 col-md-3">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Today
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Month
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Year
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          Approved <span>| Today</span>
                        </h5>
                        <div className="align-items-center">
                          <div className="ps-3 float-start">
                            <h6>145</h6>
                          </div>
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center float-end">
                            <img src="img/approved-icon.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Revenue Card */}
                  <div className="col-xxl-3 col-md-3">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Today
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Month
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Year
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          Rejected <span>| Today</span>
                        </h5>
                        <div className="align-items-center">
                          <div className="ps-3 float-start">
                            <h6>145</h6>
                          </div>
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center float-end">
                            <img src="img/rejected-icon.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-md-3">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Today
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Month
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Year
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          Pending <span>| Today</span>
                        </h5>
                        <div className="align-items-center">
                          <div className="ps-3 float-start">
                            <h6>145</h6>
                          </div>
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center float-end">
                            <img src="img/pending-icon.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Customers Card */}
                  {/* End Customers Card */}
                  {/* Reports */}
                  <div className="col-xxl-8 col-md-8">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Scores</h5>
                        {/* Bar Chart */}
                        <div
                          id="barChart"
                          style={{ minHeight: 465 }}
                          className="echart"
                        />
                        {/* End Bar Chart */}
                      </div>
                    </div>
                  </div>
                  {/* End Reports */}
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Audit Issued</h5>
                        {/* Bar Chart */}
                        <canvas id="barChart2" style={{ maxHeight: 200 }} />
                        {/* End Bar CHart */}
                      </div>
                    </div>
                    <div className="card top-selling overflow-auto">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <i className="bi bi-three-dots" />
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li className="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Today
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Month
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              This Year
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body pb-0" style={{ height: 290 }}>
                        <h5 className="card-title">Approval Rate</h5>
                        <table className="table pb-0">
                          <tbody>
                            <tr>
                              <td>
                                <h6 className="float-start">
                                  813{" "}
                                  <span className="TableItalicText">
                                    Data Governance
                                  </span>
                                </h6>
                                <h5 className="float-end">10%</h5>
                                <div
                                  className="progress "
                                  style={{ height: 5, clear: "both" }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow={10}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="float-start">
                                  236{" "}
                                  <span className="TableItalicText">
                                    Data Quality
                                  </span>
                                </h6>
                                <h5 className="float-end">30%</h5>
                                <div
                                  className="progress "
                                  style={{ height: 5, clear: "both" }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped bg-success"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow={10}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="float-start">
                                  65{" "}
                                  <span className="TableItalicText">
                                    Data Modeling
                                  </span>
                                </h6>
                                <h5 className="float-end">70%</h5>
                                <div
                                  className="progress "
                                  style={{ height: 5, clear: "both" }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped bg-danger"
                                    role="progressbar"
                                    style={{ width: "70%" }}
                                    aria-valuenow={10}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="float-start">
                                  658{" "}
                                  <span className="TableItalicText">
                                    Data Integration
                                  </span>
                                </h6>
                                <h5 className="float-end">40%</h5>
                                <div
                                  className="progress "
                                  style={{ height: 5, clear: "both" }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped bg-warning"
                                    role="progressbar"
                                    style={{ width: "40%" }}
                                    aria-valuenow={10}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <h6 className="float-start">
                                  102{" "}
                                  <span className="TableItalicText">
                                    Data Quality Management
                                  </span>
                                </h6>
                                <h5 className="float-end">60%</h5>
                                <div
                                  className="progress "
                                  style={{ height: 5, clear: "both" }}
                                >
                                  <div
                                    className="progress-bar progress-bar-striped bg-dark"
                                    role="progressbar"
                                    style={{ width: "600%" }}
                                    aria-valuenow={10}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* Recent Sales */}
                  {/* End Recent Sales */}
                  {/* Top Selling */}
                  {/* End Top Selling */}
                </div>
              </div>
              {/* End Left side columns */}
              {/* Right side columns */}
              {/* End Right side columns */}
            </div>
          </section>
        </div>
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <Link
        to="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </Link>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </>
  );
}

export default DasboardReviewer;
