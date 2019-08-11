import React from "react";
import { useCreateUserForm } from "../CustomHook";
import fetchData from "../utils/fetchData";
import {NumberList} from "./components";

const Organisation = props => {
  const signup = () => {
    fetch("http://localhost:8080/api/organisation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: inputs.name })
    });
  };

  const { inputs, handleInputChange, handleSubmit } = useCreateUserForm(
    { name: "" },
    signup
  );
  const organisation = fetchData("http://localhost:8080/api/organisation");
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={inputs.name}
          required
        />
      </div>
      <button type="submit">Create</button>
    </form>
    {organisation ? <NumberList numbers={organisation} /> : null}
    </div>
  );
};

export default Organisation;
