import { writeCookie } from "../common";

// register user
export const registerUser = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//login the user

export const loginUser = async (username, email, password, newUser) => {
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    newUser(data.user.username);
    writeCookie("jwt_token", data.user.token, 7);
  } catch (error) {
    console.log(error);
  }
};


//delete the user
export const deleteUser = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//update the user
export const updateUser = async (username, email, password) => {
  try {
    const response = await fetch("http://localhost:5001/users/updateUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};


//authentication checking
export const authCheck = async (token) => {
  try {
    const response = await fetch("http://localhost:5001/users/authCheck", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await response.json();
    return data.user.username;
  } catch (error) {
    console.log(error);
  }
};
