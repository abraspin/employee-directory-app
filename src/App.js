// import logo from "./logo.svg";
// import './App.css';
import FriendCard from "./components/FriendCard";
import HeaderBar from "./components/HeaderBar";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API.js";
import React, { useEffect, useState } from "react";

function App() {
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    API.getUsers(10).then((res) => {
      console.log("🚀 ~ file: App.js ~ line 16 ~ API.getUsers ~ res.data.results", res.data.results);
      setUserList(res.data.results);
    });
  });
  console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ userList", userList);

  return (
    <div>
      <header>
        <HeaderBar title="Employee Directory" icon="fas fa-user"></HeaderBar>
      </header>
      <section></section>
    </div>
  );
}

export default App;
