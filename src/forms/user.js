import React from "react";
import { useCreateUserForm } from "../CustomHook";
import fetchData from "../utils/fetchData";

const UserForm = props => {
  const signup = () => {
    console.log("ffffffff");
    alert(`User Created!
                   Name: ${inputs.name}
                   Email: ${inputs.email}
                   Name: ${inputs.organisation}
                   Email: ${inputs.team}
                   `);
    fetch("http://localhost:8080/api/user", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: "no-cors",
      body: JSON.stringify({name: inputs.name})
    });
  };

  const { inputs, handleInputChange, handleSubmit } = useCreateUserForm(
    { name: "", email: "", organisation: "", team: "" },
    signup
  );
  const data = fetchData("http://localhost:8080/api/user");
  console.log(data);
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
        <button type="submit">Create</button>
      </form>
      {data ? <NumberList numbers={data} /> : null}
    </div>
  );
};

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.id}>{number.name}</li>
  ));
  return <ul>{listItems}</ul>;
}

export default UserForm;
