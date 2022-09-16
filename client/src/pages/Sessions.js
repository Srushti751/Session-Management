import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { getAllSessionApi, getSessionApi } from "../apis/sessionapi";
import Navbar from "../components/Navbar";

function Sessions({ name }) {
  const [sessionDetails, setSessionDetails] = useState([]);
  const [sessionOnedata, setSessionOnedata] = useState([]);

  const getSessionDetails = async () => {
    const data = await getAllSessionApi();
    // console.log("14--------", data);
    setSessionDetails(data.data.data);
  };

  const getSessionData = async (id) => {
    const data = await getSessionApi(id);
    console.log("20--------", data);
    setSessionOnedata(data.data.data);
  };

  useEffect(() => {
    getSessionDetails();
  }, []);

  return (
    <>
      <Navbar name={name} />
      <Container className="sessionContainer">
        <Table striped>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Facilitator</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {sessionDetails &&
              sessionDetails.map((session, index) => {
                return (
                  <Link
                    // onClick={() => getSessionData(session._id)}
                    to={`/sessiondetail/${session._id}`}
                    key={index}
                  >
                    <tr>
                      <td>{session.date}</td>
                      <td>{session.session_name}</td>
                      <td>{session.facilitator.name}</td>
                      <td>{session.facilitator.location}</td>
                    </tr>
                  </Link>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Sessions;
