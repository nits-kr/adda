import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Navbar from "../Navbar";

import { useGetDashboardUserTotalQuery } from "../../services/Post";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Radar, Bar, getElementsAtEvent } from "react-chartjs-2";

function DashboardUser() {
  const dashBoardTotal = useGetDashboardUserTotalQuery();
  console.log("useGetDashboardUserTotalQuery", dashBoardTotal);
  var pdata = [
    {
      name: "Car",
      color: "green",
      brand: "Toyota",
      price: 25000,
    },
    {
      name: "Smartphone",
      color: "#e8aa3f",
      brand: "Samsung",
      price: 18990,
    },
    {
      name: "Watch",
      color: "Gold",
      brand: "Casio",
      price: 3599.99,
    },
    {
      name: "Headphones",
      color: "grey",
      brand: "Sony",
      price: 1149.99,
    },
    {
      name: "Chair",
      color: "Blue",
      brand: "Plastic",
      price: 629.99,
    },
    {
      name: "Camera",
      color: "Black",
      brand: "Canon",
      price: 5990,
    },
    {
      name: "Shoes",
      color: "Gray",
      brand: "Nike",
      price: 3589.99,
    },
  ];

  const [infoBar, setInfoBar] = useState(false);
  ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

  const charRef = useRef();
  const onClick = (e) => {
    console.log(e);
    setInfoBar(true);
  };
  const onClickInfo = (e) => {
    console.log(e);
  };
  const back = (e) => {
    setInfoBar(false);
  };
  const data = {
    labels: ["DS", "DM", "DC", "DS&P", "DA", "DM$D", "DG"],
    datasets: [
      {
        label: "2022",
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "2023",
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  const dataBar = {
    labels: [
      "Abu Dhabi Housing Authority",
      "Family Care Authority",
      "Family Development Foundation",
    ],
    datasets: [
      {
        label: "Score",
        data: [5, 3, 2],
        fill: true,
        backgroundColor: "rgba(125,132,248,1)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  const dataBarInfo = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Data",
        data: [30, 10, 90, 50, 45, 10],
        fill: true,
        backgroundColor: "rgba(125,132,248,1)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <>
      <Header />
      <Navbar Dash="dash" />

      <div>
        <div className="container adda_main">
          <div className="pagetitle">
            <h1
              className="col-lg-2 float-start ps-3"
              style={{ marginTop: "5px" }}
            >
              Admin Dashboard
            </h1>
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
                <option selected="">To</option>
                <option value={1}>2021</option>
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
                <option selected="">From</option>
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
                  <div className="col-xxl-8 col-md-8 pe-0">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Scores</h5>
                        {!infoBar ? (
                          ""
                        ) : (
                          <button
                            className="text-white fw-bold bg-dark border rounded"
                            onClick={back}
                          >
                            {" "}
                            Go Back
                          </button>
                        )}
                        <Bar
                          data={infoBar ? dataBarInfo : dataBar}
                          onClick={infoBar ? onClickInfo : onClick}
                          ref={charRef}
                        />
                      </div>
                    </div>
                    <div className="px-1 mb-5">
                      <div className="row">
                        <section className="p-0">
                          <div className="container">
                            <div className="row">
                              <div className="row pe-0">
                                <div className="col-lg-3 px-0 ms-0 col-sm-3 col-xl-3">
                                  {" "}
                                  <div className="m-1 card AdminCustomCardAll">
                                    <div className="card-body">
                                      <h7 className="card-title">
                                        Total Score
                                      </h7>
                                      <p>48.9%</p>
                                    </div>{" "}
                                  </div>
                                </div>
                                <div className="col-lg-9">
                                  <div className="row ps-1">
                                    <div className="col-4 ">
                                      <div className="card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Governance
                                          </h7>
                                          <p className="Number">17.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 1.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className=" col-4 ">
                                      <div className=" card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Management
                                          </h7>
                                          <p className="Number">27.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 3.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4 ">
                                      <div className=" card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Categlogue
                                          </h7>
                                          <p className="Number">15.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 2.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4 ">
                                      <div className=" card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Open Data
                                          </h7>
                                          <p className="Number">43.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 4.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4 ">
                                      <div className="card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Modelling & Design
                                          </h7>
                                          <p className="Number">18.0%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 9.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4 ">
                                      <div className=" card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Architecture
                                          </h7>
                                          <p className="Number">17.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 5.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4  ">
                                      <div className="card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Security & Privacy
                                          </h7>
                                          <p className="Number">34.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 10.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4 ">
                                      <div className=" card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Storage
                                          </h7>
                                          <p className="Number">24.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 10.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-4">
                                      <div className="  card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Integration & Interoperability
                                          </h7>
                                          <p className="Number">66.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 8.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-4 ">
                                      <div className=" card AdminCustomCard">
                                        <div className="card-body">
                                          <h7 className="card-title">
                                            Data Quality
                                          </h7>
                                          <p className="Number">43.5%</p>
                                          <div className="Icon">
                                            <img
                                              src={require("../../assets/img/Group 7.png")}
                                              alt=""
                                              className="img-fluid"
                                            />
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
                  {/* End Reports */}
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body" style={{ height: "490px" }}>
                        <h5
                          className="card-title pb-3"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          Audit Summary
                          <div className="float-end pe-0">
                            <select
                              className="form-select form-select-sm "
                              aria-label="Default select example"
                              style={{ zIndex: 9999 }}
                            >
                              <option selected="">Selct Domain</option>
                              <option value={1}>Data Governance</option>
                              <option value={2}>Data Quality</option>
                              <option value={3}>Data Modelling</option>
                            </select>
                          </div>
                        </h5>
                        {/* Radar Chart */}
                        <Radar data={data} />
                        {/* <canvas
                  id="radarChart"
                  style={{
                    maxHeight: 300,
                    display: "block",
                    boxSizing: "border-box",
                    height: 249,
                    width: 249
                  }}
                  width={311}
                  height={311}
                /> */}
                        {/* End Radar CHart */}
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: "20px" }}>
                      <div className="col-lg-12 pe-0">
                        <div className="card ADGECustomCard">
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs nav-tabs-bordered"
                              id="myTab"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link active"
                                  id="home-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#home"
                                  type="button"
                                  role="tab"
                                  aria-controls="home"
                                  aria-selected="true"
                                >
                                  Top 5 ADGEs
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  id="profile-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#profile"
                                  type="button"
                                  role="tab"
                                  aria-controls="profile"
                                  aria-selected="false"
                                  tabIndex={-1}
                                >
                                  Bottom 5 ADGEs
                                </button>
                              </li>
                            </ul>
                            <div className="tab-content pt-2" id="myTabContent">
                              <div
                                className="tab-pane fade show active"
                                id="home"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                                style={{ height: 210, overflowY: "auto" }}
                              >
                                {/* List group With Icons */}
                                <ul className="list-group border-0">
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                      Abu Dhabi Housing Authority
                                    </a>{" "}
                                    <span className="Number">25</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Family Care Authority Authority
                                    </a>{" "}
                                    <span className="Number">35</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Family Development Foundation Authority
                                    </a>{" "}
                                    <span className="Number">18</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Authority of Social Contribution – Ma’an
                                      Authority
                                    </a>{" "}
                                    <span className="Number">52</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Social Care &amp; Minors Affairs
                                      Foundation Authority
                                    </a>{" "}
                                    <span className="Number">54</span>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="profile"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                              >
                                <ul className="list-group border-0">
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>
                                      Abu Dhabi Housing Authority
                                    </a>{" "}
                                    <span className="Number">25</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Family Care Authority Authority
                                    </a>{" "}
                                    <span className="Number">35</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Family Development Foundation Authority
                                    </a>{" "}
                                    <span className="Number">18</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Authority of Social Contribution – Ma’an
                                      Authority
                                    </a>{" "}
                                    <span className="Number">52</span>
                                  </li>
                                  <li className="list-group-item ">
                                    <a
                                      href="dashboard-Admin-inside.html"
                                      className="Text"
                                    >
                                      {" "}
                                      <div className="Icon">
                                        <img
                                          src={require("../../assets/img/noimage.jpg")}
                                          className="img-fluid"
                                          alt=""
                                        />
                                      </div>{" "}
                                      Social Care &amp; Minors Affairs
                                      Foundation Authority
                                    </a>{" "}
                                    <span className="Number">54</span>
                                  </li>
                                </ul>
                              </div>
                              {/* End List group With Icons */}
                            </div>
                          </div>
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
