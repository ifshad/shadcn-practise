// auth.js

import { mockToken } from "./mockToken";

export const registerUser = (phoneNumber, password) => {
  // You can use localStorage or sessionStorage to mock storing user details
  localStorage.setItem("user", JSON.stringify({ phoneNumber, password }));
  localStorage.setItem("jwt", mockToken.token);

  // auth.js (within registerUser or loginUser)
  setTimeout(() => {
    localStorage.removeItem("jwt");
  }, 3600 * 1000); // JWT expires after 1 hour

  return mockToken.token;
};

export const loginUser = (phoneNumber, password) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.phoneNumber === phoneNumber && user.password === password) {
    localStorage.setItem("jwt", mockToken.token);
    return mockToken.token;
  }
  // auth.js (within registerUser or loginUser)
  setTimeout(() => {
    localStorage.removeItem("jwt");
  }, 3600 * 1000); // JWT expires after 1 hour
  return null; // Or handle invalid credentials
};

export const logoutUser = () => {
  localStorage.removeItem("jwt");
//   localStorage.removeItem("user");
};
