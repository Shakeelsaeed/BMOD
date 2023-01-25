import React from "react";
import ProfileCard from "../Common/ProfileCard";
import { connect } from "react-redux";
import { load_user } from "../../redux-implementation/actions";
import { useLocation } from "react-router-dom";
import Img from "../../Assets/background.png";

function InvestorProfile({ state, load_user, children }) {
  const location = useLocation();
  
  React.useEffect(() => {
    load_user();
    if (location.pathname === "/home") {
      const body = document.getElementsByTagName("body");
      body[0].style.background = "#472169";
      console.log(body[0], body[0].style);
    } else {
      const body = document.getElementsByTagName("body");
      body[0].style.background = `url(${Img})`;
      console.log(body[0], body[0].style);
    }
  }, [load_user]);
  console.log(state);
  return (
    <div className="container">
      <div
        className="flex row"
        style={{ marginTop: "75px", justifyContent: "space-between" }}
      >
        <div className="profile-panel" style={{ minWidth: "280px" }}>
          {state.user && state.ideas && (
            <ProfileCard user={state.user} idea={state.ideas} is_entreprenure={false} />
          )}
          {/* {state.user && <DetailsCard userid={state.user && state.user._id} />} */}
        </div>
        <div className="gig-panel">{children}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { load_user })(InvestorProfile);
