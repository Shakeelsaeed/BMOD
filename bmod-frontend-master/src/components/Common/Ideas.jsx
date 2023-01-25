import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { LoadingComponent } from "./LoadingComponent";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Img from "../../Assets/background.png";
function Ideas({ state }) {
  const location = useLocation();
  return (
    <div className="container mt-70">
      <div className="flex wrap space-evenly">
        {location.pathname === "/search" ? (
          state.search &&
          state.search.map((idea) =>
            idea.is_approved ? <Card key={idea._id} idea={idea} /> : ""
          )
        ) : (
          state.search && state.ideas.map((idea) =>
            idea.is_approved ? <Card key={idea._id} idea={idea} /> : ""
          )
        )}
        {state.ideas && state.ideas.map((idea, i) => i < 5 && idea.is_approved ? <Card key={idea._id} idea={idea} />:'')}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, null)(Ideas);
