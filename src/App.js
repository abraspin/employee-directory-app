// import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard";
import HeaderBar from "./components/HeaderBar";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./utils/API.js";
import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable/";
import SearchBox from "./components/SearchBox/";

function App() {
  const [userList, setUserList] = useState([]);
  const [sortBy, setSortBy] = useState();
  const [searchTerm, setSearchTerm] = useState();

  // $(".searchBox").value = "";
  function searchHandler(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  //FIXME: this is an attempt at adding the mdbootstrap table functionality, it's in index.html ATM
  // useEffect(() => {
  //   const script = document.createElement("script");

  //   script.src = "https://use.typekit.net/foobar.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  //   document.getElementById("dtBasicExample").DataTable();
  //   document.getElementsByClassName("dataTables_length").addClass("bs-select");

  useEffect(() => {
    API.getUsers(20).then((res) => {
      setUserList(res.data.results);
    });
  }, []);

  // TODO: Should this be wrapped in a useEffect with Observe[searchTerm] ?
  if (searchTerm) {
    //TODO: pretty sure this is all trash
    // const userListCopy = [...userList];
    // const filteredUserList = userListCopy.filter((user) => {
    //   // const userFullName = user.name.first + " " + user.name.last;
    //   (user.name.first + " " + user.name.last).toLowerCase().includes(searchTerm.toLowerCase());
    // });

    ///////////////////////////////////////////////////////////////////////////////////////////

    // FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:
    const filteredUserList = [];
    userList.forEach((user) => {
      const userFullName = user.name.first + user.name.last;
      console.log("🚀 ~ file: App.js ~ line 50 ~ userList.forEach ~ userFullName", userFullName);
      const nameToLower = userFullName.toLowerCase;
      console.log(userFullName.toLowerCase().includes(searchTerm.toLowerCase()));

      const searchTermToLower = searchTerm.toLowerCase;
      if (nameToLower.includes(searchTermToLower)) {
        filteredUserList.push(user);
      }
    });
    console.log("🚀 ~ file: App.js ~ line 34 ~ filteredUserList ~ filteredUserList", filteredUserList);
    //TODO: Then just map the filtered list in the render funciton instead of userList...gg
  }
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
        {/* ////////////////////line below for userList component homemade/////////////////////////// */}
        <UserTable userList={userList}></UserTable>
        {/* ////////////////////block below for MDBootstrap sortable table with userList/////////////////////////// */}
        {/* <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="th-sm">User</th>
              <th className="th-sm">Name</th>
              <th className="th-sm">Email</th>
              <th className="th-sm">Phone</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => {
              return (
                <tr>
                  <td>
                    <img src={user.picture.medium} alt={user.name.first + " " + user.name.last} />
                  </td>
                  <td>{user.name.first + " " + user.name.last}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        {/* ////////////////////block above for MDBootstrap sortable table with userList/////////////////////////// */}
        {/* //////////////////////////////////////////block below MDBootstrap sortable table ///////////////////////////////////////////////////////////////// */}
        {/* <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th className="th-sm">Name</th>
              <th className="th-sm">Position</th>
              <th className="th-sm">Office</th>
              <th className="th-sm">Age</th>
              <th className="th-sm">Start date</th>
              <th className="th-sm">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
          </tbody>
        </table> */}
        {/* ////////////////////block above for MDBootstrap sortable table/////////////////////////// */}
      </section>
    </div>
  );
}

export default App;

////////// removed table from  section element, to be component
// <table className="table table-striped table-bordered text-center ">
// <thead>
//   <tr>
//     {/* begin TableHeader component refactor */}
//     <th scope="col">User</th>
//     {/* end TableHeader component refactor */}
//     <th scope="col">Name</th>
//     <th scope="col">Email</th>
//     <th scope="col">Phone</th>
//   </tr>
// </thead>
// <tbody>
//   {userList.map((user) => {
//     return (
//       <UserCard
//         name={user.name.first + " " + user.name.last}
//         email={user.email}
//         phone={user.phone}
//         picture={user.picture.medium}
//       />
//     );
//   })}
// </tbody>
// </table>
