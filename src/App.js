// import logo from "./logo.svg";
// import './App.css';
import UserCard from "./components/UserCard";
import HeaderBar from "./components/HeaderBar";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API.js";
import React, { useEffect, useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    API.getUsers(10).then((res) => {
      console.log("🚀 ~ file: App.js ~ line 16 ~ API.getUsers ~ res.data.results", res.data.results);
      setUserList(res.data.results);
    });
  }, []);
  console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ userList", userList);

  return (
    <div>
      <header>
        <HeaderBar title="Employee Directory" icon="fas fa-user"></HeaderBar>
      </header>
      <section>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return (
                <UserCard
                  name={user.name.first + " " + user.name.last}
                  email={user.email}
                  phone={user.phone}
                  picture={user.picture.thumbnail}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
