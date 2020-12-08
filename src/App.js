// import logo from "./logo.svg";
import "./App.css";
// import UserCard from "./components/UserCard";
import HeaderBar from "./components/HeaderBar";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API.js";
import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable/";
import SearchBox from "./components/SearchBox/";

function App() {
  const [userList, setUserList] = useState([]);
  const [employeeDirectory, setEmployeeDirectory] = useState();

  function searchHandler(searchTerm) {
    ///////////////////////////////////////////////////////////////////////////////////////
    const filteredArray = employeeDirectory.filter((a) => a.name.toLowerCase().includes(searchTerm));
    setUserList(filteredArray);
    ///////////////////////////////////////////////////////////////////////////////////////

    // let arrayToFilter = [...employeeDirectory];
    // let filteredArray = [];
    // for (let i = 0; i < arrayToFilter.length; i++) {
    //   if (arrayToFilter[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
    //     filteredArray.push(arrayToFilter[i]);
    //   }
    // }
    // setUserList(arrayToFilter);
    ///////////////////////////////////////////////////////////////////////////////////////
  }

  //Query randomuser API and create a new array with just the key/value pairs we want
  useEffect(() => {
    API.getUsers(20).then((res) => {
      let employeesArray = [];
      for (let i = 0; i < res.data.results.length; i++) {
        let employee = {
          name: res.data.results[i].name.first + " " + res.data.results[i].name.last,
          email: res.data.results[i].email,
          phone: res.data.results[i].phone,
          picture: res.data.results[i].picture.medium,
        };
        employeesArray.push(employee);
      }
      setUserList(employeesArray);
      setEmployeeDirectory(employeesArray);
    });
  }, []);

  return (
    <div>
      <header>
        <HeaderBar title="Employee Directory" icon="fas fa-user"></HeaderBar>
        <div className="row bg-dark">
          <div className="col md-8">
            <h3 className="text-secondary mx-auto py-4 px-4">Click on the column header to sort users</h3>
          </div>
          <div className="col md-4">
            <h3 className="text-secondary mx-auto py-4 px-2">
              Or search by name: <SearchBox placeholder="enter name..." searchHandler={searchHandler}></SearchBox>
            </h3>
          </div>
        </div>
      </header>
      <section>
        <UserTable userList={userList}></UserTable>
      </section>
    </div>
  );
}

export default App;
