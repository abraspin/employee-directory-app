import React from "react";
import "./style.css";

function UserCard(props) {
  const { name, email, phone, picture } = props;
  return (
    <tr>
      <td scope="row">
        <img src={picture} alt={name} />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default UserCard;
