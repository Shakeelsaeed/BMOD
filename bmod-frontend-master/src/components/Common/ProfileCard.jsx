/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { REQUEST_URL } from "../../redux-implementation/constatntURLS";

function ProfileCard(props) {
  const { user, idea, is_entreprenure } = props;
  console.log(props);
  function totalIdeas() {
    let count = 0;
    idea.map((idea) => {
      if (idea.user === user._id) {
        count = count + 1;
      }
    });
    return count;
  }
  return (
    <div
      className="flex flex-column profile-card"
      style={{ alignItems: "center" }}
    >
      <div
        className="flex flex-column img-round"
        style={{ alignItems: "center" }}
      >
        <img src={REQUEST_URL + user.profile} alt="cardimage" />
        <h3 className="is-size-4 has-text-centered">
          {user.first_name} {user.last_name}
        </h3>
      </div>
      <Link to={`/editprofile/${user._id}`}>
        <i
          className="fa fa-pencil has-text-centered"
          style={{ color: "white" }}
        ></i>
      </Link>
      <ul className="card-list">
        {/* <li className="flex space-around location">
          <span>
            <i className="fa fa-map-marker"></i> From
          </span>
          <span>Pakistan</span>
        </li> */}
        <li className="flex space-around mamber-since">
          <span>
            <i className="fa fa-user"></i> Member Since
          </span>
          <span>
            {user.member_since.substring(0, user.member_since.indexOf("T"))}
          </span>
        </li>
        {is_entreprenure && (
          <li className="flex space-around total-ideas">
            <span>
              <i className="fa fa-lightbulb-o"></i> Total Ideas
            </span>
            <span>{totalIdeas()}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProfileCard;
