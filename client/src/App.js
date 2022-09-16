import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import Dashboard from "./pages/Dashboard";
import Sessions from "./pages/Sessions";
import SessionDetails from "./pages/SessionDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <TemporaryDrawer /> */}
        <Row>
          <Col sm={3} className="drawerStyle">
            <Sidebar />
          </Col>
          <Col sm={9} className="contentStyle">
            <Routes>
              <Route path="/" element={<Dashboard name={"Dashboard"} />} />
              <Route
                path="/dashboard"
                element={<Dashboard name={"Dashboard"} />}
              />
              <Route path="/session" element={<Sessions name={"Sessions"} />} />
              <Route
                path="/sessiondetail/:id"
                element={<SessionDetails name={"SessionDetails"} />}
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
