import React from "react";
import { connect } from "react-redux";

import GigCard from "./GigCard";

function Pending({ state }) {
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      {state.user &&
        state.ideas &&
        state.ideas.map(
          (idea) =>
            idea.user === state.user._id &&
            idea.is_approved === false && (
              <GigCard key={idea._id} idea={idea} approved={idea.is_approved} isideapage={false} />
            )
        )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Pending);
