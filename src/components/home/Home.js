import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../Header";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCopy,
  faDownload,
  faUserPlus,
  faCalendarDays,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useGetAllPostHomeQuery } from "../../services/Post";
import { useCreateFormMutation } from "../../services/Post";
import { useViewDetailsMutation } from "../../services/Post";
import { useUpdateDuplicateMutation } from "../../services/Post";
import { useAddHomeScheduleMutation } from "../../services/Post";
import { useQuestionListMutation } from "../../services/Post";

// import CanvasJSReact from "@canvasjs/react-charts";
// //var CanvasJSReact = require('@canvasjs/react-charts');

function Home() {
  const navigate = useNavigate();
  const [currentItem, setCurrentItem] = useState({ _id: '' });
  // var CanvasJS = CanvasJSReact.CanvasJS;
  // var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [createForm] = useCreateFormMutation();
  const [viewDetails] = useViewDetailsMutation();
  const [updateDuplicate] = useUpdateDuplicateMutation();
  const [schedule, responseSchedule] = useAddHomeScheduleMutation();
  // console.log("useViewDetailsMutation", useViewDetailsMutation);
  console.log("create form", createForm);
  console.log("create form details", createForm?.data?.results?.saveData);
  const blog = useGetAllPostHomeQuery();
  const [title, setTitle] = useState("");
  const [itemId, setItemId] = useState("");
  const [title2, setTitle2] = useState("");
  const [itemId2, setItemId2] = useState("");
  const [itemId3, setItemId3] = useState("");
  const [entity, setEntity] = useState("");
  const [internal, setInternal] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [userName, setUserName] = useState("");
  const [scheduledList, setScheduledList] = useState();
  const [questionList, re] = useQuestionListMutation();
  const [change, setChange] = useState(false);
  const review = (_id) => {
    const editAddress = {
      id: _id,
    };
    questionList(editAddress);
    console.log("viewAgent", _id);
    localStorage.setItem("reviewId", _id);
  };
  // useEffect(() => {
  //   handleSaveChanges4();
  // }, [])
  // const handleSaveChanges4 = () => {
  //   const editAddress = {
  //     id: id,
  //   };
  //   questionList(editAddress);
  // };
  
  useEffect(() => {
    if (blog?.data?.results) {
      setScheduledList(blog?.data?.results);
    } else {
      setScheduledList(blog?.data?.results);
    }
  }, [blog, change]);

  console.log("scheduled data list", scheduledList);

  const handleSaveChanges1 = async () => {
    const editAddress = {
      title: title,
      userName: userName,
    };

    try {
      const response = await createForm(editAddress);
      const generatedId = response?.data?.results?.saveData?._id;
      console.log("generatedId", generatedId);

      localStorage.setItem("generatedId", generatedId);

      Swal.fire({
        title: "Application Created",
        text: "The Application has been successfully created.",
        icon: "success",
      }).then(() => {
        // window.location.reload();
      });
    } catch (error) {
      console.error("Error creating form:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSaveChanges2();
    }, 1000);

    return () => clearTimeout(timer);
  }, [itemId]);

  const handleSaveChanges2 = () => {
    const editAddress = {
      id: itemId,
    };
    viewDetails(editAddress);
  };
  console.log(itemId);

  const handleSaveChanges3 = () => {
    console.log("handleSaveChanges1", itemId2);
    const editDuplicate = {
      id: itemId2,
      title: title2,
    };
    updateDuplicate(editDuplicate);
   
  };

  const handleSaveChanges5 = () => {
    console.log("handleSaveChanges1", itemId2);

    const editDuplicate = {
      id: itemId2,
      type: "External",
      to: endDate,
      from: startDate,
      Status: status,
      schedule: true,
    };

    schedule(editDuplicate);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    !responseSchedule?.isError && setScheduledList(blog?.data?.results);
    console.log(responseSchedule?.isError, "ress");
  };
  const handleViewClick = (currentItemId) => {
    // Store the currentItem._id in local storage
    localStorage.setItem("currentItemId", currentItemId);
    console.log("currentItemId", currentItemId);
  };
  return (
    <>
      <Header />
      <Navbar Dash={"home"} />

      <main id="main" className="main">
        <div className="container p-0">
          <section className="section">
            <div className="row">
              <div className="col-lg-12">
                <div className="card StaticCard">
                  <div className="card-body" style={{ flex: "1" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5
                        className="card-title float-start"
                        style={{ marginBottom: "0px", padding: "0px" }}
                      >
                        Home
                      </h5>
                      <div>
                        <button
                          type="button"
                          className="btn btn-sm DefaultBtn float-end"
                          fdprocessedid="bfs61e"
                        >
                          <FontAwesomeIcon icon={faDownload} /> Download
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm DefaultBtn float-end me-2"
                          fdprocessedid="bfs61e"
                        >
                          <Link
                            // data-bs-toggle="modal"
                            // data-bs-target="#staticBackdrop"
                            className="comman_btn2 table_viewbtn"
                            to="/users"
                          >
                            <FontAwesomeIcon icon={faUserPlus} /> Create New User
                          </Link>
                        </button>
                      </div>
                    </div>
                    <table
                      className="table  table-hover table-striped CustomTable mt-2"
                      id="UserTable"
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Title</th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            Date
                          </th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            User
                          </th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            Score
                          </th>
                          <th scope="col"></th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            Scheduled
                          </th>
                          <th scope="col" style={{ textAlign: "center" }}>
                            Status
                          </th>
                          <th
                            // scope="col"
                            // align="center"
                            // className="text-center"
                            // style={{
                            //   textAlign: "center !important",
                            //   width: 280,
                            // }}
                            scope="col"
                            // align="end"
                            className="text-end"
                            style={{
                              textAlign: "end !important",
                              padding: "3px 35px !important",
                              // width: 200,
                            }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {scheduledList?.list?.map((item, index) => {
                          return (
                            <tr className="heading10" key={index}>
                              <th
                                scope="row"
                                style={{ backgroundColor: "yellow !important" }}
                              >
                                {" "}
                                {item?.uniQ_Id}{" "}
                              </th>
                              <td
                                style={{ backgroundColor: "yellow !important" }}
                              >
                                {" "}
                                {item?.title}{" "}
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {item?.createdAt?.slice(0, 10)}
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {item?.userName}
                              </td>
                              <td style={{ textAlign: "center" }}>{item?.score} </td>
                              <td style={{ textAlign: "center" }}> </td>
                              <td style={{ textAlign: "center" }}>
                                <div className="nav-item dropdown pe-3">
                                  <Link
                                    className=""
                                    to="#"
                                    data-bs-toggle="dropdown"
                                  >
                                    {item.to && item.from
                                      ? `${item.to.slice(
                                          0,
                                          10
                                        )} to ${item.from.slice(0, 10)}`
                                      : ""}
                                  </Link>

                                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile text-start">
                                    <li className="dropdown-header">
                                      <div className="form-group text-start">
                                        <small>Scheduled to</small>
                                        <h6 className="text-black">
                                          Mohammed bin Ibrahim
                                        </h6>
                                      </div>
                                      <div className="form-group text-start">
                                        <small>Scheduled date</small>
                                        <h6 className="text-black">
                                          {item.from && item.to
                                            ? `${item.from.slice(
                                                0,
                                                10
                                              )} to ${item.to.slice(
                                                0,
                                                10
                                              )}`
                                            : ""}
                                        </h6>
                                      </div>
                                      <div className="form-group text-start">
                                        <small>Owner</small>
                                        <h6 className="text-black">
                                          ADGE Name
                                        </h6>
                                      </div>
                                      <div className="form-group text-start">
                                        <small>User</small>
                                        <h6 className="text-black">POC Name</h6>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {item?.status}
                              </td>
                              <td style={{ textAlign: "end" }}>
                                {item?.schedule ? (
                                  <Link
                                    type="button"
                                    className="btn btn-sm  mx-1"
                                    style={{ cursor: "not-allowed" }}
                                  >
                                    <FontAwesomeIcon icon={faCalendarDays} />{" "}
                                    Scheduled
                                  </Link>
                                ) : (
                                  <Link
                                    type="button"
                                    to="#"
                                    className="btn btn-sm tableBtn-blue mx-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal2"
                                    onClick={() => setItemId2(item?._id)}
                                  >
                                    <FontAwesomeIcon icon={faCalendarDays} />{" "}
                                    Schedule
                                  </Link>
                                )}

                                <Link
                                  // to="/auditior-question"
                                  to={`/auditior-question/${item._id}`}
                                  type=""
                                  className="btn btn-sm tableBtn-blue"
                                  // onClick={() => {
                                  //   navigate("/auditior-question")
                                  // }}

                                  onClick={() => review(item._id)}
                                >
                                  <FontAwesomeIcon icon={faCopy} />
                                  <FontAwesomeIcon icon={faComment} /> Review
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <thead>
                        <tr className="bg-primary">
                          <th
                            scope="col"
                            colSpan={12}
                            style={{
                              padding: "40px 0px 0px 0px !important",
                              fontWeight: "bold !important",
                              fontSize: "15px",
                              backgroundColor: "#5058dd !important",
                            }}
                          >
                            History
                          </th>
                          {/* <th scope="col" colSpan={8}>
                            
                          </th> */}
                        </tr>
                      </thead>

                      <tbody>
                        {scheduledList?.listdata?.flatMap((item, index) => {
                          if (item.length === 0) {
                            return null;
                          }
                          const currentItem = item;
                          return (
                            <tr key={index}>
                              <th scope="row"> {currentItem?.uniQ_Id} </th>
                              <td>{currentItem.title}</td>
                              <td style={{ textAlign: "center" }}>
                                {currentItem.createdAt?.slice(0, 10)}
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {currentItem.userName}
                              </td>
                              <td style={{ textAlign: "center" }}>
                                {currentItem.score}
                              </td>
                              <td></td>
                              <td style={{ textAlign: "center" }}>
                                <div className="nav-item dropdown pe-3">
                                  <Link
                                    className=""
                                    to="#"
                                    data-bs-toggle="dropdown"
                                  >
                                    {currentItem.to && currentItem.from
                                      ? `${currentItem.to.slice(
                                          0,
                                          10
                                        )} to ${currentItem.from.slice(0, 10)}`
                                      : ""}
                                  </Link>

                                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile text-start">
                                    <li className="dropdown-header">
                                      <div className="form-group text-start">
                                        <small>Scheduled to</small>
                                        <h6 className="text-black">
                                          Mohammed bin Ibrahim
                                        </h6>
                                      </div>
                                      <div className="form-group text-start">
                                        <small>Scheduled date</small>
                                        <h6 className="text-black">
                                          {currentItem.from && currentItem.to
                                            ? `${currentItem.from.slice(
                                                0,
                                                10
                                              )} to ${currentItem.to.slice(
                                                0,
                                                10
                                              )}`
                                            : ""}
                                        </h6>
                                      </div>
                                      <div className="form-group text-start">
                                        <small>Owner</small>
                                        <h6 className="text-black">
                                          ADGE Name
                                        </h6>
                                      </div>
                                      <div className="form-group text-start">
                                        <small>User</small>
                                        <h6 className="text-black">POC Name</h6>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </td>

                              <td style={{ textAlign: "center" }}>
                                {currentItem.status}
                              </td>
                              <td style={{ textAlign: "end" }}>
                                <Link
                                   to={`/auditior-question/${currentItem._id}`}
                                  className="btn btn-sm tableBtn-Gray"
                                  fdprocessedid="nnhqma"
                                  onClick={() => {
                                    setItemId(currentItem._id);
                                    handleViewClick(currentItem._id);
                                  }}
                                >
                                  <FontAwesomeIcon icon={faEye} /> View
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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
      <div className="modal fade" id="ExtralargeModal2" tabIndex={-1}>
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Schedule</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="form-floating theme-form-floating mb-2">
                  Entity Name : ADDA
                  {/* <select
                    className="form-select"
                    id="floatingSelect1"
                    aria-label="Floating label select example"
                    defaultValue=" "
                    onChange={(e) => setEntity(e.target.value)}
                  >
                    <option value="Adda">Adda</option>
                  </select> */}
                  {/* <label htmlFor="floatingSelect">Select Entity Name</label> */}
                </div>
                <legend className="col-form-label col-sm-1 pt-0">
                  External
                </legend>
                <span>
                  <div className="col-sm-6">
                    <div className="form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                    </div>
                  </div>
                </span>
                <legend className="col-form-label col-sm-1 pt-0">
                  Internal
                </legend>
                <span>
                  <div className="col-sm-6">
                    <div className="form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                        onChange={(e) => setInternal(e.target.value)}
                      />
                    </div>
                  </div>
                </span>
              </form>

              <form
                className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                action=""
              >
                <div className="form-group mb-0 col-6">
                  <label htmlFor="">From</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="form-group mb-0 col-6">
                  <label htmlFor="">To</label>
                  <input
                    type="date"
                    className="form-control"
                    id="endDate"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </form>
              <form>
                <div className="form-floating theme-form-floating">
                  <select
                    className="form-select"
                    id="floatingSelect1"
                    aria-label="Floating label select example"
                    defaultValue=" "
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Active">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <label htmlFor="floatingSelect">Status</label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSaveChanges5}
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

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
                      onChange={(e) => setTitle2(e.target.value)}
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveChanges3}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <svg
        id="SvgjsSvg1001"
        width={2}
        height={0}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          overflow: "hidden",
          top: "-100%",
          left: "-100%",
          position: "absolute",
          opacity: 0,
        }}
      >
        <defs id="SvgjsDefs1002" />
        <polyline id="SvgjsPolyline1003" points="0,0" />
        <path id="SvgjsPath1004" d="M0 0 " />
      </svg>
      <div
        className="modal fade Edit_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Application
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="form-design p-3 help-support-form row align-items-end justify-content-center"
                action=""
              >
                <div className="form-group col-12">
                  <label htmlFor="nameEn">Title</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group col-12 my-2">
                  <label htmlFor="nameAr">User name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="userName"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-0 col-auto">
                  <Link to="/adge-question">
                    <button
                      className="comman_btn2  text-light"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        width: "100px",
                        height: "40px",
                        backgroundColor: "#5058DD",
                      }}
                      onClick={handleSaveChanges1}
                    >
                      Continue
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
