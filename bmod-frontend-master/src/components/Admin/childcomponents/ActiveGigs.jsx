import React from "react";
import GigCard from "./GigCard";
import { connect } from "react-redux";
import Card from "../../Common/Card";

function ActiveGigs({ state }) {
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      {state.ideas &&
        state.ideas.map((idea) =>
          !idea.is_approved ? <Card key={idea._id} idea={idea} /> : ""
        )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(ActiveGigs);
