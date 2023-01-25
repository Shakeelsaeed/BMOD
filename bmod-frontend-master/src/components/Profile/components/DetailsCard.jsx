import React from "react";

function DetailsCard(props) {

  return (
    <div className="flex flex-column profile-card">
      <div className="profile-description">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <h3 className="1s-size-7" style={{ color: "white" }}>
            Description
          </h3>
          <a href="#" style={{ color: "#00c4a7" }}>
            Edit Description
          </a>
        </div>
        <p
          style={{
            color: "white",
            padding: "10px 0",
            borderBottom: "1px solid white",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          distinctio, iste nemo dignissimos, nisi explicabo libero, quo ut
          exercitationem veniam necessitatibus perferendis iusto! Sapiente,
          ducimus quod iste reprehenderit accusamus ipsam!
        </p>
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <h3 className="1s-size-7" style={{ color: "white" }}>
            Market Place
          </h3>
          <a href="#" style={{ color: "#00c4a7" }}>
            + Add Market
          </a>
        </div>
        <ul>
          <li style={{ color: "white", padding: "0px 20px 0 0" }}>Whole Sale  <i className="fa fa-pencil"></i>  <i className="fa fa-remove"></i></li>
          <li style={{ color: "white", padding: "0px 20px 0 0" }}>Bewery  <i className="fa fa-pencil"></i>  <i className="fa fa-remove"></i></li>
        </ul>
      </div>
    </div>
  );
}

export default DetailsCard;
