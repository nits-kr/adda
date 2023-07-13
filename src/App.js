import "./App.css";
import 'typeface-roboto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./components/login/UserLogin";
import Home from "./components/home/Home";
import DashboardUser from "./components/dashboardUser/DashboardUser";
import DasboardReviewer from "./components/dashboardReviewer/DasboardReviewer";
import AuditorQuestions from "./components/auditorQuestion/AuditorQuestions";
import AdgeQuestions from "./components/adgeQustion/AdgeQuestions";
import Header from "./components/Header";
import AuditReport from "./report/AuditReport";
import Rles from "./components/role/Rles";
import User from "./components/users/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            className="active"
            path="/"
            element={<UserLogin />}
          />
          <Route exact className="active" path="/home" element={<Home />} />
          <Route
            exact
            className="active"
            path="/dashboard"
            element={<DashboardUser />}
          />
          <Route
            exact
            className="active"
            path="/dashboard-reviewer"
            element={<DasboardReviewer />}
          />
          <Route
            exact
            className="active"
            path="/auditior-question/:id"
            element={<AuditorQuestions />}
          />
          <Route
            exact
            className="active"
            path="/adge-question"
            element={<AdgeQuestions />}
          />
          <Route
            exact
            className="active"
            path="/header"
            element={<Header/>}
          />
          <Route
            exact
            className="active"
            path="/audit-report"
            element={<AuditReport/>}
          />
          <Route
            exact
            className="active"
            path="/roles"
            element={ <Rles/>}
          />
          <Route
            exact
            className="active"
            path="/users"
            element={ <User/>}
          />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
