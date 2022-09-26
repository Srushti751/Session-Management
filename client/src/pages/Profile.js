import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { useSelector } from "react-redux";
import { getUser, updateEmployee } from "../apis/employeeapi";
import Navbar from "../components/Navbar";
import Profilecard from "../components/Profilecard";
import "./Profile.css";

function Profile({ name }) {
  const [profile, setProfile] = useState("");
  const [edit, setEdit] = useState(true);
  const [username, setUsername] = useState();
  const [empid, setEmpid] = useState();
  const [location, setLocation] = useState();
  const [contact, setContact] = useState();

  let user = useSelector((state) => state.loginUserReducer.currentUser);

  const token = user && user.token;
  const userDet = token ? jwtDecode(token) : "";
  const id = userDet & userDet.id;

  const getUserData = async () => {
    const data = await getUser(userDet.id);
    console.log("20--------", userDet.id);
    setProfile(data.data);
  };

  const updateUserData = async () => {
    try {
      console.log("hhhhhhhhhhhhh", username, location, empid, contact);
      const data = await updateEmployee(userDet.id, {
        username,
        location,
        empid,
        contact,
      });
      alert("updated");
      setEdit(true);
      const newdata = await getUser(userDet.id);
      console.log("20--------", newdata);
      setProfile(newdata.data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <Navbar name={name} />
      {console.log("userDet", userDet.id)}
      <Container>
        <Button
          className="bg-transparent btnPos"
          onClick={() => setEdit(false)}
        >
          <GrEdit />
        </Button>
        {!edit && <Button onClick={() => updateUserData()}>Update</Button>}
        <Profilecard
          profile={profile}
          edit={edit}
          username={username}
          setUsername={setUsername}
          empid={empid}
          setEmpid={setEmpid}
          location={location}
          setLocation={setLocation}
          contact={contact}
          setContact={setContact}
          setProfile={setProfile}
        />
      </Container>
    </>
  );
}

export default Profile;
