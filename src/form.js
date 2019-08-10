import React, { useState } from "react";
import UserForm from "./forms/user";
import OrganisationForm from "./forms/organisation";
import TeamForm from "./forms/team";

const Form = () => {
  const [select, setSelected] = useState(null);
  const selectForm = select => {
    switch (select) {
      case "user": 
        return (
          <div>
            <UserForm />
          </div>
        );
      case "organisation":
        return (
          <div>
            <OrganisationForm />
          </div>
        );
      case "team":
        return (
          <div>
            <TeamForm />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="container">
      <button
        className="button button-outline"
        name="user"
        onClick={e => setSelected(e.target.name)}
      >
        Create User
      </button>
      <button
        className="button button-outline"
        name="organisation"
        onClick={e => setSelected(e.target.name)}
      >
        Create Organisation
      </button>
      <button
        className="button button-outline"
        name="team"
        onClick={e => setSelected(e.target.name)}
      >
        Create Team
      </button>
      {selectForm(select)}
    </div>
  );
};
export default Form;
