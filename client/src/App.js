import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Dashboard from "./pages/Dashboard";
import Sessions from "./pages/Sessions";
import SessionDetails from "./pages/SessionDetails";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import CustomDrawer from "./extras/CustomDrawer";
import { Context } from "./context/userContext";

function App() {
  const currentUser = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  return (
    <>
      <BrowserRouter>
        {/* <TemporaryDrawer /> */}
        <Row>
          <Col sm={3} className=" drawerStyle">
            <Context.Provider value={currentUser}>
              <Sidebar />
              {/* <CustomDrawer /> */}
            </Context.Provider>
          </Col>
          <Col sm={9} className="contentStyle">
            <Routes>
              <Route path="/" element={<Dashboard name={"Dashboard"} />} />
              <Route
                path="/dashboard"
                element={<Dashboard name={"Dashboard"} />}
              />
              <Route path="/login" element={<Login name={"Login"} />} />
              <Route path="/profile" element={<Profile name={"Profile"} />} />
              <Route path="/session" element={<Sessions name={"Sessions"} />} />
              <Route
                path="/sessiondetail/:sid"
                element={<SessionDetails name={"SessionDetails"} />}
              />
              <Route
                path="/attendance/attendancedata/:sid"
                element={<Attendance name={"Attendance"} />}
              />
            </Routes>
          </Col>
        </Row>

        <Routes>{/* <Route path="/" element={<Dashboard />} /> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
