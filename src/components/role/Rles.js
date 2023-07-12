import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCopy,
  faDownload,
  faUserPlus,
  faPenToSquare,
  faTrash,
  faCalendarDays,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Navbar from "../Navbar";
// import { useRolesListMutation } from "../../services/Post";
import { useRolesListQuery } from "../../services/Post";
import { useAddRoleMutation } from "../../services/Post";
import { useDeleteRoleMutation } from "../../services/Post";
import { useUpdateRoleMutation } from "../../services/Post";

function Rles() {
  const [addRole] = useAddRoleMutation();
  const [roleList, setRoleList] = useState("");
  const [roleName, setRoleName] = useState("");
  const [roleName1, setRoleName1] = useState("");
  const [descripation, setDescripation] = useState("");
  const [deleteRole, res] = useDeleteRoleMutation();
  const [itemId, setItemId] = useState("");
  const [updateRole, re] = useUpdateRoleMutation();

  const role = useRolesListQuery();
  useEffect(() => {
    if (role?.data?.results) {
      setRoleList(role?.data?.results);
    } else {
      setRoleList(role?.data?.results);
    }
  }, [role]);

  //   const handleSaveChanges3 = () => {
  //     const editDuplicate = {
  //       roleName: "user",
  //       descripation: "adda",
  //     };
  //     addRole(editDuplicate);
  //   };
  const handleSaveChanges1 = async () => {
    const editAddress = {
      roleName: roleName,
      descripation: descripation,
    };

    try {
      const response = await addRole(editAddress);
      const generatedRole = response?.data?.results?.saveData?._id; // Assuming the generated ID is available in the response
      console.log("generatedId", generatedRole);
      // Store the generated ID in local storage
      localStorage.setItem("generatedRole", generatedRole);

      Swal.fire({
        title: "Form Created",
        text: "The form has been successfully created.",
        icon: "success",
      }).then(() => {
        window.location.reload(); // Reload the page
      });
    } catch (error) {
      // Handle any errors that occurred during form creation
      console.error("Error creating form:", error);
    }
  };
  const handleSaveChanges2 = () => {
    console.log("handleSaveChanges1", itemId);
    const editAddress = {
      id: itemId,
      roleName: roleName1,
    };
    updateRole(editAddress).then(() => {
      Swal.fire({
        title: "Updated!",
        text: "Your item has been updated.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload(); // Reload the page
        }
      });
    });
  };
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
                    <h5 className="card-title float-start">Roles</h5>
                    <button
                      type="button"
                      className="btn btn-sm DefaultBtn float-end mt-4"
                      fdprocessedid="bfs61e"
                    >
                      <FontAwesomeIcon icon={faDownload} /> Download
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm DefaultBtn float-end mt-4 me-2"
                      fdprocessedid="bfs61e"
                    >
                      <Link
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        className="comman_btn2 table_viewbtn"
                        to=""
                        // onClick={handleSaveChanges3}
                      >
                        <FontAwesomeIcon icon={faUserPlus} /> Add Role
                      </Link>
                    </button>
                    <table
                      className="table table-sm table-hover table-striped CustomTable"
                      id="UserTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">Roles Name</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col">Modified Date</th>
                          <th scope="col">Status</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                          <th
                            scope="col"
                            align="center"
                            className="text-center"
                            style={{
                              textAlign: "center !important",
                              width: "50px",
                            }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {roleList?.listData?.map((item, index) => {
                          return (
                            <tr className="yellow" key={index}>
                              <th scope="row"> {item?.roleName} </th>
                              <td></td>
                              <td></td>
                              <td> {item?.updatedAt?.slice(0, 10)} </td>
                              <td> {item?.status} </td>
                              <td></td>
                              <td></td>
                              <td
                                style={{ textAlign: "center", width: "50px" }}
                                onClick={() => {
                                  Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!",
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      deleteRole(item?._id);
                                      Swal.fire(
                                        "Deleted!",
                                        "Your item has been deleted.",
                                        "success"
                                      ).then(() => {
                                        window.location.reload(); // Reload the page
                                      });
                                    }
                                  });
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  style={{
                                    color: "#eb0f0f",
                                    marginLeft: "20px",
                                  }}
                                />
                              </td>
                              <td>
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop5"
                                  className="comman_btn2 table_viewbtn"
                                  to=""
                                  onClick={() => setItemId(item?._id)}
                                >
                                  <FontAwesomeIcon icon={faPenToSquare} />{" "}
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
                Create Form
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
                  <label htmlFor="nameEn">Role Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="title"
                    id="title"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                  />
                </div>
                <div className="form-group col-12 my-2">
                  <label htmlFor="nameAr"> Description</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="userName"
                    id="userName"
                    value={descripation}
                    onChange={(e) => setDescripation(e.target.value)}
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
      <div
        className="modal fade Edit_modal"
        id="staticBackdrop5"
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
                Edit Role
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
                  <label htmlFor="nameEn">Role Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="title"
                    id="title"
                    value={roleName1}
                    onChange={(e) => setRoleName1(e.target.value)}
                  />
                </div>

                <div className="form-group mb-0 col-auto">
                  <Link to="#">
                    <button
                      className="comman_btn2  text-light"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        width: "100px",
                        height: "40px",
                        backgroundColor: "#5058DD",
                      }}
                      onClick={handleSaveChanges2}
                    >
                      update
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

export default Rles;
