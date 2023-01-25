import React, { Component } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm);
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <input
      autoFocus
      type="text"
      autoComplete="off"
      className="live-search-field"
      placeholder="Search here..."
      style={{ marginTop: "200px" }}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
