import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faComment } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Navbar from "../Navbar";

function AuditorQuestions() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
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
                        {" "}
                        Example checkbox{" "}
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
      <aside id="sidebar" className="sidebar">
        <div className="HeaderSec">
          <div className="Avatar">VK</div>
          <div className="py-3">Applicant Name/Username</div>
        </div>
        <div className="px-2">
          <div className="Title">Company Name</div>
          <p>UAE Chemical Private Ltd</p>
          <div className="Title">About Company</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            imperdiet risus nibh, vitae venenatis odio scelerisque et. Morbi
            eget neque sodales, dapibus orci consequat, bibendum lorem.d
          </p>
          <div className="Title">Application Name</div>
          <p>Green Environment Application</p>
          <div className="Title">Reviewer Name</div>
          <p>You</p>
        </div>
      </aside>
      <main id="main" className="main mainNew">
        <div className="container">
          <div className="card  StaticCard">
            <div className="card-body">
              <div className="step-progress">
                <div className="StepsHeader">
                  <div className="step-slider">
                    <div data-id="step1" className="step-slider-item">
                      <div className="Title">Data Governance</div>
                    </div>
                    <div data-id="step2" className="step-slider-item">
                      <div className="Title">Data Management </div>
                    </div>
                    <div data-id="step3" className="step-slider-item">
                      <div className="Title">Data Catalogue</div>
                    </div>
                    <div data-id="step4" className="step-slider-item">
                      <div className="Title">Data Modelling and Design</div>
                    </div>
                    <div data-id="step5" className="step-slider-item">
                      <div className="Title">Data Architecture</div>
                    </div>
                    <div data-id="step6" className="step-slider-item">
                      <div className="Title">Data Security and Privacy</div>
                    </div>
                    <div data-id="step7" className="step-slider-item">
                      <div className="Title">Data Storage</div>
                    </div>
                    <div data-id="step8" className="step-slider-item">
                      <div className="Title">
                        Data Integration and Interoperability
                      </div>
                    </div>
                    <div data-id="step9" className="step-slider-item">
                      <div className="Title">Open Data</div>
                    </div>
                    <div data-id="step10" className="step-slider-item">
                      <div className="Title">Data Quality</div>
                    </div>
                  </div>
                </div>
                <div className="step-content">
                  <div id="step1" className="step-content-body">
                    <div className="pagetitle">
                      <h2>Data Governance</h2>
                    </div>
                    <div className="QuestionsStrip">
                      <div className="QuestionDiv">
                        <div className="heading">
                          <div className="NumberDiv">DG.1.1</div>
                          <div className="float-start">
                            The Entity shall establish an organisational
                            structure to support the Data Management Programme.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              <li>
                                The organisation shall be positioned in the
                                Entity with sufficient authority such that it is
                                empowered to do its job effectively
                              </li>
                              <li>
                                The organisation will take responsibility and
                                accountability for Data Management
                              </li>
                              <li>
                                The organisation will take responsibility and
                                accountability for Data Management
                              </li>
                            </ul>
                          </div>
                          <div className="row" style={{ clear: "both" }}>
                            <div className="col-lg-2 mt-4 offset-1">
                              <div
                                className="btn-group CustomBtnGroup"
                                role="group"
                                aria-label="Basic example"
                              >
                                <h4 className="text-success">YES</h4>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLink}
                                  style={{ color: "#0058f0" }}
                                />{" "}
                                <span className="badge badge-number"> 4</span>{" "}
                              </Link>{" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faComment}
                                  style={{ color: "#005cfa" }}
                                />{" "}
                                <span className="badge badge-number">4</span>{" "}
                              </Link>{" "}
                            </div>
                            <div className="col-lg-3 mt-4 text-end">
                              <div
                                className="btn-group CustomBtnGroup2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  type="file"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>
                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall convene the Data Governance Board
                            to manage delegated authority and responsibility
                            within the Entity. The Board will be the final
                            arbiter within the Entity for all matters relating
                            to data management.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              <li>
                                This Board should have representatives from each
                                area affected by data management initiatives,
                                with the Data Manager responsible for the
                                execution of the Boards actions through the
                                programme management function of the Entit
                              </li>
                              <li>
                                The Data Governance Board shall meet regularly
                                (weekly, initially) to provide independent
                                oversight and support for the Data Management
                                initiatives being undertaken by the Entity
                              </li>
                            </ul>
                          </div>
                          <div className="row" style={{ clear: "both" }}>
                            <div className="col-lg-2 mt-4 offset-1">
                              <div
                                className="btn-group CustomBtnGroup"
                                role="group"
                                aria-label="Basic example"
                              >
                                <h4 className="text-danger">NO</h4>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLink}
                                  style={{ color: "#0058f0" }}
                                />{" "}
                                <span className="badge badge-number"> 4</span>{" "}
                              </Link>{" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faComment}
                                  style={{ color: "#005cfa" }}
                                />{" "}
                                <span className="badge badge-number">4</span>{" "}
                              </Link>{" "}
                            </div>
                            <div className="col-lg-3 mt-4 text-end">
                              <div
                                className="btn-group CustomBtnGroup2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample2"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall appoint a Data Manager. The Data
                            Manager shall have delegated authority from the Data
                            Governance Board.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              The Data Manager shall:
                              <li>Oversee the implementation of change</li>
                              <li>
                                Ensure compliance with governance, policy and
                                standards
                              </li>
                              <li>
                                Ensure the coordinated training and awareness
                                programmes are executed within the Entity
                              </li>
                              <li>
                                Ensure the coordinated training and awareness
                                programmes are executed within the Entity
                              </li>
                            </ul>
                          </div>
                          <div className="row" style={{ clear: "both" }}>
                            <div className="col-lg-2 mt-4 offset-1">
                              <div
                                className="btn-group CustomBtnGroup"
                                role="group"
                                aria-label="Basic example"
                              >
                                <h4 className="text-success">YES</h4>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLink}
                                  style={{ color: "#0058f0" }}
                                />{" "}
                                <span className="badge badge-number"> 4</span>{" "}
                              </Link>{" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faComment}
                                  style={{ color: "#005cfa" }}
                                />{" "}
                                <span className="badge badge-number">4</span>{" "}
                              </Link>{" "}
                            </div>
                            <div className="col-lg-3 mt-4 text-end">
                              <div
                                className="btn-group CustomBtnGroup2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample3"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall identify and appoint Data
                            Architects to support the Data Manager.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              The Data Architects shall:
                              <li>
                                TWork with the Data Manager and the Data
                                Governance Board to ensure the implementation of
                                the Data Management Standards in all designs
                                across the Entit
                              </li>
                              <li>
                                Establish a clearly defined target state for all
                                data sources
                              </li>
                              <li>
                                Establish a clearly defined roadmap to achieve
                                the target state for all data sources
                              </li>
                              <li>
                                Be responsible for developing and maintaining a
                                formal description of the data and data
                                structures within the Entity, including
                                <ol>
                                  <li>Data designs and design artefacts</li>
                                  <li>Data designs and design artefact</li>
                                  <li>Data flows throughout the Entity</li>
                                </ol>
                              </li>
                            </ul>
                          </div>
                          <div className="row" style={{ clear: "both" }}>
                            <div className="col-lg-2 mt-4 offset-1">
                              <div
                                className="btn-group CustomBtnGroup"
                                role="group"
                                aria-label="Basic example"
                              >
                                <h4 className="text-success">YES</h4>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLink}
                                  style={{ color: "#0058f0" }}
                                />{" "}
                                <span className="badge badge-number"> 4</span>{" "}
                              </Link>{" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faComment}
                                  style={{ color: "#005cfa" }}
                                />{" "}
                                <span className="badge badge-number">4</span>{" "}
                              </Link>{" "}
                            </div>
                            <div className="col-lg-3 mt-4 text-end">
                              <div
                                className="btn-group CustomBtnGroup2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample4"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall identify and appoint Data Stewards
                            to support the Data Manager in both the business and
                            technical areas of the organisation{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              <li>
                                The Data Stewards will take responsibility for
                                the lifecycle of the data as it passes through
                                information systems and ownership boundaries
                              </li>
                              <li>
                                The Data Stewards will take responsibility for
                                the lifecycle of the data as it passes through
                                information systems and ownership boundaries
                              </li>
                            </ul>
                          </div>
                          <div className="row" style={{ clear: "both" }}>
                            <div className="col-lg-2 mt-4 offset-1">
                              <div
                                className="btn-group CustomBtnGroup"
                                role="group"
                                aria-label="Basic example"
                              >
                                <h4 className="text-danger">NO</h4>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLink}
                                  style={{ color: "#0058f0" }}
                                />{" "}
                                <span className="badge badge-number"> 4</span>{" "}
                              </Link>{" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faComment}
                                  style={{ color: "#005cfa" }}
                                />{" "}
                                <span className="badge badge-number">4</span>{" "}
                              </Link>{" "}
                            </div>
                            <div className="col-lg-3 mt-4 text-end">
                              <div
                                className="btn-group CustomBtnGroup2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample5"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall identify and appoint Data Owners
                            (who are responsible for a particular dataset) to
                            support the Data Stewards. Data Owners will be drawn
                            from both the business and technical areas of the
                            organisation.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              <li>
                                The Data Owners will take responsibility for a
                                particular dataset throughout the lifecycle
                                across systems
                              </li>
                              <li>
                                The Data Owners will ensure the quality
                                standards for their dataset are met
                              </li>
                              <li>
                                The Data Owners will liaise between the business
                                and technical stakeholders to ensure that their
                                dataset is maintained to the highest standards
                                possible
                              </li>
                            </ul>
                          </div>
                          <div className="row" style={{ clear: "both" }}>
                            <div className="col-lg-2 mt-4 offset-1">
                              <div
                                className="btn-group CustomBtnGroup"
                                role="group"
                                aria-label="Basic example"
                              >
                                <h4 className="text-success">YES</h4>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLink}
                                  style={{ color: "#0058f0" }}
                                />{" "}
                                <span className="badge badge-number"> 4</span>{" "}
                              </Link>{" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faComment}
                                  style={{ color: "#005cfa" }}
                                />{" "}
                                <span className="badge badge-number">4</span>{" "}
                              </Link>{" "}
                            </div>
                            <div className="col-lg-3 mt-4 text-end">
                              <div
                                className="btn-group CustomBtnGroup2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample6"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall regularly undertake monitoring and
                            compliance checking to ensure that information
                            systems and data related processes are implemented
                            in accordance with established policy, standards and
                            best practices
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              Such reviews should include coverage of:
                              <li>Such reviews should include coverage of</li>
                              <li>
                                The organisation will take responsibility and
                                accountability for Data Management
                              </li>
                              <li>Such reviews should include coverage of</li>
                            </ul>
                          </div>
                          <div className="row" style={{ clear: "both" }}>
                            <div className="col-lg-2 mt-4 offset-1">
                              <div
                                className="btn-group CustomBtnGroup"
                                role="group"
                                aria-label="Basic example"
                              >
                                <h4 className="text-success">YES</h4>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLink}
                                  style={{ color: "#0058f0" }}
                                />{" "}
                                <span className="badge badge-number"> 4</span>{" "}
                              </Link>{" "}
                              <Link
                                className="AttachBut2"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faComment}
                                  style={{ color: "#005cfa" }}
                                />{" "}
                                <span className="badge badge-number">4</span>{" "}
                              </Link>{" "}
                            </div>
                            <div className="col-lg-3 mt-4 text-end">
                              <div
                                className="btn-group CustomBtnGroup2"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample7"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                    </div>
                  </div>
                  <div id="step2" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Management</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step3" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Catalogue</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step4" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Modelling and Design</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step5" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Architecture</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step6" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Security and Privacy</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step7" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Storage</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step8" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Integration and Interoperability</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step9" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Open Data</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="step10" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Open Data</h2>
                    </div>
                    <div className="QuestionsStrip"> </div>
                  </div>
                  <div id="stepLast" className="step-content-body out">
                    <div className="pagetitle">
                      <h2>Data Quality</h2>
                    </div>
                    <div className="QuestionsStrip">
                      <div className="QuestionDiv">
                        <div className="heading">
                          <div className="NumberDiv">DQ.1.1</div>
                          <div className="float-start col-11">
                            The Entity shall provide definitions of quality
                            data. These definitions shall be used to determine
                            whether data is of sufficient quality for the
                            purposes of the Entity's business.
                            <br />
                            Data quality definitions shall be stored in the
                            Entity's business glossary (business audience) and
                            data dictionary (technical audience).{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              Definitions shall exist for:
                              <li>
                                Master profiles – the profiles used across the
                                Entity's business, in key line-of-business
                                systems, or across multiple departments and data
                                silos (see Data Modelling domain) eg ‘Citizen’
                                profile in multiple systems
                              </li>
                              <li>
                                TSystem profiles – profiles within single
                                systems, silos or departments eg Project (in a
                                Project management system){" "}
                              </li>
                              <li>
                                Reference data – data that is effectively static
                                within systems, subject to periodic refresh
                              </li>
                              <li>
                                Audit data – data stored log files, history
                                tables and monitoring systems
                              </li>
                              <li>
                                Audit data – data stored log files, history
                                tables and monitoring systems
                              </li>
                              <li>
                                Spatial data – geographical, address,
                                geolocation or other locationbased data
                              </li>
                              <li>
                                Metadata – metadata that is gathered about
                                structured datasets, such as ownership,
                                definitions, access rights (see Metadata domain
                              </li>
                              <li>
                                Metadata annotating unstructured or
                                semi-structured data. This may include metadata
                                attached to images, audio recordings, video
                                recordings (such as duration, dimensions,
                                location, encoding), etc. Metadata attached to
                                semi-structured data may include, for example,
                                author, workflow steps and access permissions of
                                documents, etc
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
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="btn AttachBut"
                                data-bs-toggle="collapse"
                                to="#collapseExample"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                                Upload Evidence{" "}
                              </Link>{" "}
                              <Link to="#" className="AttachBut">
                                <i className="fa-regular fa-comment" />
                                Add Comments
                              </Link>{" "}
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                          <div className="NumberDiv">DQ.1.2</div>
                          <div className="float-start col-11">
                            Data quality definitions shall be mapped to business
                            processes. This shall provide the capability to
                            assess the impact of both high and low quality data
                            on business processes.
                            <br />
                            For example, a business process may include
                            contacting a citizen. Where there is poor data
                            quality in telephone number or address capture (such
                            as the omission of a country, area or postal code),
                            there may be a severe impact upon the business
                            process. Accurate and timely capture of a telephone
                            number enables the business process to continue
                            <br />
                            Data quality definitions shall include – but are not
                            limited to – the minimum measures of data quality
                            for
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              <li>
                                Validity – Describing what constitutes valid
                                data. This will show how data validity is
                                controlled and measured. This shall include a
                                description of the business rules (expressed
                                both as a text-based description, and
                                technically eg as a regular expression) that
                                enforce this validity. Data validity may include
                                the range of acceptable values or combination of
                                values across multiple attributes and tables
                                <br />
                                <br />
                                For example: a Citizen is valid if there is at
                                least one Address marked active in the last year
                              </li>
                              <li>
                                Timeliness – Describing the acceptable latency
                                between data capture, use, transformation,
                                reporting, and sharing.
                                <br />
                                For example: The correct departments have access
                                to Citizen data in order to process a service
                                request with sufficient time to meet an SLA;
                                mapping data changes over time as properties are
                                constructed, so mapping data that is a year old
                                may be less useful than mapping data that is two
                                months’ old.
                              </li>
                              <li>
                                Integrity – Describing how the integrity between
                                different data sources is maintained both within
                                and across and business functions
                                <br />
                                For example, using the Emirates ID across
                                multiple information systems to uniquely
                                identify a person, using a contact reference
                                number across multiple systems, and enforcing
                                validation through a master service.
                              </li>
                              <li>
                                Accuracy – Describing the acceptable margin of
                                error against reality to support the intended
                                purpose(s) of the data. For example, historical
                                dates of Citizen access to a government service
                                must be accurate to within +/- one week to
                                support capacity planning.{" "}
                              </li>
                              <li>
                                Reliability – Determining the level of
                                consistency and completeness required for the
                                intended purpose(s) of the data. For example,
                                telephone numbers are always captured in the
                                same format to be consistent, and address
                                records must contain the correct district in
                                order to be considered complete
                              </li>
                              For each of these measures, the Entity shall:
                              <li>
                                Assess the impact on business processes for
                                failing to reach the specified criteria
                              </li>
                              <li>
                                Assess the impact on business processes for
                                failing to reach the specified criteria
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
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="btn AttachBut"
                                data-bs-toggle="collapse"
                                to="#collapseExample2"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                                Upload Evidence{" "}
                              </Link>{" "}
                              <Link to="#" className="AttachBut">
                                <i className="fa-regular fa-comment" />
                                Add Comments
                              </Link>{" "}
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall appoint a Data Manager. The Data
                            Manager shall have delegated authority from the Data
                            Governance Board.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              The Data Manager shall:
                              <li>Oversee the implementation of change</li>
                              <li>
                                Ensure compliance with governance, policy and
                                standards
                              </li>
                              <li>
                                Ensure the coordinated training and awareness
                                programmes are executed within the Entity
                              </li>
                              <li>
                                Ensure the coordinated training and awareness
                                programmes are executed within the Entity
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
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="btn AttachBut"
                                data-bs-toggle="collapse"
                                to="#collapseExample3"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                                Upload Evidence{" "}
                              </Link>{" "}
                              <Link to="#" className="AttachBut">
                                <i className="fa-regular fa-comment" />
                                Add Comments
                              </Link>{" "}
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample3"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall identify and appoint Data
                            Architects to support the Data Manager.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              The Data Architects shall:
                              <li>
                                TWork with the Data Manager and the Data
                                Governance Board to ensure the implementation of
                                the Data Management Standards in all designs
                                across the Entit
                              </li>
                              <li>
                                Establish a clearly defined target state for all
                                data sources
                              </li>
                              <li>
                                Establish a clearly defined roadmap to achieve
                                the target state for all data sources
                              </li>
                              <li>
                                Be responsible for developing and maintaining a
                                formal description of the data and data
                                structures within the Entity, including
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
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4 ">
                              {" "}
                              <Link
                                className="btn AttachBut"
                                data-bs-toggle="collapse"
                                to="#collapseExample4"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                                Upload Evidence{" "}
                              </Link>{" "}
                              <Link to="#" className="AttachBut">
                                <i className="fa-regular fa-comment" />
                                Add Comments
                              </Link>{" "}
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample4"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall identify and appoint Data Stewards
                            to support the Data Manager in both the business and
                            technical areas of the organisation{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              <li>
                                The Data Stewards will take responsibility for
                                the lifecycle of the data as it passes through
                                information systems and ownership boundaries
                              </li>
                              <li>
                                The Data Stewards will take responsibility for
                                the lifecycle of the data as it passes through
                                information systems and ownership boundaries
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
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="btn AttachBut"
                                data-bs-toggle="collapse"
                                to="#collapseExample5"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                                Upload Evidence{" "}
                              </Link>{" "}
                              <Link to="#" className="AttachBut">
                                <i className="fa-regular fa-comment" />
                                Add Comments
                              </Link>{" "}
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample5"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall identify and appoint Data Owners
                            (who are responsible for a particular dataset) to
                            support the Data Stewards. Data Owners will be drawn
                            from both the business and technical areas of the
                            organisation.{" "}
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              <li>
                                The Data Owners will take responsibility for a
                                particular dataset throughout the lifecycle
                                across systems
                              </li>
                              <li>
                                The Data Owners will ensure the quality
                                standards for their dataset are met
                              </li>
                              <li>
                                The Data Owners will liaise between the business
                                and technical stakeholders to ensure that their
                                dataset is maintained to the highest standards
                                possible
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
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="btn AttachBut"
                                data-bs-toggle="collapse"
                                to="#collapseExample6"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                                Upload Evidence{" "}
                              </Link>{" "}
                              <Link to="#" className="AttachBut">
                                <i className="fa-regular fa-comment" />
                                Add Comments
                              </Link>{" "}
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample6"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   ref="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                            The Entity shall regularly undertake monitoring and
                            compliance checking to ensure that information
                            systems and data related processes are implemented
                            in accordance with established policy, standards and
                            best practices
                            <span className="badge bg-danger">
                              High Priority
                            </span>{" "}
                            <span className="badge bg-secondary">Optional</span>
                            <ul>
                              Such reviews should include coverage of:
                              <li>Such reviews should include coverage of</li>
                              <li>
                                The organisation will take responsibility and
                                accountability for Data Management
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
                                >
                                  Yes
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  No
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                              {" "}
                              <Link
                                className="btn AttachBut"
                                data-bs-toggle="collapse"
                                to="#collapseExample7"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {" "}
                                <i className="fa-solid fa-arrow-up-from-bracket" />{" "}
                                Upload Evidence{" "}
                              </Link>{" "}
                              <Link to="#" className="AttachBut">
                                <i className="fa-regular fa-comment" />
                                Add Comments
                              </Link>{" "}
                            </div>
                          </div>
                          <div
                            className="collapse AttachDiv"
                            id="collapseExample7"
                          >
                            <form action="">
                              <div className="form">
                                <input
                                  name="file"
                                  id="entry_value"
                                  //   refs="fileInput"
                                  type="file"
                                  //   onchange="getFileName()"
                                />
                                <div>
                                  {" "}
                                  <img
                                    src="upload.png"
                                    alt="upload"
                                    width="4%"
                                    className=""
                                  />{" "}
                                  Upload your files here or
                                  <button className="btn bg-color-dblue btn-primary">
                                    Browse
                                  </button>
                                </div>
                                <span id="fileName" className="text-primary ">
                                  {" "}
                                </span>{" "}
                              </div>
                            </form>
                            <div className="SmallHead">Comments</div>

                            <div className="container">
                              <div className="col-md-12" id="fbcomment">
                                <div className="header_comment">
                                  <div className="">
                                    <div className="float-start">
                                      {" "}
                                      <span className="count_comment">
                                        264235 Comments
                                      </span>{" "}
                                    </div>
                                    <div className="float-end">
                                      {" "}
                                      <span className="sort_title">
                                        Sort by
                                      </span>
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
                                      {" "}
                                      <img
                                        src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                        alt="avatar"
                                      />{" "}
                                    </div>
                                    <div className="box_comment col-md-11">
                                      <textarea
                                        className="commentar"
                                        placeholder="Add a comment..."
                                        defaultValue={""}
                                      />
                                      <div className="box_post">
                                        <div className="pull-right">
                                          {" "}
                                          <span>
                                            {" "}
                                            <img
                                              src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                              alt="avatar"
                                            />{" "}
                                            <i className="fa fa-caret-down" />{" "}
                                          </span>
                                          <button
                                            // onClick="submit_comment()"
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
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Nath Ryuzaki</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay">
                                            <li className="box_reply row">
                                              <div className="avatar_comment col-md-1">
                                                {" "}
                                                <img
                                                  src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                  alt="avatar"
                                                />{" "}
                                              </div>
                                              <div className="result_comment col-md-11">
                                                <h4>Sugito</h4>
                                                <p>
                                                  Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's.
                                                </p>
                                                <div className="tools_comment">
                                                  {" "}
                                                  <Link className="like" to="#">
                                                    Like
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <Link
                                                    className="replay"
                                                    to="#"
                                                  >
                                                    Reply
                                                  </Link>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <i className="fa fa-thumbs-o-up" />{" "}
                                                  <span className="count">
                                                    1
                                                  </span>{" "}
                                                  <span aria-hidden="true">
                                                    {" "}
                                                    ·{" "}
                                                  </span>{" "}
                                                  <span>26m</span>{" "}
                                                </div>
                                                <ul className="child_replay"></ul>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>

                                      <li className="box_result row">
                                        <div className="avatar_comment col-md-1">
                                          {" "}
                                          <img
                                            src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                            alt="avatar"
                                          />{" "}
                                        </div>
                                        <div className="result_comment col-md-11">
                                          <h4>Gung Wah</h4>
                                          <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's.
                                          </p>
                                          <div className="tools_comment">
                                            {" "}
                                            <Link className="like" to="#">
                                              Like
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <Link className="replay" to="#">
                                              Reply
                                            </Link>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <i className="fa fa-thumbs-o-up" />{" "}
                                            <span className="count">1</span>{" "}
                                            <span aria-hidden="true"> · </span>{" "}
                                            <span>26m</span>{" "}
                                          </div>
                                          <ul className="child_replay"></ul>
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
                    </div>
                  </div>
                  <div className="step-content-foot">
                    <button
                      type="button "
                      className="float-start active"
                      name="prev"
                    >
                      Prev
                    </button>
                    <button type="button" className="active" name="next">
                      Next
                    </button>
                    <button type="button" className="active out" name="finish">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="active out bg-danger"
                      name="finish"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default AuditorQuestions;
