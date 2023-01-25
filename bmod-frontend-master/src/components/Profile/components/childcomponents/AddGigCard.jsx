import React from "react";
import { Link } from "react-router-dom";

function AddGigCard(props) {
  return (
    <Link
      className="gig-card-base add-new-gig"
      style={{ color: "white", padding: "10px" }}
      to="/addidea"
    >
      Post an Entrepreneurial Idea.
    </Link>
  );
}

export default AddGigCard;
