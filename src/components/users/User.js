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
import { useRolesListQuery } from "../../services/Post";
import { useUserListQuery } from "../../services/Post";
import { useDeleteUserMutation } from "../../services/Post";
import { useUpdateUserMutation } from "../../services/Post";
import { useAddUserMutation } from "../../services/Post";

function User() {
  const [addUser] = useAddUserMutation();
  const [userList, setUserList] = useState([]);
  const [rollList, setRollList] = useState([]);
  const [name1, setName1] = useState("");
  const [userName1, setUserName1] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [entity1, setEntity1] = useState("");
  const [deleteUser, r] = useDeleteUserMutation();
  const [itemId, setItemId] = useState("");
  const [updateUser, response] = useUpdateUserMutation();
  const [selectedRoleId, setSelectedRoleId] = useState("");

  const user = useUserListQuery();
  useEffect(() => {
    if (user?.data?.results) {
      console.log("user?.data?.results", user?.data?.results);
      setUserList(user?.data?.results);
    } else {
      setUserList(user?.data?.results);
    }
  }, [user]);
  console.log("user list", userList?.ListData);
  const role = useRolesListQuery();
  console.log("role", role);
  useEffect(() => {
    if (role?.data?.results) {
      console.log("role?.data?.results", role?.data?.results);
      setRollList(role?.data?.results?.listData);
    } else {
      setRollList(role?.data?.results?.listData);
    }
  }, [role]);
  console.log("role list", rollList?.listData);
  const handleSaveChanges1 = async () => {
    const editAddress = {
      name: name1,
      userName: userName,
      entity: entity1,
      role_Id: selectedRoleId,
    };

    try {
      const response = await addUser(editAddress);
      const generatedRole = response?.data?.results?.addUser?._id;
      console.log("generatedId", generatedRole);
      localStorage.setItem("generatedRole", generatedRole);
      Swal.fire({
        title: "Form Created",
        text: "The form has been successfully created.",
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Error creating form:", error);
    }
  };
  const handleSaveChanges2 = () => {
    console.log("handleSaveChanges1", itemId);
    const editAddress = {
      id: itemId,
      userName: userName1,
      name: name,
    };
    updateUser(editAddress).then(() => {
      Swal.fire({
        title: "Updated!",
        text: "Your item has been updated.",
        icon: "success",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
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
                    <h5 className="card-title float-start">Users</h5>
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
                        <FontAwesomeIcon icon={faUserPlus} /> Add User
                      </Link>
                    </button>
                    <table
                      className="table table-sm table-hover table-striped CustomTable"
                      id="UserTable"
                    >
                      <thead>
                        <tr>
                          <th scope="col">User Name</th>
                          <th scope="col">Name</th>
                          <th scope="col">Entity Name</th>
                          <th scope="col">Role</th>
                          <th scope="col">Modified Date</th>
                          <th scope="col">Status</th>

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
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {(userList?.ListData || [])?.map((item, index) => (
                          <tr className="yellow" key={index}>
                            <th scope="row"> {item?.userName} </th>
                            <td> {item?.name} </td>
                            <td> {item?.entity} </td>
                            <td> {item?.role_Id?.roleName} </td>
                            <td> {item?.updatedAt?.slice(0, 10)} </td>
                            <td> {item?.status} </td>
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
                                    deleteUser(item?._id);
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
                        ))}
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
                Add User
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
                  <label htmlFor="nameEn"> Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="title"
                    id="title"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                  />
                </div>
                <div className="form-group col-12 my-2">
                  <label htmlFor="nameAr"> User Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="userName"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group col-12 my-2">
                  <label htmlFor="nameAr" style={{ marginTop: "10px" }}>
                    {" "}
                    Entity
                  </label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="entity1"
                    id="entity1"
                    value={entity1}
                    onChange={(e) => setEntity1(e.target.value)}
                  />
                </div>
                <div className="form-group col-12 my-2">
                  <select
                    className="form-select mt-2"
                    id="floatingSelect"
                    defaultValue=""
                    onChange={(e) => setSelectedRoleId(e.target.value)}
                  >
                    {(rollList || [])?.map((item, index) => {
                      console.log("item", item?._id);
                      return (
                        <option value={item?._id} key={index}>
                          {item?.roleName}
                        </option>
                      );
                    })}
                  </select>
                  <label htmlFor="floatingSelect" style={{ marginTop: "10px" }}>
                    Roll
                  </label>
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
                Edit User
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
                  <label htmlFor="nameEn">User Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="title"
                    id="title"
                    value={userName1}
                    onChange={(e) => setUserName1(e.target.value)}
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="nameEn">Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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

export default User;
