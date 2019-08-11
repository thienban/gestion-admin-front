import React from "react";
import { useCreateUserForm } from "../CustomHook";
import fetchData from "../utils/fetchData";
import {NumberList} from "./components";

const Team = props => {
  const signup = () => {
    alert(`Team Created!
                   Name: ${inputs.name}
                   `);
    fetch("http://localhost:8080/api/team", {
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
  const team = fetchData("http://localhost:8080/api/team");
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
    {team ? <NumberList numbers={team} /> : null}
    </div>
  );
};

export default Team;
