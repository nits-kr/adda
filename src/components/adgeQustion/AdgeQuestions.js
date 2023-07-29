import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Header from "../Header";
import Navbar from "../Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faComment } from "@fortawesome/free-solid-svg-icons";
import { useGetAllPostGovernerQuery } from "../../services/Post";
function AdgeQuestions() {
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
    data.append("doc1", formData.file1);
    data.append("status1", yesbuttonValue1);
    data.append("comment1", formData.comment1);
    data.append("doc2", formData.file2);
    data.append("status2", yesbuttonValue2);
    data.append("comment2", formData.comment2);
    data.append("doc3", formData.file3);
    data.append("status3", yesbuttonValue3);
    data.append("comment3", formData.comment3);
    data.append("doc4", formData.file4);
    data.append("status4", yesbuttonValue4);
    data.append("comment4", formData.comment4);
    data.append("doc5", formData.file5);
    data.append("status5", yesbuttonValue5);
    data.append("comment5", formData.comment5);
    data.append("doc6", formData.file6);
    data.append("status6", yesbuttonValue6);
    data.append("comment6", formData.comment6);
    data.append("doc7", formData.file7);
    data.append("status7", yesbuttonValue7);
    data.append("comment7", formData.comment7);
    data.append("user_Id", "64a51eeb8f813f2f13a92ba1");
    axios
      .post("http://localhost:5000/admin/add-doc", data)
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
      {/* ======= Header ======= */}
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


      
      <main id="main" className="main pb-5">
        <div className="container-fluid">
          <div className="card  StaticCard">
            <div className="card-body">
              {/* <ProgressBar /> */}
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

export default AdgeQuestions;
