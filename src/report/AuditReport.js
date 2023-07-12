import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCopy,
  faDownload,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
function AuditReport() {
  return (
    <>
      <Header />
      <Navbar />
      <main id="main" className="main">
        <div className="container p-0">
          <section className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card StaticCard">
                  <div className="card-body" style={{ flex: "1" }}>
                    <h5 className="card-title float-start">
                      {" "}
                      <strong>Auditor Reports</strong>{" "}
                    </h5>
                    <button
                      type="button"
                      className="btn btn-sm DefaultBtn float-end mt-1"
                      fdprocessedid="bfs61e"
                    >
                      <FontAwesomeIcon icon={faDownload} /> Download
                    </button>
                    <table
                      className="table table-sm table-hover table-striped CustomTable1"
                      id="UserTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col-2">Category Name</th>
                          <th scope="col-8"></th>
                          <th scope="col-2">Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Data Governances</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Quality</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Modeling</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Integration</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Quality Management</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Master Data Management</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Metadata Management</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Security and Privacy</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Storage and Infrastructure</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Management Training And Awareness</th>
                          <td>
                            <div
                              className="progress"
                              style={{ width: "100vh" }}
                            >
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "70%" }}
                              >
                                70%
                              </div>
                            </div>
                          </td>
                          <td> 70%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AuditReport;
