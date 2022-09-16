import React from "react";
import axios from "axios";

export function getAllSessionApi() {
  return axios.get("/details/sessiondata");
}

export function getSessionApi(id) {
  return axios.get(`/details/sessiondata/${id}`);
}
