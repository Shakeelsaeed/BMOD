/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { search } from "../../../redux-implementation/actions";
import { Redirect, useHistory } from "react-router-dom";

function DemoCarousel({ search }) {
  const [srch, setsearch] = React.useState("");
  const navigate = useHistory();
  function submitform(e) {
    e.preventDefault();
    if (srch === "") {
      toast.error("Please Write Something in Search Bar 🙏.");
    } else {
      search(srch);
      navigate.push("/search");
    }
  }
  return (
    <div className="carousel-element">
      <div className="container">
        <div className="search-box">
          <Toaster position="top-right" reverseOrder={true} />
          <h1>
            Find the <span className="investor">investors</span> for your
            business idea in a <span className="modren">modren</span> and{" "}
            <span className="easy">easy way</span>.
          </h1>
          <form
            className="field is-grouped"
            onSubmit={submitform}
            style={{
              marginTop: "20px",
              background: "white",
              borderRadius: "5px",
            }}
          >
            <div
              className="control is-expanded"
              style={{
                margin: "0",
                borderRight: "none",
              }}
            >
              <input
                className="input"
                type="text"
                placeholder="Search an Idea."
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
            <div className="control">
              <input type="submit" className="button is-info" value="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { search })(DemoCarousel);
