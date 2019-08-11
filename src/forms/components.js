import React from "react";

export const NumberList = props => {
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

export const Select = props => {
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
        <option>{""}</option>
        {option}
      </select>
    );
  };