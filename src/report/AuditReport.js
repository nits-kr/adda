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

  const data = {
    labels: [' Data Governance', 'Data Management', ' Open Data', 'Data Catelogue', ' Data Modelling & Design', 'Data Architecture'," Data Security & Privacy","Data Storage"," Data Integration & Interoperability"," Data Quality"],
    datasets: [{
      label: '  ',
      data: [12, 19, 6, 5, 2, 3,9,10,8,16],
      borderWidth: 2,
      backgroundColor: ['#CB4335', '#1F618D', '#F1C40F', '#27AE60', '#884EA0', '#D35400',"#27BE70","#87AL50","#FFAW60","#E2AE60"],
    }]
  };

  return (
    <>
      <Header />
      <Navbar  Dash={"Report"}/>
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

  <div className="container">
    <div className="pagetitle">
      <h1 className="col-lg-2 float-start ps-3">Admin Dashboard</h1>
      <div className="col-md-2 float-start pe-2 pb-1">
        <select
          className="form-select form-select-sm mb-1"
          aria-label="Default select example"
          style={{ zIndex: 9999 }}
        >
          <option selected="">Select The ADGE</option>
          <option value={1}>Abu Dhabi Housing Authority</option>
          <option value={2}>Family Care Authority</option>
          <option value={3}>Family Development Foundation</option>
        </select>
      </div>
      <div className="col-md-1 float-start pe-2 pb-1">
        <select
          className="form-select form-select-sm mb-1"
          aria-label="Default select example"
          style={{ zIndex: 9999 }}
        >
          <option selected="">Year</option>
          <option value={1}>202</option>
          <option value={2}>2022</option>
          <option value={3}>2023</option>
        </select>
      </div>
      <div className="col-md-1 float-start pe-2 pb-1">
        <select
          className="form-select form-select-sm mb-1"
          aria-label="Default select example"
          style={{ zIndex: 9999 }}
        >
          <option selected="">Year</option>
          <option value={1}>202</option>
          <option value={2}>2022</option>
          <option value={3}>2023</option>
        </select>
      </div>
    </div>
    <section className="section dashboard" style={{ clear: "both" }}>
      <div className="row">
        <div className="col-lg-12">
          <div className="row px-2">
           
            <div className="col-xxl-12 col-md-12 pe-0">
              <div className="card " >
                <div className="card-body">
                  <h5 className="card-title">Scores</h5>
                  <div className="row">
                    <div className="col-lg-9 pe-0 pb-0">
                      <div className="col-lg-12 mb-0">
                        <div className="card ">
                          <div className="card-body " style={{ height:"6rem"}} >
                            <div className="row justify-content-start">
                              <div className="col-auto mx-3">
                                <img
                                  src={require("../assets/img/addaRepo.png")}
                                  className="img-fluid"
                                  alt=""
                                  style={{width:"18rem"}}
                                />
                              </div>
                              <div className=" col-auto">
                                <h5 style={{ lineHeight:3,fontSize:"1.6rem" }}>
                                  Abu Dhabi Social Support Authority
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
                              <div className="card-title">Overall Score</div>
                              <div className="float-start overflow-auto">
                                <p className="nopad">
                                  38.5%
                                  <i className="fa-solid fa-arrow-down text-danger  fs-3 mx-2" />
                                </p>
                                <small>2022 - 2023</small>
                              </div>
                              <div
                                className="position-absolute"
                                style={{position:"relative", right: 20,top:90}}
                              >
                                <p className="prev fs-6">65.5%</p>
                                
                              </div>
                              <strong
                                style={{position:"relative", right:-30,top:101}}
                              className="text-light"
                              >Previous</strong>

                            </div>
                          </div>
                          <div className="card obs-bg" style={{backgroundColor:"#F6F7FF"}}>
                            <div className="card-body">
                              <div className="card-title">Observations</div>
                              <ul className="RecObs">
                                <li>
                                  The organization lacks a comprehensive data
                                  governance framework. There is no formalized
                                  structure or defined roles and
                                  responsibilities for data governance.
                                </li>
                                <li>
                                  Data quality control measures are
                                  insufficient, leading to issues with data
                                  accuracy, completeness, and{" "}
                                </li>
                                <li>
                                  Inadequate data security controls are in
                                  place, posing risks to the confidentiality,
                                  integrity, and availability of sensitive data
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
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              position: "relative",
                              width:"25rem",
                              height:"25rem",
                              padding:"3rem"
                            }}
                          data={data}
                          // onClick={infoBar ? onClickInfo : onClick}
                          // ref={charRef}
                        />
                              {/* <div
                                id="pieChart"
                                style={{
                                  minHeight: 500,
                                  userSelect: "none",
                                  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                  position: "relative"
                                }}
                                className="echart"
                                _echarts_instance_="ec_1689225355819"
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    width: 489,
                                    height: 500,
                                    padding: 0,
                                    margin: 0,
                                    borderWidth: 0,
                                    cursor: "default"
                                  }}
                                >
                                  <canvas
                                    data-zr-dom-id="zr_0"
                                    width={489}
                                    height={500}
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      top: 0,
                                      width: 489,
                                      height: 500,
                                      userSelect: "none",
                                      WebkitTapHighlightColor:
                                        "rgba(0, 0, 0, 0)",
                                      padding: 0,
                                      margin: 0,
                                      borderWidth: 0
                                    }}
                                  />
                                </div>
                                <div
                                  className=""
                                  style={{
                                    position: "absolute",
                                    display: "block",
                                    borderStyle: "solid",
                                    whiteSpace: "nowrap",
                                    zIndex: 9999999,
                                    boxShadow:
                                      "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                                    transition:
                                      "opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    color: "rgb(102, 102, 102)",
                                    font: '14px / 21px "Microsoft YaHei"',
                                    padding: 10,
                                    top: 0,
                                    left: 0,
                                    transform: "translate3d(210px, 82px, 0px)",
                                    borderColor: "rgb(234, 124, 204)",
                                    pointerEvents: "none",
                                    visibility: "hidden",
                                    opacity: 0
                                  }}
                                >
                                  <div
                                    style={{ margin: "0px 0 0", lineHeight: 1 }}
                                  >
                                    <div
                                      style={{
                                        margin: "0px 0 0",
                                        lineHeight: 1
                                      }}
                                    >
                                      <span
                                        style={{
                                          display: "inline-block",
                                          marginRight: 4,
                                          borderRadius: 10,
                                          width: 10,
                                          height: 10,
                                          backgroundColor: "#ea7ccc"
                                        }}
                                      />
                                      <span
                                        style={{
                                          fontSize: 14,
                                          color: "#666",
                                          fontWeight: 400,
                                          marginLeft: 2
                                        }}
                                      >
                                        Open Data
                                      </span>
                                      <span
                                        style={{
                                          float: "right",
                                          marginLeft: 20,
                                          fontSize: 14,
                                          color: "#666",
                                          fontWeight: 900
                                        }}
                                      >
                                        98
                                      </span>
                                      <div style={{ clear: "both" }} />
                                    </div>
                                    <div style={{ clear: "both" }} />
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card rec-bg">
                        <div className="card-body">
                          <div className="card-title">Recommendations</div>
                          <ul className="RecObs">
                            <li>
                              Implement a robust data governance framework:
                              Establish clear data ownership, accountability,
                              and decision-making processes. Develop and enforce
                              data management policies, standards, and
                              procedures across the organization.
                            </li>
                            <li>
                              Enhance data quality control processes: Implement
                              data validation and cleansing mechanisms to ensure
                              the accuracy, completeness, and consistency of
                              data. Establish regular data quality audits and
                              remediation procedures.
                            </li>
                            <li>
                              Strengthen data security measures: Evaluate and
                              enhance data security controls, including access
                              controls, encryption, and monitoring mechanisms.
                              Implement a comprehensive data security training
                              program for employees to raise awareness of data
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



                    {/* <button
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
                    </table> */}
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
