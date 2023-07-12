import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Navbar from "../Navbar";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useGetDashboardUserTotalQuery } from "../../services/Post";

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
  // const [userList, setUserList] = useState();
  // useEffect(() => {
  //   if (dashBoardTotal?.data?.results) {
  //     setUserList(dashBoardTotal?.data?.results);
  //   } else {
  //     setUserList(dashBoardTotal?.data?.results);
  //   }
  // }, [dashBoardTotal]);

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
            <h1>Dashboard</h1>
          </div>

          <section className="section dashboard">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-xxl-3 col-md-3">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <FontAwesomeIcon icon={faEllipsisH} />
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
                            <h6>{dashBoardTotal?.data?.results?.total}</h6>
                          </div>
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center float-end">
                            <img src="img/total-icon.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-md-3">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <FontAwesomeIcon icon={faEllipsisH} />
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
                            <h6>{dashBoardTotal?.data?.results?.approved}</h6>
                          </div>
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center float-end">
                            <img src="img/approved-icon.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-3 col-md-3">
                    <div className="card info-card sales-card">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <FontAwesomeIcon icon={faEllipsisH} />
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
                            <h6>{dashBoardTotal?.data?.results?.rejected}</h6>
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
                          <FontAwesomeIcon icon={faEllipsisH} />
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
                            <h6>{dashBoardTotal?.data?.results?.pending}</h6>
                          </div>
                          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center float-end">
                            <img src="img/pending-icon.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-8 col-md-8">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Scores</h5>
                        <ResponsiveContainer aspect={3}>
                          {/* <ResponsiveContainer aspect={3} height={516}> */}
                          <BarChart data={pdata} width={500}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis
                              dataKey="brand"
                              interval={"preserveStartEnd"}
                              tickFormatter={(value) => value}
                              // tickFormatter={(value) => value + "programming"}
                            />
                            <YAxis />
                            <Tooltip
                              contentStyle={{ backgroundColor: "yellow" }}
                            />
                            <Legend />
                            <Bar
                              type="monotone"
                              dataKey="price"
                              name="Price"
                              fill="blue"
                            />
                            <Bar
                              type="monotone"
                              dataKey="name"
                              name="Product"
                              fill="green"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">My Reviews</h5>
                        <ResponsiveContainer aspect={1.4}>
                          <PieChart width={500} data={pdata}>
                            <Tooltip
                              contentStyle={{ backgroundColor: "yellow" }}
                            />
                            <Legend />
                            <Pie
                              data={pdata}
                              dataKey="price"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={80}
                              label
                              animationBegin={1000}
                              animationDuration={6000}
                            >
                              {pdata.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={entry.color}
                                />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div className="card top-selling overflow-auto">
                      <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                          <FontAwesomeIcon icon={faEllipsisH} />
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
                      <div className="card-body pb-0" style={{ height: 250 }}>
                        <h5 className="card-title">
                          Top Selling <span>| Today</span>
                        </h5>
                        <table className="table pb-0">
                          <tbody>
                            <tr>
                              <td>
                                <Link to="#">UAE1839792</Link>
                                <p className="TableItalicText">
                                  Dubai Fishing Corporation
                                  <br />
                                  Assigned by: <strong>Mohammad Hussain</strong>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">UAE1839792</Link>
                                <p className="TableItalicText">
                                  Dubai Fishing Corporation
                                  <br />
                                  Assigned by: <strong>Mohammad Hussain</strong>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">UAE1839792</Link>
                                <p className="TableItalicText">
                                  Dubai Fishing Corporation
                                  <br />
                                  Assigned by: <strong>Mohammad Hussain</strong>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">UAE1839792</Link>
                                <p className="TableItalicText">
                                  Dubai Fishing Corporation
                                  <br />
                                  Assigned by: <strong>Mohammad Hussain</strong>
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Link
        to="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </Link>
    </>
  );
}

export default DashboardUser;
