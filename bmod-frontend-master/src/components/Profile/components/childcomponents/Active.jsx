import React from "react";
import GigCard from "./GigCard";
import { connect } from "react-redux";
import AddGigCard from "./AddGigCard";

function Active({ state }) {
  return (
    <div className="flex wrap gig-panel-content" style={{ padding: "20px 0" }}>
      {state.user &&
        state.ideas &&
        state.ideas.map(
          (idea) =>
            idea.user !== state.user._id &&
            idea.is_approved === true && (
              <GigCard
                key={idea._id}
                idea={idea}
                approved={idea.is_approved}
                isideapage={false}
              />
            )
        )}
      <AddGigCard />
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Active);
