import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Pie, getElementsAtEvent } from "react-chartjs-2";

function AuditReport() {
  const [isSubmit, setIsSubmit] = useState(true);
  const data = {
    labels: [
      " Data Governance",
      "Data Management",
      " Open Data",
      "Data Catelogue",
      " Data Modelling & Design",
      "Data Architecture",
      " Data Security & Privacy",
      "Data Storage",
      " Data Integration & Interoperability",
      " Data Quality",
    ],
    datasets: [
      {
        label: "  ",
        data: [12, 19, 6, 5, 2, 3, 9, 10, 8, 16],
        borderWidth: 2,
        backgroundColor: [
          "#CB4335",
          "#1F618D",
          "#F1C40F",
          "#27AE60",
          "#884EA0",
          "#D35400",
          "#27BE70",
          "#03fcf4",
          "#03b1fc",
          "#E2AE60",
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <Navbar Dash={"Report"} />
      <main id="main" className="main container">
        {isSubmit ? (
          <div className="col-lg-12 mb-0">
            <div className="card ">
              <div className="card-body " style={{ height: "20rem" }}>
                <div className="row justify-content-start">
                  <form
                    className="form-design p-3 help-support-form row justify-content-center"
                    action="">
                    <div className=" col-12">
                      <div className="row d-flex ">
                        <div className="col-2 pt-4">
                          <p className="fs-6 text-secondary">Select ADGE :</p>
                        </div>
                        <div className="col-8 text-start">
                          <select
                            className="form-select"
                            id="floatingSelect1"
                            aria-label="Floating label select example"
                            defaultValue="Open this Select menu"
                            style={{
                              marginTop: "15px",
                            }}
                            // onChange={(e) => setStatus(e.target.value)}
                          >
                            <option value="Active" selected="">
                              Open this Select menu
                            </option>
                            <option value="Active">ADGE</option>
                            <option value="Active">ADGE Auditor</option>
                            <option value="Active">ADDA Admin</option>
                          </select>
                        </div>
                      </div>
                      <div className="row d-flex ">
                        <div className="col-2 pt-4">
                          <p className="fs-6 text-secondary">Audit Title:</p>
                        </div>
                        <div className="col-8 text-start">
                          <select
                            className="form-select"
                            id="floatingSelect1"
                            aria-label="Floating label select example"
                            defaultValue="Open this Select menu"
                            style={{
                              marginTop: "15px",
                            }}
                            // onChange={(e) => setStatus(e.target.value)}
                          >
                            <option value="Active" selected="">
                              Open this Select menu
                            </option>
                            <option value="Active">ADGE</option>
                            <option value="Active">ADGE Auditor</option>
                            <option value="Active">ADDA Admin</option>
                          </select>
                        </div>
                      </div>
                      <div className="row d-flex ">
                        <div className="col-2 pt-4">
                          <p className="fs-6 text-secondary">Date :</p>
                        </div>
                        <div className="col-8 text-start pt-2">
                          <input
                            type="date"
                            class="form-select"
                            id="inputGroupFile01"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row d-flex ">
                      <div className="col-2"></div>
                      <div className="col-8 pt-4">
                        <button
                          className="comman_btn2 mx-2  text-light"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            width: "8rem",
                            height: "40px",
                            backgroundColor: "#5058DD",
                          }}
                          onClick={() => {
                            setIsSubmit(!isSubmit);
                          }}>
                          Submit Form
                        </button>
                        <button
                          className="comman_btn2  text-light"
                          style={{
                            border: "none",
                            borderRadius: "5px",
                            width: "100px",
                            height: "40px",
                            backgroundColor: "#3eb3237",
                          }}
                          onClick={() => {
                            setIsSubmit(!isSubmit);
                          }}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container p-0">
            <section className="section">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card StaticCard">
                    <div className="card-body" style={{ flex: "1" }}>
                      <h5
                        className="card-title float-start"
                        style={{ marginRight: "10px", marginTop: "4px" }}>
                        {" "}
                        <strong>Auditor Reports</strong>{" "}
                      </h5>

                      <div className="container">
                        <div className="pagetitle">
                          {/* <h1 className="col-lg-2 float-start ps-3">
                                                        Admin Dashboard
                                                      </h1> */}
                          <div className="col-md-2 float-start pe-2 pb-1">
                            <select
                              className="form-select form-select-sm mb-1"
                              aria-label="Default select example"
                              style={{ zIndex: 9999 }}>
                              <option selected="">Select The ADGE</option>
                              <option value={1}>
                                Abu Dhabi Housing Authority
                              </option>
                              <option value={2}>Family Care Authority</option>
                              <option value={3}>
                                Family Development Foundation
                              </option>
                            </select>
                          </div>
                          <div className="col-md-1 float-start pe-2 pb-1">
                            <select
                              className="form-select form-select-sm mb-1"
                              aria-label="Default select example"
                              style={{ zIndex: 9999 }}>
                              <option selected="">Year</option>
                              <option value={1}>2021</option>
                              <option value={2}>2022</option>
                              <option value={3}>2023</option>
                            </select>
                          </div>
                        </div>
                        <section
                          className="section dashboard"
                          style={{ clear: "both" }}>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row px-2">
                                <div className="col-xxl-12 col-md-12 pe-0">
                                  <div className="card ">
                                    <div className="card-body">
                                      <h5 className="card-title">Scores</h5>
                                      <div className="row">
                                        <div className="col-lg-9 pe-0 pb-0">
                                          <div className="col-lg-12 mb-0">
                                            <div className="card ">
                                              <div
                                                className="card-body "
                                                style={{ height: "6rem" }}>
                                                <div className="row justify-content-start">
                                                  <div className="col-auto mx-3">
                                                    <img
                                                      src={require("../assets/img/addaRepo.png")}
                                                      className="img-fluid"
                                                      alt=""
                                                      style={{ width: "18rem" }}
                                                    />
                                                  </div>
                                                  <div className=" col-auto">
                                                    <h5
                                                      style={{
                                                        lineHeight: 3,
                                                        fontSize: "1.6rem",
                                                      }}>
                                                      Abu Dhabi Social Support
                                                      Authority
                                                    </h5>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="row">
                                            <div className="col-lg-4 pe-0">
                                              <div className="card AdminCustomCardAll">
                                                <div className="card-body ps-3">
                                                  <div className="card-title">
                                                    Overall Score
                                                  </div>
                                                  <div className="">
                                                    Current Score
                                                  </div>
                                                  <div className="float-start overflow-auto">
                                                    <p className="nopad">
                                                      38.5%
                                                      <i className="fa-solid fa-arrow-down text-danger  fs-3 mx-2" />
                                                    </p>
                                                    <small>2022 - 2023</small>
                                                  </div>
                                                  <div
                                                    className="position-absolute"
                                                    style={{
                                                      position: "relative",
                                                      right: 18,
                                                      top: 110,
                                                    }}>
                                                    <div>
                                                      <p className="prev fs-6">
                                                        Previous score : 65.5%
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="card obs-bg"
                                                style={{
                                                  backgroundColor: "#F6F7FF",
                                                }}>
                                                <div className="card-body" style={{height: "386px"}}>
                                                  <div className="card-title">
                                                    Observations
                                                  </div>
                                                  <ul className="RecObs">
                                                    <li>
                                                      The organization lacks a
                                                      comprehensive data
                                                      governance framework.
                                                      There is no formalized
                                                      structure or defined roles
                                                      and responsibilities for
                                                      data governance.
                                                    </li>
                                                    <li>
                                                      Data quality control
                                                      measures are insufficient,
                                                      leading to issues with
                                                      data accuracy,
                                                      completeness, and{" "}
                                                    </li>
                                                    <li>
                                                      Inadequate data security
                                                      controls are in place,
                                                      posing risks to the
                                                      confidentiality,
                                                      integrity, and
                                                      availability of sensitive
                                                      data
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-lg-8 justify-content-center">
                                              <div className="card ">
                                                <div className="card-body ">
                                                  <Pie
                                                    className=""
                                                    style={{
                                                      minHeight: 200,
                                                      userSelect: "none",
                                                      WebkitTapHighlightColor:
                                                        "rgba(0, 0, 0, 0)",
                                                      position: "relative",
                                                      width: "25rem",
                                                      height: "25rem",
                                                      padding: "3rem",
                                                    }}
                                                    data={data}
                                                    // onClick={infoBar ? onClickInfo : onClick}
                                                    // ref={charRef}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-3">
                                          <div className="card rec-bg">
                                            <div className="card-body" style={{height: "688px"}}>
                                              <div className="card-title">
                                                Recommendations
                                              </div>
                                              <ul className="RecObs">
                                                <li>
                                                  Implement a robust data
                                                  governance framework:
                                                  Establish clear data
                                                  ownership, accountability, and
                                                  decision-making processes.
                                                  Develop and enforce data
                                                  management policies,
                                                  standards, and procedures
                                                  across the organization.
                                                </li>
                                                <li>
                                                  Enhance data quality control
                                                  processes: Implement data
                                                  validation and cleansing
                                                  mechanisms to ensure the
                                                  accuracy, completeness, and
                                                  consistency of data. Establish
                                                  regular data quality audits
                                                  and remediation procedures.
                                                </li>
                                                <li>
                                                  Strengthen data security
                                                  measures: Evaluate and enhance
                                                  data security controls,
                                                  including access controls,
                                                  encryption, and monitoring
                                                  mechanisms. Implement a
                                                  comprehensive data security
                                                  training program for employees
                                                  to raise awareness of data
                                                  protection best practices.
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  );
}

export default AuditReport;
