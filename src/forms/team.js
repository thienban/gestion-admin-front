import React from "react";
import { useCreateUserForm } from "../CustomHook";

const Team = props => {
  const signup = () => {
    console.log("ffffffff");
    alert(`User Created!
                   Name: ${inputs.name}
                   `);
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
