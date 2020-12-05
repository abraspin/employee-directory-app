import React from "react";
// import "./style.css";

function UserCard(props) {
  console.log("props", props);
  const { name, email, phone, picture } = props;
  console.log("🚀 ~ file: index.js ~ line 5 ~ UserCard ~ name, email, phone, picture", name, email, phone, picture);
  return (
    <div className="card">
      <div className="img-container">
        <img src={picture} alt={name} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
