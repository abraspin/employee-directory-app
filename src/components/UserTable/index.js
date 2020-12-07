import React from "react";
import UserCard from "../UserCard";

// custom hook used to handle sort requests
const useSortableData = (items, config = null) => {
  // sortConfig state is an object with keys fieldName and direction (asc vs des)
  const [sortConfig, setSortConfig] = React.useState(config);

  // memoize the sort operation so it does not have to re-sort every render...what's the difference?
  const sortedItems = React.useMemo(() => {
    // const sortedItems = React.useEffect(() => { //this will not work
    // copy the array because array.sort will modify the original array
    let sortableItems = [...items];

    // if no sort config has been set, return the array unchanged
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        // TODO: get this: How is it that each element has its own sortConfig state?
        if (a[sortConfig.key] < b[sortConfig.key]) {
          // If it's already ascending and direction is ascending, return -1 (aka a is smaller than b)
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

  // this is called when the sort is requested by clicking table header
  const requestSort = (key) => {
    let direction = "ascending";
    // if sortconfig exists AND the thingToSearch matches the requesting thing AND direction is ascending, THEN set to descending (flip it)
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      console.log("I flipped to descending!");
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
