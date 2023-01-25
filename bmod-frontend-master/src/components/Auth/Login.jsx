import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { signin } from "../../redux-implementation/actions";

function Login({ signin, state }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function formSubmit(e) {
    e.preventDefault();
    signin(email, password);
  }
  if (!state.isAuthenticated)
    return (
      <div className="container">
        <div className="flex center h-100">
          <form className="custom-form" onSubmit={formSubmit}>
            <h1 className="is-size-3 has-text-centered">Login</h1>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  autofocus
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  else if (state.isAuthenticated) return <Redirect to="/" />;
}
const mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, { signin })(Login);
