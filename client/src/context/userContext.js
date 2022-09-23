import { createContext, useEffect } from "react";

const currentUser = JSON.parse(localStorage.getItem("user"));
export const Context = createContext();
