import React from "react";
import { useCreateUserForm } from "../CustomHook";

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

export default Organisation;
