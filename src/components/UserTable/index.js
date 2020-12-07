import React from "react";
import UserCard from "../UserCard";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    // console.log("I'm gonna try and sort and The sortConfig is currently: ", sortConfig);
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    console.log("I just tried to setSortConfig to: ", sortConfig);
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const UserTable = (props) => {
  // console.log("🚀 ~ file: index.js ~ line 38 ~ UserTable ~ props.userList", props.userList);
  const { items, requestSort, sortConfig } = useSortableData(props.userList);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table className="table table-striped table-bordered text-center ">
      <thead>
        <tr>
          {/* begin TableHeader component refactor */}
          {/* <th scope="col">User</th> */}
          {/* end TableHeader component refactor */}
          <th>
            {/* <button type="button" onClick={() => requestSort("user")} className={getClassNamesFor("user")}> */}
            User
            {/* </button> */}
          </th>
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
          {/* <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th> */}
        </tr>
      </thead>
      <tbody>
        {items.map((user) => {
          return (
            <UserCard
              name={user.name.first + " " + user.name.last}
              email={user.email}
              phone={user.phone}
              picture={user.picture.medium}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
