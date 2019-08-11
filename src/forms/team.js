import React from "react";
import { useCreateUserForm } from "../CustomHook";

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
  return (
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
  );
};

export default Team;
