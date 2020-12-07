import React, { useEffect } from "react";

function TableHeader(props) {
  const { headerName } = props;
  const [sortOrder, setSortOrder] = useEffect(); // i.e. ASCending or DEScending

  return <th scope={headerName}>User</th>;
}

export default TableHeader;
