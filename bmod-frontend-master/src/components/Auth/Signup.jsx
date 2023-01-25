/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { register } from "../../redux-implementation/actions";
import { connect } from "react-redux";
function Signup({ register }) {
  const [nextPage, setNextPage] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [profile, setprofiel] = React.useState("");
  const [cnic, setcnic] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [ise, setise] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [cpassword, setcpassword] = React.useState("");
  // React.useEffect(() => {
  //   console.log(agree, ise);
  // }, [agree, ise]);
  function nextpage() {
    setNextPage(true);
  }
  function previouspage() {
    setNextPage(false);
  }
  function formSubmit(e) {
    e.preventDefault();
    console.log(ise);
    register(firstName, lastName, profile, cnic, phone, ise, email, password);
  }
  return (
    <div className="container">
      <div className="flex center h-120">
        <form
          action="http://localhost:4001/register"
          method="HTTP_METHOD"
          enctype="multipart/form-data"
          className="custom-form"
          style={{ marginTop: "90px" }}
          onSubmit={formSubmit}
        >
          {!nextPage && (
            <>
              <h1 className="is-size-3 has-text-centered">Signup</h1>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-danger"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                {/* <p className="help is-danger">This email is invalid</p> */}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={(e) => setcpassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Signup as an</label>
                <div className="control">
                  <div className="select">
                    <select
                      onChange={(e) => {
                        setise(e.target.value);
                        console.log(e.target.value, ise);
                      }}
                      onSelect={(e) => {
                        setise(e.target.value);
                        console.log(e.target.value, ise);
                      }}
                    >
                      <option value="">Select Status</option>
                      <option value={1}>Entrepreneur</option>
                      <option value={0}>Investor</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => setAgree(true)}
                      onSelect={(e) => setAgree(true)}
                    />
                    I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
              <div
                className="field is-grouped flex"
                style={{ justifyContent: "end" }}
              >
                <div className="control">
                  <button
                    className="button is-link"
                    onClick={nextpage}
                    disabled={!agree}
                  >
                    Next
                    <i
                      className="fa fa-angle-right"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </button>
                </div>
              </div>
            </>
          )}

          {nextPage && (
            <>
              <h1 className="is-size-3 has-text-centered">
                Personal Information
              </h1>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className="input"
                    autoFocus
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Phone Number</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Profile Picture</label>
                <div className="control">
                  <input
                    className="input"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => setprofiel(e.target.files[0])}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">CNIC</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="CNIC Number"
                    value={cnic}
                    onChange={(e) => setcnic(e.target.value)}
                  />
                </div>
              </div>

              <div
                className="field is-grouped flex"
                style={{ justifyContent: "space-between" }}
              >
                <div className="control">
                  <button className="button is-link" onClick={previouspage}>
                    <i
                      className="fa fa-angle-left"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Previous
                  </button>
                </div>
                <div className="control">
                  <input
                    className="button is-link"
                    type="submit"
                    value="Signup"
                    onClick={formSubmit}
                  />
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default connect(null, { register })(Signup);
