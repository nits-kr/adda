import React from "react";
import StepZilla from "react-stepzilla";
// import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";
import Step10 from "./Step10";

function ProgressBar() {
  const steps = [
    //   {name: 'Step 0', component: <Step0 />},
    { name: "Data Governance", component: <Step1 /> },
    { name: "Data Management", component: <Step2 /> },
    { name: "Data Catalogue", component: <Step3 /> },
    { name: "Data Modelling and Design", component: <Step4 /> },
    { name: "Data Architecture", component: <Step5 /> },
    { name: "Data Security and Privacy", component: <Step6 /> },
    { name: "Data Storage", component: <Step7 /> },
    { name: "Data Integration and Interoperability", component: <Step8 /> },
    { name: "Open Data", component: <Step9 /> },
    { name: "Data Quality", component: <Step10 /> },
  ];
  return (
    <>
      <div className="step-progress">
        <StepZilla steps={steps} nextTextOnFinalActionStep={"Submit"} />
        {/* <div className="d-flex justify-content-end">
          <div>
            <button type="button" className="btn btn-primary mr-2 mx-2">
              Draft
            </button>
            <button type="button" className="btn btn-primary mx-2">
              Submit
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProgressBar;
