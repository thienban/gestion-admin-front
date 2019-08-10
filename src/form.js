import React from "react";
import { useCreateUserForm } from "./CustomHook";

const Form = () => {
  const signup = () => {
    console.log("ffffffff");
    alert(`User Created!
               Name: ${inputs.name}
               Email: ${inputs.email}
               Name: ${inputs.organisation}
               Email: ${inputs.team}
               `);
  };
  const { inputs, handleInputChange, handleSubmit } = useCreateUserForm(
    { name: "", email: "", organisation: "", team: "" },
    signup
  );
  return (
    <div class="container">
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
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      <div>
        <label>Organisation</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={inputs.organisation}
          name="organisation"
        />
      </div>
      <div>
        <label>Team</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={inputs.team}
          name="team"
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
};
export default Form;
