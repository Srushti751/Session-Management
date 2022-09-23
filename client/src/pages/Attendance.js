import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSessionAttendance } from "../apis/sessionapi";
import Navbar from "../components/Navbar";

function Attendance({ name }) {
  const [attendance, setAttendance] = useState([]);
  let { sid } = useParams();

  const getAttendanceData = async () => {
    const data = await getSessionAttendance(sid);
    console.log("20--------", data);
    setAttendance(data.data[0].members);
  };

  useEffect(() => {
    getAttendanceData();
  }, []);
  return (
    <div>
      <Navbar name={name} />
      {console.log("attend", attendance)}
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Emp code</th>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {attendance &&
              attendance.map((att, index) => {
                return (
                  <tr className="">
                    <td>{att.empid}</td>
                    <td>{att.name}</td>
                    <td>{att.location}</td>
                    <td>{att.contact}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Attendance;
