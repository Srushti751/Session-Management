import React from "react";
import axios from "axios";

export function postLogin({ name, empid, password }) {
  return axios.post("employee/login", { name, empid, password });
}

export function getUser(id) {
  // decode your token here
  console.log("id", id);
  return axios.get(`employee/employeedata/${id}`);
}

export function updateEmployee(id, { username, empid, contact, location }) {
  return axios.put(`employee/updateEmployee/${id}`, {
    name: username,
    empid,
    contact,
    location,
  });
}

export function updateImage(id, formData) {
  return axios.put(`employee/updateProfile?id=${id}`, formData);
}
