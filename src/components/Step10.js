import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
// import Header from "../Header";
// import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faComment } from "@fortawesome/free-solid-svg-icons";
// import { useGetAllPostGovernerQuery } from "../../services/Post";
// import ProgressBar from "../ProgressBar";
import { useGetAllPostGovernerQuery } from "../services/Post";

function Step10() {
  const [generatedId, setGeneratedId] = useState("");
  const [yesbutton1, setYesbutton1] = useState();
  const [yesbutton2, setYesbutton2] = useState();
  const [yesbutton3, setYesbutton3] = useState();
  const [yesbutton4, setYesbutton4] = useState();
  const [yesbutton5, setYesbutton5] = useState();
  const [yesbutton6, setYesbutton6] = useState();
  const [yesbutton7, setYesbutton7] = useState();
  const [yesbuttonValue1, setYesbuttonValue1] = useState("");
  const [yesbuttonValue2, setYesbuttonValue2] = useState("");
  const [yesbuttonValue3, setYesbuttonValue3] = useState("");
  const [yesbuttonValue4, setYesbuttonValue4] = useState("");
  const [yesbuttonValue5, setYesbuttonValue5] = useState("");
  const [yesbuttonValue6, setYesbuttonValue6] = useState("");
  const [yesbuttonValue7, setYesbuttonValue7] = useState("");

  const [formData, setFormData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const blog = useGetAllPostGovernerQuery();
  const [blogList, setBlogList] = useState();
  console.log("blog list", blogList);
  console.log("form data new", formData);

  useEffect(() => {
    setTimeout(() => {
      const storedId = localStorage.getItem("generatedId");
      console.log("stored id", storedId);
      if (storedId) {
        setGeneratedId(storedId);
      }
    }, 500);
  }, []);

  console.log("generated id at step 10", generatedId);
  useEffect(() => {
    handleYesbutton1();
  }, [yesbutton1]);
  const handleYesbutton1 = () => {
    if (yesbutton1 === true) {
      setYesbuttonValue1("yes");
      alert("yes");
    } else if (yesbutton1 === false) {
      setYesbuttonValue1("no");
      alert("no");
    }
  };
  useEffect(() => {
    handleYesbutton2();
  }, [yesbutton2]);
  const handleYesbutton2 = () => {
    if (yesbutton2 === true) {
      setYesbuttonValue2("yes");
      alert("yes");
    } else if (yesbutton2 === false) {
      setYesbuttonValue2("no");
      alert("no");
    }
  };
  useEffect(() => {
    handleYesbutton3();
  }, [yesbutton3]);
  const handleYesbutton3 = () => {
    if (yesbutton3 === true) {
      setYesbuttonValue3("yes");
      alert("yes");
    } else if (yesbutton3 === false) {
      setYesbuttonValue3("no");
      alert("no");
    }
  };
  useEffect(() => {
    handleYesbutton4();
  }, [yesbutton4]);
  const handleYesbutton4 = () => {
    if (yesbutton4 === true) {
      setYesbuttonValue4("yes");
      alert("yes");
    } else if (yesbutton4 === false) {
      setYesbuttonValue4("no");
      alert("no");
    }
  };
  useEffect(() => {
    handleYesbutton5();
  }, [yesbutton5]);
  const handleYesbutton5 = () => {
    if (yesbutton5 === true) {
      setYesbuttonValue5("yes");
      alert("yes");
    } else if (yesbutton5 === false) {
      setYesbuttonValue5("no");
      alert("no");
    }
  };
  useEffect(() => {
    handleYesbutton6();
  }, [yesbutton6]);
  const handleYesbutton6 = () => {
    if (yesbutton6 === true) {
      setYesbuttonValue6("yes");
      alert("yes");
    } else if (yesbutton6 === false) {
      setYesbuttonValue6("no");
      alert("no");
    }
  };
  useEffect(() => {
    handleYesbutton7();
  }, [yesbutton7]);
  const handleYesbutton7 = () => {
    if (yesbutton7 === true) {
      setYesbuttonValue7("yes");
      alert("yes");
    } else if (yesbutton7 === false) {
      setYesbuttonValue7("no");
      alert("no");
    }
  };
  useEffect(() => {
    if (blog?.data?.results) {
      setBlogList(blog?.data?.results);
    } else {
      setBlogList(blog?.data?.results);
    }
  }, [blog]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
    setFormData({ ...formData, [key]: e.target.files[0] });
  };
  console.log("file upload", formData);
  const handleOnSave = () => {
    const data = new FormData();
    data.append("qdoc1", formData.file1);
    data.append("qstatus1", yesbuttonValue1);
    data.append("qcomment1", formData.comment1);
    data.append("qdoc2", formData.file2);
    data.append("qstatus2", yesbuttonValue2);
    data.append("qcomment2", formData.comment2);
    data.append("qdoc3", formData.file3);
    data.append("qstatus3", yesbuttonValue3);
    data.append("qcomment3", formData.comment3);
    data.append("qdoc4", formData.file4);
    data.append("qstatus4", yesbuttonValue4);
    data.append("qcomment4", formData.comment4);
    data.append("qdoc5", formData.file5);
    data.append("qstatus5", yesbuttonValue5);
    data.append("qcomment5", formData.comment5);
    data.append("qdoc6", formData.file6);
    data.append("qstatus6", yesbuttonValue6);
    data.append("qcomment6", formData.comment6);
    data.append("qdoc7", formData.file7);
    data.append("qstatus7", yesbuttonValue7);
    data.append("qcomment7", formData.comment7);
    data.append("adge_Id", generatedId);
    axios
      .post("http://localhost:5000/admin/add-quality", data)
      .then((response) => {
        setFormData(response?.data?.results?.data);
        console.log(response?.data?.results?.data);
        Swal.fire({
          title: "Product Created!",
          text: "Your new product has been created successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            // window.location.reload(); // refresh the page after success message is closed
          }
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <div id="" className="">
        <div className="pagetitle">
          <h2>Data Quality</h2>
        </div>
        <div className="QuestionsStrip">
          <div className="QuestionDiv">
            <div className="heading">
              <div className="NumberDiv">DG.1.1</div>
              <div className="float-start">
                The Entity shall provide definitions of quality data. These
                definitions shall be used to determine whether data is of
                sufficient quality for the purposes of the Entity's business.
                <br />
                Data quality definitions shall be stored in the Entity's
                business glossary (business audience) and data dictionary
                (technical audience).{" "}
                <span className="badge bg-danger">Danger</span>{" "}
                <span className="badge bg-secondary">Secondary</span>
                <ul>
                  Definitions shall exist for:
                  <li>
                    Master profiles – the profiles used across the Entity's
                    business, in key line-of-business systems, or across
                    multiple departments and data silos (see Data Modelling
                    domain) eg ‘Citizen’ profile in multiple systems
                  </li>
                  <li>
                    TSystem profiles – profiles within single systems, silos or
                    departments eg Project (in a Project management system)
                  </li>
                  <li>
                    Reference data – data that is effectively static within
                    systems, subject to periodic refresh
                  </li>
                  <li>
                    Audit data – data stored log files, history tables and
                    monitoring systems
                  </li>
                  <li>
                    Audit data – data stored log files, history tables and
                    monitoring systems
                  </li>
                  <li>
                    Spatial data – geographical, address, geolocation or other
                    locationbased data
                  </li>
                  <li>
                    Metadata – metadata that is gathered about structured
                    datasets, such as ownership, definitions, access rights (see
                    Metadata domain
                  </li>
                  <li>
                    Metadata annotating unstructured or semi-structured data.
                    This may include metadata attached to images, audio
                    recordings, video recordings (such as duration, dimensions,
                    location, encoding), etc. Metadata attached to
                    semi-structured data may include, for example, author,
                    workflow steps and access permissions of documents, etc
                  </li>
                </ul>
              </div>
              <div className="row" style={{ clear: "both" }}>
                <div className="col-lg-4 mt-4 offset-1">
                  <div
                    className="btn-group CustomBtnGroup"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton1(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton1(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <Link
                    className="btn AttachBut"
                    data-bs-toggle="collapse"
                    to="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faUpload} /> Upload Evidence
                  </Link>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="AttachBut ms-2"
                  >
                    <FontAwesomeIcon icon={faComment} /> Add Comments
                  </Link>
                </div>
              </div>
              <div className="collapse AttachDiv" id="collapseExample">
                <form action="">
                  <div className="form">
                    <input
                      name="file1"
                      type="file"
                      id="file1"
                      onChange={(e) => handleFileChange(e, "file1")}
                    />
                    <div>
                      <img
                        src="upload.png"
                        alt="upload"
                        width="4%"
                        className=""
                      />
                      Upload your files here or
                      <button className="btn bg-color-dblue btn-primary">
                        Browse
                      </button>
                    </div>
                    <span id="fileName" className="text-primary "></span>
                  </div>
                </form>
                <div className="SmallHead">Comments</div>

                <div className="container">
                  <div className="col-md-12" id="fbcomment">
                    <div className="header_comment">
                      <div className="">
                        <div className="float-start">
                          <span className="count_comment">264235 Comments</span>
                        </div>
                        <div className="float-end">
                          <span className="sort_title">Sort by</span>
                          <select className="sort_by">
                            <option>Top</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="body_comment">
                      <div className="row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="box_comment col-md-11">
                          <textarea
                            className="commentar"
                            placeholder="Add a comment..."
                            name="comment1"
                            value={formData.comment1}
                            onChange={handleInputChange}
                          />
                          <div className="box_post">
                            <div className="pull-right">
                              <span>
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                  alt="avatar"
                                />
                                <i className="fa fa-caret-down" />
                              </span>
                              <button type="button" value={1}>
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <ul id="list_comment" className="col-md-12">
                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Nath Ryuzaki</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay">
                                <li className="box_reply row">
                                  <div className="avatar_comment col-md-1">
                                    <img
                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <div className="result_comment col-md-11">
                                    <h4>Sugito</h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's.
                                    </p>
                                    <div className="tools_comment">
                                      <Link className="like" to="#">
                                        Like
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <Link className="replay" to="#">
                                        Reply
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <i className="fa fa-thumbs-o-up" />{" "}
                                      <span className="count">1</span>
                                      <span aria-hidden="true"> · </span>
                                      <span>26m</span>
                                    </div>
                                    <ul className="child_replay" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Gung Wah</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="QuestionDiv">
            <div className="heading">
              <div className="NumberDiv">DG.1.2</div>
              <div className="float-start col-11">
                Data quality definitions shall be mapped to business processes.
                This shall provide the capability to assess the impact of both
                high and low quality data on business processes.
                <br />
                For example, a business process may include contacting a
                citizen. Where there is poor data quality in telephone number or
                address capture (such as the omission of a country, area or
                postal code), there may be a severe impact upon the business
                process. Accurate and timely capture of a telephone number
                enables the business process to continue
                <br />
                Data quality definitions shall include – but are not limited to
                – the minimum measures of data quality for
                <span class="badge bg-danger">Danger</span>
                <span class="badge bg-secondary">Secondary</span>.{" "}
                <ul>
                  <li>
                    Validity – Describing what constitutes valid data. This will
                    show how data validity is controlled and measured. This
                    shall include a description of the business rules (expressed
                    both as a text-based description, and technically eg as a
                    regular expression) that enforce this validity. Data
                    validity may include the range of acceptable values or
                    combination of values across multiple attributes and tables
                    <br />
                    <br />
                    For example: a Citizen is valid if there is at least one
                    Address marked active in the last year
                  </li>
                  <li>
                    Timeliness – Describing the acceptable latency between data
                    capture, use, transformation, reporting, and sharing.
                    <br />
                    For example: The correct departments have access to Citizen
                    data in order to process a service request with sufficient
                    time to meet an SLA; mapping data changes over time as
                    properties are constructed, so mapping data that is a year
                    old may be less useful than mapping data that is two months’
                    old.
                  </li>
                  <li>
                    Integrity – Describing how the integrity between different
                    data sources is maintained both within and across and
                    business functions
                    <br />
                    For example, using the Emirates ID across multiple
                    information systems to uniquely identify a person, using a
                    contact reference number across multiple systems, and
                    enforcing validation through a master service.
                  </li>
                  <li>
                    Accuracy – Describing the acceptable margin of error against
                    reality to support the intended purpose(s) of the data. For
                    example, historical dates of Citizen access to a government
                    service must be accurate to within +/- one week to support
                    capacity planning.
                  </li>
                  <li>
                    Reliability – Determining the level of consistency and
                    completeness required for the intended purpose(s) of the
                    data. For example, telephone numbers are always captured in
                    the same format to be consistent, and address records must
                    contain the correct district in order to be considered
                    complete
                  </li>
                  For each of these measures, the Entity shall:
                  <li>
                    Assess the impact on business processes for failing to reach
                    the specified criteria
                  </li>
                  <li>
                    Assess the impact on business processes for failing to reach
                    the specified criteria
                  </li>
                </ul>
              </div>
              <div className="row" style={{ clear: "both" }}>
                <div className="col-lg-4 mt-4 offset-1">
                  <div
                    className="btn-group CustomBtnGroup"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton2(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton2(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <Link
                    className="btn AttachBut"
                    data-bs-toggle="collapse"
                    to="#collapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faUpload} /> Upload Evidence
                  </Link>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseExample2"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="AttachBut ms-2"
                  >
                    <FontAwesomeIcon icon={faComment} /> Add Comments
                  </Link>
                </div>
              </div>
              <div className="collapse AttachDiv" id="collapseExample2">
                <form action="">
                  <div className="form">
                    <input
                      name="file2"
                      type="file"
                      id="file2"
                      onChange={(e) => handleFileChange(e, "file2")}
                    />
                    <div>
                      <img
                        src="upload.png"
                        alt="upload"
                        width="4%"
                        className=""
                      />
                      Upload your files here or
                      <button className="btn bg-color-dblue btn-primary">
                        Browse
                      </button>
                    </div>
                    <span id="fileName" className="text-primary "></span>
                  </div>
                </form>
                <div className="SmallHead">Comments</div>
                <div className="container">
                  <div className="col-md-12" id="fbcomment">
                    <div className="header_comment">
                      <div className="">
                        <div className="float-start">
                          <span className="count_comment">264235 Comments</span>
                        </div>
                        <div className="float-end">
                          <span className="sort_title">Sort by</span>
                          <select className="sort_by">
                            <option>Top</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="body_comment">
                      <div className="row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="box_comment col-md-11">
                          <textarea
                            className="commentar"
                            placeholder="Add a comment..."
                            name="comment2"
                            value={formData.comment2}
                            onChange={handleInputChange}
                          />
                          <div className="box_post">
                            <div className="pull-right">
                              <span>
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                  alt="avatar"
                                />
                                <i className="fa fa-caret-down" />
                              </span>
                              <button
                                // onclick="submit_comment()"
                                type="button"
                                value={1}
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <ul id="list_comment" className="col-md-12">
                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Nath Ryuzaki</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay">
                                <li className="box_reply row">
                                  <div className="avatar_comment col-md-1">
                                    <img
                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <div className="result_comment col-md-11">
                                    <h4>Sugito</h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's.
                                    </p>
                                    <div className="tools_comment">
                                      <Link className="like" to="#">
                                        Like
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <Link className="replay" to="#">
                                        Reply
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <i className="fa fa-thumbs-o-up" />{" "}
                                      <span className="count">1</span>
                                      <span aria-hidden="true"> · </span>
                                      <span>26m</span>
                                    </div>
                                    <ul className="child_replay" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Gung Wah</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="QuestionDiv">
            <div className="heading">
              <div className="NumberDiv">DG.1.3</div>
              <div className="float-start col-11">
                The Entity shall appoint a Data Manager. The Data Manager shall
                have delegated authority from the Data Governance Board..{" "}
                <span className="badge bg-danger">Danger</span>{" "}
                <span className="badge bg-secondary">Secondary</span>
                <ul>
                  The Data Manager shall:
                  <li>Oversee the implementation of change</li>
                  <li>
                    Ensure compliance with governance, policy and standards
                  </li>
                  <li>
                    Ensure the coordinated training and awareness programmes are
                    executed within the Entity
                  </li>
                  <li>
                    Ensure the coordinated training and awareness programmes are
                    executed within the Entity
                  </li>
                </ul>
              </div>
              <div className="row" style={{ clear: "both" }}>
                <div className="col-lg-4 mt-4 offset-1">
                  <div
                    className="btn-group CustomBtnGroup"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton3(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton3(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <Link
                    className="btn AttachBut"
                    data-bs-toggle="collapse"
                    to="#collapseExample3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faUpload} /> Upload Evidence
                  </Link>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseExample3"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="AttachBut ms-2"
                  >
                    <FontAwesomeIcon icon={faComment} /> Add Comments
                  </Link>
                </div>
              </div>
              <div className="collapse AttachDiv" id="collapseExample3">
                <form action="">
                  <div className="form">
                    <input
                      name="file3"
                      type="file"
                      id="file3"
                      onChange={(e) => handleFileChange(e, "file3")}
                    />
                    <div>
                      <img
                        src="upload.png"
                        alt="upload"
                        width="4%"
                        className=""
                      />
                      Upload your files here or
                      <button className="btn bg-color-dblue btn-primary">
                        Browse
                      </button>
                    </div>
                    <span id="fileName" className="text-primary "></span>
                  </div>
                </form>
                <div className="SmallHead">Comments</div>

                <div className="container">
                  <div className="col-md-12" id="fbcomment">
                    <div className="header_comment">
                      <div className="">
                        <div className="float-start">
                          <span className="count_comment">264235 Comments</span>
                        </div>
                        <div className="float-end">
                          <span className="sort_title">Sort by</span>
                          <select className="sort_by">
                            <option>Top</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="body_comment">
                      <div className="row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="box_comment col-md-11">
                          <textarea
                            className="commentar"
                            placeholder="Add a comment..."
                            name="comment3"
                            value={formData.comment3}
                            onChange={handleInputChange}
                          />
                          <div className="box_post">
                            <div className="pull-right">
                              <span>
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                  alt="avatar"
                                />
                                <i className="fa fa-caret-down" />
                              </span>
                              <button
                                // onclick="submit_comment()"
                                type="button"
                                value={1}
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <ul id="list_comment" className="col-md-12">
                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Nath Ryuzaki</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay">
                                <li className="box_reply row">
                                  <div className="avatar_comment col-md-1">
                                    <img
                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <div className="result_comment col-md-11">
                                    <h4>Sugito</h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's.
                                    </p>
                                    <div className="tools_comment">
                                      <Link className="like" to="#">
                                        Like
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <Link className="replay" to="#">
                                        Reply
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <i className="fa fa-thumbs-o-up" />{" "}
                                      <span className="count">1</span>
                                      <span aria-hidden="true"> · </span>
                                      <span>26m</span>
                                    </div>
                                    <ul className="child_replay" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Gung Wah</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="QuestionDiv">
            <div className="heading">
              <div className="NumberDiv">DG.1.4</div>
              <div className="float-start col-11">
                The Entity shall identify and appoint Data Architects to support
                the Data Manager..{" "}
                <span className="badge bg-danger">Danger</span>{" "}
                <span className="badge bg-secondary">Secondary</span>
                <ul>
                  The Data Architects shall:
                  <li>
                    TWork with the Data Manager and the Data Governance Board to
                    ensure the implementation of the Data Management Standards
                    in all designs across the Entit
                  </li>
                  <li>
                    Establish a clearly defined target state for all data
                    sources
                  </li>
                  <li>
                    Establish a clearly defined roadmap to achieve the target
                    state for all data sources
                  </li>
                  <li>
                    Be responsible for developing and maintaining a formal
                    description of the data and data structures within the
                    Entity, including
                    <ol>
                      <li>Data designs and design artefacts</li>
                      <li>Data designs and design artefact</li>
                      <li>Data flows throughout the Entity</li>
                    </ol>
                  </li>
                </ul>
              </div>
              <div className="row" style={{ clear: "both" }}>
                <div className="col-lg-4 mt-4 offset-1">
                  <div
                    className="btn-group CustomBtnGroup"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton4(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton4(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 ">
                  <Link
                    className="btn AttachBut"
                    data-bs-toggle="collapse"
                    to="#collapseExample4"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faUpload} /> Upload Evidence
                  </Link>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseExample4"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="AttachBut ms-2"
                  >
                    <FontAwesomeIcon icon={faComment} /> Add Comments
                  </Link>
                </div>
              </div>
              <div className="collapse AttachDiv" id="collapseExample4">
                <form action="">
                  <div className="form">
                    <input
                      name="file4"
                      type="file"
                      id="file4"
                      onChange={(e) => handleFileChange(e, "file4")}
                    />
                    <div>
                      <img
                        src="upload.png"
                        alt="upload"
                        width="4%"
                        className=""
                      />
                      Upload your files here or
                      <button className="btn bg-color-dblue btn-primary">
                        Browse
                      </button>
                    </div>
                    <span id="fileName" className="text-primary "></span>
                  </div>
                </form>
                <div className="SmallHead">Comments</div>
                <div className="container">
                  <div className="col-md-12" id="fbcomment">
                    <div className="header_comment">
                      <div className="">
                        <div className="float-start">
                          <span className="count_comment">264235 Comments</span>
                        </div>
                        <div className="float-end">
                          <span className="sort_title">Sort by</span>
                          <select className="sort_by">
                            <option>Top</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="body_comment">
                      <div className="row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="box_comment col-md-11">
                          <textarea
                            className="commentar"
                            placeholder="Add a comment..."
                            name="comment4"
                            value={formData.comment4}
                            onChange={handleInputChange}
                          />
                          <div className="box_post">
                            <div className="pull-right">
                              <span>
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                  alt="avatar"
                                />
                                <i className="fa fa-caret-down" />
                              </span>
                              <button type="button" value={1}>
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <ul id="list_comment" className="col-md-12">
                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Nath Ryuzaki</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay">
                                <li className="box_reply row">
                                  <div className="avatar_comment col-md-1">
                                    <img
                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <div className="result_comment col-md-11">
                                    <h4>Sugito</h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's.
                                    </p>
                                    <div className="tools_comment">
                                      <Link className="like" to="#">
                                        Like
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <Link className="replay" to="#">
                                        Reply
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <i className="fa fa-thumbs-o-up" />{" "}
                                      <span className="count">1</span>
                                      <span aria-hidden="true"> · </span>
                                      <span>26m</span>
                                    </div>
                                    <ul className="child_replay" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Gung Wah</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="QuestionDiv">
            <div className="heading">
              <div className="NumberDiv">DG.1.5</div>
              <div className="float-start col-11">
                The Entity shall identify and appoint Data Stewards to support
                the Data Manager in both the business and technical areas of the
                organisation
                <span className="badge bg-danger">Danger</span>{" "}
                <span className="badge bg-secondary">Secondary</span>
                <ul>
                  <li>
                    The Data Stewards will take responsibility for the lifecycle
                    of the data as it passes through information systems and
                    ownership boundaries
                  </li>
                  <li>
                    The Data Stewards will take responsibility for the lifecycle
                    of the data as it passes through information systems and
                    ownership boundaries
                  </li>
                </ul>
              </div>
              <div className="row" style={{ clear: "both" }}>
                <div className="col-lg-4 mt-4 offset-1">
                  <div
                    className="btn-group CustomBtnGroup"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton5(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton5(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <Link
                    className="btn AttachBut"
                    data-bs-toggle="collapse"
                    to="#collapseExample5"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faUpload} /> Upload Evidence
                  </Link>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseExample5"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="AttachBut ms-2"
                  >
                    <FontAwesomeIcon icon={faComment} /> Add Comments
                  </Link>
                </div>
              </div>
              <div className="collapse AttachDiv" id="collapseExample5">
                <form action="">
                  <div className="form">
                    <input
                      name="file5"
                      type="file"
                      id="file5"
                      onChange={(e) => handleFileChange(e, "file5")}
                    />
                    <div>
                      <img
                        src="upload.png"
                        alt="upload"
                        width="4%"
                        className=""
                      />
                      Upload your files here or
                      <button className="btn bg-color-dblue btn-primary">
                        Browse
                      </button>
                    </div>
                    <span id="fileName" className="text-primary "></span>
                  </div>
                </form>
                <div className="SmallHead">Comments</div>
                <div className="container">
                  <div className="col-md-12" id="fbcomment">
                    <div className="header_comment">
                      <div className="">
                        <div className="float-start">
                          <span className="count_comment">264235 Comments</span>
                        </div>
                        <div className="float-end">
                          <span className="sort_title">Sort by</span>
                          <select className="sort_by">
                            <option>Top</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="body_comment">
                      <div className="row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="box_comment col-md-11">
                          <textarea
                            className="commentar"
                            placeholder="Add a comment..."
                            name="comment5"
                            value={formData.comment5}
                            onChange={handleInputChange}
                          />
                          <div className="box_post">
                            <div className="pull-right">
                              <span>
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                  alt="avatar"
                                />
                                <i className="fa fa-caret-down" />
                              </span>
                              <button
                                // onclick="submit_comment()"
                                type="button"
                                value={1}
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <ul id="list_comment" className="col-md-12">
                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Nath Ryuzaki</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay">
                                <li className="box_reply row">
                                  <div className="avatar_comment col-md-1">
                                    <img
                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <div className="result_comment col-md-11">
                                    <h4>Sugito</h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's.
                                    </p>
                                    <div className="tools_comment">
                                      <Link className="like" to="#">
                                        Like
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <Link className="replay" to="#">
                                        Reply
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <i className="fa fa-thumbs-o-up" />{" "}
                                      <span className="count">1</span>
                                      <span aria-hidden="true"> · </span>
                                      <span>26m</span>
                                    </div>
                                    <ul className="child_replay" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Gung Wah</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="QuestionDiv">
            <div className="heading">
              <div className="NumberDiv">DG.1.6</div>
              <div className="float-start col-11">
                The Entity shall identify and appoint Data Owners (who are
                responsible for a particular dataset) to support the Data
                Stewards. Data Owners will be drawn from both the business and
                technical areas of the organisation.{" "}
                <span className="badge bg-danger">Danger</span>{" "}
                <span className="badge bg-secondary">Secondary</span>
                <ul>
                  <li>
                    The Data Owners will take responsibility for a particular
                    dataset throughout the lifecycle across systems
                  </li>
                  <li>
                    The Data Owners will ensure the quality standards for their
                    dataset are met
                  </li>
                  <li>
                    The Data Owners will liaise between the business and
                    technical stakeholders to ensure that their dataset is
                    maintained to the highest standards possible
                  </li>
                </ul>
              </div>
              <div className="row" style={{ clear: "both" }}>
                <div className="col-lg-4 mt-4 offset-1">
                  <div
                    className="btn-group CustomBtnGroup"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton6(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton6(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <Link
                    className="btn AttachBut"
                    data-bs-toggle="collapse"
                    to="#collapseExample6"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faUpload} /> Upload Evidence
                  </Link>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseExample6"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="AttachBut ms-2"
                  >
                    <FontAwesomeIcon icon={faComment} /> Add Comments
                  </Link>
                </div>
              </div>
              <div className="collapse AttachDiv" id="collapseExample6">
                <form action="">
                  <div className="form">
                    <input
                      name="file6"
                      type="file"
                      id="file6"
                      onChange={(e) => handleFileChange(e, "file6")}
                    />
                    <div>
                      <img
                        src="upload.png"
                        alt="upload"
                        width="4%"
                        className=""
                      />
                      Upload your files here or
                      <button className="btn bg-color-dblue btn-primary">
                        Browse
                      </button>
                    </div>
                    <span id="fileName" className="text-primary "></span>
                  </div>
                </form>
                <div className="SmallHead">Comments</div>
                <div className="container">
                  <div className="col-md-12" id="fbcomment">
                    <div className="header_comment">
                      <div className="">
                        <div className="float-start">
                          <span className="count_comment">264235 Comments</span>
                        </div>
                        <div className="float-end">
                          <span className="sort_title">Sort by</span>
                          <select className="sort_by">
                            <option>Top</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="body_comment">
                      <div className="row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="box_comment col-md-11">
                          <textarea
                            className="commentar"
                            placeholder="Add a comment..."
                            name="comment6"
                            value={formData.comment6}
                            onChange={handleInputChange}
                          />
                          <div className="box_post">
                            <div className="pull-right">
                              <span>
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                  alt="avatar"
                                />
                                <i className="fa fa-caret-down" />
                              </span>
                              <button
                                // onclick="submit_comment()"
                                type="button"
                                value={1}
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <ul id="list_comment" className="col-md-12">
                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Nath Ryuzaki</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay">
                                <li className="box_reply row">
                                  <div className="avatar_comment col-md-1">
                                    <img
                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <div className="result_comment col-md-11">
                                    <h4>Sugito</h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's.
                                    </p>
                                    <div className="tools_comment">
                                      <Link className="like" to="#">
                                        Like
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <Link className="replay" to="#">
                                        Reply
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <i className="fa fa-thumbs-o-up" />{" "}
                                      <span className="count">1</span>
                                      <span aria-hidden="true"> · </span>
                                      <span>26m</span>
                                    </div>
                                    <ul className="child_replay" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Gung Wah</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="QuestionDiv">
            <div className="heading">
              <div className="NumberDiv">DG.1.7</div>
              <div className="float-start col-11">
                The Entity shall regularly undertake monitoring and compliance
                checking to ensure that information systems and data related
                processes are implemented in accordance with established policy,
                standards and best practices
                <span className="badge bg-danger">Danger</span>{" "}
                <span className="badge bg-secondary">Secondary</span>
                <ul>
                  Such reviews should include coverage of:
                  <li>Such reviews should include coverage of</li>
                  <li>
                    The organisation will take responsibility and accountability
                    for Data Management
                  </li>
                  <li>Such reviews should include coverage of</li>
                </ul>
              </div>
              <div className="row" style={{ clear: "both" }}>
                <div className="col-lg-4 mt-4 offset-1">
                  <div
                    className="btn-group CustomBtnGroup"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton7(true);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setYesbutton7(false);
                      }}
                    >
                      No
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 mt-4">
                  <Link
                    className="btn AttachBut"
                    data-bs-toggle="collapse"
                    to="#collapseExample7"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <FontAwesomeIcon icon={faUpload} /> Upload Evidence
                  </Link>
                  <Link
                    data-bs-toggle="collapse"
                    to="#collapseExample7"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    className="AttachBut ms-2"
                  >
                    <FontAwesomeIcon icon={faComment} /> Add Comments
                  </Link>
                </div>
              </div>
              <div className="collapse AttachDiv" id="collapseExample7">
                <form action="">
                  <div className="form">
                    <input
                      name="file7"
                      type="file"
                      id="file7"
                      onChange={(e) => handleFileChange(e, "file7")}
                    />
                    <div>
                      <img
                        src="upload.png"
                        alt="upload"
                        width="4%"
                        className=""
                      />
                      Upload your files here or
                      <button className="btn bg-color-dblue btn-primary">
                        Browse
                      </button>
                    </div>
                    <span id="fileName" className="text-primary "></span>
                  </div>
                </form>
                <div className="SmallHead">Comments</div>
                <div className="container">
                  <div className="col-md-12" id="fbcomment">
                    <div className="header_comment">
                      <div className="">
                        <div className="float-start">
                          <span className="count_comment">264235 Comments</span>
                        </div>
                        <div className="float-end">
                          <span className="sort_title">Sort by</span>
                          <select className="sort_by">
                            <option>Top</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="body_comment">
                      <div className="row">
                        <div className="avatar_comment col-md-1">
                          <img
                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div className="box_comment col-md-11">
                          <textarea
                            className="commentar"
                            placeholder="Add a comment..."
                            name="comment7"
                            value={formData.comment7}
                            onChange={handleInputChange}
                          />
                          <div className="box_post">
                            <div className="pull-right">
                              <span>
                                <img
                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                  alt="avatar"
                                />
                                <i className="fa fa-caret-down" />
                              </span>
                              <button
                                // onclick="submit_comment()"
                                type="button"
                                value={1}
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <ul id="list_comment" className="col-md-12">
                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Nath Ryuzaki</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay">
                                <li className="box_reply row">
                                  <div className="avatar_comment col-md-1">
                                    <img
                                      src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                      alt="avatar"
                                    />
                                  </div>
                                  <div className="result_comment col-md-11">
                                    <h4>Sugito</h4>
                                    <p>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's.
                                    </p>
                                    <div className="tools_comment">
                                      <Link className="like" to="#">
                                        Like
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <Link className="replay" to="#">
                                        Reply
                                      </Link>
                                      <span aria-hidden="true"> · </span>
                                      <i className="fa fa-thumbs-o-up" />{" "}
                                      <span className="count">1</span>
                                      <span aria-hidden="true"> · </span>
                                      <span>26m</span>
                                    </div>
                                    <ul className="child_replay" />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>

                          <li className="box_result row">
                            <div className="avatar_comment col-md-1">
                              <img
                                src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                alt="avatar"
                              />
                            </div>
                            <div className="result_comment col-md-11">
                              <h4>Gung Wah</h4>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's.
                              </p>
                              <div className="tools_comment">
                                <Link className="like" to="#">
                                  Like
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <Link className="replay" to="#">
                                  Reply
                                </Link>
                                <span aria-hidden="true"> · </span>
                                <i className="fa fa-thumbs-o-up" />{" "}
                                <span className="count">1</span>
                                <span aria-hidden="true"> · </span>
                                <span>26m</span>
                              </div>
                              <ul className="child_replay" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOnSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step10;
