import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../apis/employeeapi";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jwt-decode";
import { loginUser } from "../actions/userAction";

function Login() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [empid, setEmpid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const loginUser = async (e) => {
  //   e.preventDefault();
  //   // const data = await postLogin({ name, empid, password });
  //   postLogin({ name, empid, password })
  //     .then((data) => {
  //       data.data.user &&
  //         localStorage.setItem("user", JSON.stringify(data.data.user));
  //       // const token = data.data.user.token;
  //       // const user = jwt(token); // decode your token here
  //       // console.log("cx", user);
  //       // localStorage.setItem("token", JSON.stringify(user));
  //       alert("Login Succesfully");
  //       navigate("/dashboard");
  //     })
  //     .catch((err) => console.log(err));
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!empid || !password) {
      // toast({
      //   title: "Please Fill all the Feilds",
      //   status: "warning",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "top",
      // });
      alert("Please Fill all the Feilds");
      setLoading(false);
      return;
    } else {
      const user = { empid, password };
      dispatch(loginUser(user));
      setPassword("");
      alert("Login successful");

      navigate("/dashboard");
      // history.push("/home");
    }
  };
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Emp code</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter empid"
            onChange={(e) => setEmpid(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
export default Login;
