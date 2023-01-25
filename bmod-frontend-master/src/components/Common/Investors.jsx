import React from "react";
import UserCard from "./UserCard";
import { connect } from "react-redux";
import Img from "../../Assets/background.png";
import { useLocation } from "react-router-dom";
function Investors({ state }) {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/home") {
      const body = document.getElementsByTagName("body");
      body[0].style.background = "#472169";
      console.log(body[0], body[0].style);
    } else {
      const body = document.getElementsByTagName("body");
      body[0].style.background = `url(${Img})`;
      console.log(body[0], body[0].style);
    }
  }, []);
  return (
    <div className="container mt-70">
      <div className="flex wrap space-evenly">
        {state.users &&
          state.users.map((user) =>
            user.is_entreprenure === false && user.isAdmin !== true ? (
              <UserCard
                user={user}
                investors={state.investors}
                ideas={state.ideas}
              />
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, null)(Investors);
