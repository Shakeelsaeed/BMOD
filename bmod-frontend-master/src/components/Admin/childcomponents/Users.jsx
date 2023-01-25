import React from "react";
import { connect } from "react-redux";
import ProfileCard from "../../Common/ProfileCard";

function Users({ state }) {
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      {state.users &&
        state.users.map((user) =>
          user.isAdmin !== true ? (
            <ProfileCard
              user={user}
              idea={state.ideas}
              is_entreprenure={null}
            />
          ) : (
            ""
          )
        )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Users);
