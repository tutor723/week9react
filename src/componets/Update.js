import React from "react";
import { useState } from "react";
import { updateUser } from "../utils";

const Update = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await updateUser(username, email, password);
  };


  //update form 
  return (
    <div className="register">
      <h2>Update User</h2>

      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input onChange={(event) => setUsername(event.target.value)}></input>
        </label>
        <br></br>
        <label>
          Email:
          <input onChange={(event) => setEmail(event.target.value)}></input>
        </label>
        <br></br>
        <label>
          Password:
          <input onChange={(event) => setPassword(event.target.value)}></input>
        </label>
         <br></br>
        <button type="submit">Click here to submit</button>
      </form>
    </div>
  );
};



export default Update;
