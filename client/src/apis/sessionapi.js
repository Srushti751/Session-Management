import React from "react";
import axios from "axios";

export function getAllSessionApi(userTok, user) {
  const location = user.location;
  const config = {
    headers: {
      authorization: `Bearer ${userTok}`,
    },
  };
  return axios.get(`/details/sessiondata/?location=${location}`, config);
}

export function getSessionApi(id) {
  return axios.get(`/details/sessiondata/${id}`);
}

export function getSessionAttendance(id) {
  return axios.get(`/attendance/attendancedata/sessionid/${id}`);
}
