import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

function Dashboard({ name }) {
  return (
    <>
      <Navbar name={name} />
      <Container>
        <div className="container  center">
          {/* <section className="center"> */}
          <h1>
            Welcome <span className="text-danger">NeoSOFT</span>ians
          </h1>
          <p>Explore All sessions Here</p>
          {/* </section> */}
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
