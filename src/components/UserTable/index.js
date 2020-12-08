import React from "react";
import UserCard from "../UserCard";
// import SearchBox from "../SearchBox";
import useSortableData from "../../utils/useSortableData";

const UserTable = (props) => {
  const { items, requestSort, sortConfig /*searchHandler */ } = useSortableData(props.userList);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  // const [searchTerm, setSearchTerm] = React.useState();
  // const [userList, setUserList] = React.useState([]);

  // $(".searchBox").value = "";
  // function searchHandler(searchTerm) {
  //   console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ searchTerm", searchTerm);
  //   // event.preventDefault();
  //   // setSearchTerm(searchTerm);
  //   if (!searchTerm) {
  //     setUserList(props.userList);
  //   } else {
  //     let employeeDataSomething = [];
  //     for (let i = 0; i < userList.length; i++) {
  //       if (userList[i].name.indexOf(searchTerm) > -1) {
  //         employeeDataSomething.push(userList[i]);
  //       }
  //     }
  //     // setUserList(employeeDataSomething);
  //     items = employeeDataSomething;
  //   }
  // }

  return (
    <div>
      {/* <div className="row bg-dark">
        <div className="col md-8">
          <h3 className="text-secondary mx-auto py-4 px-4">Click on the column header to sort users</h3>
        </div>
        <div className="col md-4">
          <h3 className="text-secondary mx-auto py-4 px-2">
            Or search by name (table method): <SearchBox placeholder="enter name..." searchHandler={searchHandler}></SearchBox>
          </h3>
        </div>
      </div> */}

      <table className="table table-striped table-bordered text-center ">
        <thead>
          <tr>
            <th>User</th>
            <th>
              <button type="button" onClick={() => requestSort("name")} className={getClassNamesFor("name")}>
                Name
              </button>
            </th>
            <th>
              <button type="button" onClick={() => requestSort("email")} className={getClassNamesFor("email")}>
                Email
              </button>
            </th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {items.map((user) => {
            return <UserCard name={user.name} email={user.email} phone={user.phone} picture={user.picture} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
