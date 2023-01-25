/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import "bulma-switch/dist/css/bulma-switch.min.css";
import {
  logout,
  checkAuthenticated,
  setprofile,
} from "../../redux-implementation/actions";
import { connect } from "react-redux";
import { REQUEST_URL } from "../../redux-implementation/constatntURLS";

function Navbar({ checkAuthenticated, setprofile, logout, state }) {
  React.useEffect(() => {
    checkAuthenticated();
  }, [checkAuthenticated]);
  const history = useHistory();
  const changeProfile = (status) => {
    setprofile(status);
    history.push("/");
  };
  return (
    <nav
      className="navbar nav-bg"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/home" className="navbar-item">
            <img src={Logo} width="112" height="28" />
          </Link>
          {/* <button className="navbar-burger"> */}
          {/* <div className="navbar-burger navbar-item has-dropdown is-hoverable prof">
                      <button
                        className="button is-light profile-btn"
                        style={{
                          background: `url(${
                            REQUEST_URL + state.user.profile.replace(/\\/g, "/")
                          })`,
                        }}
                      ></button> */}
          {/* <div className="navbar-dropdown">
                        {!state.is_entreprenure ? (
                          <Link
                            className="navbar-item"
                            to="/investor-dashboard"
                          >
                            Dashboard
                          </Link>
                        ) : (
                          <Link className="navbar-item" to="/profile">
                            Profile
                          </Link>
                        )}
                        <a href="#" onClick={logout} className="navbar-item">
                          Logout
                        </a>
                      </div> */}
          {/* </div> */}
          {/* </button> */}
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <Link to="/home" className="button is-transparent">
                Home
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/ideas" className="button is-transparent">
                Ideas
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/investors" className="button is-transparent">
                Investors
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/entrepreneur" className="button is-transparent">
                Entrepreneures
              </Link>
            </div>
            {/* <div className="navbar-item">
              <a className="button is-transparent">About</a>
            </div> */}
            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!state.isAuthenticated && (
                  <>
                    <Link to="/signup" className="button is-primary">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-light">
                      Log in
                    </Link>
                  </>
                )}

                {state.isAuthenticated && state.user && (
                  <>
                    {state.is_entreprenure && state.user.isAdmin !== true ? (
                      <button
                        className="button is-link is-outlined"
                        onClick={(e) => changeProfile(false)}
                      >
                        Switch to Investor
                      </button>
                    ) : state.user.isAdmin === true ? (
                      <Link className="button is-primary" to="/admin/dashboard">
                        Dashboard
                      </Link>
                    ) : (
                      <button
                        className="button is-primary is-outlined"
                        onClick={(e) => changeProfile(true)}
                      >
                        Switch to Entrepreneur
                      </button>
                    )}

                    <div className="navbar-item has-dropdown is-hoverable prof">
                      <button
                        className="button is-light profile-btn"
                        style={{
                          background: `url(${
                            REQUEST_URL + state.user.profile.replace(/\\/g, "/")
                          })`,
                        }}
                      ></button>
                      <div className="navbar-dropdown">
                        {!state.is_entreprenure &&
                        state.user.isAdmin !== true ? (
                          <Link
                            className="navbar-item"
                            to="/investor-dashboard"
                          >
                            Dashboard
                          </Link>
                        ) : state.user.isAdmin === true ? (
                          ""
                        ) : (
                          <Link className="navbar-item" to="/profile">
                            Profile
                          </Link>
                        )}
                        <a href="#" onClick={logout} className="navbar-item">
                          Logout
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, {
  logout,
  checkAuthenticated,
  setprofile,
})(Navbar);
