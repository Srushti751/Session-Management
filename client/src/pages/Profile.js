import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
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

  const getUserData = async () => {
    const data = await getUser();
    console.log("20--------", data);
    setProfile(data.data);
  };

  const updateUserData = async () => {
    try {
      console.log("hhhhhhhhhhhhh", username, location, empid, contact);
      const data = await updateEmployee({ username, location, empid, contact });
      alert("updated");
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
      {console.log("profile", profile)}
      <Container>
        <Button onClick={() => setEdit(false)}>Edit</Button>
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
        />
      </Container>
    </>
  );
}

export default Profile;
