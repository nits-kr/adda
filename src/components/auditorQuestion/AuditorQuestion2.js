import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faComment,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import Header from "../Header";
import Navbar from "../Navbar";
import Swal from "sweetalert2";

import { useAddApproveMutation } from "../../services/Post";
import { useQuestionListMutation } from "../../services/Post";
import { useUpdateQuestionListMutation } from "../../services/Post";
function AuditorQuestions2() {
  const { id } = useParams();
  console.log("id 5667", id);
  const [page, setPage] = useState(1);
  const [itemId, setItemId] = useState("");
  const [acceptbutton1, setAcceptbutton1] = useState();

  const [selectedImage, setSelectedImage] = useState(null);

  const [approveIn, response] = useAddApproveMutation();
  const [updateQuestion, resInfo] = useUpdateQuestionListMutation();
  const [questionList, re] = useQuestionListMutation();
  const [generatedId, setGeneratedId] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const [agentDetails, setAgentDetails] = useState("");
  const [acceptedMessage, setAcceptedMessage] = useState("");
  console.log("question list", re?.data?.results?.listData);
  console.log("question list response", re);
  const navigate = useNavigate();
  const [yesbutton1, setYesbutton1] = useState();
  const [colorChange1, setColorChange1] = useState(false);
  const [colorChange2, setColorChange2] = useState(false);
  const [yesbutton2, setYesbutton2] = useState();
  const [colorChange3, setColorChange3] = useState(false);
  const [colorChange4, setColorChange4] = useState(false);
  const [yesbutton3, setYesbutton3] = useState();
  const [colorChange5, setColorChange5] = useState(false);
  const [colorChange6, setColorChange6] = useState(false);
  const [yesbutton4, setYesbutton4] = useState();
  const [colorChange7, setColorChange7] = useState(false);
  const [colorChange8, setColorChange8] = useState(false);
  const [yesbutton5, setYesbutton5] = useState();
  const [colorChange9, setColorChange9] = useState(false);
  const [colorChange10, setColorChange10] = useState(false);
  const [yesbutton6, setYesbutton6] = useState();
  const [colorChange11, setColorChange11] = useState(false);
  const [colorChange12, setColorChange12] = useState(false);
  const [yesbutton7, setYesbutton7] = useState();
  const [colorChange13, setColorChange13] = useState(false);
  const [colorChange14, setColorChange14] = useState(false);
  const [yesbuttonValue1, setYesbuttonValue1] = useState("");
  const [yesbuttonValue2, setYesbuttonValue2] = useState("");
  const [yesbuttonValue3, setYesbuttonValue3] = useState("");
  const [yesbuttonValue4, setYesbuttonValue4] = useState("");
  const [yesbuttonValue5, setYesbuttonValue5] = useState("");
  const [yesbuttonValue6, setYesbuttonValue6] = useState("");
  const [yesbuttonValue7, setYesbuttonValue7] = useState("");
  const [qyesbutton1, qsetYesbutton1] = useState();
  const [qcolorChange1, qsetColorChange1] = useState(false);
  const [qcolorChange2, qsetColorChange2] = useState(false);
  const [qyesbutton2, qsetYesbutton2] = useState();
  const [qcolorChange3, qsetColorChange3] = useState(false);
  const [qcolorChange4, qsetColorChange4] = useState(false);
  const [qyesbutton3, qsetYesbutton3] = useState();
  const [qcolorChange5, qsetColorChange5] = useState(false);
  const [qcolorChange6, qsetColorChange6] = useState(false);
  const [qyesbutton4, qsetYesbutton4] = useState();
  const [qcolorChange7, qsetColorChange7] = useState(false);
  const [qcolorChange8, qsetColorChange8] = useState(false);
  const [qyesbutton5, qsetYesbutton5] = useState();
  const [qcolorChange9, qsetColorChange9] = useState(false);
  const [qcolorChange10, qsetColorChange10] = useState(false);
  const [qyesbutton6, qsetYesbutton6] = useState();
  const [qcolorChange11, qsetColorChange11] = useState(false);
  const [qcolorChange12, qsetColorChange12] = useState(false);
  const [qyesbutton7, qsetYesbutton7] = useState();
  const [qcolorChange13, qsetColorChange13] = useState(false);
  const [qcolorChange14, qsetColorChange14] = useState(false);
  const [qyesbuttonValue1, qsetYesbuttonValue1] = useState("");
  const [qyesbuttonValue2, qsetYesbuttonValue2] = useState("");
  const [qyesbuttonValue3, qsetYesbuttonValue3] = useState("");
  const [qyesbuttonValue4, qsetYesbuttonValue4] = useState("");
  const [qyesbuttonValue5, qsetYesbuttonValue5] = useState("");
  const [qyesbuttonValue6, qsetYesbuttonValue6] = useState("");
  const [qyesbuttonValue7, qsetYesbuttonValue7] = useState("");
  const [formData, setFormData] = useState([]); 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    console.log("file", file);
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage({ ...selectedImage, [key]: e.target.files[0] });
    };
    reader.readAsDataURL(file);
    setFormData({ ...formData, [key]: e.target.files[0] });
  };
  console.log("file upload", formData);
  // const blog = useGetAllPostGovernerQuery();
  // const [blogList, setBlogList] = useState();
  // console.log("blog list", blogList);
  console.log("form data new", formData);
  const handlecolorchange2 = () => {
    setColorChange1(false);
    setColorChange2(true);
  };
  const handlecolorchange1 = () => {
    setColorChange1(true);
    setColorChange2(false);
  };
  const handlecolorchange4 = () => {
    setColorChange3(false);
    setColorChange4(true);
  };
  const handlecolorchange3 = () => {
    setColorChange3(true);
    setColorChange4(false);
  };
  const handlecolorchange6 = () => {
    setColorChange5(false);
    setColorChange6(true);
  };
  const handlecolorchange5 = () => {
    setColorChange5(true);
    setColorChange6(false);
  };
  const handlecolorchange8 = () => {
    setColorChange7(false);
    setColorChange8(true);
  };
  const handlecolorchange7 = () => {
    setColorChange7(true);
    setColorChange8(false);
  };
  const handlecolorchange10 = () => {
    setColorChange9(false);
    setColorChange10(true);
  };
  const handlecolorchange9 = () => {
    setColorChange9(true);
    setColorChange10(false);
  };
  const handlecolorchange12 = () => {
    setColorChange11(false);
    setColorChange12(true);
  };
  const handlecolorchange11 = () => {
    setColorChange11(true);
    setColorChange12(false);
  };
  const handlecolorchange14 = () => {
    setColorChange13(false);
    setColorChange14(true);
  };
  const handlecolorchange13 = () => {
    setColorChange13(true);
    setColorChange14(false);
  };
  const qhandlecolorchange2 = () => {
    qsetColorChange1(false);
    qsetColorChange2(true);
  };
  const qhandlecolorchange1 = () => {
    qsetColorChange1(true);
    qsetColorChange2(false);
  };
  const qhandlecolorchange4 = () => {
    qsetColorChange3(false);
    qsetColorChange4(true);
  };
  const qhandlecolorchange3 = () => {
    qsetColorChange3(true);
    qsetColorChange4(false);
  };
  const qhandlecolorchange6 = () => {
    qsetColorChange5(false);
    qsetColorChange6(true);
  };
  const qhandlecolorchange5 = () => {
    qsetColorChange5(true);
    qsetColorChange6(false);
  };
  const qhandlecolorchange8 = () => {
    qsetColorChange7(false);
    qsetColorChange8(true);
  };
  const qhandlecolorchange7 = () => {
    qsetColorChange7(true);
    qsetColorChange8(false);
  };
  const qhandlecolorchange10 = () => {
    qsetColorChange9(false);
    qsetColorChange10(true);
  };
  const qhandlecolorchange9 = () => {
    qsetColorChange9(true);
    qsetColorChange10(false);
  };
  const qhandlecolorchange12 = () => {
    qsetColorChange11(false);
    qsetColorChange12(true);
  };
  const qhandlecolorchange11 = () => {
    qsetColorChange11(true);
    qsetColorChange12(false);
  };
  const qhandlecolorchange14 = () => {
    qsetColorChange13(false);
    qsetColorChange14(true);
  };
  const qhandlecolorchange13 = () => {
    qsetColorChange13(true);
    qsetColorChange14(false);
  };
  useEffect(() => {
    handleYesbutton1();
  }, [yesbutton1]);
  const handleYesbutton1 = () => {
    if (yesbutton1 === true) {
      setYesbuttonValue1("yes");
    } else if (yesbutton1 === false) {
      setYesbuttonValue1("no");
    }
  };
  useEffect(() => {
    handleYesbutton2();
  }, [yesbutton2]);
  const handleYesbutton2 = () => {
    if (yesbutton2 === true) {
      setYesbuttonValue2("yes");
    } else if (yesbutton2 === false) {
      setYesbuttonValue2("no");
    }
  };
  useEffect(() => {
    handleYesbutton3();
  }, [yesbutton3]);
  const handleYesbutton3 = () => {
    if (yesbutton3 === true) {
      setYesbuttonValue3("yes");
    } else if (yesbutton3 === false) {
      setYesbuttonValue3("no");
    }
  };
  useEffect(() => {
    handleYesbutton4();
  }, [yesbutton4]);
  const handleYesbutton4 = () => {
    if (yesbutton4 === true) {
      setYesbuttonValue4("yes");
    } else if (yesbutton4 === false) {
      setYesbuttonValue4("no");
    }
  };
  useEffect(() => {
    handleYesbutton5();
  }, [yesbutton5]);
  const handleYesbutton5 = () => {
    if (yesbutton5 === true) {
      setYesbuttonValue5("yes");
    } else if (yesbutton5 === false) {
      setYesbuttonValue5("no");
    }
  };
  useEffect(() => {
    handleYesbutton6();
  }, [yesbutton6]);
  const handleYesbutton6 = () => {
    if (yesbutton6 === true) {
      setYesbuttonValue6("yes");
    } else if (yesbutton6 === false) {
      setYesbuttonValue6("no");
    }
  };
  useEffect(() => {
    handleYesbutton7();
  }, [yesbutton7]);
  const handleYesbutton7 = () => {
    if (yesbutton7 === true) {
      setYesbuttonValue7("yes");
    } else if (yesbutton7 === false) {
      setYesbuttonValue7("no");
    }
  };

  useEffect(() => {
    qhandleYesbutton1();
  }, [qyesbutton1]);
  const qhandleYesbutton1 = () => {
    if (qyesbutton1 === true) {
      qsetYesbuttonValue1("yes");
    } else if (yesbutton1 === false) {
      qsetYesbuttonValue1("no");
    }
  };
  useEffect(() => {
    qhandleYesbutton2();
  }, [qyesbutton2]);
  const qhandleYesbutton2 = () => {
    if (qyesbutton2 === true) {
      qsetYesbuttonValue2("yes");
    } else if (qyesbutton2 === false) {
      qsetYesbuttonValue2("no");
    }
  };
  useEffect(() => {
    qhandleYesbutton3();
  }, [qyesbutton3]);
  const qhandleYesbutton3 = () => {
    if (qyesbutton3 === true) {
      qsetYesbuttonValue3("yes");
    } else if (qyesbutton3 === false) {
      qsetYesbuttonValue3("no");
    }
  };
  useEffect(() => {
    qhandleYesbutton4();
  }, [qyesbutton4]);
  const qhandleYesbutton4 = () => {
    if (qyesbutton4 === true) {
      qsetYesbuttonValue4("yes");
    } else if (qyesbutton4 === false) {
      qsetYesbuttonValue4("no");
    }
  };
  useEffect(() => {
    qhandleYesbutton5();
  }, [qyesbutton5]);
  const qhandleYesbutton5 = () => {
    if (qyesbutton5 === true) {
      qsetYesbuttonValue5("yes");
    } else if (qyesbutton5 === false) {
      qsetYesbuttonValue5("no");
    }
  };
  useEffect(() => {
    qhandleYesbutton6();
  }, [qyesbutton6]);
  const qhandleYesbutton6 = () => {
    if (qyesbutton6 === true) {
      qsetYesbuttonValue6("yes");
    } else if (qyesbutton6 === false) {
      qsetYesbuttonValue6("no");
    }
  };
  useEffect(() => {
    qhandleYesbutton7();
  }, [qyesbutton7]);
  const qhandleYesbutton7 = () => {
    if (qyesbutton7 === true) {
      qsetYesbuttonValue7("yes");
    } else if (qyesbutton7 === false) {
      qsetYesbuttonValue7("no");
    }
  };

  const handleSaveChanges2 = () => {
    const editAddress = {
      id: id,
    };
    approveIn(editAddress);

    Swal.fire({
      icon: "success",
      title: "Approved",
      text: "Your have been Approved In.",
      timer: 3000,
      timerProgressBar: true,
    });
    // window.location.href = "/adge/home";
    navigate("/adge/home");
  };
  console.log(generatedId);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };
  useEffect(() => {
    setTimeout(() => {
      const storedId = localStorage.getItem("generatedId");
      console.log("stored id", storedId);
      if (storedId) {
        setGeneratedId(storedId);
      }
    }, 500);
  }, []);
  useEffect(() => {
    userDetails();
  }, []);
  const userDetails = async () => {
    const { data } = await axios.post(
      `http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000/adda/adge-questionList/${id}`
    );
    setAgentDetails(data?.results?.listData);
    console.log(" auditor question Question Details", data?.results?.listData);
  };

  const handleSetData = async (data) => {
    try {
      await localStorage.setItem("governer", data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnSave = () => {
    const data = new FormData();
    data.append("doc1", formData?.file1);
    data.append("status1", yesbuttonValue1 ? yesbuttonValue1 : agentDetails?.status1);
    data.append("comment1", formData?.comment1);
    data.append("doc2", formData?.file2);
    data.append("status2", yesbuttonValue2 ? yesbuttonValue2 : agentDetails?.status2);
    data.append("comment2", formData?.comment2);
    data.append("doc3", formData?.file3);
    data.append("status3", yesbuttonValue3 ? yesbuttonValue3 : agentDetails?.status3);
    data.append("comment3", formData?.comment3);
    data.append("doc4", formData?.file4);
    data.append("status4", yesbuttonValue4 ? yesbuttonValue4 : agentDetails?.status4);
    data.append("comment4", formData?.comment4);
    data.append("doc5", formData?.file5);
    data.append("status5", yesbuttonValue5 ? yesbuttonValue5 : agentDetails?.status5);
    data.append("comment5", formData?.comment5);
    data.append("doc6", formData?.file6);
    data.append("status6", yesbuttonValue6 ? yesbuttonValue6 : agentDetails?.status6);
    data.append("comment6", formData?.comment6);
    data.append("doc7", formData?.file7);
    data.append("status7", yesbuttonValue7 ? yesbuttonValue7 : agentDetails?.status7);
    data.append("comment7", formData?.comment7);
    data.append("qdoc1", formData?.qfile1);
    data.append("qstatus1", qyesbuttonValue1 ? qyesbuttonValue1 : agentDetails?.qstatus1);
    data.append("qcomment1", formData?.qcomment1);
    data.append("qdoc2", formData?.qfile2);
    data.append("qstatus2", qyesbuttonValue2 ? qyesbuttonValue2 : agentDetails?.qstatus2);
    data.append("qcomment2", formData?.qcomment2);
    data.append("qdoc3", formData?.qfile3);
    data.append("qstatus3", qyesbuttonValue3 ? qyesbuttonValue3 : agentDetails?.qstatus3);
    data.append("qcomment3", formData?.qcomment3);
    data.append("qdoc4", formData?.qfile4);
    data.append("qstatus4", qyesbuttonValue4 ? qyesbuttonValue4 : agentDetails?.qstatus4);
    data.append("qcomment4", formData?.qcomment4);
    data.append("qdoc5", formData?.qfile5);
    data.append("qstatus5", qyesbuttonValue5 ? qyesbuttonValue5 : agentDetails?.qstatus5);
    data.append("qcomment5", formData?.qcomment5);
    data.append("qdoc6", formData?.qfile6);
    data.append("qstatus6", qyesbuttonValue6 ? qyesbuttonValue6 : agentDetails?.qstatus6);
    data.append("qcomment6", formData?.qcomment6);
    data.append("qdoc7", formData?.qfile7);
    data.append("qstatus7", qyesbuttonValue7 ? qyesbuttonValue7 : agentDetails?.qstatus7);
    data.append("qcomment7", formData?.qcomment7);
    // data.append("adge_Id", generatedId);
    axios
      .post(
        `http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000/adda/submit-data/${generatedId}`,
        data
      )
      .then(async (response) => {
        setFormData(response?.data?.results?.data);
        await handleSetData(response?.data?.results?.data);
        console.log(response?.data?.results?.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const handleOnSave1 = () => {
    const data = new FormData();
    data.append("doc1", formData?.file1 ? formData?.file1 : agentDetails?.doc1);
    data.append("status1", yesbuttonValue1 ? yesbuttonValue1 : agentDetails?.status1);
    data.append("comment1", formData?.comment1);
    data.append("doc2", formData?.file2 ? formData?.file2 : agentDetails?.doc2);
    data.append("status2", yesbuttonValue2 ? yesbuttonValue2 : agentDetails?.status2);
    data.append("comment2", formData?.comment2);
    data.append("doc3", formData?.file3 ? formData?.file3 : agentDetails?.doc3);
    data.append("status3", yesbuttonValue3 ? yesbuttonValue3 : agentDetails?.status3);
    data.append("comment3", formData?.comment3);
    data.append("doc4", formData?.file4  ? formData?.file4 : agentDetails?.doc4);
    data.append("status4", yesbuttonValue4 ? yesbuttonValue4 : agentDetails?.status4);
    data.append("comment4", formData?.comment4);
    data.append("doc5", formData?.file5 ? formData?.file5 : agentDetails?.doc5);
    data.append("status5", yesbuttonValue5 ? yesbuttonValue5 : agentDetails?.status5);
    data.append("comment5", formData?.comment5);
    data.append("doc6", formData?.file6 ? formData?.file6 : agentDetails?.doc6);
    data.append("status6", yesbuttonValue6 ? yesbuttonValue6 : agentDetails?.status6);
    data.append("comment6", formData?.comment6);
    data.append("doc7", formData?.file7  ? formData?.file7 : agentDetails?.doc7);
    data.append("status7", yesbuttonValue7 ? yesbuttonValue7 : agentDetails?.status7);
    data.append("comment7", formData?.comment7);
    data.append("qdoc1", formData?.qfile1 ? formData?.qfile1 : agentDetails?.qdoc1);
    data.append("qstatus1", qyesbuttonValue1 ? qyesbuttonValue1 : agentDetails?.qstatus1);
    data.append("qcomment1", formData?.qcomment1);
    data.append("qdoc2", formData?.qfile2 ? formData?.qfile2 : agentDetails?.qdoc2);
    data.append("qstatus2", qyesbuttonValue2 ? qyesbuttonValue2 : agentDetails?.qstatus2);
    data.append("qcomment2", formData?.qcomment2);
    data.append("qdoc3", formData?.qfile3 ? formData?.qfile3 : agentDetails?.qdoc3);
    data.append("qstatus3", qyesbuttonValue3 ? qyesbuttonValue3 : agentDetails?.qstatus3);
    data.append("qcomment3", formData?.qcomment3);
    data.append("qdoc4", formData?.qfile4 ? formData?.qfile4 : agentDetails?.qdoc4);
    data.append("qstatus4", qyesbuttonValue4 ? qyesbuttonValue4 : agentDetails?.qstatus4);
    data.append("qcomment4", formData?.qcomment4);
    data.append("qdoc5", formData?.qfile5 ? formData?.qfile5 : agentDetails?.qdoc5);
    data.append("qstatus5", qyesbuttonValue5 ? qyesbuttonValue5 : agentDetails?.qstatus5);
    data.append("qcomment5", formData?.qcomment5);
    data.append("qdoc6", formData?.qfile6 ? formData?.qfile6 : agentDetails?.qdoc6);
    data.append("qstatus6", qyesbuttonValue6 ? qyesbuttonValue6 : agentDetails?.qstatus6);
    data.append("qcomment6", formData?.qcomment6);
    data.append("qdoc7", formData?.qfile7  ? formData?.qfile7 : agentDetails?.qdoc7);
    data.append("qstatus7", qyesbuttonValue7 ? qyesbuttonValue7 : agentDetails?.qstatus7);
    data.append("qcomment7", formData?.qcomment7);
    axios
      .post(
        `http://ec2-65-2-108-172.ap-south-1.compute.amazonaws.com:5000/adda/submit-data/${generatedId}`,
        data
      )
      .then(async (response) => {
        setFormData(response?.data?.results?.data);
        await handleSetData(response?.data?.results?.data);
        console.log(response?.data?.results?.data);
        Swal.fire({
          title: "Question Saved!",
          text: "Your question has been created successfully.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            // window.location.reload(); // refresh the page after success message is closed
            navigate("/adge/home");
          }
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="modal fade" id="ExtralargeModal">
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
                    <div
                      data-id="step1"
                      className={
                        page >= 1
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Governance</div>
                    </div>
                    <div
                      data-id="step2"
                      className={
                        page >= 2
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Management </div>
                    </div>
                    <div
                      data-id="step3"
                      className={
                        page >= 3
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Catalogue</div>
                    </div>
                    <div
                      data-id="step4"
                      className={
                        page >= 4
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Modelling and Design</div>
                    </div>
                    <div
                      data-id="step5"
                      className={
                        page >= 5
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Architecture</div>
                    </div>
                    <div
                      data-id="step6"
                      className={
                        page >= 6
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Security and Privacy</div>
                    </div>
                    <div
                      data-id="step7"
                      className={
                        page >= 7
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Storage</div>
                    </div>
                    <div
                      data-id="step8"
                      className={
                        page >= 8
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">
                        Data Integration and Interoperability
                      </div>
                    </div>
                    <div
                      data-id="step9"
                      className={
                        page >= 9
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Open Data</div>
                    </div>
                    <div
                      data-id="step10"
                      className={
                        page >= 10
                          ? "step-slider-item active"
                          : "step-slider-item"
                      }
                    >
                      <div className="Title">Data Quality</div>
                    </div>
                  </div>
                </div>
                <div className="step-content">
                  {(() => {
                    switch (page) {
                      case 1:
                        return (
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
                                    structure to support the Data Management
                                    Programme.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The organisation shall be positioned in
                                        the Entity with sufficient authority
                                        such that it is empowered to do its job
                                        effectively
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange1 ||
                                                    agentDetails?.status1 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton1(true);
                                                    handlecolorchange1();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange2 ||
                                                    agentDetails?.status1 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton1(false);
                                                    handlecolorchange2();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {/* {array?.length} */}
                                          {
                                          (agentDetails?.doc1) === "" ? 0 :
                                          [agentDetails?.doc1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.comment1) === "" ? 0 :
                                          [agentDetails?.comment1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange1
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton1(true);
                                            handlecolorchange1();
                                            // handleSaveChanges3();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange2
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton1(false);
                                            handlecolorchange2();
                                            // handleSaveChanges3();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample1"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value1"
                                          type="file"
                                           onChange={(e) =>
                                            handleFileChange(e, "file1")
                                            // alert("file")
                                          }
                                        />
                                       
                                        <span
                                          id="fileName1"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc1 || formData?.file1?.length ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc1} </p>
                                              <Link
                                                to={agentDetails.doc1}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            // If doc1 does not exist or is null
                                            // <div>
                                            //   <span>Not Uploaded...</span>
                                            //   Upload your files here or
                                            //   <button
                                            //     className="btn bg-color-dblue btn-primary"
                                            //     style={{ marginLeft: "5px" }}
                                            //   >
                                            //     Browse
                                            //   </button>
                                            // </div>
                                            // <form action="">
                                      <div>
                                        {/* <input
                                          name="file1"
                                          type="file"
                                          id="file1"
                                          
                                          // onChange={(e) =>
                                          //   handleFileChange(e, "file1")
                                          //   // alert("file")
                                          // }
                                          
                                        /> */}
                                        <div>
                                          {selectedImage?.file1 && (
                                            selectedImage?.file1 ? "File Uploaded Successfully!" : " Upload your files here.."
                                          )}
                                         
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button>
                                        </div>
                                        <span
                                          id="fileName"
                                          className="text-primary "
                                        ></span>
                                      </div>
                                     // </form>
                                          )}
                                        </div>
                                    <div className="SmallHead">Comments</div>
                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                                {agentDetails?.comment1}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment1}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#">
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#">
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#">
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#">
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#">
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#">
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
                                              </li> */}
                                            </ul>
                                          </div>
                                        </div>
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
                                          id="entry_value2"
                                          style={{
                                            width: "10rem",
                                            backgroundColor: "black",
                                          }}
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                          onChange={(e) =>
                                            handleFileChange(e, "file2")
                                            // alert("file")
                                          }
                                        />
                                        <span
                                          id="fileName2"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div>
                                      {" "}
                                      {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                      {agentDetails?.doc2 || formData?.file2 ? (
                                        <div className="d-flex justify-content-center">
                                          <p> {agentDetails?.doc2} </p>
                                          <Link
                                            to={agentDetails?.doc2}
                                            className="mx-3 "
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                      ) : (
                                        <div>
                                          {selectedImage?.file2 && (
                                            selectedImage?.file2 ? "File Uploaded Successfully!" : " Upload your files here.."
                                          )}
                                         
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                                {agentDetails?.comment2}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.comment2}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                  </div> */}
                                                  {/* <ul className="child_replay">
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall convene the Data Governance
                                    Board to manage delegated authority and
                                    responsibility within the Entity. The Board
                                    will be the final arbiter within the Entity
                                    for all matters relating to data management.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        This Board should have representatives
                                        from each area affected by data
                                        management initiatives, with the Data
                                        Manager responsible for the execution of
                                        the Boards actions through the programme
                                        management function of the Entit
                                      </li>
                                      <li>
                                        The Data Governance Board shall meet
                                        regularly (weekly, initially) to provide
                                        independent oversight and support for
                                        the Data Management initiatives being
                                        undertaken by the Entity
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange3 ||
                                                    agentDetails?.status2 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton2(true);
                                                    handlecolorchange3();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange4 ||
                                                    agentDetails?.status2 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton2(false);
                                                    handlecolorchange4();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.doc2) === "" ? 0 :
                                          [agentDetails?.doc2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.comment2) === "" ? 0 :
                                          [agentDetails?.comment2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange3
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton2(true);
                                            handlecolorchange3();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange4
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton2(false);
                                            handlecolorchange4();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample2"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value2"
                                          style={{
                                            width: "10rem",
                                            backgroundColor: "black",
                                          }}
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                          onChange={(e) =>
                                            handleFileChange(e, "file2")
                                            // alert("file")
                                          }
                                        />
                                        <span
                                          id="fileName2"
                                          className="text-primary "
                                        >
                                          {" "}
                                        </span>{" "}
                                      </div>
                                    </form>
                                    <div>
                                      {" "}
                                      {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                      {agentDetails?.doc2 || formData?.file2 ? (
                                        <div className="d-flex justify-content-center">
                                          <p> {agentDetails?.doc2} </p>
                                          <Link
                                            to={agentDetails?.doc2}
                                            className="mx-3 "
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            View Document
                                          </Link>
                                        </div>
                                      ) : (
                                        <div>
                                          {selectedImage?.file2 && (
                                            selectedImage?.file2 ? "File Uploaded Successfully!" : " Upload your files here.."
                                          )}
                                         
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button>
                                        </div>
                                      )}
                                    </div>
                                    <div className="SmallHead">Comments</div>

                                    <div className="container">
                                      <div className="col-md-12" id="fbcomment">
                                        <div className="header_comment">
                                          <div className="">
                                            <div className="float-start">
                                              {" "}
                                              <span className="count_comment">
                                                {agentDetails?.comment2}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.comment2}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                  </div> */}
                                                  {/* <ul className="child_replay">
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall appoint a Data Manager. The
                                    Data Manager shall have delegated authority
                                    from the Data Governance Board.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Manager shall:
                                      <li>
                                        Oversee the implementation of change
                                      </li>
                                      <li>
                                        Ensure compliance with governance,
                                        policy and standards
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange5 ||
                                                    agentDetails?.status3 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton3(true);
                                                    handlecolorchange5();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange6 ||
                                                    agentDetails?.status3 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton3(false);
                                                    handlecolorchange6();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.doc3) === "" ? 0 :
                                          [agentDetails?.doc3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.comment3) === "" ? 0 :
                                          [agentDetails?.comment3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange5
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton3(true);
                                            handlecolorchange5();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange6
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton3(false);
                                            handlecolorchange6();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample3"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value3"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) =>
                                            handleFileChange(e, "file3")
                                          }
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc3 || formData?.file3 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc3} </p>
                                              <Link
                                                to={agentDetails.doc3}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                          {selectedImage?.file3 && (
                                            selectedImage?.file3 ? "File Uploaded Successfully!" : " Upload your files here.."
                                          )}
                                         
                                          <button
                                            className="btn bg-color-dblue btn-primary"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            Browse
                                          </button>
                                        </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName3"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.comment3}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment3}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Architects shall:
                                      <li>
                                        TWork with the Data Manager and the Data
                                        Governance Board to ensure the
                                        implementation of the Data Management
                                        Standards in all designs across the
                                        Entit
                                      </li>
                                      <li>
                                        Establish a clearly defined target state
                                        for all data sources
                                      </li>
                                      <li>
                                        Establish a clearly defined roadmap to
                                        achieve the target state for all data
                                        sources
                                      </li>
                                      <li>
                                        Be responsible for developing and
                                        maintaining a formal description of the
                                        data and data structures within the
                                        Entity, including
                                        <ol>
                                          <li>
                                            Data designs and design artefacts
                                          </li>
                                          <li>
                                            Data designs and design artefact
                                          </li>
                                          <li>
                                            Data flows throughout the Entity
                                          </li>
                                        </ol>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange7 ||
                                                    agentDetails?.status4 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton4(true);
                                                    handlecolorchange7();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange8 ||
                                                    agentDetails?.status4 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton4(false);
                                                    handlecolorchange8();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.doc4) === "" ? 0 :
                                          [agentDetails?.doc4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.comment4) === "" ? 0 :
                                          [agentDetails?.comment4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange7
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton4(true);
                                            handlecolorchange7();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange8
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton4(false);
                                            handlecolorchange8();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample4"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value4"
                                          //   ref="fileInput"
                                          type="file"
                                          //   onchange="getFileName()"
                                          onChange={(e) =>
                                            handleFileChange(e, "file4")
                                            // alert("file")
                                          }
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc4 || formData?.file4 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc4} </p>
                                              <Link
                                                to={agentDetails.doc4}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.file4 && (
                                              selectedImage?.file4 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName4"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.comment4}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment4}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall identify and appoint Data
                                    Stewards to support the Data Manager in both
                                    the business and technical areas of the
                                    organisation{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange9 ||
                                                    agentDetails?.status5 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton5(true);
                                                    handlecolorchange9();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange10 ||
                                                    agentDetails?.status6 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton5(false);
                                                    handlecolorchange10();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.doc5) === "" ? 0 :
                                          [agentDetails?.doc5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.comment5) === "" ? 0 :
                                          [agentDetails?.comment5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange9
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton5(true);
                                            handlecolorchange9();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange10
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton5(false);
                                            handlecolorchange10();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample5"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value5"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) =>
                                            handleFileChange(e, "file5")
                                            // alert("file")
                                          }
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc5 || formData?.file5 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc5} </p>
                                              <Link
                                                to={agentDetails.doc5}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.file5 && (
                                              selectedImage?.file5 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName5"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.comment5}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment5}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall identify and appoint Data
                                    Owners (who are responsible for a particular
                                    dataset) to support the Data Stewards. Data
                                    Owners will be drawn from both the business
                                    and technical areas of the organisation.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Owners will take responsibility
                                        for a particular dataset throughout the
                                        lifecycle across systems
                                      </li>
                                      <li>
                                        The Data Owners will ensure the quality
                                        standards for their dataset are met
                                      </li>
                                      <li>
                                        The Data Owners will liaise between the
                                        business and technical stakeholders to
                                        ensure that their dataset is maintained
                                        to the highest standards possible
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange11 ||
                                                    agentDetails?.status6 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton6(true);
                                                    handlecolorchange11();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange12 ||
                                                    agentDetails?.status6 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton6(false);
                                                    handlecolorchange12();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.doc6) === "" ? 0 :
                                          [agentDetails?.doc6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.comment6) === "" ? 0 :
                                          [agentDetails?.comment6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange11
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton6(true);
                                            handlecolorchange11();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange12
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton6(false);
                                            handlecolorchange12();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample6"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value6"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) =>
                                            handleFileChange(e, "file6")
                                            // alert("file")
                                          }
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc6 || formData?.file6 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc6} </p>
                                              <Link
                                                to={agentDetails.doc6}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.file6 && (
                                              selectedImage?.file6 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName6"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.comment6}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment6}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall regularly undertake
                                    monitoring and compliance checking to ensure
                                    that information systems and data related
                                    processes are implemented in accordance with
                                    established policy, standards and best
                                    practices
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      Such reviews should include coverage of:
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange13 ||
                                                    agentDetails?.status7 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton7(true);
                                                    handlecolorchange13();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    colorChange14 ||
                                                    agentDetails?.status7 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    setYesbutton7(false);
                                                    handlecolorchange14();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.doc7) === "" ? 0 :
                                          [agentDetails?.doc7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.comment7) === "" ? 0 :
                                          [agentDetails?.comment7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            colorChange13
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton7(true);
                                            handlecolorchange13();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            colorChange14
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            setAcceptbutton7(false);
                                            handlecolorchange14();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample7"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value7"
                                          //   ref="fileInput"
                                          type="file"
                                        
                                         onChange={(e) =>
                                          handleFileChange(e, "file7")
                                          // alert("file")
                                        }
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc7 || formData?.file7 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc7} </p>
                                              <Link
                                                to={agentDetails.doc7}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.file7 && (
                                              selectedImage?.file7 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName7"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.comment7}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment7}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                        );
                      case 2:
                        return (
                          <div id="step2" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Management</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 3:
                        return (
                          <div id="step3" className="step-content-body ">
                            <div className="pagetitle">
                              <h2>Data Categlogue</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 4:
                        return (
                          <div id="step4" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Modeling and Design</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 5:
                        return (
                          <div id="step5" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Architecture</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 6:
                        return (
                          <div id="step6" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Security & Privacy</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 7:
                        return (
                          <div id="step7" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Storage</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 8:
                        return (
                          <div id="step8" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Integration and Interoperability</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 9:
                        return (
                          <div id="step9" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Open Data</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                      case 10:
                        return (
                          <div id="step10" className="step-content-body">
                            <div className="pagetitle">
                              <h2>Data Quality</h2>
                            </div>
                            <div className="QuestionsStrip">
                              <div className="QuestionDiv">
                                <div className="heading">
                                  <div className="NumberDiv">DG.1.1</div>
                                  <div className="float-start col-11">
                                    The Entity shall provide definitions of
                                    quality data. These definitions shall be
                                    used to determine whether data is of
                                    sufficient quality for the purposes of the
                                    Entity's business.
                                    <br />
                                    Data quality definitions shall be stored in
                                    the Entity's business glossary (business
                                    audience) and data dictionary (technical
                                    audience).{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      Definitions shall exist for:
                                      <li>
                                        Master profiles – the profiles used
                                        across the Entity's business, in key
                                        line-of-business systems, or across
                                        multiple departments and data silos (see
                                        Data Modelling domain) eg ‘Citizen’
                                        profile in multiple systems
                                      </li>
                                      <li>
                                        TSystem profiles – profiles within
                                        single systems, silos or departments eg
                                        Project (in a Project management system)
                                      </li>
                                      <li>
                                        Reference data – data that is
                                        effectively static within systems,
                                        subject to periodic refresh
                                      </li>
                                      <li>
                                        Audit data – data stored log files,
                                        history tables and monitoring systems
                                      </li>
                                      <li>
                                        Audit data – data stored log files,
                                        history tables and monitoring systems
                                      </li>
                                      <li>
                                        Spatial data – geographical, address,
                                        geolocation or other locationbased data
                                      </li>
                                      <li>
                                        Metadata – metadata that is gathered
                                        about structured datasets, such as
                                        ownership, definitions, access rights
                                        (see Metadata domain
                                      </li>
                                      <li>
                                        Metadata annotating unstructured or
                                        semi-structured data. This may include
                                        metadata attached to images, audio
                                        recordings, video recordings (such as
                                        duration, dimensions, location,
                                        encoding), etc. Metadata attached to
                                        semi-structured data may include, for
                                        example, author, workflow steps and
                                        access permissions of documents, etc
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange1 ||
                                                    agentDetails?.qstatus1 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton1(true);
                                                    qhandlecolorchange1();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange2 ||
                                                    agentDetails?.qstatus1 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton1(false);
                                                    qhandlecolorchange2();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.qcomment1) === "" ? 0 :
                                          [agentDetails?.qcomment1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample1"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample1"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.qdoc1) === "" ? 0 :
                                          [agentDetails?.qdoc1].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange1
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton1(true);
                                            qhandlecolorchange1();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange2
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton1(false);
                                            qhandlecolorchange2();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample1"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value1"
                                          type="file"
                                          onChange={(e) => handleFileChange(e, "qfile1")}
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.qdoc1 || formData?.qfile1 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.qdoc1} </p>
                                              <Link
                                                to={agentDetails.qdoc1}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.qfile1 && (
                                              selectedImage?.qfile1 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName1"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.qcomment1}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment1}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#">
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#">
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#">
                                                            Like
                                                          </Link>{" "}
                                                          <span aria-hidden="true">
                                                            {" "}
                                                            ·{" "}
                                                          </span>{" "}
                                                          <Link
                                                            className="replay"
                                                            to="#">
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#">
                                                      Like
                                                    </Link>{" "}
                                                    <span aria-hidden="true">
                                                      {" "}
                                                      ·{" "}
                                                    </span>{" "}
                                                    <Link
                                                      className="replay"
                                                      to="#">
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
                                              </li> */}
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
                                    Data quality definitions shall be mapped to
                                    business processes. This shall provide the
                                    capability to assess the impact of both high
                                    and low quality data on business processes.
                                    <br />
                                    For example, a business process may include
                                    contacting a citizen. Where there is poor
                                    data quality in telephone number or address
                                    capture (such as the omission of a country,
                                    area or postal code), there may be a severe
                                    impact upon the business process. Accurate
                                    and timely capture of a telephone number
                                    enables the business process to continue
                                    <br />
                                    Data quality definitions shall include – but
                                    are not limited to – the minimum measures of
                                    data quality for
                                    <span className="badge bg-danger">
                                      High
                                    </span>
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    .{" "}
                                    <ul>
                                      <li>
                                        Validity – Describing what constitutes
                                        valid data. This will show how data
                                        validity is controlled and measured.
                                        This shall include a description of the
                                        business rules (expressed both as a
                                        text-based description, and technically
                                        eg as a regular expression) that enforce
                                        this validity. Data validity may include
                                        the range of acceptable values or
                                        combination of values across multiple
                                        attributes and tables
                                        <br />
                                        <br />
                                        For example: a Citizen is valid if there
                                        is at least one Address marked active in
                                        the last year
                                      </li>
                                      <li>
                                        Timeliness – Describing the acceptable
                                        latency between data capture, use,
                                        transformation, reporting, and sharing.
                                        <br />
                                        For example: The correct departments
                                        have access to Citizen data in order to
                                        process a service request with
                                        sufficient time to meet an SLA; mapping
                                        data changes over time as properties are
                                        constructed, so mapping data that is a
                                        year old may be less useful than mapping
                                        data that is two months’ old.
                                      </li>
                                      <li>
                                        Integrity – Describing how the integrity
                                        between different data sources is
                                        maintained both within and across and
                                        business functions
                                        <br />
                                        For example, using the Emirates ID
                                        across multiple information systems to
                                        uniquely identify a person, using a
                                        contact reference number across multiple
                                        systems, and enforcing validation
                                        through a master service.
                                      </li>
                                      <li>
                                        Accuracy – Describing the acceptable
                                        margin of error against reality to
                                        support the intended purpose(s) of the
                                        data. For example, historical dates of
                                        Citizen access to a government service
                                        must be accurate to within +/- one week
                                        to support capacity planning.
                                      </li>
                                      <li>
                                        Reliability – Determining the level of
                                        consistency and completeness required
                                        for the intended purpose(s) of the data.
                                        For example, telephone numbers are
                                        always captured in the same format to be
                                        consistent, and address records must
                                        contain the correct district in order to
                                        be considered complete
                                      </li>
                                      For each of these measures, the Entity
                                      shall:
                                      <li>
                                        Assess the impact on business processes
                                        for failing to reach the specified
                                        criteria
                                      </li>
                                      <li>
                                        Assess the impact on business processes
                                        for failing to reach the specified
                                        criteria
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange3 ||
                                                    agentDetails?.qstatus2 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton2(true);
                                                    qhandlecolorchange3();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange4 ||
                                                    agentDetails?.qstatus2 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton2(false);
                                                    qhandlecolorchange4();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.qdoc2) === "" ? 0 :
                                          [agentDetails?.qdoc2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample2"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample2"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.qcomment2) === "" ? 0 :
                                          [agentDetails?.qcomment2].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange3
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton2(true);
                                            qhandlecolorchange3();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange4
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton2(false);
                                            qhandlecolorchange4();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample2"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value2"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) => handleFileChange(e, "qfile2")}
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.qdoc2 || formData?.qfile2 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.qdoc2} </p>
                                              <Link
                                                to={agentDetails.qdoc2}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            // If doc1 does not exist or is null
                                            <div>
                                            {selectedImage?.qfile2 && (
                                              selectedImage?.qfile2 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName2"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.qcomment2}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment2}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                  </div> */}
                                                  {/* <ul className="child_replay">
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall appoint a Data Manager. The
                                    Data Manager shall have delegated authority
                                    from the Data Governance Board..{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Manager shall:
                                      <li>
                                        Oversee the implementation of change
                                      </li>
                                      <li>
                                        Ensure compliance with governance,
                                        policy and standards
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                      <li>
                                        Ensure the coordinated training and
                                        awareness programmes are executed within
                                        the Entity
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange5 ||
                                                    agentDetails?.qstatus3 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton3(true);
                                                    qhandlecolorchange5();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange6 ||
                                                    agentDetails?.qstatus3 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton3(false);
                                                    qhandlecolorchange6();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.qdoc3) === "" ? 0 :
                                          [agentDetails?.qdoc3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample3"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample3"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.qcomment3) === "" ? 0 :
                                          [agentDetails?.qcomment3].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange5
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton3(true);
                                            qhandlecolorchange5();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange6
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton3(false);
                                            qhandlecolorchange6();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample3"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value3"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) => handleFileChange(e, "qfile3")}
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc3 || formData?.qfile3 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc3} </p>
                                              <Link
                                                to={agentDetails.doc3}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.qfile3 && (
                                              selectedImage?.qfile3 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName3"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.qcomment3}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment3}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    Architects to support the Data Manager..{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      The Data Architects shall:
                                      <li>
                                        TWork with the Data Manager and the Data
                                        Governance Board to ensure the
                                        implementation of the Data Management
                                        Standards in all designs across the
                                        Entit
                                      </li>
                                      <li>
                                        Establish a clearly defined target state
                                        for all data sources
                                      </li>
                                      <li>
                                        Establish a clearly defined roadmap to
                                        achieve the target state for all data
                                        sources
                                      </li>
                                      <li>
                                        Be responsible for developing and
                                        maintaining a formal description of the
                                        data and data structures within the
                                        Entity, including
                                        <ol>
                                          <li>
                                            Data designs and design artefacts
                                          </li>
                                          <li>
                                            Data designs and design artefact
                                          </li>
                                          <li>
                                            Data flows throughout the Entity
                                          </li>
                                        </ol>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange7 ||
                                                    agentDetails?.qstatus4 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton4(true);
                                                    qhandlecolorchange7();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange8 ||
                                                    agentDetails?.qstatus4 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton4(false);
                                                    qhandlecolorchange8();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.qdoc4) === "" ? 0 :
                                          [agentDetails?.qdoc4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample4"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample4"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.qcomment4) === "" ? 0 :
                                          [agentDetails?.qcomment4].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange7
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton4(true);
                                            qhandlecolorchange7();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange8
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton4(false);
                                            qhandlecolorchange8();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample4"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value4"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) => handleFileChange(e, "qfile4")}
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc4 || formData?.qfile4 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc4} </p>
                                              <Link
                                                to={agentDetails.doc4}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.qfile4 && (
                                              selectedImage?.qfile4 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName4"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.qcomment4}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment4}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall identify and appoint Data
                                    Stewards to support the Data Manager in both
                                    the business and technical areas of the
                                    organisation
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                      <li>
                                        The Data Stewards will take
                                        responsibility for the lifecycle of the
                                        data as it passes through information
                                        systems and ownership boundaries
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange9 ||
                                                    agentDetails?.qstatus5 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton5(true);
                                                    qhandlecolorchange9();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange10 ||
                                                    agentDetails?.qstatus5 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton5(false);
                                                    qhandlecolorchange10();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.qdoc5) === "" ? 0 :
                                          [agentDetails?.qdoc5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample5"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample5"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.qcomment5) === "" ? 0 :
                                          [agentDetails?.qcomment5].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange9
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton5(true);
                                            qhandlecolorchange9();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange10
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton5(false);
                                            qhandlecolorchange10();
                                          }}
                                        >
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample5"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value5"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) => handleFileChange(e, "qfile5s")}
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc5 || formData?.qfile5 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc5} </p>
                                              <Link
                                                to={agentDetails.doc5}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.qfile5 && (
                                              selectedImage?.qfile5 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName5"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.qcomment5}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment5}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall identify and appoint Data
                                    Owners (who are responsible for a particular
                                    dataset) to support the Data Stewards. Data
                                    Owners will be drawn from both the business
                                    and technical areas of the organisation.{" "}
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      <li>
                                        The Data Owners will take responsibility
                                        for a particular dataset throughout the
                                        lifecycle across systems
                                      </li>
                                      <li>
                                        The Data Owners will ensure the quality
                                        standards for their dataset are met
                                      </li>
                                      <li>
                                        The Data Owners will liaise between the
                                        business and technical stakeholders to
                                        ensure that their dataset is maintained
                                        to the highest standards possible
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange11 ||
                                                    agentDetails?.qstatus6 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton6(true);
                                                    qhandlecolorchange11();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange12 ||
                                                    agentDetails?.qstatus6 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton6(false);
                                                    qhandlecolorchange12();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.qdoc6) === "" ? 0 :
                                          [agentDetails?.qdoc6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample6"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample6"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.qcomment6) === "" ? 0 :
                                          [agentDetails?.qcomment6].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange11
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton6(true);
                                            qhandlecolorchange11();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faCheck} />{" "}
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange12
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton6(false);
                                            qhandlecolorchange12();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample6"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value6"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) => handleFileChange(e, "qfile6")}
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc6 || formData?.qfile6 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc6} </p>
                                              <Link
                                                to={agentDetails.doc6}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.qfile6 && (
                                              selectedImage?.qfile6 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName6"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.qcomment6}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                {/* <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div> */}
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment6}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                                    The Entity shall regularly undertake
                                    monitoring and compliance checking to ensure
                                    that information systems and data related
                                    processes are implemented in accordance with
                                    established policy, standards and best
                                    practices
                                    <span className="badge bg-danger">
                                      High
                                    </span>{" "}
                                    <span className="badge bg-secondary">
                                      Mandatory
                                    </span>
                                    <ul>
                                      Such reviews should include coverage of:
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                      <li>
                                        The organisation will take
                                        responsibility and accountability for
                                        Data Management
                                      </li>
                                      <li>
                                        Such reviews should include coverage of
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    className="row"
                                    style={{ clear: "both" }}
                                  >
                                    <div className="col-lg-2 mt-4 offset-1">
                                      <div
                                        className="btn-group CustomBtnGroup"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <h4 className="text-success">
                                          <div style={{ marginTop: "-35px" }}>
                                            <div className="col-lg-4 mt-4 offset-1">
                                              <div
                                                className="btn-group CustomBtnGroup"
                                                role="group"
                                                aria-label="Basic example"
                                              >
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange13 ||
                                                    agentDetails?.qstatus7 ===
                                                      "yes"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton7(true);
                                                    qhandlecolorchange13();
                                                  }}
                                                >
                                                  Yes
                                                </button>
                                                <button
                                                  type="button"
                                                  className={
                                                    qcolorChange14 ||
                                                    agentDetails?.qstatus7 ===
                                                      "no"
                                                      ? "btn btn-primary"
                                                      : "btn btn-secondary"
                                                  }
                                                  onClick={() => {
                                                    qsetYesbutton7(false);
                                                    qhandlecolorchange14();
                                                  }}
                                                >
                                                  No
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </h4>
                                      </div>
                                    </div>
                                    <div className="col-lg-6 mt-4">
                                      {" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faLink}
                                          style={{ color: "#0058f0" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                          {" "}
                                          {
                                          (agentDetails?.qdoc7) === "" ? 0 :
                                          [agentDetails?.qdoc7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                      <Link
                                        className="AttachBut2"
                                        data-bs-toggle="collapse"
                                        to="#collapseExample7"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseExample7"
                                      >
                                        {" "}
                                        <FontAwesomeIcon
                                          icon={faComment}
                                          style={{ color: "#005cfa" }}
                                        />{" "}
                                        <span className="badge badge-number">
                                        {
                                          (agentDetails?.qcomment7) === "" ? 0 :
                                          [agentDetails?.qcomment7].length}
                                        </span>{" "}
                                      </Link>{" "}
                                    </div>
                                    {/* <div className="col-lg-3 mt-4 text-end">
                                      <div
                                        className="btn-group CustomBtnGroup2"
                                        role="group"
                                        aria-label="Basic example"
                                      >
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange13
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton7(true);
                                            qhandlecolorchange13();
                                          }}
                                        >
                                          Accept
                                        </button>
                                        <button
                                          type="button"
                                          className={
                                            qcolorChange14
                                              ? "btn btn-primary"
                                              : "btn btn-secondary"
                                          }
                                          onClick={() => {
                                            qsetAcceptbutton7(false);
                                            qhandlecolorchange14();
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faXmark} />{" "}
                                          Reject
                                        </button>
                                      </div>
                                    </div> */}
                                  </div>
                                  <div
                                    className="collapse AttachDiv"
                                    id="collapseExample7"
                                  >
                                    <form action="">
                                      <div className="form">
                                        <input
                                          name="file"
                                          id="entry_value7"
                                          //   ref="fileInput"
                                          type="file"
                                          onChange={(e) => handleFileChange(e, "qfile7")}
                                        />
                                        <div>
                                          {" "}
                                          {/* <img
                                            src={agentDetails?.doc1}
                                            alt="Not Uploaded..."
                                            width="4%"
                                            className=""
                                          />{" "} */}
                                          {agentDetails?.doc7 || formData?.qfile7 ? (
                                            <div className="d-flex justify-content-center">
                                              <p> {agentDetails.doc7} </p>
                                              <Link
                                                to={agentDetails.doc7}
                                                className="mx-3 "
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                View Document
                                              </Link>
                                            </div>
                                          ) : (
                                            <div>
                                            {selectedImage?.qfile7 && (
                                              selectedImage?.qfile7 ? "File Uploaded Successfully!" : " Upload your files here.."
                                            )}
                                           
                                            <button
                                              className="btn bg-color-dblue btn-primary"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              Browse
                                            </button>
                                          </div>
                                          )}
                                        </div>
                                        <span
                                          id="fileName7"
                                          className="text-primary "
                                        >
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
                                                {agentDetails?.qcomment7}
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
                                            <ul
                                              id="list_comment"
                                              className="col-md-12"
                                            >
                                              <li className="box_result row">
                                                <div className="avatar_comment col-md-1">
                                                  {" "}
                                                  <img
                                                    src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg"
                                                    alt="avatar"
                                                  />{" "}
                                                </div>
                                                <div className="result_comment col-md-11">
                                                  {/* <h4>Nath Ryuzaki</h4> */}
                                                  <p>
                                                    {agentDetails?.qcomment7}
                                                  </p>
                                                  {/* <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                                          Lorem Ipsum is simply
                                                          dummy text of the
                                                          printing and
                                                          typesetting industry.
                                                          Lorem Ipsum has been
                                                          the industry's.
                                                        </p>
                                                        <div className="tools_comment">
                                                          {" "}
                                                          <Link
                                                            className="like"
                                                            to="#"
                                                          >
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
                                                  </ul> */}
                                                </div>
                                              </li>

                                              {/* <li className="box_result row">
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
                                                    Lorem Ipsum is simply dummy
                                                    text of the printing and
                                                    typesetting industry. Lorem
                                                    Ipsum has been the
                                                    industry's.
                                                  </p>
                                                  <div className="tools_comment">
                                                    {" "}
                                                    <Link
                                                      className="like"
                                                      to="#"
                                                    >
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
                                              </li> */}
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
                        );
                      default:
                        return (
                          <div id="step2" className="step-content-body ">
                            <div className="pagetitle">
                              <h2>Data Management</h2>
                            </div>
                            <div className="QuestionsStrip"> </div>
                          </div>
                        );
                    }
                  })()}

                  <div className="step-content-foot">
                    <button
                      type="button "
                      className="float-start active"
                      onClick={() => {
                        page <= 1 ? setPage(1) : setPage(page - 1);
                      }}
                      name="prev"
                    >
                      Prev
                    </button>
                    {page === 10 ? (
                      <div>
                        <button
                          type="button"
                          className="active"
                          name="next"
                          onClick={() => {
                            page === 10 ? setPage(10) : setPage(page + 1);
                            // handleSaveChanges2();
                            // handleSaveChanges3();
                            handleOnSave1();
                          }}
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          className="active bg-danger ms-2"
                          name="next"
                          onClick={() => {
                            page === 10 ? setPage(10) : setPage(page + 1);
                            // handleSaveChanges2();
                          }}
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="active"
                        name="next"
                        onClick={() => {
                          page === 10 ? setPage(10) : setPage(page + 1);
                          // handleSaveChanges3();
                          handleOnSave();
                        }}
                      >
                        Next
                      </button>
                    )}

                    <button type="button" className="active out" name="finish">
                      Approve
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

export default AuditorQuestions2;
