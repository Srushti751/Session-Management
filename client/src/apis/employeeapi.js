import React from "react";
import axios from "axios";
import jwt from "jwt-decode";

const user =
  localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
console.log("userr", user);
const token = user && user.token;
const userDet = token ? jwt(token) : ""; // decode your token here

export function postLogin({ name, empid, password }) {
  return axios.post("employee/login", { name, empid, password });
}

export function getUser() {
  return axios.get(`employee/employeedata/${userDet.id}`);
}

export function updateEmployee({ username, empid, contact, location }) {
  return axios.put(`employee/updateEmployee/${userDet.id}`, {
    name: username,
    empid,
    contact,
    location,
  });
}

export function updateImage(formData) {
  return axios.put(`employee/updateProfile?id=${userDet.id}`, formData);
}
