import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { getSessionApi } from "../apis/sessionapi";
import Details from "../components/Details";

function SessionDetails({ name }) {
  // const session_id = props.match.params.sid;
  // debugger;
  const [sessionOnedata, setSessionOnedata] = useState([]);

  const navigate = useNavigate();
  let { sid } = useParams();
  console.log("sess", sid);

  const getSessionData = async () => {
    const data = await getSessionApi(sid);
    console.log("20--------", data);
    setSessionOnedata(data.data.data[0]);
  };

  useEffect(() => {
    getSessionData();
  }, []);

  return (
    <>
      <Navbar name={name} />
      {console.log(sessionOnedata.pics)}
      <Container>
        {/* <Row className="sessionCard">
          <Col className="sessionCol">
            <img
              src={`http://localhost:8005/${sessionOnedata.pics}`}
              className="sessionImg"
            />
          </Col>
          <Col className="sessionCol">
            <h3>{sessionOnedata && sessionOnedata.session_name}</h3>
            <Container>
              <Table size="sm">
                <tbody>
                  <tr>
                    <td>
                      <span className="detailsStyle">Held on : </span>
                    </td>
                    <td> {sessionOnedata && sessionOnedata.date}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="detailsStyle">Facilitator : </span>
                    </td>
                    <td>
                      {sessionOnedata.facilitator &&
                        sessionOnedata.facilitator.name}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="detailsStyle">Location : </span>
                    </td>
                    <td>
                      {sessionOnedata.facilitator &&
                        sessionOnedata.facilitator.location}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="detailsStyle">Emp code : </span>
                    </td>
                    <td>
                      {sessionOnedata.facilitator &&
                        sessionOnedata.facilitator.empid}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="detailsStyle">PPT : </span>
                    </td>

                    <td>{sessionOnedata && sessionOnedata.ppt}</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
            <button
              className=" showBtn"
              onClick={() =>
                navigate(`/attendance/attendancedata/${sessionOnedata._id}`)
              }
            >
              Show Attendance
            </button>
          </Col>
        </Row> */}
        <Details sessionOnedata={sessionOnedata} />
      </Container>
    </>
  );
}

export default SessionDetails;
