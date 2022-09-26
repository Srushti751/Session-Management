import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { getAllSessionApi, getSessionApi } from "../apis/sessionapi";
import Navbar from "../components/Navbar";
import jwt from "jwt-decode";
import { useSelector } from "react-redux";

function Sessions({ name }) {
  const [sessionDetails, setSessionDetails] = useState([]);

  const navigate = useNavigate();

  const currentUser = useSelector(
    (state) => state.loginUserReducer.currentUser
  );
  const token = currentUser && currentUser.token;
  const user = token && jwt(token); // decode your token here
  console.log("User", user && user);

  const getSessionDetails = async () => {
    if (token) {
      const data = await getAllSessionApi(token, user);
      // console.log("cx", user);
      // localStorage.setItem("token", JSON.stringify(user));
      setSessionDetails(data.data.data);
      console.log("auh");
    }

    // console.log("14--------", data);
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
                  <tr
                    className=""
                    onClick={() => navigate(`/sessiondetail/${session._id}`)}
                  >
                    <td>{session.date}</td>
                    <td>{session.session_name}</td>
                    <td>{session.facilitator && session.facilitator.name}</td>
                    <td>
                      {session.facilitator && session.facilitator.location}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Sessions;
