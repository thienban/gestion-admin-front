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
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: inputs.name, email: inputs.email })
    });
  };
  const user = fetchData("http://localhost:8080/api/user");
  const organisation = fetchData("http://localhost:8080/api/organisation");
  const team = fetchData("http://localhost:8080/api/team");
  const { inputs, handleInputChange, handleSubmit } = useCreateUserForm(
    { name: "", email: "", organisation: "", team: "" },
    signup
  );
  console.log(organisation);
  console.log(team);
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
          <Select
            name="organisation"
            data={organisation}
            onSelect={handleInputChange}
          />
        </div>
        <div>
          <label>Team</label>
          <Select 
          name="team" 
          data={team}
          onSelect={handleInputChange} />
        </div>
        <button type="submit">Create</button>
      </form>
      {user ? <NumberList numbers={user} /> : null}
    </div>
  );
};

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number["_id"]}>
      {number.name}
      {number.email ? (
        <ul>
          <li>{number.email}</li>
        </ul>
      ) : null}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
const Select = props => {
  const listName = props.data;
  const option = listName
    ? listName.map(val => (
        <option key={val["_id"]} value={val["_id"]}>
          {val.name}
        </option>
      ))
    : null;
  return (
    <select name={props.name} onChange={props.onSelect}>
      {option}
    </select>
  );
};

export default UserForm;
