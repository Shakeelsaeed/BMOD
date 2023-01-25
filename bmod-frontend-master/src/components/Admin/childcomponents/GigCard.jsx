/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { REQUEST_URL } from "../../../redux-implementation/constatntURLS";
import { deleteidea } from "../../../redux-implementation/actions";
import { connect } from "react-redux";

function GigCard({ idea, approved, deleteidea, isideapage }) {
  const [showTooltip, setToolTip] = React.useState(false);
  const [visibleClass, setVisibleClass] = React.useState("gig-menu");
  const mouseOver = () => {
    console.log("Mouse Over");
    setToolTip(true);
    setVisibleClass("gig-menu visible");
  };
  const mouseOut = () => {
    console.log("Mouse Out");
    setToolTip(false);
    setVisibleClass("gig-menu");
  };
  const deleteforever = (id) => {
    deleteidea(idea._id);
  };
  return (
    <div className="gig-card-base active-gig-card">
      <span>
        <ul className={visibleClass} onMouseLeave={mouseOut}>
          <li>
            <Link to={`/idea/${idea._id}`}>
              <i className="fa fa-eye"></i> Preview
            </Link>
          </li>
          {!approved && (
            <li>
              <a href="#head" onClick={deleteforever}>
                <i className="fa fa-trash"></i> Delete
              </a>
            </li>
          )}
          {/* <li>
            <i className="fa fa-line-chart"></i> Statistics
          </li> */}
          {/* <li></li>
          <li className=""></li>
          <li></li> */}
        </ul>
        <div className="header-gig-card">
          <Link to={`/idea/${idea._id}`}>
            <div>
              <figure>
                <img src={REQUEST_URL + idea.thumbnail} alt="titleimage" />
              </figure>
            </div>
            <section className="gig-title">
              <Link to={`/idea/${idea._id}`}>
                <header style={{ padding: "0 10px", color: "white" }}>
                  <h3>{idea.description}</h3>
                </header>
              </Link>
            </section>
          </Link>
        </div>
        {!isideapage && (
          <div
            className="btn-gig-menu hint--top"
            onMouseOver={mouseOver}
            //   onMouseOut={mouseOut}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="10"
              viewBox="0 0 42 10"
            >
              <path
                fill="#C6C6C6"
                d="M5 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"
              ></path>
            </svg>
          </div>
        )}
      </span>
    </div>
  );
}

export default connect(null, { deleteidea })(GigCard);
