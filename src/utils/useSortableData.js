import React from "react";

// custom hook used to handle sort requests
const useSortableData = (items, config = null) => {
  // sortConfig state is an object with keys fieldName and direction (asc vs des)
  const [sortConfig, setSortConfig] = React.useState(config);

  // memoize the sort operation so it does not have to re-sort every render...what's the difference?
  const sortedItems = React.useMemo(() => {
    // copy the array because array.sort will modify the original array
    let sortableItems = [...items];
    console.log("🚀------ ~ file: index.js ~ line 15 ~ //sortedItems ~ sortableItems", sortableItems);

    // if no sort config has been set, return the array unchanged
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        //  comparing key (thingToSort) value from each
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
    console.log("🚀 ~ file: index.js ~ line 50 ~ requestSort ~ key", key);
    let direction = "ascending";
    // if sortconfig exists AND the thingToSearch matches the requesting thing AND direction is ascending, THEN set to descending (flip it)
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      console.log("I flipped to descending!");
      direction = "descending";
    } else {
      direction = "ascending";
    }
    setSortConfig({ key, direction });
    console.log("I just tried to setSortConfig to: ", sortConfig);
  };

  // const searchHandler = (searchTerm) => {
  //   let searchableItems = [...items];
  //   console.log("🚀 ~ file: App.js ~ line 18 ~ App ~ searchTerm", searchTerm);
  //   // event.preventDefault();
  //   // setSearchTerm(searchTerm);
  //   let searchedItems = [];
  //   // let employeeDataSomething = [];
  //   for (let i = 0; i < searchableItems.length; i++) {
  //     if (searchableItems[i].name.indexOf(searchTerm) > -1) {
  //       searchedItems.push(searchableItems[i]);
  //     }
  //   }
  //   return searchedItems;
  // };

  return { items: sortedItems, requestSort, sortConfig /*searchHandler */ };
};

export default useSortableData;
