import React from "react";
// import "./style.css";

function UserCard(props) {
  console.log("props", props);
  const { name, email, phone, picture } = props;
  console.log("🚀 ~ file: index.js ~ line 5 ~ UserCard ~ name, email, phone, picture", name, email, phone, picture);
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
