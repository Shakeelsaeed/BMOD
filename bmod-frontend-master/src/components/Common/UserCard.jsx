/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import React from "react";
import { REQUEST_URL } from "../../redux-implementation/constatntURLS";

function UserCard(props) {
  const { user, ideas, investors } = props;
  console.log(props);
  function totalIdeas() {
    let count = 0;
    if (ideas) {
      ideas.map((idea) => {
        if (idea.user === user._id) {
          count = count + 1;
        }
      });
    }
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
        <h3 className="is-size-7 has-text-centered">{user.email}</h3>
      </div>
      <ul className="card-list">
        <li className="flex space-around mamber-since">
          <span>
            <i className="fa fa-user"></i> Member Since
          </span>
          <span>
            {user.member_since.substring(0, user.member_since.indexOf("T"))}
          </span>
        </li>
        <li className="flex space-around total-ideas">
          {user.is_entreprenure ? (
            <>
              <span>
                <i className="fa fa-lightbulb-o"></i> Total Ideas:
              </span>
              <span>{totalIdeas()}</span>
            </>
          ) : (
            <>
              <span>
                <i className="fa fa-lightbulb-o"></i> Ideas Investment:
              </span>
              <span>0</span>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default UserCard;
