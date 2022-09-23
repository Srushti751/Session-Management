import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Details(props) {
  let navigate = useNavigate();
  return (
    <Row className="sessionCard">
      <Col className="sessionCol">
        <img
          src={`http://localhost:8005/${props.sessionOnedata.pics}`}
          className="sessionImg"
        />
      </Col>
      <Col className="sessionCol">
        <h3>{props.sessionOnedata && props.sessionOnedata.session_name}</h3>
        <Container>
          <Table size="sm">
            <tbody>
              <tr>
                <td>
                  <span className="detailsStyle">Held on : </span>
                </td>
                <td> {props.sessionOnedata && props.sessionOnedata.date}</td>
              </tr>
              <tr>
                <td>
                  <span className="detailsStyle">Facilitator : </span>
                </td>
                <td>
                  {props.sessionOnedata.facilitator &&
                    props.sessionOnedata.facilitator.name}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="detailsStyle">Location : </span>
                </td>
                <td>
                  {props.sessionOnedata.facilitator &&
                    props.sessionOnedata.facilitator.location}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="detailsStyle">Emp code : </span>xx
                </td>
                <td>
                  {props.sessionOnedata.facilitator &&
                    props.sessionOnedata.facilitator.empid}
                </td>
              </tr>
              <tr>
                <td>
                  <span className="detailsStyle">PPT : </span>
                </td>

                <td>{props.sessionOnedata && props.sessionOnedata.ppt}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <button
          className=" showBtn"
          onClick={() =>
            navigate(`/attendance/attendancedata/${props.sessionOnedata._id}`)
          }
        >
          Show Attendance
        </button>
      </Col>
    </Row>
  );
}

export default Details;
